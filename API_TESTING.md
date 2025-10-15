# API Testing Guide

This guide provides examples for testing the Eventus Onboarding API endpoints.

## Prerequisites

- Backend server running on http://localhost:5000
- `curl` or Postman installed
- Database initialized with schema

## Base URL

```
http://localhost:5000/api
```

## Endpoints

### 1. Health Check

Check if the server is running.

**Request:**
```bash
curl http://localhost:5000/api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

### 2. Create User Profile

Create a new user profile with onboarding data.

**Endpoint:** `POST /api/user/profile`

**Request:**
```bash
curl -X POST http://localhost:5000/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@harvard.edu",
    "firstName": "John",
    "lastName": "Doe",
    "classYear": "Junior",
    "interests": [
      "Tech - Software Engineering",
      "Finance - Investment Banking"
    ],
    "skills": [
      {
        "skill": "Python",
        "type": "technical"
      },
      {
        "skill": "Data Analysis",
        "type": "technical"
      },
      {
        "skill": "Leadership",
        "type": "soft"
      }
    ],
    "goals": [
      "Internship",
      "Networking",
      "Skill development"
    ]
  }'
```

**Success Response:**
```json
{
  "success": true,
  "message": "Profile saved successfully",
  "userId": 1
}
```

**Error Response (Missing Fields):**
```json
{
  "error": "Missing required fields",
  "required": [
    "email",
    "classYear",
    "interests",
    "skills",
    "goals"
  ]
}
```

---

### 3. Get User Profile

Retrieve a user profile by email.

**Endpoint:** `GET /api/user/profile/:email`

**Request:**
```bash
curl http://localhost:5000/api/user/profile/john.doe@harvard.edu
```

**Success Response:**
```json
{
  "id": 1,
  "email": "john.doe@harvard.edu",
  "first_name": "John",
  "last_name": "Doe",
  "class_year": "Junior",
  "created_at": "2025-10-15T12:00:00.000Z",
  "updated_at": "2025-10-15T12:00:00.000Z",
  "interests": [
    "Tech - Software Engineering",
    "Finance - Investment Banking"
  ],
  "skills": [
    {
      "skill": "Python",
      "type": "technical"
    },
    {
      "skill": "Data Analysis",
      "type": "technical"
    },
    {
      "skill": "Leadership",
      "type": "soft"
    }
  ],
  "goals": [
    "Internship",
    "Networking",
    "Skill development"
  ]
}
```

**Error Response (Not Found):**
```json
{
  "error": "User not found"
}
```

---

### 4. Update User Profile

Update an existing user profile (same endpoint as create).

**Endpoint:** `POST /api/user/profile`

**Request:**
```bash
curl -X POST http://localhost:5000/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@harvard.edu",
    "firstName": "John",
    "lastName": "Doe",
    "classYear": "Senior",
    "interests": [
      "Tech - Product Management",
      "Consulting - Management Consulting"
    ],
    "skills": [
      {
        "skill": "React",
        "type": "technical"
      },
      {
        "skill": "Public Speaking",
        "type": "soft"
      }
    ],
    "goals": [
      "Full-time Job",
      "Career exploration"
    ]
  }'
```

**Note:** If a profile with the email exists, it will be updated. Otherwise, a new profile is created.

---

### 5. Get All Profiles

Retrieve all user profiles (for testing/admin purposes).

**Endpoint:** `GET /api/user/profiles`

**Request:**
```bash
curl http://localhost:5000/api/user/profiles
```

**Success Response:**
```json
[
  {
    "id": 1,
    "email": "john.doe@harvard.edu",
    "first_name": "John",
    "last_name": "Doe",
    "class_year": "Junior",
    "created_at": "2025-10-15T12:00:00.000Z",
    "updated_at": "2025-10-15T12:00:00.000Z"
  },
  {
    "id": 2,
    "email": "demo.user@harvard.edu",
    "first_name": "Demo",
    "last_name": "User",
    "class_year": "Junior",
    "created_at": "2025-10-15T11:00:00.000Z",
    "updated_at": "2025-10-15T11:00:00.000Z"
  }
]
```

---

## Test Scenarios

### Scenario 1: Complete New User Flow

```bash
# 1. Create profile
curl -X POST http://localhost:5000/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test.student@harvard.edu",
    "firstName": "Test",
    "lastName": "Student",
    "classYear": "Sophomore",
    "interests": ["Tech - UX/UI Design", "Creative - Marketing"],
    "skills": [
      {"skill": "Figma", "type": "technical"},
      {"skill": "Creativity", "type": "soft"}
    ],
    "goals": ["Internship", "Skill development"]
  }'

# 2. Retrieve profile
curl http://localhost:5000/api/user/profile/test.student@harvard.edu
```

### Scenario 2: Update Existing Profile

```bash
# Update the same user with new data
curl -X POST http://localhost:5000/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test.student@harvard.edu",
    "firstName": "Test",
    "lastName": "Student",
    "classYear": "Junior",
    "interests": ["Tech - Software Engineering"],
    "skills": [
      {"skill": "JavaScript", "type": "technical"},
      {"skill": "Teamwork", "type": "soft"}
    ],
    "goals": ["Full-time Job"]
  }'
```

### Scenario 3: Error Handling

```bash
# Missing required fields
curl -X POST http://localhost:5000/api/user/profile \
  -H "Content-Type: application/json" \
  -d '{
    "email": "incomplete@harvard.edu",
    "firstName": "Incomplete"
  }'

# Non-existent user
curl http://localhost:5000/api/user/profile/nonexistent@harvard.edu
```

---

## Using Postman

### Import Collection

1. Create a new Postman Collection
2. Add the following requests:

#### Health Check
- Method: GET
- URL: `http://localhost:5000/api/health`

#### Create Profile
- Method: POST
- URL: `http://localhost:5000/api/user/profile`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "email": "{{email}}",
  "firstName": "{{firstName}}",
  "lastName": "{{lastName}}",
  "classYear": "{{classYear}}",
  "interests": ["{{interest1}}", "{{interest2}}"],
  "skills": [
    {"skill": "{{skill1}}", "type": "technical"},
    {"skill": "{{skill2}}", "type": "soft"}
  ],
  "goals": ["{{goal1}}", "{{goal2}}"]
}
```

#### Get Profile
- Method: GET
- URL: `http://localhost:5000/api/user/profile/{{email}}`

#### Get All Profiles
- Method: GET
- URL: `http://localhost:5000/api/user/profiles`

### Environment Variables

Create a Postman environment with:
```json
{
  "baseUrl": "http://localhost:5000/api",
  "email": "test@harvard.edu",
  "firstName": "Test",
  "lastName": "User",
  "classYear": "Junior"
}
```

---

## Sample Data Sets

### Tech-Focused User
```json
{
  "email": "tech.enthusiast@harvard.edu",
  "firstName": "Alex",
  "lastName": "Chen",
  "classYear": "Senior",
  "interests": [
    "Tech - Software Engineering",
    "Tech - Data Science",
    "Tech - Product Management"
  ],
  "skills": [
    {"skill": "Python", "type": "technical"},
    {"skill": "React", "type": "technical"},
    {"skill": "SQL", "type": "technical"},
    {"skill": "Problem Solving", "type": "soft"}
  ],
  "goals": ["Full-time Job", "Networking"]
}
```

### Finance-Focused User
```json
{
  "email": "finance.pro@harvard.edu",
  "firstName": "Sarah",
  "lastName": "Johnson",
  "classYear": "Junior",
  "interests": [
    "Finance - Investment Banking",
    "Finance - Private Equity",
    "Consulting - Strategy Consulting"
  ],
  "skills": [
    {"skill": "Excel", "type": "technical"},
    {"skill": "Financial Modeling", "type": "technical"},
    {"skill": "Leadership", "type": "soft"},
    {"skill": "Communication", "type": "soft"}
  ],
  "goals": ["Internship", "Career exploration"]
}
```

### Multi-Disciplinary User
```json
{
  "email": "explorer@harvard.edu",
  "firstName": "Jordan",
  "lastName": "Smith",
  "classYear": "Freshman",
  "interests": [
    "Research - Academic Research",
    "Education - EdTech",
    "Public Service - Non-Profit"
  ],
  "skills": [
    {"skill": "R", "type": "technical"},
    {"skill": "Critical Thinking", "type": "soft"},
    {"skill": "Adaptability", "type": "soft"}
  ],
  "goals": ["Career exploration", "Skill development", "Networking"]
}
```

---

## Database Queries

Test data directly in PostgreSQL:

```sql
-- View all profiles
SELECT * FROM user_profiles;

-- View profile with related data
SELECT 
  up.*,
  array_agg(DISTINCT ui.interest) as interests,
  array_agg(DISTINCT us.skill) as skills,
  array_agg(DISTINCT ug.goal) as goals
FROM user_profiles up
LEFT JOIN user_interests ui ON up.id = ui.user_id
LEFT JOIN user_skills us ON up.id = us.user_id
LEFT JOIN user_goals ug ON up.id = ug.user_id
WHERE up.email = 'test@harvard.edu'
GROUP BY up.id;

-- Count profiles by class year
SELECT class_year, COUNT(*) 
FROM user_profiles 
GROUP BY class_year;

-- Most common skills
SELECT skill, COUNT(*) as count
FROM user_skills
GROUP BY skill
ORDER BY count DESC
LIMIT 10;

-- Most common goals
SELECT goal, COUNT(*) as count
FROM user_goals
GROUP BY goal
ORDER BY count DESC;
```

---

## Validation Rules

### Email
- Required
- Must be valid email format
- Unique per user

### Class Year
- Required
- Must be one of: Freshman, Sophomore, Junior, Senior, Graduate, Alumni

### Interests
- Required
- Array of strings
- Minimum 1 interest

### Skills
- Required
- Array of objects with `skill` and `type` properties
- `type` must be "technical" or "soft"
- Minimum 1 skill

### Goals
- Required
- Array of strings
- Minimum 1 goal

---

## Error Codes

| Status Code | Meaning |
|------------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error) |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Tips

1. **Use environment variables** in Postman for easy switching between test users
2. **Check the database** directly to verify data persistence
3. **Test edge cases** like empty arrays or very long strings
4. **Monitor server logs** for debugging
5. **Use the health check** endpoint to verify server status before testing

---

**Happy Testing! 🧪**

