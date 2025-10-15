# Features & Screenshots Guide

This document describes the visual features and user experience of the Eventus Onboarding Prototype.

## 🎨 Visual Design Features

### Glassmorphism Effects

#### 1. Frosted Glass Containers
- **Background**: Semi-transparent white (15-25% opacity)
- **Blur Effect**: 10-20px backdrop blur
- **Borders**: Subtle white borders with 20-30% opacity
- **Shadows**: Soft shadows for depth (0 8px 32px)

#### 2. Animated Background
- **Gradient Base**: Indigo (#667eea) to Purple (#764ba2)
- **Floating Orbs**: 
  - Pink/Red gradient orb (top-right)
  - Violet/Blue gradient orb (bottom-left)
  - 8-second float animation
  - 80px blur for soft glow

#### 3. Particle Grid
- **Pattern**: Radial gradient dots
- **Animation**: Slow drift and rotation (20s)
- **Effect**: Subtle background texture

### Material Design Elements

#### 1. Stepper Component
- **Progress Indicator**: Shows 4 steps
- **Active State**: Bright white with bold text
- **Completed State**: Green checkmark (#4ade80)
- **Pending State**: Semi-transparent white

#### 2. Input Fields
- **Default**: White background with soft borders
- **Hover**: Slightly darker border
- **Focus**: Indigo border with glow effect
- **Icons**: Leading icons for context

#### 3. Interactive Chips
- **Unselected**: Semi-transparent white
- **Selected**: Solid indigo with white border
- **Hover**: Lift effect with shadow
- **Skills**: Color-coded (blue=technical, pink=soft)

#### 4. Cards
- **Glass Effect**: Semi-transparent with blur
- **Hover**: Lift up 4px with enhanced shadow
- **Selected**: Border highlight + background change
- **Icons**: Large icons for visual hierarchy

## 📱 Step-by-Step UI Guide

### Step 1: Personal Information

**Visual Elements:**
- Large heading: "Let's start with some basic information"
- Three input fields with icons:
  - 📧 Email Address (required)
  - 👤 First Name (required)
  - 👤 Last Name (optional)
- Dropdown selector:
  - 🎓 Class Year (required)
- White glass cards with rounded corners

**Interactions:**
- Email validation on blur
- Required field indicators
- Smooth focus transitions
- Dropdown with all class years

**Validation:**
- Valid email format required
- First name required
- Class year selection required

---

### Step 2: Career Interests

**Visual Elements:**
- Heading: "What are your career interests?"
- 10 industry categories in glass cards:
  - Tech, Finance, Consulting
  - Healthcare, Law, Education
  - Research, Entrepreneurship
  - Public Service, Creative
- Each category shows 3-4 role options
- Chip-based selection interface

**Interactions:**
- Click chip to toggle selection
- Visual feedback on selection (color change)
- Count display at bottom
- Scrollable container for all options

**Categories & Roles:**
1. **Tech**: Software Engineering, Data Science, Product Management, UX/UI Design
2. **Finance**: Investment Banking, Private Equity, Venture Capital, Asset Management
3. **Consulting**: Management, Strategy, Technology Consulting
4. **Healthcare**: Medicine, Biotech, Administration, Public Health
5. **Law**: Corporate, Public Interest, Intellectual Property
6. **Education**: Teaching, EdTech, Higher Ed Administration
7. **Research**: Academic, Industry, Think Tanks
8. **Entrepreneurship**: Startups, Social Enterprise, Innovation
9. **Public Service**: Government, Non-Profit, Policy, International Dev
10. **Creative**: Journalism, Marketing, Media & Entertainment, Design

---

### Step 3: Skills Input

**Visual Elements:**
- Heading: "What are your skills?"
- Toggle buttons for skill type:
  - 💻 Technical
  - 👥 Soft Skills
- Add skill input with button
- Two suggestion sections:
  - Technical skills (blue chips)
  - Soft skills (pink chips)
- Your skills summary section

**Interactions:**
- Toggle between technical/soft skill types
- Type and press Enter or click Add
- Click suggested skill to add instantly
- Delete skills from your collection
- Color-coded by type

**Suggested Skills:**

**Technical:**
- Python, JavaScript, React, Node.js
- Data Analysis, SQL, Machine Learning
- Excel, R, Java, C++, AWS, Docker

**Soft:**
- Leadership, Communication, Public Speaking
- Teamwork, Problem Solving, Project Management
- Time Management, Critical Thinking
- Adaptability, Creativity, Negotiation

**Features:**
- Duplicate prevention
- Custom skill input
- Visual categorization
- Quick-add from suggestions

---

### Step 4: Goals Selection

**Visual Elements:**
- Heading: "What are your primary goals?"
- 5 large goal cards in 2-column grid
- Each card has:
  - Large icon (32px)
  - Goal title
  - Description text
  - Checkmark when selected

**Goal Options:**
1. 💼 **Internship**
   - Find summer or semester internship opportunities

2. 💼 **Full-time Job**
   - Explore full-time career opportunities

3. 👥 **Networking**
   - Connect with professionals and expand your network

4. 🧭 **Career Exploration**
   - Discover different career paths and industries

5. 📚 **Skill Development**
   - Learn new skills and enhance existing ones

**Interactions:**
- Click card to toggle selection
- Visual feedback with border highlight
- Multiple selection allowed
- Hover lift effect

**Card States:**
- **Unselected**: Light glass with icon
- **Selected**: Indigo background + white border + checkmark
- **Hover**: Lift animation + shadow

---

### Step 5: Confirmation Page

**Visual Elements:**
- Large success icon (80px, green) with scale animation
- Success message: "Profile Created Successfully! 🎉"
- Profile summary sections:
  1. 👤 Personal Information (grid layout)
  2. 💼 Career Interests (chip display)
  3. 💻 Skills (color-coded chips)
  4. 🎯 Goals (purple chips)
- Next steps CTA
- Return to survey link

**Information Display:**
- **Personal Info**: Name, Email, Class Year, Profile ID
- **Interests**: Indigo chips with full category-role text
- **Skills**: Blue (technical) and pink (soft) chips
- **Goals**: Purple chips with goal names

**Interactions:**
- "Continue to Resume Upload" button
- "Go back to survey" link
- Smooth animations on page load
- Success celebration with icon scale-in

**Visual Hierarchy:**
- Large success icon at top
- Clear section headers with icons
- Glass cards for content organization
- Gradient CTA button

## 🎬 Animations & Transitions

### Background Animations
```css
Floating Orbs:
- 8s ease-in-out infinite
- Transform: translateY(-30px) scale(1.1)
- Filter: blur(80px)

Particle Grid:
- 20s linear infinite
- Rotate 360deg + translate
- Semi-transparent dots
```

### Component Animations
```css
Button Hover:
- Transform: translateY(-2px)
- Transition: 0.3s ease
- Shadow enhancement

Card Hover:
- Transform: translateY(-4px)
- Transition: 0.3s ease
- Shadow: 0 12px 40px

Success Icon:
- @keyframes scaleIn
- 0%: scale(0)
- 50%: scale(1.1)
- 100%: scale(1)
```

### Form Transitions
```css
Step Changes:
- Fade in/out: opacity transition
- Slide: translateX animation
- Duration: 300ms

Input Focus:
- Border color transition: 200ms
- Scale: 1.02 on focus
- Shadow glow effect
```

## 🎯 Interactive States

### Buttons

**Primary Button (Gradient)**
- Default: Gradient background, white text
- Hover: Darker gradient + lift 2px
- Active: Pressed effect
- Disabled: Reduced opacity

**Secondary Button (Outlined)**
- Default: Transparent with white border
- Hover: White border + light background
- Active: Slight scale down

### Form Fields

**Text Input**
- Default: White background, light border
- Hover: Darker border
- Focus: Indigo border + glow
- Error: Red border + error message
- Success: Green border

### Selection Elements

**Chips**
- Unselected: rgba(255,255,255,0.3)
- Selected: Solid color + white border
- Hover: Slight opacity increase
- Disabled: Grayed out

**Cards**
- Unselected: Light glass
- Selected: Colored background + border
- Hover: Lift effect
- Active: Pressed state

## 📊 Visual Feedback

### Progress Indicators
- **Stepper**: Shows current step (1 of 4)
- **Step Labels**: Active step highlighted
- **Completion**: Green checkmarks

### Validation Feedback
- **Error Alert**: Red banner at top
- **Success**: Green confirmation
- **Loading**: "Saving..." button state
- **Count Display**: "Selected: X items"

### User Guidance
- **Placeholder Text**: Helpful examples
- **Helper Text**: Additional context
- **Icons**: Visual cues for field types
- **Required Indicators**: Asterisk + note

## 🌈 Color Coding System

### By Function
- **Primary Actions**: Indigo/Purple gradient
- **Success**: Green (#4ade80)
- **Error**: Red (from Material-UI)
- **Info**: Blue accents

### By Category
- **Technical Skills**: Blue (#667eea)
- **Soft Skills**: Pink (#ec4899)
- **Career Interests**: Indigo (#667eea)
- **Goals**: Violet (#8b5cf6)

### Glass Effects
- **Containers**: 15% white opacity
- **Cards**: 25% white opacity
- **Overlays**: 10% white opacity
- **Borders**: 20-30% white opacity

## 📐 Spacing & Layout

### Container Sizes
- **Max Width**: 960px (md breakpoint)
- **Padding**: 32px (desktop), 16px (mobile)
- **Gap**: 16px between elements

### Component Sizing
- **Buttons**: 48px height (touch-friendly)
- **Input Fields**: 56px height
- **Cards**: Min 120px height
- **Icons**: 24px (small), 32px (medium), 80px (large)

### Border Radius
- **Containers**: 24px
- **Cards**: 16px
- **Buttons**: 12px
- **Inputs**: 12px
- **Chips**: 16px (pill shape)

## 🔤 Typography Hierarchy

### Headings
- **H1 (Page Title)**: 34px, weight 700, white
- **H4 (Section)**: 24px, weight 600, white
- **H6 (Subsection)**: 20px, weight 500, white

### Body Text
- **Body1**: 16px, weight 400
- **Body2**: 14px, weight 400
- **Caption**: 12px, weight 400

### Special Text
- **Button Text**: 16px, weight 600
- **Chip Labels**: 14px, weight 400-600
- **Helper Text**: 12px, weight 400

## 🎭 User Experience Flow

1. **Entry** → Beautiful landing with animated background
2. **Step 1** → Clear form fields with helpful icons
3. **Step 2** → Organized categories, easy browsing
4. **Step 3** → Quick skill addition with suggestions
5. **Step 4** → Visual goal cards with descriptions
6. **Confirmation** → Celebration + summary + next steps

### Micro-interactions
- Chip selection: Instant visual feedback
- Button hover: Lift and shadow
- Input focus: Border glow
- Card selection: Background + border change
- Success: Celebratory icon animation

## 🎨 Design Principles Applied

1. **Clarity**: Clear labels and visual hierarchy
2. **Feedback**: Immediate response to all interactions
3. **Consistency**: Uniform styling across components
4. **Beauty**: Aesthetic glassmorphism design
5. **Efficiency**: Quick completion with suggestions
6. **Accessibility**: Sufficient contrast and touch targets
7. **Delight**: Smooth animations and celebrations

---

This design creates a modern, engaging onboarding experience that combines the best of Material Design's usability with Glassmorphism's aesthetic appeal.

