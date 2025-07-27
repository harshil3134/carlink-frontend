# 🚀 Quick Start Guide - Photo Matcher

Get up and running with Photo Matcher in 5 minutes!

## Prerequisites

- Python 3.8+ installed
- Node.js 16+ installed
- Google account with access to Google Cloud Console

## Step 1: Clone and Setup

```bash
# Run the automated setup
./setup.sh
```

This will:
- Check system requirements
- Install all Python dependencies
- Install all Node.js dependencies
- Create necessary directories

## Step 2: Google OAuth Setup

1. **Go to [Google Cloud Console](https://console.cloud.google.com/)**

2. **Create/Select Project**
   - Create a new project or select an existing one

3. **Enable Google Drive API**
   - Navigate to "APIs & Services" → "Library"
   - Search for "Google Drive API" and enable it

4. **Create OAuth Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add redirect URI: `http://localhost:5173/auth-callback.html`
   - Download the JSON file

5. **Save Credentials**
   ```bash
   # Save the downloaded file as:
   cp ~/Downloads/client_secret_*.json backend/credentials.json
   ```

## Step 3: Start the Application

**Terminal 1 - Backend:**
```bash
./start-backend.sh
```

**Terminal 2 - Frontend:**
```bash
./start-frontend.sh
```

## Step 4: Use the Application

1. **Open:** http://localhost:5173
2. **Authenticate:** Click "Authorize Google Drive"
3. **Select Folder:** Choose a folder with photos
4. **Process Photos:** Click "Start Processing" to create embeddings
5. **Upload Test Photo:** Upload a photo to find matches
6. **Find Matches:** Click "Find Matches" and download results

## 🐳 Docker Alternative

If you prefer Docker:

```bash
# Make sure credentials.json is in backend/
docker-compose up
```

## 🔧 Troubleshooting

**Backend won't start:**
- Check if credentials.json exists in backend/
- Verify Python dependencies installed correctly

**Frontend can't connect:**
- Ensure backend is running on port 8000
- Check CORS settings if using different ports

**No faces detected:**
- Ensure photos have clear, front-facing faces
- Try with different photos

**Google Auth fails:**
- Verify redirect URI matches exactly
- Check that Google Drive API is enabled

## 📱 Usage Tips

- **Best Results:** Use photos with clear, front-facing faces
- **Performance:** Process folders with 100-500 photos for optimal speed
- **Accuracy:** Higher confidence scores indicate better matches
- **Storage:** Embeddings are saved locally for future use

## 🆘 Need Help?

- Check the full [README.md](README.md) for detailed documentation
- Review error messages in the browser console
- Ensure all prerequisites are met

---

**Estimated setup time: 5-10 minutes** ⏱️