# MS-Promtathon

A production-ready full-stack React application with integrated Express server, featuring React Router 6, TypeScript, Vitest, and modern tooling.

## Tech Stack

- **Package Manager**: pnpm (v10.14.0)
- **Frontend**: React 18 + React Router 6 + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server (Node 22)
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Deployment**: Netlify, Docker, or self-hosted

## Quick Start

### Prerequisites
- Node.js 18+ (Recommended: 20.x or 22.x)
- pnpm 10.14.0+ (install with: `npm install -g pnpm@10.14.0`)

### Local Development

1. **Clone and install dependencies**
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:8080`

### Available Commands

```bash
pnpm dev              # Start development server (client + server with hot reload)
pnpm build            # Build for production (client + server)
pnpm build:client     # Build only frontend (outputs to dist/spa)
pnpm build:server     # Build only backend (outputs to dist/server)
pnpm start            # Run production server (requires pnpm build first)
pnpm test             # Run tests with Vitest
pnpm typecheck        # Check TypeScript types
pnpm format.fix       # Format code with Prettier
```

## Project Structure

```
├── client/                      # React frontend (SPA)
│   ├── pages/                   # Route components
│   │   ├── Index.tsx            # Home page
│   │   ├── CodesmitersArenaForm.tsx
│   │   └── NotFound.tsx
│   ├── components/              # React components
│   │   ├── ui/                  # Pre-built UI component library
│   │   └── Layout.tsx           # Main layout
│   ├── hooks/                   # React hooks
│   ├── lib/                     # Utilities
│   ├── App.tsx                  # App entry & routing
│   └── global.css               # Global styles
│
├── server/                      # Express backend
│   ├── index.ts                 # Server setup
│   ├── node-build.ts            # Server entry for production
│   └── routes/                  # API endpoints
│
├── shared/                      # Shared types
│   └── api.ts                   # API interfaces
│
├── netlify/                     # Netlify functions
│   └── functions/api.ts
│
└── public/                      # Static assets
```

## Routing

Routes are defined in `client/App.tsx` using React Router 6:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  {/* Add your routes here */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

Pages are located in `client/pages/` directory.

## Styling

- **Primary**: TailwindCSS 3 utility classes
- **Theme**: Configure in `client/global.css` and `tailwind.config.ts`
- **UI Components**: Pre-built library in `client/components/ui/`
- **Utility**: `cn()` function (combines clsx + tailwind-merge) for conditional classes

```typescript
import { cn } from "@/lib/utils";

className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className  // User overrides
)}
```

## API Development

### Creating a New API Endpoint

1. **Create a route handler** in `server/routes/my-endpoint.ts`:
   ```typescript
   import { RequestHandler } from "express";

   export const handleMyEndpoint: RequestHandler = (req, res) => {
     res.json({ message: 'Hello from my endpoint!' });
   };
   ```

2. **Register the route** in `server/index.ts`:
   ```typescript
   import { handleMyEndpoint } from "./routes/my-endpoint";

   app.get("/api/my-endpoint", handleMyEndpoint);
   ```

3. **Use in React components**:
   ```typescript
   const response = await fetch('/api/my-endpoint');
   const data = await response.json();
   ```

### Shared Types (Optional but recommended)

Define API interfaces in `shared/api.ts` for type safety:

```typescript
export interface MyEndpointResponse {
  message: string;
}
```

Then use in both server and client for type safety.

## Deployment

### Option 1: Netlify (Recommended - Already Configured)

The project includes `netlify.toml` for easy Netlify deployment.

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Select your GitHub repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Deploy!

**GitHub Actions Integration:**
- Set `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` as GitHub secrets
- The workflow in `.github/workflows/ci.yml` will auto-deploy on push to main

To get these tokens:
- `NETLIFY_AUTH_TOKEN`: [Personal access tokens](https://app.netlify.com/user/applications/personal)
- `NETLIFY_SITE_ID`: Found in Site Settings > General

### Option 2: Docker (Self-Hosted, VPS, etc.)

Build and run with Docker:

```bash
# Build image
docker build -t my-app .

# Run locally
docker run -p 3000:3000 my-app

# Or use docker-compose
docker-compose up
```

**Deployment to cloud providers:**
- AWS ECS, ECR
- Google Cloud Run
- DigitalOcean
- Any Docker-compatible platform

### Option 3: Traditional Node.js Hosting

1. Build the project:
   ```bash
   pnpm build
   ```

2. Install production dependencies:
   ```bash
   pnpm install --production
   ```

3. Run the server:
   ```bash
   pnpm start
   ```

The server will run on port 3000 (configurable via `PORT` env variable).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
PORT=3000
NODE_ENV=development
PING_MESSAGE=pong
```

**For production deployment**, set these via:
- Netlify: Site Settings > Build & Deploy > Environment
- Docker: `-e PORT=3000` flag or in docker-compose.yml
- Traditional: export before running `pnpm start`

## GitHub Actions CI/CD

The project includes automatic:

- **Testing**: Runs Vitest on push/PR
- **Type Checking**: TypeScript validation
- **Building**: Ensures build succeeds
- **Preview Deployment**: Auto-deploys PRs to Netlify (requires secrets)
- **Production Deployment**: Auto-deploys main branch to Netlify (requires secrets)

**To enable Netlify auto-deploy:**
1. Add GitHub secrets: `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`
2. Secrets are set in: Settings > Secrets and Variables > Actions

## Testing

Run tests with Vitest:

```bash
pnpm test          # Run tests once
pnpm test --watch  # Watch mode
```

Tests are located in `client/lib/utils.spec.ts`

## TypeScript

Check types without building:
```bash
pnpm typecheck
```

## Code Formatting

Format all code with Prettier:
```bash
pnpm format.fix
```

## Adding Features

### New Page/Route
1. Create `client/pages/MyPage.tsx`
2. Add route in `client/App.tsx`
3. Import and use like: `<Route path="/my-page" element={<MyPage />} />`

### New UI Component
Use Radix UI + TailwindCSS. Examples in `client/components/ui/`

### New API Endpoint
Follow the "API Development" section above

## Troubleshooting

### Port already in use
Dev server uses port 8080 by default. Change it:
```bash
PORT=9000 pnpm dev
```

### pnpm not found
Install globally: `npm install -g pnpm@10.14.0`

### TypeScript errors
Run `pnpm typecheck` to see all errors

### Build fails
1. Check `pnpm test` passes
2. Check `pnpm typecheck` passes
3. Ensure all imports use correct aliases: `@/` (client) or `@shared/` (shared)

## Production Checklist

- [ ] All tests passing: `pnpm test`
- [ ] No TypeScript errors: `pnpm typecheck`
- [ ] Build succeeds: `pnpm build`
- [ ] `.env.local` has production values (not in repo)
- [ ] Secrets set in GitHub (if using GitHub Actions)
- [ ] Environment variables set in deployment platform
- [ ] API endpoints tested

## Support & Documentation

- [React Router Docs](https://reactrouter.com/)
- [Vite Docs](https://vitejs.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [Express Docs](https://expressjs.com/)
- [TypeScript Docs](https://www.typescriptlang.org/)

## License

MIT
