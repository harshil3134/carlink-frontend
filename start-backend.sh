#!/bin/bash

echo "🚀 Starting Photo Matcher Backend..."

# Check if we're in the right directory
if [ ! -d "backend" ]; then
    echo "❌ Error: backend directory not found. Please run this script from the project root."
    exit 1
fi

# Check if credentials.json exists
if [ ! -f "backend/credentials.json" ]; then
    echo "❌ Error: credentials.json not found in backend directory."
    echo "📝 Please follow these steps:"
    echo "   1. Go to Google Cloud Console"
    echo "   2. Create OAuth 2.0 credentials"
    echo "   3. Download and save as backend/credentials.json"
    echo "   4. Make sure redirect URI is: http://localhost:5173/auth-callback.html"
    exit 1
fi

# Navigate to backend directory
cd backend

# Check if virtual environment exists, create if not
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo "📚 Installing dependencies..."
pip install -r requirements.txt

# Create necessary directories
mkdir -p temp_files downloads

# Start the server
echo "🌟 Starting FastAPI server on http://localhost:8000"
python main.py