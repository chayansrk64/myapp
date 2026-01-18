#!/bin/bash

echo "========================================"
echo "MyApp - Next.js + Express Setup"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js detected"
echo ""

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install frontend dependencies"
    exit 1
fi
echo "✓ Frontend dependencies installed"
echo ""

# Install backend dependencies
echo "Installing backend dependencies..."
cd server
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install server dependencies"
    exit 1
fi
cd ..
echo "✓ Backend dependencies installed"
echo ""

echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Start the API server in a new terminal:"
echo "   cd server"
echo "   npm start"
echo ""
echo "2. Start the Next.js app in another terminal:"
echo "   npm run dev"
echo ""
echo "3. Open your browser to:"
echo "   http://localhost:3000"
echo ""
echo "Demo Credentials:"
echo "   Email: user@example.com"
echo "   Password: password123"
echo ""
