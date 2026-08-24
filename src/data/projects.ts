// ============================================================
// projects.ts — Single source of truth for all project data.
// Add, remove, or update projects here only.
// Used by: Projects.tsx (listing), ProjectDetail.tsx (detail page)
// ============================================================

export interface Project {
  id: string;              // URL-safe slug for routing
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  category: "Web" | "AI" | "Design" | "Plugin" | "SaaS";
  link?: string;           // Live site URL
  github?: string;         // GitHub repo URL
  image?: string;          // Preview image path (add later)
  challenge: string;       // Problem the project solved
  solution: string;        // How you built/solved it
  outcome: string;         // Result / impact
  year: string;
}

export const projects: Project[] = [
  {
    id: "psycho-bubble",
    title: "Psycho Bubble",
    shortDescription:
      "Psychology services platform with online booking, payment gateway, and dual dashboards for users and admins.",
    fullDescription:
      "A comprehensive web platform for a psychology practice. Features include session booking, Razorpay payment integration, JWT authentication, user and admin dashboards, and appointment management.",
    tags: ["React", "Node.js", "MongoDB", "Razorpay", "JWT"],
    category: "Web",
    link: "https://psycho-bubble.com",
    image: "",
    challenge:
      "The psychologist needed to replace manual WhatsApp bookings with an automated, secure system that handled payments and appointment scheduling.",
    solution:
      "Built a MERN stack application with role-based access control, real-time booking calendar, secure payment flow using Razorpay, and email notifications via Nodemailer.",
    outcome:
      "Reduced booking management time by ~80%. The platform now handles all bookings and payments automatically with zero manual intervention.",
    year: "2024",
  },
  {
  id: "ai-chatbot-rag-wordpress-plugin",
  title: "AI Chatbot RAG WordPress Plugin",
  shortDescription:
    "An AI-powered WordPress chatbot that uses Retrieval-Augmented Generation, embeddings, and vector search to provide context-aware answers from website content.",
  fullDescription:
    "An AI-powered WordPress chatbot built using a two-part architecture consisting of a WordPress plugin and a Python FastAPI backend. The plugin integrates the AI assistant directly into WordPress while securely forwarding authenticated requests to the backend. The FastAPI service handles document ingestion, embeddings, vector search, and Retrieval-Augmented Generation to provide context-aware responses based on website content. The system uses FastEmbed with ONNX for local embedding generation and supports ChromaDB or Supabase for vector persistence. The backend follows a modular domain, application, and infrastructure architecture with provider interfaces for LLM and vector-store integrations.",
  tags: [
    "Python",
    "FastAPI",
    "RAG",
    "LLM",
    "Embeddings",
    "Vector Search",
    "ChromaDB",
    "FastEmbed",
    "ONNX",
    "Supabase",
    "WordPress",
    "PHP",
    "AI Chatbot"
  ],
  category: "AI",
  github:
    "https://github.com/SurajK88888/AI-Chatbot-RAG-Wordpress-Plugin",
  image: "",
  challenge:
    "Traditional website chatbots often provide generic responses because they lack access to the website's own knowledge and content. The challenge was to build an AI assistant that could understand and retrieve relevant information from a WordPress website while keeping the heavy AI processing outside the WordPress PHP environment. The system also needed secure communication between WordPress and the AI backend and a modular architecture that could support different LLM and vector-storage providers.",
  solution:
    "Designed a two-part AI architecture consisting of a WordPress plugin and a Python FastAPI backend. The WordPress plugin acts as the integration and security layer, signing requests with HMAC-SHA256 and forwarding authenticated chat and ingestion requests to the backend. The FastAPI service implements the RAG pipeline, including content ingestion, embedding generation, vector search, context retrieval, and LLM-based response generation. FastEmbed with ONNX is used for local embedding generation, while ChromaDB and optional Supabase persistence provide vector-storage capabilities. The backend follows a domain/application/infrastructure architecture with interfaces such as LLMProviderInterface and VectorStoreInterface, making the system easier to extend and maintain.",
  outcome:
    "Built a modular RAG-powered AI chatbot architecture that can be integrated into WordPress websites while keeping AI processing in a dedicated Python backend. The project demonstrates practical experience with Retrieval-Augmented Generation, embeddings, vector databases, FastAPI, LLM integration, secure API communication, WordPress plugin development, and provider-agnostic AI system architecture.",
  year: "2026",
},
 {
  id: "custom-blogging-plugin",
  title: "Custom Blog Pro",
  shortDescription:
    "A SaaS-like WordPress blog management plugin with email marketing, advertisement management, analytics, role-based access control, and customizable frontend design.",
  fullDescription:
    "A production-oriented WordPress blog management plugin designed to provide a complete content management experience beyond the default WordPress blogging workflow. Custom Blog Pro combines a modern card-based administration dashboard with blog management, built-in email marketing, advertisement management, analytics, role-based access control, and a customizable frontend interface designed to integrate with existing WordPress themes. The plugin is developed in PHP 8.1+ and follows a modular PSR-4 autoloaded architecture using Composer.",
  tags: [
    "WordPress",
    "PHP",
    "WordPress Plugin",
    "Blog Management",
    "Email Marketing",
    "Analytics",
    "Ad Management",
    "Role-Based Access Control",
    "Composer",
    "PSR-4",
    "SaaS"
  ],
  category: "Plugin",
  github:
    "https://github.com/SurajK88888/Custom-Blogging-Plugin",
  link: "",
  image: "",
  challenge:
    "The default WordPress blogging workflow can require multiple plugins and administrative tools to manage content, marketing, advertisements, analytics, user permissions, and frontend presentation. The goal was to build a centralized blogging solution that provides these capabilities within a single WordPress plugin while maintaining a modern administration experience and allowing the frontend blog interface to adapt to the site's existing theme.",
  solution:
    "Developed a custom WordPress plugin with a modular PHP architecture and PSR-4 autoloading through Composer. The plugin provides a centralized blog management system with a modern card-based admin dashboard, role-based access control, email marketing functionality, advertisement management, analytics, and customizable frontend UI. The architecture is organized to keep plugin functionality modular and maintainable while targeting modern WordPress installations running PHP 8.1 or higher.",
  outcome:
    "Built a SaaS-style WordPress blog management solution that brings content management, marketing, advertising, analytics, access control, and frontend customization into a unified plugin. The project demonstrates practical WordPress plugin development, PHP architecture, Composer/PSR-4 autoloading, admin dashboard development, and the design of extensible WordPress-based software.",
  year: "2026",
},
  {
  id: "event-logging-wp-plugin",
  title: "Event Logging — WordPress Plugin",
  shortDescription:
    "A WordPress plugin for recording and reviewing website events, built to improve visibility into site activity and simplify debugging.",
  fullDescription:
    "A WordPress event-logging plugin designed to capture important site activity in a structured, accessible way. The project focuses on helping WordPress administrators monitor events, investigate issues, and maintain clearer operational records from within the WordPress environment. AI-assisted development tools, including Antigravity and Codex, were used to accelerate implementation, debugging, and refinement.",
  tags: [
    "WordPress",
    "PHP",
    "WordPress Plugin",
    "Event Logging",
    "Debugging",
    "Website Monitoring",
    "AI-Assisted Development"
  ],
  category: "Plugin",
  github:
    "https://github.com/SurajK88888/Event-Logging-Wp-Plugin",
  link: "",
  image: "",
  challenge:
    "WordPress site activity can be difficult to trace when events and operational details are not recorded in one clear location.",
  solution:
    "Built a dedicated WordPress plugin that provides an event-logging foundation for capturing and reviewing relevant site activity.",
  outcome:
    "Created a reusable WordPress plugin project that supports improved site observability and a more streamlined debugging workflow.",
  year: "2026"
},
{
  id: "real-time-chat-application",
  title: "Real-Time Chat Application",
  shortDescription:
    "A production-ready full-stack real-time chat platform built with AI-assisted development, featuring secure authentication, instant messaging, role-based access, media sharing, and scalable WebSocket communication.",
  fullDescription:
    "A production-ready full-stack real-time chat application developed using an AI-assisted engineering workflow. The platform combines React and TypeScript on the frontend with Node.js, Express, TypeScript, Prisma, PostgreSQL, Redis, and Socket.IO on the backend. It provides secure JWT authentication, role-based access control, real-time messaging, typing indicators, online/offline presence, read receipts, media attachments, privacy controls, and an administrative dashboard. Redis-backed Socket.IO infrastructure enables scalable real-time communication, while Docker, Docker Compose, and Nginx provide a production-oriented deployment architecture. Developed using an AI-assisted engineering workflow, leveraging AI for implementation, debugging, architecture assistance, and development acceleration.",
  tags: [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Socket.IO",
    "JWT",
    "Tailwind CSS",
    "Docker",
    "AI-Assisted Development"
  ],
  category: "Full Stack",
  github:"https://github.com/SurajK88888/Real-Time-Chat-Application",
  link:"https://real-time-chat-application-frontend-mocha.vercel.app/",
  image: "",
  challenge:"The goal was to engineer a secure and scalable real-time communication platform while managing the complexity of authentication, WebSocket communication, persistent data, user roles, privacy, media handling, and production deployment. A major objective was also to explore how AI could be integrated into the software development workflow to accelerate implementation without compromising the application's architecture and engineering quality.",
  solution:"Designed and implemented a full-stack architecture using React, TypeScript, Vite, and Tailwind CSS for the frontend, with Node.js, Express, TypeScript, Prisma, and PostgreSQL powering the backend. Socket.IO handles real-time communication, while Redis enables scalable WebSocket event distribution. JWT access and refresh tokens provide authentication, complemented by bcrypt, Helmet, rate limiting, CORS controls, Zod validation, and role-based authorization. AI tools were leveraged extensively throughout development for approximately 70% of the implementation workflow, including code generation, architecture assistance, debugging, feature implementation, documentation, and development optimization. The final system was reviewed and integrated into a cohesive production-oriented architecture.",
  outcome:"Built a complete real-time communication platform demonstrating practical full-stack engineering, real-time systems, database management, authentication, authorization, security, and containerized deployment. The project also demonstrates an AI-assisted software engineering workflow, showing how modern AI development tools can significantly accelerate the implementation of complex applications while maintaining a structured architecture.",
  year: "2026",
},
  {
  id: "stock-indicator-testing-tool",
  title: "Stock Indicator Testing Tool",
  shortDescription:
    "A full-stack stock indicator backtesting platform developed during an internship at Platlap, using AI-assisted engineering to process Indian market data, validate trading signals, and calculate realistic trade performance.",
  fullDescription:
    "A high-performance full-stack stock indicator testing and backtesting platform developed during my internship at Platlap. The system is designed for Indian financial markets and allows users to ingest Spot/Index, Options, and Indicator data from CSV and Excel files, dynamically map custom headers, filter datasets before storage, calculate ATM/OTM/ITM strikes using configurable rounding and strike intervals, and validate trading indicators through an asynchronous backtesting engine. The platform uses a FastAPI Python backend with SQLModel and SQLite for persistence and a Next.js React frontend for data ingestion, validation, and results. AI-assisted development was leveraged extensively throughout the project using tools such as Antigravity and Codex for architecture assistance, implementation, debugging, code generation, optimization, and development acceleration.",
  tags: [
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "SQLModel",
    "SQLite",
    "Pandas",
    "Polars",
    "Financial Data",
    "Backtesting",
    "Stock Indicators",
    "Options Trading",
    "Data Processing",
    "AI-Assisted Development"
  ],
  category: "SaaS",
  github:
    "https://github.com/SurajK88888/stock-indicator-testing-tool",
  link: "",
  image: "",
  challenge:
    "Financial indicator testing requires processing large amounts of market data while correctly aligning trading signals with spot prices, option strikes, entry and exit candles, and available historical data. The challenge was to create a reliable testing system that could ingest inconsistent Indian market CSV/Excel datasets, normalize their formats, calculate appropriate ATM strikes, identify relevant option contracts, execute realistic next-candle trades, handle missing data, and calculate performance without blocking the user interface during long-running backtests. The project also provided an opportunity to explore how modern AI development tools could accelerate the engineering workflow while maintaining control over the final architecture and implementation.",
  solution:
    "Developed a full-stack backtesting architecture with a Next.js frontend and FastAPI Python backend. The ingestion pipeline supports multiple Indian market datetime formats, dynamic CSV header mapping, pre-storage filtering, and separate processing pipelines for Spot/Index, Options/Equity, and Indicator data. The validation engine calculates ATM, OTM, and ITM strikes using configurable intervals and rounding methods, selects configurable OHLC price points, executes trades using next-candle logic, calculates P&L, and reports missing data. Long-running validation jobs execute asynchronously in the backend and expose unique job IDs for frontend polling. Financial prices are stored using integer scaling to avoid floating-point precision issues, while UUID-based records reduce primary-key collision risks during large imports. AI tools including Antigravity and Codex were leveraged throughout development for architecture exploration, code implementation, debugging, refactoring, problem solving, and development acceleration.",
  outcome:
    "Built an end-to-end stock indicator testing and backtesting platform capable of ingesting heterogeneous Indian market datasets, validating trading signals, identifying ATM option contracts, executing realistic simulated trades, and calculating P&L. The project provided practical internship experience in financial-data processing, asynchronous backend systems, API development, database design, data validation, and full-stack application development, while demonstrating the effective use of AI-assisted engineering tools such as Antigravity and Codex to accelerate development.",
  year: "2025",
  experience:
    "Internship Project · Platlap",
  developmentApproach:
    "AI-Assisted Engineering — Leveraged Antigravity and Codex throughout development for architecture assistance, implementation, debugging, refactoring, optimization, and problem solving."
},
  {
  id: "wellness-health",
  title: "Wellness Health — Health & Consultation Platform",
  shortDescription:
    "An AI-assisted wellness platform built with Lovable, enabling users to explore health content, book consultations, manage profiles, and receive notifications.",
  fullDescription:
    "A full-stack wellness and health platform created using Lovable as an AI-assisted development workflow. The application provides health guides and blog content, searchable and filterable resources, consultation booking, user authentication, profile management, and notifications. It also includes protected routes and an admin dashboard for managing platform content and operations. The frontend is built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui, while Supabase supports backend services and includes a booking-notification function.",
  tags: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "shadcn/ui",
    "Supabase",
    "PostgreSQL",
    "Authentication",
    "HealthTech",
    "Consultation Booking",
    "Admin Dashboard",
    "Lovable",
    "AI-Assisted Development"
  ],
  category: "Web",
  github:
    "https://github.com/SurajK88888/wellness-health",
  link: "https://wellness-health-mu.vercel.app/",
  image: "",
  challenge:
    "Wellness users need a single, accessible place to discover reliable health content, manage their account, and request consultations.",
  solution:
    "Built a role-aware wellness platform with health guides, blog posts, search and category filtering, consultation booking, user profiles, notifications, and administrative management tools.",
  outcome:
    "Delivered a modern full-stack health platform with a structured user journey from content discovery to consultation booking, accelerated through Lovable-assisted development.",
  year: "2025"
},
   {
    id: "egsoundworld",
    title: "EG Sound World",
    shortDescription:
      "E-commerce WordPress website for professional audio equipment — microphones, headphones, and audio gear.",
    fullDescription:
      "Built a full-featured e-commerce platform for EG Sound World using WordPress and WooCommerce. The site includes product listing, cart, secure checkout, and an admin panel for inventory management.",
    tags: ["WordPress", "WooCommerce", "E-commerce", "PHP"],
    category: "Web",
    // link: "https://egsoudworld.com",
    image: "",
    challenge:
      "The client needed a professional online store that was easy for a non-technical owner to manage, with fast load times and mobile-first design.",
    solution:
      "Used WordPress + WooCommerce with a custom-configured premium theme, optimized images with lazy loading, and set up an intuitive admin dashboard for product management.",
    outcome:
      "Delivered a fully functional e-commerce store with 100+ products, live payment gateway, and an admin-friendly interface that the client manages independently.",
    year: "2023",
  },
];

// All filter categories — add new ones here if you add new project categories
export const projectCategories = ["All", "Web", "AI", "Design","Plugin","SaaS"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
