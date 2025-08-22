# Temporal AI Deployment Guide

This guide covers deploying Temporal AI with **Akash Network** for the backend and **Vercel** for the frontend.

## Architecture Overview

- **Frontend**: React application deployed on Vercel
- **Backend**: Express.js API deployed on Akash Network
- **Database**: PostgreSQL (can be hosted on Neon, Supabase, or other providers)

## Prerequisites

### For Akash Network (Backend)
- [Akash CLI](https://docs.akash.network/guides/cli) installed
- Docker installed and configured
- Akash wallet with AKT tokens for deployment
- Docker Hub or container registry account

### For Vercel (Frontend)
- [Vercel CLI](https://vercel.com/cli) installed
- Vercel account
- GitHub repository (optional, for automated deployments)

## Backend Deployment (Akash Network)

### Step 1: Prepare Environment
```bash
# Copy backend dependencies
cp backend-package.json package.json

# Install dependencies
npm install

# Build the application
npm run build
```

### Step 2: Configure Docker Image
The `Dockerfile` is already configured. Update the `deploy.yml` if needed:

```yaml
services:
  temporal-ai-backend:
    image: your-registry/temporal-ai-backend:latest
    # ... rest of configuration
```

### Step 3: Deploy to Akash
```bash
# Make deployment script executable
chmod +x deploy-akash.sh

# Run deployment
./deploy-akash.sh
```

Or manually:
```bash
# Build and push Docker image
docker build -t your-registry/temporal-ai-backend .
docker push your-registry/temporal-ai-backend

# Deploy to Akash
akash tx deployment create deploy.yml --from default
```

### Step 4: Create Lease and Get Endpoint
```bash
# List deployments
akash query deployment list --owner $(akash keys show default -a)

# Create lease (replace DSEQ with your deployment sequence)
akash tx market lease create --dseq <DSEQ> --from default

# Get service URI
akash provider lease-status --dseq <DSEQ> --from default
```

## Frontend Deployment (Vercel)

### Step 1: Prepare Frontend
```bash
cd client

# Install dependencies
npm install

# Set environment variables
echo "VITE_API_URL=https://your-akash-backend-url" > .env.production
```

### Step 2: Deploy to Vercel
```bash
# Make deployment script executable
chmod +x ../deploy-vercel.sh

# Run deployment
../deploy-vercel.sh
```

Or manually:
```bash
# Deploy with Vercel CLI
vercel --prod

# Or deploy via Vercel dashboard
# 1. Connect your GitHub repository
# 2. Set VITE_API_URL environment variable
# 3. Deploy automatically on git push
```

## Environment Variables

### Backend (.env)
```bash
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://username:password@hostname:port/database
CORS_ORIGIN=https://your-vercel-app.vercel.app
```

### Frontend (.env.production)
```bash
VITE_API_URL=https://your-akash-backend-url
```

## Automated Deployment (CI/CD)

### GitHub Actions Setup
1. Add these secrets to your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID
   - `DOCKER_USERNAME`: Docker Hub username
   - `DOCKER_PASSWORD`: Docker Hub password
   - `AKASH_KEY`: Your Akash wallet mnemonic
   - `VITE_API_URL`: Your Akash backend URL

2. The `.github/workflows/deploy.yml` file will handle automatic deployments on push to main.

## DNS and Custom Domains

### Frontend (Vercel)
1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Configure DNS records as instructed

### Backend (Akash)
1. Get your deployment URI from Akash
2. Set up a CNAME record pointing to the Akash URI
3. Update CORS_ORIGIN in your backend environment

## Scaling and Monitoring

### Akash Network
- Monitor deployment health via Akash CLI
- Scale by updating `deploy.yml` and redeploying
- Check logs: `akash provider lease-logs --dseq <DSEQ>`

### Vercel
- Monitor via Vercel dashboard
- Automatic scaling based on traffic
- Analytics available in Vercel dashboard

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure CORS_ORIGIN is set correctly in backend
   - Verify Vercel URL matches CORS configuration

2. **API Connection Issues**
   - Check VITE_API_URL is set correctly
   - Verify Akash deployment is running
   - Test backend endpoint directly

3. **Build Failures**
   - Check all dependencies are installed
   - Verify environment variables are set
   - Review build logs for specific errors

### Getting Help
- Akash Network: [Discord](https://discord.gg/akash)
- Vercel: [Support](https://vercel.com/support)
- Project Issues: GitHub Issues

## Cost Optimization

### Akash Network
- Choose appropriate resource allocation
- Monitor AKT token usage
- Consider deployment scheduling for cost efficiency

### Vercel
- Optimize bundle size
- Use appropriate pricing plan
- Monitor bandwidth usage

## Security Best Practices

1. **Environment Variables**
   - Never commit secrets to git
   - Use separate environments for staging/production
   - Rotate API keys regularly

2. **Network Security**
   - Configure CORS properly
   - Use HTTPS for all communications
   - Implement rate limiting

3. **Database Security**
   - Use connection pooling
   - Implement proper authentication
   - Regular security updates