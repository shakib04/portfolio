# Project Structure & Architecture Guidelines

This document outlines the folder structure, naming conventions, and architectural decisions for the **Software Engineer Portfolio** application. Adhering to these guidelines ensures maintainability, scalability, and ease of navigation for future improvements.

## 📂 Directory Structure

```graphql
portfolio-app/
├── public/                 # Static assets served directly
│   ├── project-thumbnails/ # Images for project cards & details
│   ├── profile.png         # User profile image
│   ├── resume.pdf          # Downloadable resume
│   └── vite.svg            # Favicon
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # Biography section
│   │   ├── Skills.jsx      # Technical skills grid
│   │   ├── Experience.jsx  # Professional history
│   │   ├── Projects.jsx    # Projects list/grid
│   │   ├── ProjectDetails.jsx # Individual project case study page
│   │   ├── Contact.jsx     # Contact info & form
│   │   └── Footer.jsx      # Site footer
│   ├── data/
│   │   └── projects.js     # Centralized content for all projects
│   ├── App.jsx             # Main application layout & routing
│   ├── App.css             # Component-specific global adjustments
│   ├── index.css           # Global variables & reset styles
│   └── main.jsx            # Entry point
├── index.html              # HTML entry file
└── package.json            # Project dependencies & scripts
```

## 📐 Naming Conventions

### Files & Components
-   **React Components**: Use `PascalCase`. Example: `Navbar.jsx`, `ProjectDetails.jsx`.
-   **CSS Files**: Match the component name if specific, or generic for globals. Example: `ProjectDetails.css`, `index.css`.
-   **JavaScript Data Files**: Use `camelCase`. Example: `projects.js`, `utils.js`.
-   **Assets**: Use `snake_case` or `kebab-case`. Example: `fintech_erp.png`, `profile-pic.png`.

## 🏗️ Architectural Decisions

### 1. Centralized Data Management
All project data (titles, descriptions, tech stacks, links) is stored in `src/data/projects.js`.
-   **Why**: Separating content from UI code allows for easy updates without touching React components. It essentially acts as a localized CMS.

### 2. Styles
-   **Global Variables**: We use CSS variables (`:root`) in `index.css` for theme colors, fonts, and spacing.
    -   `--accent`: Primary highlight color (Sky Blue).
    -   --bg-color`: Main dark background.
    -   `--text-primary`: Main text color for readability.
-   **Component Styles**: Specific complex styles (like the project grid or details page) have their own `.css` files (e.g., `Projects.css`, `ProjectDetails.css`) to prevent the main CSS file from becoming too large.

### 3. Routing
We use `react-router-dom` for client-side routing.
-   **Home Route (`/`)**: A single-page scrollable landing page containing all summary sections.
-   **Project Detail Route (`/project/:id`)**: Dynamic route that renders `ProjectDetails.jsx`. It grabs the `:id` from the URL to look up specific project data.

### 4. Responsiveness
-   **Mobile-First**: Styles are designed to look good on basic mobile screens first, with media queries (`@media (min-width: ...)` or `@media (max-width: ...)` handling desktop expansions.
-   **Clamp**: We use `clamp()` for fluid typography (e.g., font sizes that scale smoothly between mobile and desktop).

## 🚀 Best Practices

1.  **Semantic HTML**: Always use `<nav>`, `<section>`, `<header>`, `<footer>` instead of generic `<div>` where possible.
2.  **Alt Text**: All images must have meaningful `alt` text for accessibility.
3.  **Clean Code**: Remove unused imports and `console.log` statements before committing.
