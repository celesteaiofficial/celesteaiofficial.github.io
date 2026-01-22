# Project Structure - Celestial Universe

## Files Overview

### 1. **Index.html** - HTML Structure
- Clean HTML document structure only
- Contains semantic markup and basic DOM elements
- Links to external resources (Tailwind CSS, script.js, Styles.css)
- No embedded logic or components
- Serves as the static skeleton for the page

### 2. **index.jsx** - React Component
- React application component with state management
- Contains all interactive logic and functionality
- Character data, sections, and state handlers
- Navigation and animation logic using Framer Motion
- Completely independent from HTML structure

### 3. **script.js** - JavaScript Logic
- Vanilla JavaScript for DOM manipulation
- Navigation rendering and event handlers
- Data management for the application
- Independent from React component

### 4. **Styles.css** - Styling
- Custom CSS styles
- Utility classes and responsive design helpers
- Independent style layer

## Separation Benefits

✓ **Index.html** - Pure structure, no logic
✓ **index.jsx** - Pure React component, no HTML embedding
✓ **script.js** - Pure JavaScript, independent functionality
✓ **Styles.css** - Pure styling, separated from logic

Each file has a single, clear responsibility with no mixing of concerns.
