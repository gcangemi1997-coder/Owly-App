# 🦉 Owly - EdTech SaaS Platform

![Status](https://img.shields.io/badge/Status-Project%20Completed-brightgreen)
![Vite](https://img.shields.io/badge/Frontend-Vite-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

**Owly** is a professional web application prototype designed for the primary education sector. Developed as a **SaaS (Software as a Service)** solution, it aims to support teachers and students through an intuitive interface.

---

## 🛠️ Tech Stack & Tooling

This project leverages modern frontend development tools:

- **Build Tool**: [Vite](https://vitejs.dev/) — For fast development and optimized production bundling.
- **Core Logic**: Vanilla JavaScript (ES6+ Modules).
- **Styling**: Modular CSS architecture using the `@import` strategy.
- **Data Handling**: **Axios** for API requests and **Lodash** for data navigation.
- **API**: [Open Library Search API](https://openlibrary.org/developers/api).

---

## 🚀 Key Technical Features

- **Modular CSS Structure**: Styles are divided into functional files (variables, layout, components, etc.).
- **Smart Caching**: Implementation of a local cache to store book details and reduce API overhead.
- **Server-Side Pagination**: Manages large datasets efficiently through API parameters.
- **Asynchronous UX**: Includes **Skeleton Loaders** and **Spinners** for active requests.

---

## 📂 Project Structure

```text
├── index.html          # Entry point for Vite
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── css/                # Modular stylesheet directory
│   ├── global.css      # Main entry point (@import)
│   ├── variables.css   # Design tokens: colors and fonts
│   ├── layout.css      # Structural styles: grid and search bar
│   ├── components.css  # UI elements: book cards and buttons
│   ├── animations.css  # Spinners and skeleton effects
│   └── responsive.css  # Media queries for mobile/tablet
├── js/                 # Application logic
│   ├── api.js          # API service layer
│   ├── ui.js           # DOM rendering
│   └── main.js         # App orchestrator
└── README.md           # Documentation
```

---

## ⚙️ Installation & Local Development

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/owly-edtech-app.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Build for production:**

```bash
npm run build
```

---

## 📖 Corporate Vision: Owly

Following the mission of Team Owly, this platform is designed to be:

- **Accessible**: High-contrast UI for diverse learning needs.
- **Inclusive**: Ready for future integrations like LIS (Italian Sign Language).
- **Interactive**: Transforming book searches into dynamic learning tools.

---

## 📩 Contact

**Team Owly** — Innovating primary education through technology.
