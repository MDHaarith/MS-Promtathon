# Deployment Guide

This guide covers all deployment options for your full-stack application.

## Overview

This is a full-stack application with:
- **Frontend**: React SPA (compiled to static HTML/CSS/JS)
- **Backend**: Express.js server (Node.js)

You can deploy using several methods:

## Option 1: Netlify (Recommended for simplicity)

### Setup (Automatic)

1. **Prerequisites**
   - GitHub account
   - Netlify account (free tier available)

2. **Initial Setup**
   - Push your repo to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Netlify auto-detects the build settings from `netlify.toml`
   - Click Deploy!

3. **Your app is live!**
   - Netlify provides a URL like `https://xxxxx.netlify.app`
   - Updates automatically when you push to main branch

### Optional: GitHub Actions Auto-Deployment

For automatic deployment on every push:

1. Get Netlify tokens:
   - Go to [Netlify Settings > Applications](https://app.netlify.com/user/applications/personal)
   - Create a new Personal Access Token, copy it

2. Get Site ID:
   - Go to your Netlify site > Settings > General
   - Copy the Site ID

3. Add GitHub Secrets:
   - In GitHub: Settings > Secrets and Variables > Actions
   - Add `NETLIFY_AUTH_TOKEN` = (token from step 1)
   - Add `NETLIFY_SITE_ID` = (ID from step 2)

4. Done! The workflow in `.github/workflows/ci.yml` handles the rest

## Option 2: Docker (Self-Hosted, VPS, Containers)

### Quick Start

```bash
# Build Docker image
docker build -t my-app:latest .

# Run locally to test
docker run -p 3000:3000 my-app:latest

# Visit http://localhost:3000
```

### Deploy to Cloud Providers

#### AWS (ECS/ECR)

```bash
# Build and tag image
docker build -t my-app:latest .
docker tag my-app:latest <account-id>.dkr.ecr.<region>.amazonaws.com/my-app:latest

# Push to AWS ECR
aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/my-app:latest

# Create ECS task definition and service pointing to this image
```

#### Google Cloud Run

```bash
# Build and tag
docker build -t gcr.io/<project-id>/my-app:latest .

# Authenticate
gcloud auth configure-docker

# Push
docker push gcr.io/<project-id>/my-app:latest

# Deploy
gcloud run deploy my-app --image gcr.io/<project-id>/my-app:latest --platform managed
```

#### DigitalOcean App Platform

1. Go to DigitalOcean > Apps
2. Create new app
3. Connect GitHub repository
4. Set build command: `pnpm build`
5. Set run command: `pnpm start`
6. Deploy!

#### Railway.app

1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub repo
4. Railway auto-detects Node.js app
5. Set `NODE_ENV=production`
6. Deploy!

#### Render.com

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repo
4. Build command: `pnpm build`
5. Start command: `pnpm start`
6. Set Node version to 22
7. Deploy!

### Using Docker Compose (Local Multi-Container)

```bash
docker-compose up
```

For production, you can add a database service:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      DATABASE_URL: postgres://user:pass@db:5432/mydb
    depends_on:
      - db
  
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Option 3: Traditional Node.js Hosting

### Vercel

Vercel is optimized for Next.js but can run Express apps:

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Create `vercel.json`:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/spa",
  "devCommand": "pnpm dev",
  "public": false,
  "functions": {
    "api/**/*.ts": {
      "runtime": "nodejs20.x"
    }
  }
}
```

### Self-Hosted VPS (AWS EC2, Linode, etc.)

1. **Connect to your server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js 22**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
   sudo apt-get install -y nodejs
   npm install -g pnpm@10.14.0
   ```

3. **Clone and setup**
   ```bash
   cd /home/user
   git clone <your-repo> myapp
   cd myapp
   pnpm install
   cp .env.example .env.production
   # Edit .env.production with your settings
   ```

4. **Build**
   ```bash
   pnpm build
   ```

5. **Run with PM2 (process manager)**
   ```bash
   npm install -g pm2
   pm2 start "pnpm start" --name "myapp"
   pm2 save
   pm2 startup
   ```

6. **Setup Nginx reverse proxy**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;
     
     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

7. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Environment Variables for Each Platform

### Netlify
- Settings > Build & Deploy > Environment variables
- Or add to `netlify.toml`:
```toml
[env.production]
  NODE_ENV = "production"
  PING_MESSAGE = "pong"
```

### Docker
```bash
docker run -e NODE_ENV=production -e PORT=3000 my-app
```

### GitHub Actions (via Secrets)
Secrets are automatically injected into `process.env`

### VPS
```bash
export NODE_ENV=production
export PORT=3000
pnpm start
```

## Monitoring & Debugging

### View Logs

**Netlify**: 
- Netlify UI > Deploys > Deployment logs

**Docker**: 
```bash
docker logs -f <container-id>
```

**VPS with PM2**: 
```bash
pm2 logs myapp
pm2 monit
```

### Common Issues

#### App crashes on start
- Check `NODE_ENV` is set to `production`
- Check all required env vars are set
- Run `pnpm build` locally and test: `pnpm start`

#### Build fails
- Check Node.js version matches (22.x)
- Ensure pnpm version is 10.14.0+
- Run `pnpm install` works locally
- Check for TypeScript errors: `pnpm typecheck`

#### Port already in use
- Change PORT env var
- Kill process: `lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill`

#### Out of memory
- Increase server memory/swap
- Or use a larger instance type

## Security Checklist

- [ ] `.env` files are in `.gitignore` ✓
- [ ] Secrets are set via platform env vars (not in code)
- [ ] Use HTTPS (Netlify/cloud providers auto-do this)
- [ ] Set `NODE_ENV=production` in production
- [ ] Keep dependencies updated: `pnpm update`
- [ ] Review GitHub Actions secrets are not logged
- [ ] Database credentials never in code

## Performance Tips

1. **Enable compression** (Netlify/Docker does this)
2. **Set Cache headers** in `netlify.toml`:
```toml
[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, immutable, max-age=31536000"
```

3. **Use CDN** (Netlify/Vercel includes this)
4. **Monitor performance** with your platform's tools

## Rollback

If something goes wrong:

**Netlify**: Click previous deployment in Netlify UI
**GitHub**: Use git to revert and push: `git revert HEAD`, `git push`
**Docker**: Keep old images, restart with previous tag
**VPS**: Keep backup of previous release, swap symlinks

## Cost Estimates

| Platform | Cost | Best For |
|----------|------|----------|
| Netlify Free | $0-45/mo | Most projects |
| Vercel Free | $0-20/mo | Jamstack |
| Railway | $5/mo + usage | Full-stack |
| Docker + VPS | $5-20/mo | Full control |
| AWS | $0-50+/mo | Scalability |

## Next Steps

1. Choose your deployment platform
2. Follow the setup steps above
3. Set environment variables
4. Deploy!
5. Monitor logs and performance
6. Setup auto-deployments with GitHub Actions (if desired)

For questions, check platform-specific docs or open an issue!
