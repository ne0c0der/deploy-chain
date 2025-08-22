# Temporal AI Technologies

A professional corporate website showcasing Temporal AI's sub-brands and projects with enterprise-grade design.

## Architecture

- **Frontend**: React with TypeScript, deployed on Vercel
- **Backend**: Express.js API, deployed on Akash Network
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components

## Quick Start

### Development
```bash
# Start the development server
npm run dev
```

### Production Deployment

#### Frontend (Vercel)
```bash
cd client
npm install
npm run build
vercel --prod
```

#### Backend (Akash Network)
```bash
# Build and deploy
docker build -t temporal-ai-backend .
akash tx deployment create deploy.yml --from default
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Application pages
│   │   └── lib/            # Utilities and configurations
│   └── package.json        # Frontend dependencies
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage interface
├── shared/                 # Shared TypeScript schemas
├── deploy.yml             # Akash deployment configuration
├── Dockerfile             # Backend container configuration
├── vercel.json            # Vercel deployment configuration
└── DEPLOYMENT.md          # Detailed deployment guide
```

## Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Contact Forms**: Working contact and partnership inquiry forms
- **Project Showcase**: Dynamic project cards with status indicators
- **Animation**: Smooth transitions and hover effects
- **SEO Optimized**: Meta tags and structured content
- **Type Safety**: End-to-end TypeScript coverage

## Environment Variables

### Frontend (.env.production)
- `VITE_API_URL`: Backend API URL (Akash Network endpoint)

### Backend (.env)
- `NODE_ENV`: Environment mode
- `PORT`: Server port (default: 5000)
- `DATABASE_URL`: PostgreSQL connection string
- `CORS_ORIGIN`: Frontend URL for CORS (Vercel URL)

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions.

### Quick Deploy Commands
```bash
# Frontend to Vercel
./deploy-vercel.sh

# Backend to Akash
./deploy-akash.sh
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details