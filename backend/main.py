from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os
import io
import json
import zipfile
import numpy as np
from typing import List, Optional
import sqlite3
from datetime import datetime
import face_recognition
from PIL import Image
import pickle
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
import tempfile
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Photo Matcher API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration
SCOPES = ['https://www.googleapis.com/auth/drive.readonly']
CLIENT_SECRETS_FILE = "credentials.json"
DATABASE_PATH = "photo_embeddings.db"
TEMP_FOLDER = "temp_files"
DOWNLOADS_FOLDER = "downloads"

# Create necessary directories
os.makedirs(TEMP_FOLDER, exist_ok=True)
os.makedirs(DOWNLOADS_FOLDER, exist_ok=True)

# Database initialization
def init_database():
    """Initialize SQLite database for storing embeddings"""
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS photo_embeddings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            folder_id TEXT NOT NULL,
            file_id TEXT NOT NULL,
            file_name TEXT NOT NULL,
            embedding BLOB NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(folder_id, file_id)
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS folders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            folder_id TEXT UNIQUE NOT NULL,
            folder_name TEXT NOT NULL,
            total_photos INTEGER DEFAULT 0,
            processed_photos INTEGER DEFAULT 0,
            last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()

init_database()

class GoogleDriveService:
    def __init__(self):
        self.service = None
        self.credentials = None
    
    def get_auth_url(self):
        """Get Google OAuth authorization URL"""
        flow = Flow.from_client_secrets_file(
            CLIENT_SECRETS_FILE,
            scopes=SCOPES,
            redirect_uri='http://localhost:5173/auth-callback.html'
        )
        authorization_url, _ = flow.authorization_url(prompt='consent')
        return authorization_url
    
    def exchange_code_for_token(self, code: str):
        """Exchange authorization code for access token"""
        flow = Flow.from_client_secrets_file(
            CLIENT_SECRETS_FILE,
            scopes=SCOPES,
            redirect_uri='http://localhost:5173/auth-callback.html'
        )
        flow.fetch_token(code=code)
        self.credentials = flow.credentials
        self.service = build('drive', 'v3', credentials=self.credentials)
        return True
    
    def set_credentials(self, credentials_dict: dict):
        """Set credentials from dictionary"""
        self.credentials = Credentials.from_authorized_user_info(credentials_dict)
        if self.credentials.expired and self.credentials.refresh_token:
            self.credentials.refresh(Request())
        self.service = build('drive', 'v3', credentials=self.credentials)
    
    def list_folders(self):
        """List all folders in Google Drive"""
        if not self.service:
            raise HTTPException(status_code=401, detail="Not authenticated")
        
        try:
            results = self.service.files().list(
                q="mimeType='application/vnd.google-apps.folder'",
                pageSize=100,
                fields="nextPageToken, files(id, name, parents)"
            ).execute()
            
            folders = results.get('files', [])
            return [{"id": folder["id"], "name": folder["name"]} for folder in folders]
        except Exception as e:
            logger.error(f"Error listing folders: {str(e)}")
            raise HTTPException(status_code=500, detail=f"Error listing folders: {str(e)}")
    
    def get_photos_from_folder(self, folder_id: str):
        """Get all photos from a specific folder"""
        if not self.service:
            raise HTTPException(status_code=401, detail="Not authenticated")
        
        try:
            # Query for image files in the specified folder
            query = f"'{folder_id}' in parents and (mimeType contains 'image/')"
            results = self.service.files().list(
                q=query,
                pageSize=1000,
                fields="nextPageToken, files(id, name, mimeType, size)"
            ).execute()
            
            photos = results.get('files', [])
            return photos
        except Exception as e:
            logger.error(f"Error getting photos from folder: {str(e)}")
            raise HTTPException(status_code=500, detail=f"Error getting photos: {str(e)}")
    
    def download_file(self, file_id: str):
        """Download a file from Google Drive"""
        if not self.service:
            raise HTTPException(status_code=401, detail="Not authenticated")
        
        try:
            request = self.service.files().get_media(fileId=file_id)
            file_data = io.BytesIO()
            downloader = request.execute()
            file_data.write(downloader)
            file_data.seek(0)
            return file_data
        except Exception as e:
            logger.error(f"Error downloading file: {str(e)}")
            return None

# Global Google Drive service instance
drive_service = GoogleDriveService()

class PhotoProcessor:
    @staticmethod
    def extract_face_encoding(image_data):
        """Extract face encoding from image data"""
        try:
            # Convert image data to numpy array
            image = Image.open(image_data)
            image_array = np.array(image)
            
            # Find face locations and encodings
            face_locations = face_recognition.face_locations(image_array)
            if not face_locations:
                return None
            
            face_encodings = face_recognition.face_encodings(image_array, face_locations)
            if not face_encodings:
                return None
            
            # Return the first face encoding
            return face_encodings[0]
        except Exception as e:
            logger.error(f"Error extracting face encoding: {str(e)}")
            return None
    
    @staticmethod
    def compare_faces(test_encoding, stored_encodings, tolerance=0.6):
        """Compare test face encoding with stored encodings"""
        matches = []
        for stored_data in stored_encodings:
            stored_encoding = pickle.loads(stored_data['embedding'])
            distance = face_recognition.face_distance([stored_encoding], test_encoding)[0]
            
            if distance <= tolerance:
                matches.append({
                    'file_id': stored_data['file_id'],
                    'file_name': stored_data['file_name'],
                    'confidence': 1 - distance  # Convert distance to confidence
                })
        
        # Sort by confidence (highest first)
        matches.sort(key=lambda x: x['confidence'], reverse=True)
        return matches

# Database operations
def save_embedding_to_db(folder_id: str, file_id: str, file_name: str, embedding):
    """Save face embedding to database"""
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    
    try:
        embedding_blob = pickle.dumps(embedding)
        cursor.execute(
            "INSERT OR REPLACE INTO photo_embeddings (folder_id, file_id, file_name, embedding) VALUES (?, ?, ?, ?)",
            (folder_id, file_id, file_name, embedding_blob)
        )
        conn.commit()
        return True
    except Exception as e:
        logger.error(f"Error saving embedding: {str(e)}")
        return False
    finally:
        conn.close()

def get_embeddings_from_db(folder_id: str):
    """Get all embeddings for a specific folder"""
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    
    try:
        cursor.execute(
            "SELECT file_id, file_name, embedding FROM photo_embeddings WHERE folder_id = ?",
            (folder_id,)
        )
        results = cursor.fetchall()
        
        embeddings = []
        for result in results:
            embeddings.append({
                'file_id': result[0],
                'file_name': result[1],
                'embedding': result[2]
            })
        return embeddings
    except Exception as e:
        logger.error(f"Error getting embeddings: {str(e)}")
        return []
    finally:
        conn.close()

def update_folder_stats(folder_id: str, folder_name: str, total_photos: int, processed_photos: int):
    """Update folder processing statistics"""
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    
    try:
        cursor.execute(
            "INSERT OR REPLACE INTO folders (folder_id, folder_name, total_photos, processed_photos, last_updated) VALUES (?, ?, ?, ?, ?)",
            (folder_id, folder_name, total_photos, processed_photos, datetime.now())
        )
        conn.commit()
    except Exception as e:
        logger.error(f"Error updating folder stats: {str(e)}")
    finally:
        conn.close()

# API Routes

@app.get("/")
async def root():
    return {"message": "Photo Matcher API is running"}

@app.get("/auth/url")
async def get_auth_url():
    """Get Google OAuth authorization URL"""
    try:
        auth_url = drive_service.get_auth_url()
        return {"auth_url": auth_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/auth/callback")
async def auth_callback(code: str):
    """Handle OAuth callback"""
    try:
        success = drive_service.exchange_code_for_token(code)
        if success:
            # Return credentials to store on frontend
            credentials_dict = {
                'token': drive_service.credentials.token,
                'refresh_token': drive_service.credentials.refresh_token,
                'token_uri': drive_service.credentials.token_uri,
                'client_id': drive_service.credentials.client_id,
                'client_secret': drive_service.credentials.client_secret,
                'scopes': drive_service.credentials.scopes
            }
            return {"success": True, "credentials": credentials_dict}
        else:
            raise HTTPException(status_code=400, detail="Failed to exchange code for token")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/auth/credentials")
async def set_credentials(credentials: dict):
    """Set Google Drive credentials"""
    try:
        drive_service.set_credentials(credentials)
        return {"success": True, "message": "Credentials set successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid credentials: {str(e)}")

@app.get("/folders")
async def list_folders():
    """List all folders in Google Drive"""
    return drive_service.list_folders()

@app.post("/process-folder/{folder_id}")
async def process_folder(folder_id: str, folder_name: str = "Unknown Folder"):
    """Process all photos in a folder and create embeddings"""
    try:
        # Get all photos from the folder
        photos = drive_service.get_photos_from_folder(folder_id)
        total_photos = len(photos)
        processed_photos = 0
        
        logger.info(f"Processing {total_photos} photos from folder: {folder_name}")
        
        for photo in photos:
            try:
                # Download photo
                image_data = drive_service.download_file(photo['id'])
                if image_data:
                    # Extract face encoding
                    encoding = PhotoProcessor.extract_face_encoding(image_data)
                    if encoding is not None:
                        # Save to database
                        success = save_embedding_to_db(folder_id, photo['id'], photo['name'], encoding)
                        if success:
                            processed_photos += 1
                            logger.info(f"Processed: {photo['name']}")
                
                # Update progress every 10 photos
                if processed_photos % 10 == 0:
                    update_folder_stats(folder_id, folder_name, total_photos, processed_photos)
                    
            except Exception as e:
                logger.error(f"Error processing photo {photo['name']}: {str(e)}")
                continue
        
        # Final update
        update_folder_stats(folder_id, folder_name, total_photos, processed_photos)
        
        return {
            "success": True,
            "total_photos": total_photos,
            "processed_photos": processed_photos,
            "message": f"Processed {processed_photos} out of {total_photos} photos"
        }
    
    except Exception as e:
        logger.error(f"Error processing folder: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/match-photo/{folder_id}")
async def match_photo(folder_id: str, file: UploadFile = File(...)):
    """Match uploaded photo with processed photos in the folder"""
    try:
        # Read uploaded file
        image_data = io.BytesIO(await file.read())
        
        # Extract face encoding from test image
        test_encoding = PhotoProcessor.extract_face_encoding(image_data)
        if test_encoding is None:
            raise HTTPException(status_code=400, detail="No face found in the uploaded image")
        
        # Get stored embeddings for the folder
        stored_embeddings = get_embeddings_from_db(folder_id)
        if not stored_embeddings:
            raise HTTPException(status_code=404, detail="No processed photos found for this folder")
        
        # Compare faces
        matches = PhotoProcessor.compare_faces(test_encoding, stored_embeddings)
        
        if not matches:
            return {"matches": [], "message": "No matches found"}
        
        # Download matched photos and create zip
        zip_filename = f"matches_{datetime.now().strftime('%Y%m%d_%H%M%S')}.zip"
        zip_path = os.path.join(DOWNLOADS_FOLDER, zip_filename)
        
        with zipfile.ZipFile(zip_path, 'w') as zip_file:
            # Add matched photos to zip
            for match in matches:
                try:
                    image_data = drive_service.download_file(match['file_id'])
                    if image_data:
                        zip_file.writestr(
                            f"confidence_{match['confidence']:.3f}_{match['file_name']}", 
                            image_data.getvalue()
                        )
                except Exception as e:
                    logger.error(f"Error adding {match['file_name']} to zip: {str(e)}")
            
            # Add text file with match details
            match_details = "\n".join([
                f"File: {match['file_name']}, Confidence: {match['confidence']:.3f}"
                for match in matches
            ])
            zip_file.writestr("match_details.txt", match_details)
        
        return {
            "matches": matches,
            "download_url": f"/download/{zip_filename}",
            "total_matches": len(matches)
        }
    
    except Exception as e:
        logger.error(f"Error matching photo: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/download/{filename}")
async def download_file(filename: str):
    """Download the generated zip file"""
    file_path = os.path.join(DOWNLOADS_FOLDER, filename)
    if os.path.exists(file_path):
        return FileResponse(
            file_path, 
            media_type='application/zip', 
            filename=filename
        )
    else:
        raise HTTPException(status_code=404, detail="File not found")

@app.get("/folder-stats/{folder_id}")
async def get_folder_stats(folder_id: str):
    """Get processing statistics for a folder"""
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    
    try:
        cursor.execute(
            "SELECT folder_name, total_photos, processed_photos, last_updated FROM folders WHERE folder_id = ?",
            (folder_id,)
        )
        result = cursor.fetchone()
        
        if result:
            return {
                "folder_name": result[0],
                "total_photos": result[1],
                "processed_photos": result[2],
                "last_updated": result[3],
                "processing_complete": result[1] == result[2]
            }
        else:
            return {"message": "Folder not processed yet"}
    finally:
        conn.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)