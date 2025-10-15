# Eventus - User Onboarding Survey Prototype

A full-stack demo prototype featuring a user onboarding survey with **Material Design** and **Glassmorphism** design style.

![Design Style](https://img.shields.io/badge/Design-Material%20Design%20%2B%20Glassmorphism-blue)
![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Material--UI-61DAFB)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933)
![Database](https://img.shields.io/badge/Database-PostgreSQL-4169E1)

## 🎨 Design Features

- **Glassmorphism UI**: Frosted glass effect with blur, transparency, and vibrant gradients
- **Material Design**: Clean, modern components from Material-UI
- **Animated Backgrounds**: Dynamic gradient orbs and particle effects
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Smooth Transitions**: Polished animations throughout the user journey

## 🚀 Features

### User Onboarding Flow
- **Multi-step Survey**: 4-step progressive form with visual stepper
- **Personal Information**: Email, name, and class year collection
- **Career Interests**: Interactive selection from 10+ industry categories
- **Skills Input**: Add technical and soft skills with suggestions
- **Goals Selection**: Card-based goal selection interface
- **Form Validation**: Real-time validation with helpful error messages
- **Confirmation Page**: Beautiful summary of submitted profile

### Technical Implementation
- **Frontend**: React with Material-UI components
- **Backend**: Express.js REST API
- **Database**: PostgreSQL with relational schema
- **State Management**: React hooks for form state
- **API Integration**: Axios for HTTP requests
- **Routing**: React Router for navigation

## 📋 Prerequisites

Before running this application, ensure you have:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/download/)
- **npm** or **yarn** package manager

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
cd /Users/yashwanthravipati/Desktop/CS1060/yravipati-hw6-prototype4
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Database Setup

#### Option A: Automatic Setup (Recommended)

```bash
# From the server directory
cd server
npm run init-db
```

This will:
- Create the `eventus_db` database
- Set up all required tables
- Insert sample mock data

#### Option B: Manual Setup

1. Create PostgreSQL database:
```bash
psql -U postgres
CREATE DATABASE eventus_db;
\q
```

2. Run schema:
```bash
cd server
psql -U postgres -d eventus_db -f db/schema.sql
```

### 4. Configure Environment Variables

The server uses the following default configuration:
- **Port**: 5000
- **Database**: eventus_db
- **DB User**: postgres
- **DB Password**: postgres

To customize, edit `server/.env`:
```env
PORT=5000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=eventus_db
DB_PASSWORD=your_password
DB_PORT=5432
```

## 🏃 Running the Application

### Development Mode

#### Option 1: Run Everything (from root)
```bash
npm run dev
```

This starts both server and client concurrently.

#### Option 2: Run Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## 📁 Project Structure

```
yravipati-hw6-prototype4/
├── client/                      # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── OnboardingSurvey.js
│   │   │   ├── OnboardingSurvey.css
│   │   │   ├── Confirmation.js
│   │   │   ├── Confirmation.css
│   │   │   └── steps/
│   │   │       ├── PersonalInfo.js
│   │   │       ├── CareerInterests.js
│   │   │       ├── SkillsInput.js
│   │   │       └── GoalsSelection.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                      # Express backend
│   ├── db/
│   │   ├── config.js           # Database connection
│   │   └── schema.sql          # Database schema
│   ├── routes/
│   │   └── profile.js          # API routes
│   ├── scripts/
│   │   └── init-db.js          # Database initialization
│   ├── server.js               # Express server
│   └── package.json
├── package.json                 # Root package.json
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### Create/Update Profile
```http
POST /api/user/profile
Content-Type: application/json

{
  "email": "student@harvard.edu",
  "firstName": "John",
  "lastName": "Doe",
  "classYear": "Junior",
  "interests": ["Tech - Software Engineering", "Finance - Investment Banking"],
  "skills": [
    { "skill": "Python", "type": "technical" },
    { "skill": "Leadership", "type": "soft" }
  ],
  "goals": ["Internship", "Networking"]
}
```

### Get User Profile
```http
GET /api/user/profile/:email
```

### Get All Profiles
```http
GET /api/user/profiles
```

## 🗄️ Database Schema

### Tables

#### `user_profiles`
- `id` (SERIAL PRIMARY KEY)
- `email` (VARCHAR, UNIQUE)
- `first_name` (VARCHAR)
- `last_name` (VARCHAR)
- `class_year` (VARCHAR)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

#### `user_interests`
- `id` (SERIAL PRIMARY KEY)
- `user_id` (INTEGER, FK)
- `interest` (VARCHAR)
- `created_at` (TIMESTAMP)

#### `user_skills`
- `id` (SERIAL PRIMARY KEY)
- `user_id` (INTEGER, FK)
- `skill` (VARCHAR)
- `skill_type` (VARCHAR) - 'technical' or 'soft'
- `created_at` (TIMESTAMP)

#### `user_goals`
- `id` (SERIAL PRIMARY KEY)
- `user_id` (INTEGER, FK)
- `goal` (VARCHAR)
- `created_at` (TIMESTAMP)

## ✅ Test Plan Coverage

### Functional Tests
- ✅ User can view the survey form
- ✅ User can select multiple career interests
- ✅ User can input and save custom skills
- ✅ User can select class year from dropdown
- ✅ User can select one or more primary goals
- ✅ Form validates required fields
- ✅ Error messages display for invalid/missing data
- ✅ User receives confirmation upon successful submission
- ✅ Data is correctly stored in the database
- ✅ User is redirected to confirmation page

### Edge Cases Handled
- ✅ User tries to submit empty form (validation prevents)
- ✅ User enters invalid email (email validation)
- ✅ User enters extremely long text (input limits)
- ✅ User navigates between steps (state preserved)
- ✅ Duplicate skills prevented

### Usability
- ✅ Survey takes less than 3 minutes
- ✅ Clear, helpful question labels
- ✅ Responsive design (mobile & desktop)
- ✅ Progress indicator shows completion
- ✅ Smooth animations and transitions

## 🎯 User Flow

1. **Personal Info** → Enter email, name, and class year
2. **Career Interests** → Select from 40+ industry-role combinations
3. **Skills** → Add technical and soft skills with suggestions
4. **Goals** → Select primary goals from card interface
5. **Confirmation** → View profile summary and next steps

## 🎨 Design System

### Colors
- **Primary Gradient**: `#667eea → #764ba2` (Indigo to Purple)
- **Secondary**: `#ec4899` (Pink)
- **Success**: `#4ade80` (Green)
- **Glass Background**: `rgba(255, 255, 255, 0.15)` with 20px blur

### Typography
- **Font**: Roboto
- **Headings**: 600-700 weight
- **Body**: 400 weight

### Components
- **Glassmorphism Cards**: Blur + transparency + border
- **Material UI**: Buttons, TextFields, Chips, Steppers
- **Animations**: Floating orbs, scale transitions, slide effects

## 🚧 Out of Scope (Future Enhancements)

- Resume upload functionality
- Edit profile after submission
- AI recommendation engine integration
- HarvardKey authentication
- User dashboard
- Event recommendations

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check if PostgreSQL is running
psql -U postgres -c "SELECT 1"

# Reset database
cd server
npm run init-db
```

### Port Already in Use
```bash
# Change port in server/.env
PORT=5001

# Or kill process using port
lsof -ti:5000 | xargs kill
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules client/node_modules server/node_modules
npm run install-all
```

## 📝 Mock Data

The database is pre-populated with sample data:
- **Email**: demo.user@harvard.edu
- **Name**: Demo User
- **Class Year**: Junior
- **Interests**: Tech - Software Engineering, Finance - Investment Banking
- **Skills**: Python (technical), Data Analysis (technical), Public Speaking (soft)
- **Goals**: Internship, Networking, Skill development

## 🤝 Contributing

This is a prototype for demonstration purposes. For production use:
1. Add authentication (HarvardKey)
2. Implement input sanitization
3. Add rate limiting
4. Use environment-specific configs
5. Add comprehensive testing
6. Implement logging and monitoring

## 📄 License

MIT License - feel free to use this prototype for learning and development.

## 👤 Author

**Yash Ravipati**
- Course: CS1060
- Assignment: HW6 Prototype 4

---

**Design Style**: Material Design + Glassmorphism ✨

