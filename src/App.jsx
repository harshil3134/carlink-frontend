import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import './App.css';

const API_BASE_URL = 'http://localhost:8000';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [folderStats, setFolderStats] = useState(null);
  const [testImage, setTestImage] = useState(null);
  const [matches, setMatches] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isMatching, setIsMatching] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);

  // Initialize API client
  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Google Drive Authentication
  const handleGoogleAuth = async () => {
    try {
      const response = await api.get('/auth/url');
      window.location.href = response.data.auth_url;
    } catch (error) {
      toast.error('Failed to initiate Google authentication');
      console.error('Auth error:', error);
    }
  };

  // Fetch folders from Google Drive
  const fetchFolders = async () => {
    try {
      const response = await api.get('/folders');
      setFolders(response.data);
    } catch (error) {
      toast.error('Failed to fetch folders');
      console.error('Folder fetch error:', error);
    }
  };

  // Process folder to create embeddings
  const processFolder = async (folderId, folderName) => {
    try {
      setIsProcessing(true);
      toast.loading('Processing photos in folder...');
      
      const response = await api.post(`/process-folder/${folderId}?folder_name=${encodeURIComponent(folderName)}`);
      
      toast.dismiss();
      toast.success(`Processed ${response.data.processed_photos} out of ${response.data.total_photos} photos`);
      
      // Fetch updated stats
      fetchFolderStats(folderId);
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to process folder');
      console.error('Process folder error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Fetch folder processing stats
  const fetchFolderStats = async (folderId) => {
    try {
      const response = await api.get(`/folder-stats/${folderId}`);
      setFolderStats(response.data);
    } catch (error) {
      console.error('Stats fetch error:', error);
    }
  };

  // Handle test image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTestImage(file);
      setMatches([]);
      setDownloadUrl(null);
    }
  };

  // Match photo with processed photos
  const matchPhoto = async () => {
    if (!testImage || !selectedFolder) {
      toast.error('Please select a folder and upload a test image');
      return;
    }

    try {
      setIsMatching(true);
      const formData = new FormData();
      formData.append('file', testImage);

      const response = await api.post(`/match-photo/${selectedFolder.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMatches(response.data.matches);
      setDownloadUrl(response.data.download_url);
      
      if (response.data.matches.length > 0) {
        toast.success(`Found ${response.data.total_matches} matches!`);
      } else {
        toast.info('No matches found');
      }
    } catch (error) {
      toast.error('Failed to match photo');
      console.error('Match photo error:', error);
    } finally {
      setIsMatching(false);
    }
  };

  // Download matched photos
  const downloadMatches = () => {
    if (downloadUrl) {
      window.open(`${API_BASE_URL}${downloadUrl}`, '_blank');
    }
  };

  // Check for stored credentials on app load
  useEffect(() => {
    const storedCredentials = localStorage.getItem('google_credentials');
    if (storedCredentials) {
      try {
        const creds = JSON.parse(storedCredentials);
        setCredentials(creds);
        setIsAuthenticated(true);
        api.post('/auth/credentials', creds).then(() => {
          fetchFolders();
        });
      } catch (error) {
        localStorage.removeItem('google_credentials');
      }
    }
  }, []);

  // Update folder stats when folder is selected
  useEffect(() => {
    if (selectedFolder) {
      fetchFolderStats(selectedFolder.id);
    }
  }, [selectedFolder]);

  return (
    <div className="App">
      <Toaster position="top-right" />
      
      <header className="app-header">
        <h1>📸 Photo Matcher</h1>
        <p>Find matching faces in your Google Drive photos</p>
      </header>

      <main className="app-main">
        {!isAuthenticated ? (
          <div className="auth-section">
            <div className="auth-card">
              <h2>Connect to Google Drive</h2>
              <p>Authorize access to your Google Drive to get started</p>
              <button onClick={handleGoogleAuth} className="auth-button">
                🔐 Authorize Google Drive
              </button>
            </div>
          </div>
        ) : (
          <div className="main-content">
            {/* Folder Selection */}
            <section className="folder-section">
              <h2>📁 Select a Folder</h2>
              <div className="folder-grid">
                {folders.map((folder) => (
                  <div
                    key={folder.id}
                    className={`folder-card ${selectedFolder?.id === folder.id ? 'selected' : ''}`}
                    onClick={() => setSelectedFolder(folder)}
                  >
                    <div className="folder-icon">📁</div>
                    <div className="folder-name">{folder.name}</div>
                  </div>
                ))}
              </div>
            </section>

            {selectedFolder && (
              <>
                {/* Folder Processing */}
                <section className="processing-section">
                  <h3>📊 Folder: {selectedFolder.name}</h3>
                  {folderStats ? (
                    <div className="stats-card">
                      <div className="stat">
                        <span>Total Photos:</span>
                        <span>{folderStats.total_photos}</span>
                      </div>
                      <div className="stat">
                        <span>Processed:</span>
                        <span>{folderStats.processed_photos}</span>
                      </div>
                      <div className="stat">
                        <span>Status:</span>
                        <span className={folderStats.processing_complete ? 'complete' : 'incomplete'}>
                          {folderStats.processing_complete ? '✅ Complete' : '⏳ Incomplete'}
                        </span>
                      </div>
                      {!folderStats.processing_complete && (
                        <button
                          onClick={() => processFolder(selectedFolder.id, selectedFolder.name)}
                          disabled={isProcessing}
                          className="process-button"
                        >
                          {isProcessing ? '⏳ Processing...' : '🔄 Process Folder'}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="no-stats">
                      <p>This folder hasn't been processed yet.</p>
                      <button
                        onClick={() => processFolder(selectedFolder.id, selectedFolder.name)}
                        disabled={isProcessing}
                        className="process-button"
                      >
                        {isProcessing ? '⏳ Processing...' : '🚀 Start Processing'}
                      </button>
                    </div>
                  )}
                </section>

                {/* Photo Matching */}
                {folderStats?.processing_complete && (
                  <section className="matching-section">
                    <h3>🔍 Find Matches</h3>
                    <div className="upload-area">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        id="image-upload"
                        style={{ display: 'none' }}
                      />
                      <label htmlFor="image-upload" className="upload-button">
                        📷 Upload Test Photo
                      </label>
                      {testImage && (
                        <div className="test-image-info">
                          <span>✅ {testImage.name}</span>
                          <button
                            onClick={matchPhoto}
                            disabled={isMatching}
                            className="match-button"
                          >
                            {isMatching ? '🔍 Matching...' : '🎯 Find Matches'}
                          </button>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* Results */}
                {matches.length > 0 && (
                  <section className="results-section">
                    <div className="results-header">
                      <h3>🎉 Found {matches.length} Matches!</h3>
                      {downloadUrl && (
                        <button onClick={downloadMatches} className="download-button">
                          📥 Download All Matches
                        </button>
                      )}
                    </div>
                    <div className="matches-grid">
                      {matches.map((match, index) => (
                        <div key={index} className="match-card">
                          <div className="match-info">
                            <div className="match-name">{match.file_name}</div>
                            <div className="match-confidence">
                              Confidence: {(match.confidence * 100).toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
