#!/bin/bash

# Vercel Frontend Deployment Script for Temporal AI

set -e

echo "🚀 Starting Vercel deployment for Temporal AI Frontend"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Navigate to client directory
cd client

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building frontend..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Frontend deployed to Vercel!"
echo "🔗 Your deployment URL will be shown above"
echo ""
echo "📋 Environment Variables Setup:"
echo "   1. Go to your Vercel dashboard"
echo "   2. Navigate to your project settings"
echo "   3. Add VITE_API_URL environment variable"
echo "   4. Set it to your Akash backend URL"
echo ""
echo "💡 Don't forget to update CORS_ORIGIN in your backend with the Vercel URL!"