#!/bin/bash

# Eventus Onboarding Prototype - Quick Setup Script
# This script automates the setup process for the prototype

echo "🚀 Starting Eventus Onboarding Prototype Setup..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL v12 or higher."
    echo "   Download from: https://www.postgresql.org/download/"
    exit 1
fi

echo "✅ PostgreSQL is installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo ""

echo "Installing root dependencies..."
npm install

echo ""
echo "Installing server dependencies..."
cd server
npm install

echo ""
echo "Installing client dependencies..."
cd ../client
npm install

cd ..

echo ""
echo "✅ All dependencies installed successfully!"
echo ""

# Setup database
echo "🗄️  Setting up database..."
cd server

# Check if .env exists, if not copy from .env.example
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please update server/.env with your PostgreSQL credentials if needed"
fi

echo ""
echo "Initializing database..."
npm run init-db

cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Update server/.env with your PostgreSQL credentials (if needed)"
echo "   2. Run 'npm run dev' to start the application"
echo "   3. Open http://localhost:3000 in your browser"
echo ""
echo "💡 Tips:"
echo "   - Backend API runs on http://localhost:5000"
echo "   - Health check: http://localhost:5000/api/health"
echo "   - See README.md for detailed documentation"
echo ""

