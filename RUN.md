# 🎯 3 Ways to Run - Pick One

---

## 1️⃣ GitHub Codespaces (Cloud - Easiest)

**For your team to test without installing anything:**

1. Go to your GitHub repo
2. Click **"Code"** (green button)
3. Click **"Codespaces"** tab
4. Click **"Create codespace on main"**
5. **Wait 2-3 minutes** (auto-setup happens)
6. Terminal shows: `✨ Setup Complete!`
7. Run this command in the terminal:
   ```bash
   pnpm dev
   ```
8. Click the popup **"Open in Browser"**
9. ✅ **Done!** Your app is running

---

## 2️⃣ Local Computer (Your Machine)

### Linux/macOS:
```bash
git clone https://github.com/YOUR-USERNAME/ms-promtathon.git
cd ms-promtathon
chmod +x setup.sh
./setup.sh
pnpm dev
```
Visit: http://localhost:8080

### Windows:
```bash
git clone https://github.com/YOUR-USERNAME/ms-promtathon.git
cd ms-promtathon
setup.bat
pnpm dev
```
Visit: http://localhost:8080

**That's 5 lines to run your full app with everything installed!**

---

## 3️⃣ Production (After Deploy)

Just share the URL:
```
https://your-site.netlify.app
```

Anyone can **click and use it** - no setup needed.

---

## ✋ When You See Issues

### Blank page?
```bash
# Make sure this is running:
pnpm dev

# Then hard-refresh in browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
```

### Port 8080 in use?
```bash
PORT=3000 pnpm dev
```

### pnpm not found?
```bash
npm install -g pnpm@10.14.0
```

### Need help?
- Check browser console (F12)
- See full docs in `README.md`
- See deployment in `DEPLOYMENT_GUIDE.md`

---

## ✨ What You Get

- React frontend (auto-reload)
- Express backend API (auto-reload)
- TypeScript everywhere
- Tests included
- Ready to deploy

---

## 🚀 What's Next?

1. Edit `client/pages/Index.tsx` to change content
2. Run `pnpm dev` again (auto-reloads)
3. Push to GitHub
4. Netlify auto-deploys

---

**That's it!** 🎉
