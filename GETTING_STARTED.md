# 🚀 Getting Started - Eventus Onboarding Prototype

Welcome! This guide will help you get the application running in minutes.

## 📋 What You're Building

A beautiful user onboarding survey with:
- ✨ **Glassmorphism design** - Frosted glass effects with vibrant backgrounds
- 📱 **Responsive UI** - Works on all devices
- 🎯 **4-step survey** - Personal info, interests, skills, goals
- 💾 **Full backend** - Express API + PostgreSQL database
- ✅ **Form validation** - Real-time error checking
- 🎉 **Success page** - Beautiful confirmation with profile summary

## ⚡ Quick Start (3 Steps)

### Step 1: Prerequisites

Make sure you have installed:
- ✅ **Node.js** v16+ → [Download](https://nodejs.org/)
- ✅ **PostgreSQL** v12+ → [Download](https://postgresql.org/download/)

Check versions:
```bash
node --version    # Should show v16 or higher
psql --version    # Should show v12 or higher
```

### Step 2: Run Setup

**Option A: Automated (Recommended)**
```bash
cd /Users/yashwanthravipati/Desktop/CS1060/yravipati-hw6-prototype4
chmod +x setup.sh
./setup.sh
```

**Option B: Manual**
```bash
# Install dependencies
npm install
cd client && npm install
cd ../server && npm install

# Setup database
cd server
npm run init-db
```

### Step 3: Start Application

```bash
# From the root directory
npm run dev
```

This starts:
- 🎨 Frontend on http://localhost:3000
- 🔧 Backend on http://localhost:5000

## 🎨 What You'll See

### 1. Landing Page
![Glassmorphism Design]
- Beautiful gradient background (Indigo → Purple)
- Floating animated orbs
- Frosted glass survey container
- Progress stepper showing 4 steps

### 2. Step 1: Personal Information
- 📧 Email input with validation
- 👤 First & Last name fields
- 🎓 Class year dropdown
- Smooth glassmorphic input fields

### 3. Step 2: Career Interests
- 10 industry categories
- 40+ role options
- Chip-based selection
- Scrollable glass cards

### 4. Step 3: Skills
- Technical vs Soft skills toggle
- Suggested skills (quick add)
- Custom skill input
- Color-coded chips (blue=tech, pink=soft)

### 5. Step 4: Goals
- 5 beautiful goal cards
- Icons and descriptions
- Multi-select support
- Hover animations

### 6. Confirmation Page
- 🎉 Success animation
- Profile summary
- All collected data displayed
- Next steps guidance

## 🧪 Test the Flow

### Sample Test Data

Use this data to quickly test:

```
📧 Email: test@harvard.edu
👤 Name: Test User
🎓 Class: Junior

💼 Interests (select any):
- Tech - Software Engineering
- Finance - Investment Banking

💻 Skills (add these):
- Python (technical)
- Leadership (soft)
- React (technical)

🎯 Goals (select):
- Internship
- Networking
```

### Expected Flow
1. Fill personal info → Click "Next"
2. Select 2+ interests → Click "Next"
3. Add 3+ skills → Click "Next"
4. Select 2+ goals → Click "Submit"
5. See confirmation page with your data!

## 🔧 Verify Installation

### Check Server
```bash
# Health check
curl http://localhost:5000/api/health

# Expected response:
# {"status":"OK","message":"Server is running"}
```

### Check Database
```bash
# Connect to database
psql -d eventus_db

# List tables
\dt

# Expected tables:
# - user_profiles
# - user_interests
# - user_skills
# - user_goals

# View sample data
SELECT * FROM user_profiles;
```

### Check Frontend
- Open http://localhost:3000
- Should see glassmorphic survey page
- Check browser console (no errors)

## 📚 Documentation Guide

### Quick References

**Need to...**

**Get started quickly?**
→ Read `QUICKSTART.md` (5-minute guide)

**Understand the project?**
→ Read `PROJECT_OVERVIEW.md` (comprehensive overview)

**Learn about design?**
→ Read `DESIGN.md` (design system)

**See all features?**
→ Read `FEATURES.md` (visual guide)

**Test the API?**
→ Read `API_TESTING.md` (API examples)

**See all files?**
→ Read `FILE_MANIFEST.md` (file list)

**Get detailed setup?**
→ Read `README.md` (full documentation)

### File Structure Quick Reference

```
📁 yravipati-hw6-prototype4/
│
├── 📂 client/              # React frontend
│   ├── src/
│   │   ├── App.js         # Main app
│   │   └── components/    # Survey components
│   └── package.json
│
├── 📂 server/              # Express backend
│   ├── server.js          # API server
│   ├── db/                # Database config & schema
│   └── routes/            # API endpoints
│
└── 📄 *.md                # Documentation files
```

## 🎯 Your First Workflow

1. **Start the app**: `npm run dev`
2. **Open browser**: http://localhost:3000
3. **Complete survey**: Fill all 4 steps
4. **View confirmation**: See your profile summary
5. **Check database**: Query PostgreSQL to see data
6. **Test API**: Use curl or Postman

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill

# Or change port in server/.env
```

### Database Connection Error
```bash
# Check PostgreSQL is running
brew services list | grep postgresql

# Restart if needed
brew services restart postgresql

# Re-run init
cd server && npm run init-db
```

### Module Not Found
```bash
# Reinstall all dependencies
rm -rf node_modules client/node_modules server/node_modules
npm install
cd client && npm install
cd ../server && npm install
```

### Frontend Won't Start
```bash
# Clear React cache
cd client
rm -rf node_modules/.cache
npm start
```

## 🎨 Design Highlights

### Colors
- **Gradient**: Indigo (#667eea) → Purple (#764ba2)
- **Accent**: Pink (#ec4899), Green (#4ade80)
- **Glass**: White with 15-25% opacity + 20px blur

### Effects
- **Glassmorphism**: Frosted glass containers
- **Animations**: Floating orbs, smooth transitions
- **Interactions**: Hover lifts, selection highlights

### Components
- Material-UI buttons, inputs, chips
- Custom glass cards with blur
- Animated gradient backgrounds

## 📊 Project Stats

- **Total Files**: 30
- **Documentation**: 6 comprehensive guides
- **Frontend**: 13 React components
- **Backend**: 7 server files
- **Lines of Code**: ~5,500

## 🚀 Next Steps

After testing the prototype:

1. **Explore the code**
   - Check `client/src/components/` for React components
   - Review `server/routes/profile.js` for API logic
   - Examine `server/db/schema.sql` for database structure

2. **Customize**
   - Modify colors in `client/src/App.css`
   - Add more career options in `CareerInterests.js`
   - Extend database schema in `schema.sql`

3. **Deploy** (Future)
   - Frontend → Vercel/Netlify
   - Backend → Heroku/AWS
   - Database → AWS RDS/Railway

## 🤝 Need Help?

### Resources
- `README.md` - Complete documentation
- `QUICKSTART.md` - Fast setup guide
- `API_TESTING.md` - API examples
- `FEATURES.md` - UI feature guide

### Common Tasks

**View all API endpoints**
```bash
cat server/routes/profile.js
```

**See database schema**
```bash
cat server/db/schema.sql
```

**Check frontend components**
```bash
ls -la client/src/components/
```

**View documentation**
```bash
ls -la *.md
```

## ✅ Success Checklist

- [ ] Node.js and PostgreSQL installed
- [ ] Dependencies installed (`npm install`)
- [ ] Database initialized (`npm run init-db`)
- [ ] Server running on port 5000
- [ ] Frontend running on port 3000
- [ ] Survey form loads correctly
- [ ] Can complete all 4 steps
- [ ] Data saves successfully
- [ ] Confirmation page displays

## 🎉 You're Ready!

Your Eventus Onboarding Prototype is complete and ready to use!

**Quick Commands:**
```bash
# Start everything
npm run dev

# Just frontend
npm run client

# Just backend
npm run server

# Reset database
cd server && npm run init-db
```

**URLs:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health: http://localhost:5000/api/health

---

**Happy Coding! 🚀**

Built with React, Express, PostgreSQL, and lots of ✨ glassmorphism magic!

