#!/bin/bash

# OTAP Frontend Setup Script

echo "🚀 Setting up OTAP Frontend..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment file
if [ ! -f .env ]; then
    echo "🔧 Creating .env file..."
    cp .env.example .env
    echo "   Please update .env with your API configuration"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "   npm start"
echo ""
echo "To build for production, run:"
echo "   npm run build"
echo ""
echo "Default credentials:"
echo "   Username: root"
echo "   Password: Jio@75034"
echo ""