# Project Overview - Eventus Onboarding Prototype

## 📋 Executive Summary

A full-stack user onboarding survey application built with **React**, **Express.js**, and **PostgreSQL**, featuring a modern **Material Design** + **Glassmorphism** UI design.

### Key Highlights
- ✅ Multi-step progressive form with 4 steps
- ✅ Beautiful glassmorphism design with animated backgrounds
- ✅ Complete form validation and error handling
- ✅ RESTful API with PostgreSQL database
- ✅ Responsive design (mobile & desktop)
- ✅ Mock data pre-populated for testing

## 🎯 Project Goals

### Primary Objective
Build the initial user onboarding flow that captures career interests, skills, and goals through a survey interface.

### Success Criteria
- [x] Working prototype with complete user flow
- [x] Data submission and storage in database
- [x] Confirmation page showing saved profile
- [x] Form validation with error messages
- [x] Beautiful, modern UI design
- [x] Under 3-minute completion time

## 🏗️ Architecture

### System Architecture
```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   React     │ ◄─────► │   Express   │ ◄─────► │ PostgreSQL  │
│   Frontend  │  HTTP   │   Backend   │   SQL   │  Database   │
│  (Port 3000)│         │  (Port 5000)│         │             │
└─────────────┘         └─────────────┘         └─────────────┘
```

### Technology Stack

#### Frontend
- **Framework**: React 18.2
- **UI Library**: Material-UI 5.14
- **Styling**: CSS3 + Emotion
- **Routing**: React Router 6
- **HTTP Client**: Axios
- **Design**: Glassmorphism + Material Design

#### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: pg (node-postgres)
- **Middleware**: CORS, Body Parser

#### Development Tools
- **Concurrently**: Run frontend & backend together
- **Nodemon**: Auto-restart on file changes
- **Create React App**: Frontend build tool

## 📁 Project Structure

```
yravipati-hw6-prototype4/
│
├── 📄 README.md                    # Main documentation
├── 📄 QUICKSTART.md                # Quick start guide
├── 📄 DESIGN.md                    # Design documentation
├── 📄 API_TESTING.md              # API testing guide
├── 📄 PROJECT_OVERVIEW.md         # This file
├── 🔧 setup.sh                    # Automated setup script
├── 📦 package.json                # Root package.json
├── 🚫 .gitignore                  # Git ignore rules
│
├── 📂 client/                      # React Frontend
│   ├── 📂 public/
│   │   └── index.html             # HTML template
│   ├── 📂 src/
│   │   ├── App.js                 # Main app component
│   │   ├── App.css                # Global styles
│   │   ├── index.js               # Entry point
│   │   ├── index.css              # Base styles
│   │   │
│   │   └── 📂 components/
│   │       ├── OnboardingSurvey.js        # Main survey component
│   │       ├── OnboardingSurvey.css       # Survey styles
│   │       ├── Confirmation.js            # Success page
│   │       ├── Confirmation.css           # Confirmation styles
│   │       │
│   │       └── 📂 steps/                  # Survey steps
│   │           ├── PersonalInfo.js        # Step 1: Personal info
│   │           ├── CareerInterests.js     # Step 2: Career interests
│   │           ├── SkillsInput.js         # Step 3: Skills
│   │           └── GoalsSelection.js      # Step 4: Goals
│   │
│   └── 📦 package.json            # Frontend dependencies
│
└── 📂 server/                      # Express Backend
    ├── server.js                  # Main server file
    ├── 📦 package.json            # Backend dependencies
    │
    ├── 📂 db/
    │   ├── config.js              # Database connection
    │   └── schema.sql             # Database schema
    │
    ├── 📂 routes/
    │   └── profile.js             # Profile API routes
    │
    └── 📂 scripts/
        └── init-db.js             # Database initialization
```

## 🔄 User Flow

### Step-by-Step Journey

```
┌─────────────────┐
│  Landing Page   │ ← User opens http://localhost:3000
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Step 1:         │ ← Enter email, name, class year
│ Personal Info   │   (Validation: email format, required fields)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Step 2:         │ ← Select from 40+ career options
│ Career Interests│   Organized by 10 industry categories
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Step 3:         │ ← Add technical & soft skills
│ Skills Input    │   Suggested skills + custom input
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Step 4:         │ ← Select from 5 goal options
│ Goals Selection │   Card-based selection
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Submit Form    │ ← POST to /api/user/profile
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Save to DB     │ ← Store in PostgreSQL
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Confirmation   │ ← Show success page with summary
│  Page           │   Display all collected data
└─────────────────┘
```

## 💾 Data Model

### Database Schema

#### user_profiles
| Column | Type | Constraints |
|--------|------|------------|
| id | SERIAL | PRIMARY KEY |
| email | VARCHAR(255) | UNIQUE, NOT NULL |
| first_name | VARCHAR(100) | - |
| last_name | VARCHAR(100) | - |
| class_year | VARCHAR(50) | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |
| updated_at | TIMESTAMP | DEFAULT NOW() |

#### user_interests
| Column | Type | Constraints |
|--------|------|------------|
| id | SERIAL | PRIMARY KEY |
| user_id | INTEGER | FK → user_profiles(id) |
| interest | VARCHAR(255) | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |

#### user_skills
| Column | Type | Constraints |
|--------|------|------------|
| id | SERIAL | PRIMARY KEY |
| user_id | INTEGER | FK → user_profiles(id) |
| skill | VARCHAR(255) | NOT NULL |
| skill_type | VARCHAR(50) | 'technical' or 'soft' |
| created_at | TIMESTAMP | DEFAULT NOW() |

#### user_goals
| Column | Type | Constraints |
|--------|------|------------|
| id | SERIAL | PRIMARY KEY |
| user_id | INTEGER | FK → user_profiles(id) |
| goal | VARCHAR(255) | NOT NULL |
| created_at | TIMESTAMP | DEFAULT NOW() |

### Entity Relationships
```
user_profiles (1) ──┬── (*) user_interests
                    ├── (*) user_skills
                    └── (*) user_goals
```

## 🎨 Design System

### Visual Identity

#### Color Palette
- **Primary**: Indigo (#667eea) to Purple (#764ba2) gradient
- **Secondary**: Pink (#ec4899), Violet (#8b5cf6)
- **Success**: Green (#4ade80)
- **Glass**: White with 15-25% opacity + 10-20px blur

#### Typography
- **Font**: Roboto (300, 400, 500, 700)
- **Scale**: 12px, 14px, 16px, 20px, 24px, 34px

#### Components
- Glass containers with backdrop blur
- Rounded corners (12-24px)
- Animated gradient backgrounds
- Floating orb effects
- Smooth transitions (0.3s ease)

### Responsive Breakpoints
- **Mobile**: < 600px
- **Tablet**: 600px - 899px
- **Desktop**: ≥ 900px

## 🔌 API Reference

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/user/profile` | Create/update profile |
| GET | `/api/user/profile/:email` | Get profile by email |
| GET | `/api/user/profiles` | Get all profiles |

### Request/Response Format

**Create Profile Request:**
```json
{
  "email": "student@harvard.edu",
  "firstName": "John",
  "lastName": "Doe",
  "classYear": "Junior",
  "interests": ["Tech - Software Engineering"],
  "skills": [{"skill": "Python", "type": "technical"}],
  "goals": ["Internship"]
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Profile saved successfully",
  "userId": 1
}
```

## ✅ Feature Checklist

### Implemented Features
- [x] Multi-step form with progress indicator
- [x] Personal information collection
- [x] Career interests selection (40+ options)
- [x] Skills input (technical & soft)
- [x] Goals selection (5 options)
- [x] Form validation
- [x] Error handling
- [x] API integration
- [x] Database storage
- [x] Confirmation page
- [x] Responsive design
- [x] Glassmorphism UI
- [x] Animated backgrounds
- [x] Mock data

### Out of Scope (Future)
- [ ] Resume upload
- [ ] Profile editing
- [ ] HarvardKey authentication
- [ ] AI recommendations
- [ ] User dashboard
- [ ] Email verification
- [ ] Password management

## 🧪 Testing Coverage

### Functional Tests
| Test Case | Status |
|-----------|--------|
| View survey form | ✅ Pass |
| Select career interests | ✅ Pass |
| Input custom skills | ✅ Pass |
| Select class year | ✅ Pass |
| Select goals | ✅ Pass |
| Form validation | ✅ Pass |
| Error messages | ✅ Pass |
| Successful submission | ✅ Pass |
| Database storage | ✅ Pass |
| Redirect to confirmation | ✅ Pass |

### Edge Cases
| Test Case | Status |
|-----------|--------|
| Empty form submission | ✅ Handled |
| Invalid email format | ✅ Handled |
| Missing required fields | ✅ Handled |
| Duplicate skills | ✅ Prevented |
| Navigation between steps | ✅ Works |

## 📊 Performance Metrics

### Target Metrics
- **Page Load**: < 2 seconds
- **Form Completion**: < 3 minutes
- **API Response**: < 500ms
- **Database Query**: < 100ms

### Optimization Techniques
- CSS animations use GPU acceleration
- Debounced input validation
- Efficient re-renders with React hooks
- Indexed database queries
- Connection pooling

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] Update database credentials
- [ ] Set production environment variables
- [ ] Build frontend (npm run build)
- [ ] Configure CORS for production domain
- [ ] Set up SSL/TLS certificates
- [ ] Configure PostgreSQL for remote access

### Production Setup
- [ ] Deploy backend to cloud (Heroku, AWS, etc.)
- [ ] Deploy frontend to CDN (Vercel, Netlify, etc.)
- [ ] Set up managed PostgreSQL (AWS RDS, etc.)
- [ ] Configure DNS settings
- [ ] Set up monitoring (Sentry, LogRocket)
- [ ] Configure backup strategy

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Main documentation and setup guide |
| QUICKSTART.md | 5-minute quick start guide |
| DESIGN.md | Design system documentation |
| API_TESTING.md | API testing examples |
| PROJECT_OVERVIEW.md | This comprehensive overview |

## 🛠️ Development Commands

### Setup
```bash
./setup.sh              # Automated setup
npm run install-all     # Install all dependencies
cd server && npm run init-db   # Initialize database
```

### Development
```bash
npm run dev            # Run both frontend & backend
npm run client         # Run only frontend
npm run server         # Run only backend
```

### Database
```bash
cd server
npm run init-db        # Initialize/reset database
psql -d eventus_db     # Access database
```

## 🔧 Configuration

### Environment Variables

**server/.env**
```env
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=eventus_db
DB_PASSWORD=postgres
DB_PORT=5432
```

**client/package.json**
```json
{
  "proxy": "http://localhost:5000"
}
```

## 📈 Future Enhancements

### Phase 2 Features
1. **Resume Upload**: PDF/DOCX parsing
2. **Profile Editing**: Update saved information
3. **AI Recommendations**: Event suggestions based on profile
4. **Dashboard**: User home page with personalized content

### Phase 3 Features
1. **Authentication**: HarvardKey integration
2. **Advanced Search**: Filter events by criteria
3. **Favorites**: Save preferred events
4. **Calendar Integration**: Add events to calendar

### Design Improvements
1. **Dark Mode**: Toggle between light/dark themes
2. **Accessibility**: WCAG AAA compliance
3. **Internationalization**: Multi-language support
4. **Advanced Animations**: Micro-interactions

## 🤝 Team Information

**Developer**: Yash Ravipati  
**Course**: CS1060  
**Assignment**: HW6 Prototype 4  
**Design Style**: Material Design + Glassmorphism  
**Version**: 1.0.0  
**Last Updated**: October 15, 2025

## 📞 Support

For questions or issues:
1. Check README.md for setup instructions
2. Review QUICKSTART.md for common issues
3. Consult API_TESTING.md for API examples
4. Check DESIGN.md for design guidelines

---

**Built with ❤️ using React, Express, and PostgreSQL**

