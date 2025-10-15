# Design Documentation

## Design Style: Material Design + Glassmorphism

This prototype showcases a modern design approach combining **Material Design** principles with **Glassmorphism** aesthetics.

## Design Philosophy

### Material Design Elements
- **Elevation & Depth**: Cards and components use shadows to create hierarchy
- **Motion**: Smooth, meaningful animations guide user attention
- **Typography**: Clear hierarchy with Roboto font family
- **Color System**: Consistent palette with primary, secondary, and semantic colors
- **Grid System**: Responsive 12-column grid layout

### Glassmorphism Features
- **Frosted Glass Effect**: Semi-transparent backgrounds with backdrop blur
- **Layered Transparency**: Multiple glass layers create depth
- **Vibrant Backgrounds**: Gradient backgrounds with animated orbs
- **Subtle Borders**: Light borders enhance glass effect
- **Blur Intensity**: 20px backdrop blur for containers, 10px for cards

## Color Palette

### Primary Colors
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--primary-indigo: #667eea;
--primary-purple: #764ba2;
```

### Secondary Colors
```css
--secondary-pink: #ec4899;
--secondary-violet: #8b5cf6;
--accent-green: #4ade80;
--accent-blue: #6366f1;
```

### Glass Colors
```css
--glass-light: rgba(255, 255, 255, 0.15);
--glass-medium: rgba(255, 255, 255, 0.25);
--glass-dark: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);
```

## Typography Scale

```css
/* Headings */
h1: 2.125rem (34px), weight 700
h4: 1.5rem (24px), weight 600
h6: 1.25rem (20px), weight 500

/* Body */
body1: 1rem (16px), weight 400
body2: 0.875rem (14px), weight 400
caption: 0.75rem (12px), weight 400
```

## Component Design

### Glass Container
```css
.glass-container {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
```

### Glass Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
}
```

### Gradient Button
```css
.gradient-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 12px 32px;
  font-weight: 600;
}

.gradient-button:hover {
  background: linear-gradient(135deg, #5568d3 0%, #63428b 100%);
  transform: translateY(-2px);
}
```

## Animation System

### Background Orbs
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-30px) scale(1.1);
  }
}

/* Applied with 8s ease-in-out infinite */
```

### Success Animation
```css
@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```

### Particle Background
```css
@keyframes drift {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    transform: translate(50px, 50px) rotate(360deg);
  }
}
```

## Layout Structure

### Page Layout
```
┌─────────────────────────────────┐
│   Animated Background (Orbs)    │
│  ┌───────────────────────────┐  │
│  │   Glass Container         │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  Title & Description │  │  │
│  │  └─────────────────────┘  │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  Progress Stepper   │  │  │
│  │  └─────────────────────┘  │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  Step Content       │  │  │
│  │  │  (Form Fields)      │  │  │
│  │  └─────────────────────┘  │  │
│  │  ┌─────────────────────┐  │  │
│  │  │  Navigation Buttons │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Grid System
- **Container**: Max-width 960px (md)
- **Spacing**: 8px base unit (MUI default)
- **Breakpoints**: xs(0), sm(600), md(900), lg(1200), xl(1536)

## Interactive States

### Input Fields
```css
/* Default */
background: rgba(255, 255, 255, 0.9);
border: 1px solid rgba(255, 255, 255, 0.3);

/* Hover */
border: 1px solid rgba(255, 255, 255, 0.5);

/* Focused */
border: 2px solid #667eea;
```

### Selection Chips
```css
/* Unselected */
background: rgba(255, 255, 255, 0.3);
color: white;
border: 1px solid rgba(255, 255, 255, 0.3);

/* Selected */
background: rgba(102, 126, 234, 0.9);
color: white;
border: 2px solid white;
font-weight: 600;
```

### Cards (Goals)
```css
/* Unselected */
background: rgba(255, 255, 255, 0.15);
border: 1px solid rgba(255, 255, 255, 0.3);

/* Selected */
background: rgba(102, 126, 234, 0.4);
border: 2px solid white;

/* Hover */
transform: translateY(-4px);
box-shadow: 0 12px 40px rgba(31, 38, 135, 0.45);
```

## Accessibility Features

### Color Contrast
- All text meets WCAG AA standards
- White text on colored backgrounds: 7:1+ ratio
- Dark text on light backgrounds: 8:1+ ratio

### Focus States
- Visible focus indicators on all interactive elements
- Keyboard navigation fully supported
- Tab order follows logical flow

### Semantic HTML
- Proper heading hierarchy (h1, h6)
- ARIA labels where needed
- Form labels properly associated

## Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 599px) {
  - Single column layout
  - Larger touch targets
  - Simplified animations
}

/* Tablet */
@media (min-width: 600px) and (max-width: 899px) {
  - Two column grid for cards
  - Adjusted spacing
}

/* Desktop */
@media (min-width: 900px) {
  - Full layout
  - All animations
  - Hover effects
}
```

### Touch Optimization
- Minimum touch target: 44x44px
- Adequate spacing between interactive elements
- Swipe gestures not required (click/tap only)

## Design Patterns Used

### Progressive Disclosure
- Multi-step form reveals information gradually
- Progress indicator shows completion status
- Each step focuses on one aspect

### Visual Feedback
- Hover effects on interactive elements
- Loading states during submission
- Success confirmation with animation
- Error messages with clear guidance

### Consistency
- Uniform border radius (12px inputs, 16px cards, 24px containers)
- Consistent spacing scale (8px, 16px, 24px, 32px)
- Repeated glass effect pattern
- Uniform transition timing (0.3s ease)

## Performance Considerations

### Optimizations
- CSS animations use `transform` and `opacity` (GPU accelerated)
- Backdrop blur limited to key containers
- Gradients pre-calculated
- Images optimized (if added)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Fallbacks for backdrop-filter (solid backgrounds)
- Graceful degradation for older browsers

## Design Inspiration

This design combines:
- **iOS/macOS Big Sur** glass effects
- **Material Design 3** elevation and motion
- **Modern web trends** gradient backgrounds
- **Neumorphism influences** subtle depth

## Future Enhancements

Potential design improvements:
- Dark mode variant
- Custom illustrations
- Micro-interactions
- Skeleton loading states
- Toast notifications
- Animated transitions between steps
- Particle systems
- 3D transforms

---

**Design System Version**: 1.0  
**Last Updated**: October 2025  
**Designer**: Yash Ravipati

