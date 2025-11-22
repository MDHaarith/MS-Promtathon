# Quick Start Guide

Get the app running in 5 minutes!

## Prerequisites

- Node.js 20.x or later (recommended: 22.x)
- Git

## 3-Minute Setup

### Option A: Automated Setup (Linux/macOS)

```bash
# 1. Clone repository
git clone https://github.com/YOUR-USERNAME/ms-promtathon.git
cd ms-promtathon

# 2. Run setup script
chmod +x setup.sh
./setup.sh

# 3. Start development
pnpm dev
```

Visit: http://localhost:8080

### Option B: Automated Setup (Windows)

```bash
# 1. Clone repository
git clone https://github.com/YOUR-USERNAME/ms-promtathon.git
cd ms-promtathon

# 2. Run setup script (double-click)
setup.bat

# 3. Start development
pnpm dev
```

Visit: http://localhost:8080

### Option C: Manual Setup

```bash
# 1. Clone repository
git clone https://github.com/YOUR-USERNAME/ms-promtathon.git
cd ms-promtathon

# 2. Install pnpm
npm install -g pnpm@10.14.0

# 3. Install dependencies
pnpm install

# 4. Copy environment file
cp .env.example .env.local

# 5. Start development
pnpm dev
```

Visit: http://localhost:8080

### Option D: Using Make

```bash
cd ms-promtathon
make setup
make dev
```

Visit: http://localhost:8080

## What's Running?

- **Frontend**: http://localhost:8080 (React SPA)
- **Backend API**: http://localhost:8080/api (Express)
- **Hot reload**: Both client and server auto-reload on changes

## Common Commands

```bash
pnpm dev              # Development server with hot reload
pnpm build            # Build for production
pnpm start            # Run production build
pnpm test             # Run tests
pnpm typecheck        # Check TypeScript errors
pnpm format.fix       # Format code
```

## File Structure

```
client/       ← Frontend React code
server/       ← Backend Express code
shared/       ← Shared types & utils
public/       ← Static files
```

## Next Steps

- Edit files in `client/pages/` to modify pages
- Add new routes in `client/App.tsx`
- Create API endpoints in `server/routes/`
- Check `README.md` for full documentation
- See `DEPLOYMENT_GUIDE.md` for deployment options

## Troubleshooting

**Port 8080 already in use?**
```bash
PORT=9000 pnpm dev
```

**pnpm not found?**
```bash
npm install -g pnpm@10.14.0
```

**TypeScript errors?**
```bash
pnpm typecheck
```

**Need help?**
- Check README.md for full docs
- See DEPLOYMENT_GUIDE.md for deployment
- Open an issue on GitHub

## Deploy to Production

Choose your platform:

1. **Netlify** (easiest)
   - Push to GitHub
   - Connect at netlify.com
   - Done! 🎉

2. **Docker**
   ```bash
   docker build -t my-app .
   docker run -p 3000:3000 my-app
   ```

3. **VPS/Self-hosted**
   ```bash
   pnpm build
   pnpm start
   ```

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

---

**You're all set!** Happy coding! 🚀
