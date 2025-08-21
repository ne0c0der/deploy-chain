# Overview

This is a full-stack web application for Temporal AI Technologies, an AI company showcasing their products and services through a modern corporate website. The application features a React frontend with a Node.js Express backend, using PostgreSQL for data persistence and Drizzle ORM for database operations. The site includes sections for company information, product showcases, investor relations, and contact forms, all built with a professional design system using shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for brand consistency
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation schemas
- **Design System**: Custom CSS variables for consistent theming with support for light/dark modes

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact and partner inquiries
- **Request Handling**: JSON parsing with URL-encoded form support
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reloading with Vite integration in development mode

## Data Layer
- **Database**: PostgreSQL configured via environment variables
- **ORM**: Drizzle ORM with type-safe query building
- **Schema Management**: Shared TypeScript schemas between frontend and backend
- **Validation**: Zod schemas for runtime type checking and validation
- **Storage Interface**: Abstracted storage layer supporting both in-memory (development) and PostgreSQL (production)
- **Migrations**: Drizzle Kit for database schema migrations

## Application Structure
- **Monorepo Layout**: Single repository with client/, server/, and shared/ directories
- **Shared Code**: Common TypeScript schemas and types used by both frontend and backend
- **Build Process**: Separate build processes for client (Vite) and server (esbuild)
- **Path Aliases**: Configured TypeScript path mapping for clean imports

## Security & Validation
- **Input Validation**: Zod schemas validate all form submissions
- **Error Boundaries**: Comprehensive error handling on both client and server
- **Type Safety**: End-to-end TypeScript coverage for all data flows

# External Dependencies

## Database Services
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Connection Pooling**: Built-in connection management via @neondatabase/serverless

## UI & Design
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide Icons**: Icon library for consistent visual elements
- **React Icons**: Additional icon sets (specifically react-icons/si for social icons)
- **Google Fonts**: Inter font family loaded via CDN

## Development & Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Backend bundling for production builds
- **TypeScript**: Static type checking across the entire application
- **PostCSS**: CSS processing with Tailwind integration

## Runtime & Utilities
- **TanStack Query**: Data fetching and caching library
- **React Hook Form**: Form state management and validation
- **date-fns**: Date manipulation utilities
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **wouter**: Lightweight routing library