#!/bin/bash

echo "🎉 Photo Matcher Setup Script"
echo "========================================="

# Check system requirements
echo "🔍 Checking system requirements..."

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    echo "Please install Python 3.8+ and try again."
    exit 1
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is required but not installed."
    echo "Please install Node.js 16+ and try again."
    exit 1
fi

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm is required but not installed."
    echo "Please install npm and try again."
    exit 1
fi

echo "✅ System requirements met!"

# Setup backend
echo ""
echo "🐍 Setting up backend..."
cd backend

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install Python dependencies
echo "📚 Installing Python dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

# Create directories
echo "📁 Creating necessary directories..."
mkdir -p temp_files downloads

# Check for credentials
if [ ! -f "credentials.json" ]; then
    echo ""
    echo "⚠️  Google OAuth credentials not found!"
    echo "📝 To complete setup:"
    echo "   1. Go to https://console.cloud.google.com/"
    echo "   2. Create a new project or select existing"
    echo "   3. Enable Google Drive API"
    echo "   4. Create OAuth 2.0 credentials"
    echo "   5. Download and save as backend/credentials.json"
    echo "   6. Set redirect URI to: http://localhost:5173/auth-callback.html"
    echo ""
    echo "💡 A template file is available at credentials.json.template"
else
    echo "✅ Google OAuth credentials found!"
fi

cd ..

# Setup frontend
echo ""
echo "⚛️  Setting up frontend..."

# Install Node.js dependencies
echo "📚 Installing Node.js dependencies..."
npm install

echo ""
echo "🎉 Setup complete!"
echo ""
echo "🚀 To start the application:"
echo "   Backend:  ./start-backend.sh"
echo "   Frontend: ./start-frontend.sh"
echo ""
echo "🌐 Application URLs:"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:8000"
echo "   API Docs: http://localhost:8000/docs"
echo ""

if [ ! -f "backend/credentials.json" ]; then
    echo "⚠️  Remember to set up Google OAuth credentials before starting!"
fi