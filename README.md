# Vishnu Vardhan — Developer Portfolio

A personal portfolio site built with React, featuring a terminal-style animated hero, scroll-reveal animations, and sections for About, Skills, Projects, Education, and Contact.

## 🛠️ Tech Stack

- React (Create React App)
- Plain CSS with custom design tokens (no UI framework)
- IntersectionObserver-based scroll-reveal animations

## 🚀 Setup Instructions

1. Create a new React app:
   ```bash
   npx create-react-app portfolio
   ```
2. Delete everything inside the generated `src/` folder.
3. Copy all files from this package's `src/` folder into your new project's `src/` folder.
4. Replace `public/index.html` with the one provided here.
5. Run it:
   ```bash
   cd portfolio
   npm start
   ```

## 📁 Structure

```
src/
  components/    # Navbar, Hero, About, Skills, Projects, Education, Contact, Footer
  hooks/          # useScrollReveal — IntersectionObserver hook for animations
  App.js
  index.js
  index.css       # design tokens & global styles
```

## ✏️ Customizing

- Update project links/details in `src/components/Projects.js`
- Update skills in `src/components/Skills.js`
- Update timeline entries in `src/components/Education.js`
- Colors and fonts are defined as CSS variables at the top of `src/index.css`

## 👤 Author

**Gongadi Vishnu Vardhan**
- GitHub: [@GVishnu17](https://github.com/GVishnu17)
- LinkedIn: [gongadi-vishnuvardhan](https://www.linkedin.com/in/gongadi-vishnuvardhan-3aa8a7208)
