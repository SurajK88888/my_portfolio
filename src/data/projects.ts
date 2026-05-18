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
  category: "Web" | "AI" | "Design";
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
    id: "egsoundworld",
    title: "EG Sound World",
    shortDescription:
      "E-commerce WordPress website for professional audio equipment — microphones, headphones, and audio gear.",
    fullDescription:
      "Built a full-featured e-commerce platform for EG Sound World using WordPress and WooCommerce. The site includes product listing, cart, secure checkout, and an admin panel for inventory management.",
    tags: ["WordPress", "WooCommerce", "E-commerce", "PHP"],
    category: "Web",
    link: "https://egsoudworld.com",
    image: "",
    challenge:
      "The client needed a professional online store that was easy for a non-technical owner to manage, with fast load times and mobile-first design.",
    solution:
      "Used WordPress + WooCommerce with a custom-configured premium theme, optimized images with lazy loading, and set up an intuitive admin dashboard for product management.",
    outcome:
      "Delivered a fully functional e-commerce store with 100+ products, live payment gateway, and an admin-friendly interface that the client manages independently.",
    year: "2023",
  },
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
    id: "ai-content-generator",
    title: "AI Content Generator",
    shortDescription:
      "An intelligent content generation tool powered by OpenAI. Creates blogs, social media posts, and marketing copy.",
    fullDescription:
      "An AI-powered content creation tool that uses OpenAI's GPT API to generate high-quality written content. Users can specify tone, length, and type of content. Includes a simple React frontend with API key management.",
    tags: ["Python", "FastAPI", "OpenAI API", "React"],
    category: "AI",
    github: "https://github.com/SurajK88888",
    image: "",
    challenge:
      "Content creators spend hours writing copy. The goal was to build a tool that reduces that to seconds while maintaining quality and tone consistency.",
    solution:
      "Integrated OpenAI GPT with a FastAPI backend and React frontend. Users input a topic, select tone and length, and receive generated content in real time via streaming API.",
    outcome:
      "Successfully generates blog posts, social captions, and email copy in under 10 seconds. Demonstrated in academic showcase as part of AI coursework.",
    year: "2025",
  },
];

// All filter categories — add new ones here if you add new project categories
export const projectCategories = ["All", "Web", "AI", "Design"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
