# Deployment Guide

This guide covers deploying your Eventus Onboarding Prototype to various platforms.

## 🚀 Vercel Deployment (Recommended)

Vercel is the recommended platform for deploying this full-stack application.

### Prerequisites

- Vercel account (free tier works) - [Sign up](https://vercel.com/signup)
- GitHub account
- PostgreSQL database (Vercel Postgres, Supabase, or Railway)

### Option 1: Deploy via GitHub (Recommended)

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Eventus Onboarding Prototype"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/eventus-onboarding.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: Leave empty (handled by vercel.json)
   - **Output Directory**: Leave empty

#### Step 3: Set Up Database

**Option A: Vercel Postgres (Easiest)**
1. In Vercel Dashboard, go to Storage
2. Create a Postgres database
3. Copy the connection string

**Option B: External Database (Supabase, Railway, etc.)**
1. Create a PostgreSQL database
2. Get the connection string
3. Run schema manually:
```bash
psql YOUR_DATABASE_URL < server/db/schema.sql
```

#### Step 4: Configure Environment Variables

In Vercel Dashboard → Your Project → Settings → Environment Variables:

```env
# Database (from Vercel Postgres or external)
POSTGRES_URL=postgresql://user:password@host:port/database

# Or individual variables
DB_USER=your_db_user
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432

# Server Config
NODE_ENV=production
PORT=5000
```

#### Step 5: Deploy

1. Click "Deploy" in Vercel
2. Wait for deployment to complete
3. Visit your live URL!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: eventus-onboarding
# - Directory: ./
# - Override settings? No

# Deploy to production
vercel --prod
```

### Vercel Configuration Explained

The `vercel.json` file configures:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "build" }
    },
    {
      "src": "server/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "client/build/$1"
    }
  ]
}
```

This setup:
- Builds React frontend as static files
- Runs Express backend as serverless functions
- Routes `/api/*` to backend, everything else to frontend

## 🐙 GitHub Setup

### Initialize Repository

```bash
# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "feat: Initial commit - Eventus Onboarding Prototype

- Full-stack React + Express + PostgreSQL app
- Material Design + Glassmorphism UI
- Multi-step onboarding survey
- Complete documentation
- Vercel deployment ready"

# Create GitHub repository
# Go to https://github.com/new
# Create a new repository named: eventus-onboarding

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/eventus-onboarding.git

# Push to GitHub
git push -u origin main
```

### Branch Strategy

```bash
# Create development branch
git checkout -b develop

# Make changes, then commit
git add .
git commit -m "feat: your feature description"

# Push to GitHub
git push origin develop

# Merge to main for production
git checkout main
git merge develop
git push origin main
```

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
          vercel-args: '--prod'
```

## 🌐 Alternative Deployment Options

### Netlify (Frontend Only)

For frontend-only deployment (you'll need separate backend):

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build frontend
cd client
npm run build

# Deploy
netlify deploy --prod --dir=build
```

### Heroku (Full-Stack)

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create eventus-onboarding

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Set buildpacks
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add --index 1 heroku-community/multi-procfile

# Add Procfile (root):
# web: cd server && npm start
# 
# Add Procfile (client):
# web: npm start

# Deploy
git push heroku main

# Run migrations
heroku run bash
> cd server && npm run init-db
```

### Railway (Recommended Alternative)

1. Go to [Railway](https://railway.app)
2. "New Project" → "Deploy from GitHub"
3. Select your repository
4. Add PostgreSQL service
5. Set environment variables
6. Deploy!

## 🔧 Production Checklist

### Before Deployment

- [ ] Update environment variables
- [ ] Test production build locally
- [ ] Run database migrations
- [ ] Update API endpoints
- [ ] Check CORS settings
- [ ] Verify error handling
- [ ] Test form validation
- [ ] Review security settings

### Testing Production Build

```bash
# Build frontend
cd client
npm run build

# Test build
npx serve -s build -l 3000

# Test API separately
cd ../server
NODE_ENV=production node server.js
```

### Environment Variables Checklist

**Required for Vercel:**
- `POSTGRES_URL` or individual DB variables
- `NODE_ENV=production`

**Optional:**
- `PORT` (Vercel auto-assigns)
- Custom API keys if added

## 🔒 Security Considerations

### Production Updates

1. **Update CORS** in `server/server.js`:
```javascript
const cors = require('cors');
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-domain.vercel.app' 
    : 'http://localhost:3000'
}));
```

2. **Environment Variables**: Never commit `.env` files
3. **Database**: Use SSL for production database
4. **API Keys**: Store in Vercel environment variables
5. **Rate Limiting**: Add rate limiting for API endpoints

### Add Rate Limiting

```bash
npm install express-rate-limit
```

In `server/server.js`:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## 📊 Database Migration

### For Vercel Postgres

```bash
# Connect to Vercel Postgres
vercel env pull .env.local
psql $(grep POSTGRES_URL .env.local | cut -d '=' -f2)

# Run schema
\i server/db/schema.sql

# Insert mock data (optional)
# Use the code from server/scripts/init-db.js
```

### For External Database

```bash
# Export connection string
export DATABASE_URL="postgresql://user:pass@host:port/db"

# Run schema
psql $DATABASE_URL < server/db/schema.sql
```

## 🧪 Testing Deployment

### Test Checklist

1. **Frontend**
   - [ ] Survey loads correctly
   - [ ] All steps work
   - [ ] Styling is correct
   - [ ] Animations work
   - [ ] Mobile responsive

2. **Backend**
   - [ ] API endpoints respond
   - [ ] Database connection works
   - [ ] Data saves correctly
   - [ ] Error handling works

3. **Integration**
   - [ ] Form submission works
   - [ ] Confirmation page loads
   - [ ] Data persists
   - [ ] Navigation works

### Test Commands

```bash
# Test health endpoint
curl https://your-app.vercel.app/api/health

# Test profile creation
curl -X POST https://your-app.vercel.app/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test",
    "lastName": "User",
    "classYear": "Junior",
    "interests": ["Tech - Software Engineering"],
    "skills": [{"skill": "Python", "type": "technical"}],
    "goals": ["Internship"]
  }'
```

## 🐛 Troubleshooting

### Common Deployment Issues

**Build Fails**
```bash
# Clear cache and rebuild
cd client
rm -rf node_modules build
npm install
npm run build
```

**Database Connection Error**
- Check environment variables in Vercel
- Verify database URL format
- Ensure database allows external connections
- Check if SSL is required

**API Routes Not Working**
- Verify `vercel.json` configuration
- Check API routes start with `/api`
- Review Vercel function logs

**CORS Errors**
- Update CORS settings in `server/server.js`
- Add production domain to allowed origins

### Vercel Logs

```bash
# View logs
vercel logs

# Follow logs in real-time
vercel logs --follow
```

## 📈 Post-Deployment

### Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Configure DNS records as shown
4. Wait for SSL certificate

### Monitoring

**Vercel Analytics**
1. Enable in Vercel Dashboard
2. View real-time usage
3. Monitor performance

**External Options**
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user tracking

### Performance

**Frontend Optimizations**
- Images: Use WebP format
- Code splitting: Already handled by React
- CDN: Vercel automatically uses edge network
- Caching: Configure in `vercel.json`

**Backend Optimizations**
- Database: Add indexes (already in schema)
- API: Implement caching
- Functions: Keep serverless functions small

## 🔄 Update Workflow

### Making Changes

```bash
# 1. Make changes locally
git checkout -b feature/new-feature

# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "feat: description"

# 4. Push to GitHub
git push origin feature/new-feature

# 5. Vercel auto-deploys preview
# Test the preview URL

# 6. Merge to main
git checkout main
git merge feature/new-feature
git push origin main

# 7. Vercel auto-deploys to production
```

## 📝 Deployment Summary

### Quick Deploy Steps

1. **Setup GitHub**: `git init` → commit → push
2. **Setup Database**: Vercel Postgres or external
3. **Deploy to Vercel**: Import GitHub repo
4. **Add Environment Variables**: Database credentials
5. **Test**: Visit deployed URL
6. **Done!** 🎉

### Useful Commands

```bash
# Local build test
npm run build

# Vercel login
vercel login

# Deploy preview
vercel

# Deploy production
vercel --prod

# View logs
vercel logs
```

---

**Need Help?**
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [GitHub Actions](https://docs.github.com/en/actions)

**Your app is now ready for the world! 🚀**

