# MS-Promtathon

A production-ready full-stack React application with integrated Express server, featuring React Router 6 SPA, TypeScript, Vitest, and modern tooling.

## Quick Links

- **📖 [How to Deploy](DEPLOY.md)** - Get your site live online
- **🚀 [Development Guide](#development)** - Local setup
- **📚 [Full Documentation](#documentation)** - Everything else

---

## 🚀 Development

### Prerequisites
- Node.js 20.x or 22.x
- pnpm 10.14.0

### Local Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit: http://localhost:8080

### Available Commands

```bash
pnpm dev              # Start dev server (with hot reload)
pnpm build            # Build for production
pnpm start            # Run production build
pnpm test             # Run tests
pnpm typecheck        # Check TypeScript
pnpm format.fix       # Format code
```

---

## Tech Stack

- **Frontend**: React 18 + React Router 6 + TypeScript + Vite + TailwindCSS
- **Backend**: Express.js + Node.js
- **Testing**: Vitest
- **UI**: Radix UI + Lucide Icons
- **Styling**: TailwindCSS 3
- **Package Manager**: pnpm

---

## Project Structure

```
client/
  ├── pages/           # Route pages
  ├── components/      # React components
  │   └── ui/         # Pre-built UI library
  ├── hooks/          # Custom React hooks
  ├── lib/            # Utilities
  └── App.tsx         # Routing setup

server/
  ├── index.ts        # Express server setup
  ├── node-build.ts   # Production entry
  └── routes/         # API endpoints

shared/
  └── api.ts          # Shared types

public/              # Static files
```

---

## Deploy Your Site

**See [DEPLOY.md](DEPLOY.md) for complete deployment instructions.**

Quick summary:

### Netlify (Recommended)
```
1. Go to netlify.com
2. Click "New site from Git"
3. Select your GitHub repo
4. Done! Site is live
```

### Railway
```
1. Go to railway.app
2. Click "New Project"
3. Select your repo
4. Done! Site is live
```

### Render
```
1. Go to render.com
2. Create new Web Service
3. Select your repo
4. Done! Site is live
```

---

## Features

✅ React 18 with TypeScript  
✅ Full-stack with Express backend  
✅ Hot reload in development  
✅ TailwindCSS 3 styling  
✅ Radix UI components  
✅ API routing  
✅ Testing with Vitest  
✅ Production build script  
✅ Environment config  

---

## Routing

Pages are in `client/pages/`:

```typescript
// client/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## Styling

Use TailwindCSS utility classes:

```tsx
<div className="flex items-center justify-center min-h-screen bg-background">
  <h1 className="text-4xl font-bold text-foreground">Hello World</h1>
</div>
```

---

## API Routes

Create endpoints in `server/routes/`:

```typescript
// server/routes/example.ts
import { RequestHandler } from "express";

export const handleExample: RequestHandler = (req, res) => {
  res.json({ message: "Hello from API" });
};
```

Register in `server/index.ts`:

```typescript
import { handleExample } from "./routes/example";

app.get("/api/example", handleExample);
```

Use in React:

```typescript
const response = await fetch("/api/example");
const data = await response.json();
```

---

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

For production, set variables in your deployment platform.

---

## Testing

```bash
pnpm test
```

Tests are in files named `*.spec.ts`

---

## Production Build

```bash
pnpm build
pnpm start
```

Starts on port 3000 (configurable via `PORT` env var)

---

## Documentation

### Development
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Express Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Radix UI Documentation](https://radix-ui.com/)

### Deployment
- [DEPLOY.md](DEPLOY.md) - Complete deployment guide

---

## Support

If you encounter issues:

1. Check the [documentation](#documentation)
2. Review [DEPLOY.md](DEPLOY.md) for deployment help
3. Open a GitHub issue
4. Check error logs in browser console (F12)

---

## License

MIT
