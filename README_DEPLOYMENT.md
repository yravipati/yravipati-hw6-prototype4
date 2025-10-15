# 🚀 Quick Deployment Guide

## Step 1: Push to GitHub

```bash
# Add all files
git add .

# Commit with descriptive message
git commit -m "feat: Eventus Onboarding Prototype - Full Stack App

- Material Design + Glassmorphism UI
- React + Express + PostgreSQL
- 4-step onboarding survey
- Form validation & error handling
- Vercel deployment ready
- Complete documentation"

# Create repository on GitHub
# Go to: https://github.com/new
# Repository name: eventus-onboarding-prototype
# Make it public or private
# Don't initialize with README (we already have one)

# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/eventus-onboarding-prototype.git

# Push to GitHub
git push -u origin main
```

If you get an error about branch name, use:
```bash
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Website (Easiest)

1. **Go to Vercel**: https://vercel.com/new
2. **Import Git Repository**: 
   - Click "Import Git Repository"
   - Select your GitHub repository
3. **Configure Project**:
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
4. **Environment Variables**: Click "Add" for each:
   ```
   DB_USER=your_db_user
   DB_HOST=your_db_host
   DB_NAME=your_db_name
   DB_PASSWORD=your_db_password
   DB_PORT=5432
   NODE_ENV=production
   ```
5. **Deploy**: Click "Deploy" button
6. **Done!** Visit your live URL

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## Step 3: Set Up Database

### Option 1: Vercel Postgres (Recommended)

1. Go to your project in Vercel Dashboard
2. Click "Storage" tab
3. Create new Postgres database
4. Connection string is automatically added to environment variables
5. Connect and run schema:
   ```bash
   # Get connection string from Vercel
   vercel env pull .env.local
   
   # Connect to database
   psql $(grep POSTGRES_URL .env.local | cut -d '=' -f2)
   
   # Run schema
   \i server/db/schema.sql
   ```

### Option 2: Supabase (Free & Easy)

1. Go to https://supabase.com
2. Create new project
3. Go to Settings → Database
4. Copy connection string
5. Add to Vercel environment variables
6. Run schema in Supabase SQL Editor:
   ```sql
   -- Copy contents from server/db/schema.sql
   ```

### Option 3: Railway (Alternative)

1. Go to https://railway.app
2. New Project → Provision PostgreSQL
3. Copy connection string
4. Add to Vercel environment variables

## Step 4: Update Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

**If using Vercel Postgres:**
- Variables are auto-added ✅

**If using external database:**
```env
POSTGRES_URL=postgresql://user:password@host:port/database

# Or separately:
DB_USER=your_user
DB_HOST=your_host
DB_NAME=your_database
DB_PASSWORD=your_password
DB_PORT=5432

NODE_ENV=production
```

## Step 5: Redeploy

After adding environment variables:
1. Go to Deployments tab
2. Click "..." on latest deployment
3. Click "Redeploy"

## ✅ Verify Deployment

### Test Your Live App

1. **Frontend**: Visit your Vercel URL
   - Should see the onboarding survey
   - All animations should work
   
2. **API Health Check**:
   ```bash
   curl https://your-app.vercel.app/api/health
   ```
   Should return: `{"status":"OK","message":"Server is running"}`

3. **Test Form Submission**:
   - Fill out the survey
   - Submit the form
   - Check confirmation page

4. **Database Check**:
   ```bash
   # Connect to your database
   psql YOUR_DATABASE_URL
   
   # Check data
   SELECT * FROM user_profiles;
   ```

## 🎉 You're Live!

Your app is now deployed! Share the URL:
```
https://your-app.vercel.app
```

## 🔄 Future Updates

To update your deployed app:

```bash
# Make changes locally
git add .
git commit -m "feat: your update description"
git push origin main
```

Vercel automatically redeploys on push to main! 🚀

## 📚 Full Documentation

For detailed deployment options, see:
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Complete deployment guide
- **[README.md](README.md)** - Main documentation
- **[API_TESTING.md](API_TESTING.md)** - API testing guide

## 🐛 Troubleshooting

**Build fails?**
- Check Vercel logs in Dashboard
- Verify all dependencies in package.json

**API not working?**
- Check environment variables
- Verify database connection
- Check Vercel function logs

**Database connection error?**
- Verify connection string format
- Check if database allows external connections
- Ensure SSL is configured correctly

**Need help?**
- Check Vercel logs
- Review [DEPLOYMENT.md](DEPLOYMENT.md)
- Check Vercel documentation

---

**Quick Commands Summary:**
```bash
# 1. Git setup
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/repo.git
git push -u origin main

# 2. Vercel deploy
vercel login
vercel --prod

# 3. Done! 🎉
```

