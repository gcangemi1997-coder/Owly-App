# 🦉 Owly - EdTech SaaS Platform

**Owly** is a modern, modular web application designed for primary education. Built as a Software as a Service (SaaS) prototype, it allows teachers and students to explore a vast library of educational resources through an intuitive and accessible interface.

---

## 🛠️ Tech Stack & Tools

* **Framework/Build Tool**: [Vite](https://vitejs.dev/) (Next Generation Frontend Tooling)
* **Language**: JavaScript (ES6+ Modules)
* **Styling**: Modular CSS with `@import` strategy for high maintainability
* **Libraries**: 
    * **Axios**: For robust asynchronous API handling
    * **Lodash**: For safe data navigation within complex JSON structures
* **API**: [Open Library API](https://openlibrary.org/developers/api)

---

## 🚀 Key Features

* **Modular Architecture**: Separated logic for API calls, UI rendering, and state management.
* **Advanced CSS System**: A professional folder structure with specific files for variables, layout, components, and animations.
* **Dynamic Pagination**: Server-side pagination to handle large datasets efficiently.
* **Performance Optimization**: Implementation of a **Description Cache** to prevent redundant API requests.
* **UX/UI Excellence**: High-contrast skeleton loaders and centralized spinners to manage asynchronous states.

---

## 📂 Project Structure

```text
├── index.html          # Entry point for Vite
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── css/                # Modular CSS folder
│   ├── global.css      # Main entry for styles (@import)
│   ├── variables.css   # Design tokens (colors, font-family, shadows)
│   ├── layout.css      # Grid and structural styles
│   ├── components.css  # Book cards, buttons, and UI elements
│   ├── animations.css  # Skeleton loaders and spin keyframes
│   └── responsive.css  # Multi-device media queries (Mobile-first)
├── js/                 # Logic folder
│   ├── api.js          # API service layer (Axios calls)
│   ├── ui.js           # DOM manipulation and HTML rendering
│   └── main.js         # App orchestrator, cache, and pagination logic
└── README.md           # Project documentation

---
## ⚙️ Installation & Local Development
