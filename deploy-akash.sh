#!/bin/bash

# Akash Network Backend Deployment Script for Temporal AI

set -e

echo "🚀 Starting Akash deployment for Temporal AI Backend"

# Check if required tools are installed
if ! command -v akash &> /dev/null; then
    echo "❌ Akash CLI not found. Please install it first:"
    echo "   Visit: https://docs.akash.network/guides/cli"
    exit 1
fi

if ! command -v docker &> /dev/null; then
    echo "❌ Docker not found. Please install Docker first."
    exit 1
fi

# Build Docker image
echo "🔨 Building Docker image..."
docker build -t temporal-ai-backend .

# Optional: Push to a registry (uncomment if using a registry)
# docker tag temporal-ai-backend your-registry/temporal-ai-backend:latest
# docker push your-registry/temporal-ai-backend:latest

# Deploy to Akash
echo "🌐 Deploying to Akash Network..."
akash tx deployment create deploy.yml --from default --gas-prices="0.025uakt" --gas="auto" --gas-adjustment=1.15

echo "✅ Deployment submitted to Akash Network!"
echo "📋 To check deployment status:"
echo "   akash query deployment list --owner \$(akash keys show default -a)"
echo ""
echo "📋 To create a lease (after deployment is active):"
echo "   akash tx market lease create --dseq <DEPLOYMENT_SEQ> --from default"
echo ""
echo "📋 To get deployment URI:"
echo "   akash provider lease-status --dseq <DEPLOYMENT_SEQ> --from default"