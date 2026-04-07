🦉 Owly - EdTech Book Explorer
Owly is a dynamic web application conceived as a core module for an educational SaaS platform dedicated to primary schooling. The software enables teachers, students, and families to explore updated educational content, fostering interactive learning and ensuring accessible academic resources for all.

🚀 Key Features
Dynamic Search: Real-time exploration of the Open Library catalog filtered by educational categories (e.g., History, Science, Fantasy).

Server-side Pagination: Smooth navigation through large datasets using limit and offset parameters to optimize performance and bandwidth.

Smart Caching System: Local storage of book descriptions to eliminate redundant API calls and provide an instantaneous user experience.

Advanced User Interface:

High-Contrast Skeleton Loaders: Clear visual feedback during metadata fetching.

Centralized Loading Spinner: A coordinated loading state for primary search queries.

Contextual Pagination: Controls appear only when results are present and auto-disable at the boundaries of the dataset.

Responsive Design: A fluid, mobile-first layout optimized for Desktops, Tablets, and Smartphones.

🛠️ Tech Stack
HTML5 & CSS3: Advanced use of Flexbox and CSS Grid for a modern, adaptive layout.

JavaScript (ES6+): Modular logic with asynchronous state management.

Axios: Robust HTTP request management for Open Library API integration.

Lodash: Implementation of utility functions (such as \_.get) for safe navigation of complex JSON objects.

📂 Project Structure
Plaintext
├── index.html # Semantic structure and UI containers
├── css/
│ └── style.css # Styles, shimmer/spin animations, and media queries
├── js/
│ ├── api.js # Module for Open Library API integration
│ ├── ui.js # Module for dynamic book card rendering
│ └── main.js # App coordinator: state, cache, and pagination logic
└── README.md # Project documentation
📖 Vision & Mission (Context)
The Owly project was born to support primary school education through technology:

Inclusivity: The interface is designed to be intuitive, featuring high-contrast elements and clear feedback to support diverse educational needs.

Sustainablity: The modular architecture allows for future integration of accessibility tools, such as LIS (Italian Sign Language) video content or school-family communication channels.

Scalability: By utilizing a SaaS (Software as a Service) model, the platform remains accessible from any device, bridging the gap between classroom and home learning.

🔧 Installation and Setup
Clone the repository or download the source files.

No local dependency installation is required (Axios and Lodash are loaded via CDN).

Open index.html in a web browser or use a "Live Server" extension in your IDE (e.g., VS Code).

👨‍💻 Technical Evaluation Notes
Image Optimization: Book covers are fetched in Medium (-M) or Small (-S) formats to balance visual quality with rapid rendering.

Error Handling: Comprehensive try/catch blocks are implemented to manage network timeouts or missing API data gracefully.

State Management: The app tracks currentPage and currentCategory globally to ensure navigation logic remains consistent during user interaction.

Contact
Team Owly - Towards interactive, accessible, and effective education.
