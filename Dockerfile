FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy server source code and shared schemas
COPY server/ ./server/
COPY shared/ ./shared/
COPY tsconfig.json ./

# Install tsx globally for TypeScript execution
RUN npm install -g tsx

# Expose port
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Start the server
CMD ["tsx", "server/index.ts"]