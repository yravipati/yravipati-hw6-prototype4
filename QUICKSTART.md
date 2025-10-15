# Quick Start Guide

Get the Eventus Onboarding Prototype running in 5 minutes! 🚀

## Prerequisites Check

```bash
# Check Node.js (need v16+)
node --version

# Check PostgreSQL (need v12+)
psql --version
```

## Option 1: Automated Setup (Recommended)

```bash
# Make setup script executable
chmod +x setup.sh

# Run setup
./setup.sh
```

## Option 2: Manual Setup

### Step 1: Install Dependencies
```bash
npm install
cd server && npm install
cd ../client && npm install
cd ..
```

### Step 2: Setup Database
```bash
cd server
npm run init-db
cd ..
```

### Step 3: Start Application
```bash
npm run dev
```

## Access the App

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## Test the Flow

1. Fill in personal information (email, name, class year)
2. Select career interests from the categories
3. Add your skills (technical and soft)
4. Choose your primary goals
5. Submit and view confirmation page!

## Sample Test Data

Use this data to test the form quickly:

- **Email**: test@harvard.edu
- **Name**: Test User
- **Class Year**: Junior
- **Interests**: Select any from Tech or Finance
- **Skills**: Add "Python", "Leadership", "React"
- **Goals**: Select "Internship" and "Networking"

## Troubleshooting

### Database Issues
```bash
# Check PostgreSQL is running
pg_isready

# Or on macOS with Homebrew
brew services list | grep postgresql

# Restart PostgreSQL
brew services restart postgresql
```

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill

# Or change port in server/.env
```

### Module Not Found
```bash
# Clear and reinstall
rm -rf node_modules client/node_modules server/node_modules
npm run install-all
```

## What to Expect

### 1. Landing Page (Personal Info)
- Beautiful glassmorphism design with gradient background
- Form fields for email, name, and class year
- Animated floating orbs in background

### 2. Career Interests Step
- Categorized industries and roles
- Interactive chip selection
- Glass card containers

### 3. Skills Step
- Toggle between technical and soft skills
- Suggested skills for quick selection
- Add custom skills
- Color-coded skill chips

### 4. Goals Step
- Card-based selection interface
- Icons for each goal type
- Visual checkmarks when selected

### 5. Confirmation Page
- Success animation
- Profile summary
- All selected data displayed
- Call to action for next steps

## API Testing

### Create Profile
```bash
curl -X POST http://localhost:5000/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "email": "api.test@harvard.edu",
    "firstName": "API",
    "lastName": "Test",
    "classYear": "Senior",
    "interests": ["Tech - Software Engineering"],
    "skills": [{"skill": "Python", "type": "technical"}],
    "goals": ["Internship"]
  }'
```

### Get Profile
```bash
curl http://localhost:5000/api/user/profile/api.test@harvard.edu
```

### Health Check
```bash
curl http://localhost:5000/api/health
```

## Design Features to Notice

✨ **Glassmorphism Effects**
- Frosted glass containers with blur
- Semi-transparent backgrounds
- Subtle borders and shadows

🎨 **Material Design**
- Clean, modern components
- Consistent spacing and typography
- Elevation and depth

🎭 **Animations**
- Floating background orbs
- Smooth step transitions
- Button hover effects
- Success celebration on confirmation

📱 **Responsive Design**
- Works on desktop and mobile
- Adaptive layouts
- Touch-friendly interactions

## Next Steps

After testing the prototype:
1. Review the code structure in `client/src/components/`
2. Check the API implementation in `server/routes/profile.js`
3. Examine the database schema in `server/db/schema.sql`
4. Read the full documentation in `README.md`

## Getting Help

- Check `README.md` for detailed documentation
- Review the project structure section
- Look at the API endpoints documentation
- Check the troubleshooting section

---

Happy prototyping! 🎉

