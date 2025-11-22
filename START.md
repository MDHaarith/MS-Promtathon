# 🚀 Getting Started - Choose Your Path

Pick your environment and follow the instructions:

---

## 🐳 GitHub Codespaces (EASIEST - Fully Automatic)

1. Click the green **"Code"** button on GitHub
2. Select **"Codespaces"** tab
3. Click **"Create codespace on main"**
4. **Wait 2-3 minutes** - everything installs automatically
5. Once ready, see the message: "✅ Setup complete!"
6. In the terminal, run:
   ```bash
   pnpm dev
   ```
7. Click the notification popup **"Open in Browser"** or go to the forwarded port URL

**That's it!** No additional setup needed.

---

## 💻 Local Development (Your Computer)

### One-Command Setup (Linux/macOS)

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/ms-promtathon.git
cd ms-promtathon

# Run setup (installs everything)
chmod +x setup.sh
./setup.sh

# Start development
pnpm dev
```

**Visit:** http://localhost:8080

### One-Command Setup (Windows)

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/ms-promtathon.git
cd ms-promtathon

# Run setup (double-click or run in PowerShell)
setup.bat

# Start development
pnpm dev
```

**Visit:** http://localhost:8080

### Using Make (if you have `make` installed)

```bash
git clone https://github.com/YOUR-USERNAME/ms-promtathon.git
cd ms-promtathon

make setup
make dev
```

**Visit:** http://localhost:8080

---

## ☁️ Deployed on GitHub (Your Team/Friends)

Share this link with your team:

```
https://your-netlify-site.netlify.app
```

They can **just open it** - no setup needed!

---

## 📋 What Each Setup Does

### `setup.sh` / `setup.bat` / `make setup`

Automatically:
- ✅ Installs Node.js dependencies
- ✅ Creates `.env.local` file
- ✅ Checks TypeScript types
- ✅ Runs all tests
- ✅ Builds the project
- ✅ Shows success message

### `pnpm dev`

Starts the development server:
- ✅ Frontend auto-reloads on file changes
- ✅ Backend auto-reloads on file changes
- ✅ Available at http://localhost:8080

---

## �� Having Issues?

### "Port 8080 already in use"
```bash
PORT=9000 pnpm dev
```

### "pnpm not found"
```bash
npm install -g pnpm@10.14.0
```

### "Node.js not installed"
Install from https://nodejs.org/ (version 20.x or 22.x)

### "Build fails"
```bash
pnpm typecheck   # Check for TypeScript errors
pnpm test        # Check if tests pass
```

### Blank page after running?
1. Make sure `pnpm dev` is running (you should see logs)
2. Hard refresh: `Ctrl+Shift+R` or `Cmd+Shift+R`
3. Check browser console for errors (F12 key)

---

## 📚 Common Commands

```bash
pnpm dev              # Start development (with hot reload)
pnpm build            # Build for production
pnpm start            # Run production build
pnpm test             # Run tests
pnpm typecheck        # Check TypeScript errors
pnpm format.fix       # Auto-format code
```

---

## ✨ Project Structure

```
client/              ← Your React app goes here
  pages/             ← Page components
  components/        ← Reusable components
  lib/               ← Utilities

server/              ← Backend API (Express)
  routes/            ← API endpoints

public/              ← Static files (images, etc)
```

---

## 🎯 Next Steps

1. **Change the content**: Edit `client/pages/Index.tsx`
2. **Add new pages**: Create file in `client/pages/`
3. **Add API routes**: Create in `server/routes/`
4. **Deploy**: Push to GitHub, Netlify auto-deploys!

---

## 🚀 Deploy to Production

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for:
- Netlify (easiest)
- Docker
- GitHub Actions auto-deploy
- Traditional VPS

---

**Ready?** Run your setup command above and you're good to go! 🎉
