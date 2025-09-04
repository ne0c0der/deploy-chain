# @nebulaai Package Suite

A comprehensive collection of high-quality React components, hooks, and utilities for modern web development.

## Packages

### [@nebulaai/ui-components](./ui-components)
A complete UI component library built on Radix UI primitives with Tailwind CSS styling. Includes 47+ production-ready components with accessibility features and TypeScript support.

**Components include:** Button, Card, Dialog, Form, Input, Select, Sheet, Toast, Carousel, Sidebar, and many more.

### [@nebulaai/theme-provider](./theme-provider)
A comprehensive theme provider with dark/light/system mode support and localStorage persistence.

**Features:**
- Dark, light, and system theme modes
- Automatic system preference detection
- localStorage persistence
- Theme toggle component included

### [@nebulaai/api-client](./api-client)
A powerful API client built on TanStack Query with automatic error handling and environment-aware URL resolution.

**Features:**
- Environment-aware URL resolution
- Automatic error handling
- 401 handling with configurable behavior
- Production-ready query configuration

### [@nebulaai/react-hooks](./react-hooks)
A collection of powerful and reusable React hooks.

**Hooks include:**
- `useIsMobile`: Mobile device detection
- `useToast`: Toast notification management

### [@nebulaai/utils](./utils)
Essential utility functions for modern web development.

**Utilities include:**
- `cn`: Class name merging with Tailwind CSS support

## Installation

```bash
# Install individual packages
npm install @nebulaai/ui-components
npm install @nebulaai/theme-provider
npm install @nebulaai/api-client
npm install @nebulaai/react-hooks
npm install @nebulaai/utils

# Or install the complete suite
npm install @nebulaai/ui-components @nebulaai/theme-provider @nebulaai/api-client @nebulaai/react-hooks @nebulaai/utils
```

## Usage

```tsx
import { Button, Card } from '@nebulaai/ui-components'
import { ThemeProvider, useTheme } from '@nebulaai/theme-provider'
import { apiRequest, queryClient } from '@nebulaai/api-client'
import { useIsMobile, useToast } from '@nebulaai/react-hooks'
import { cn } from '@nebulaai/utils'

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  )
}
```

## Development

```bash
# Build all packages
npm run build

# Watch mode for development
npm run dev

# Type checking
npm run type-check
```

## License

MIT © 2024 Temporal AI Technologies Inc

All rights reserved. This software and associated documentation files (the "Software") are the proprietary work of Temporal AI Technologies Inc.