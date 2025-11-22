# 🚀 Deploy to Vercel

Complete guide to deploy your MS-Promtathon app to Vercel.

---

## Step 1: Push Code to GitHub

Make sure your code is pushed:

```bash
git add .
git commit -m "Add Vercel configuration"
git push origin main
```

---

## Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

---

## Step 3: Import Your GitHub Project

1. You'll see **"Import Project"**
2. Paste your GitHub repo URL:
   ```
   https://github.com/YOUR-USERNAME/MS-Promtathon
   ```
3. Click **"Continue"**

---

## Step 4: Configure Project

Vercel auto-detects settings from `vercel.json`, but you can verify:

- **Framework Preset:** Vite
- **Build Command:** `pnpm build`
- **Output Directory:** `dist/spa`
- **Node.js Version:** 22.x

Click **"Deploy"**

---

## Step 5: Wait for Deployment

- Vercel builds your app (2-5 minutes)
- You get a live URL like: `https://ms-promtathon.vercel.app`
- Your site is **live and public!**

---

## Step 6: (Optional) Custom Domain

To use your own domain:

1. Go to **Project Settings** > **Domains**
2. Add your custom domain
3. Update DNS records (Vercel shows instructions)

---

## Auto-Deploy on Every Push

✅ **Already enabled!** When you push to `main` branch:

```bash
git push origin main
```

Vercel automatically:
- Pulls new code
- Builds your app
- Deploys to production

Your updates go live in 2-3 minutes!

---

## Environment Variables

If your app needs environment variables:

1. Go to **Project Settings** > **Environment Variables**
2. Add your variables (example):
   - `PING_MESSAGE=pong`
   - Any API keys or secrets
3. Click **"Save"**
4. Redeploy

---

## Verify Deployment

After Vercel says "Deployment Successful":

1. Click the **Preview URL** Vercel provides
2. Check:
   - ✅ Homepage loads
   - ✅ Dark mode works
   - ✅ Links are functional
   - ✅ No console errors (F12)

---

## Troubleshooting

### Build fails
- Check Vercel build logs
- Ensure `pnpm install` works locally: `pnpm install`
- Run `pnpm build` locally to test

### Site is blank
- Hard refresh browser: `Ctrl+Shift+R`
- Check browser console (F12) for errors
- Check Vercel deployment logs

### API endpoints not working
- Verify `server/` files exist
- Check `vercel.json` rewrites are correct

---

## Your Deployed Site

✅ **Live at:** `https://YOUR-USERNAME-ms-promtathon.vercel.app`

Share this URL with anyone to view your app!

---

## Next Deployments

Every time you push to GitHub:

```bash
git push origin main
```

Vercel auto-deploys within 2-3 minutes! 🚀

---

## Cost

- **Free tier:** Includes all you need
- **Pro tier:** $20/month (optional)
- **Enterprise:** Custom pricing

Stick with free tier unless you need advanced features.

---

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- Check your deployment logs for errors

---

**Your app is now live on the internet!** 🎉
