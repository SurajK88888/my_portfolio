// ============================================================
// blogPosts.ts — Single source of truth for all blog articles.
// To add a new post: add an object to this array.
// All fields are used by Blog.tsx to render article cards.
// ============================================================

export interface BlogPost {
  id: string;          // URL-safe slug (not used for routing yet, future-ready)
  title: string;
  excerpt: string;     // Short description shown on card
  content: string;     // Full article content (supports plain text / markdown)
  category: string;    // "AI" | "Web Dev" | "Design" | "Career" etc.
  tags: string[];
  readTime: string;    // e.g. "5 min read"
  date: string;        // Display date
  emoji: string;       // Cover emoji/icon
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-gen-ai",
    title: "Getting Started with Generative AI — A Practical Guide",
    excerpt:
      "Generative AI is transforming every industry. Here's how I started learning it, the tools I use, and what beginners should focus on first.",
    content: `
Generative AI has been one of the most exciting areas of technology over the past few years.
As someone currently specializing in Generative AI at SRM University, I've been hands-on with
models, APIs, and real-world applications.

**Where to start?**
Start with understanding what LLMs (Large Language Models) are. OpenAI's GPT, Google's Gemini,
and Anthropic's Claude are the most popular. Use the OpenAI API Quickstart to build your first
AI app in under an hour.

**Key tools I use:**
- OpenAI API / Claude API for generation
- LangChain for building AI pipelines
- FastAPI for backend
- React for frontend

**My advice:** Build something real immediately — even a simple chatbot teaches you more than
10 hours of theory.
    `.trim(),
    category: "AI",
    tags: ["Generative AI", "OpenAI", "LangChain", "Beginners"],
    readTime: "5 min read",
    date: "May 2025",
    emoji: "🤖",
  },
  {
    id: "mern-stack-vs-nextjs",
    title: "MERN Stack vs Next.js — Which Should You Choose in 2025?",
    excerpt:
      "Both are powerful. But choosing the wrong one for your project will cost you time. Here's a practical breakdown based on real projects.",
    content: `
After building projects with both, here's my honest take:

**MERN Stack (MongoDB + Express + React + Node)**
Best for: Full-stack apps where you control both frontend and backend completely.
Pros: Maximum flexibility, separate frontend/backend, easy to scale.
Cons: More boilerplate, you wire everything yourself.

**Next.js**
Best for: Content sites, SEO-heavy apps, and rapid development.
Pros: File-based routing, server components, built-in API routes, amazing DX.
Cons: Less control over backend logic for complex APIs.

**My recommendation:**
- Building a product/SaaS → Next.js
- Building a complex API-heavy app (like a trading platform) → MERN
- Building a portfolio → Next.js or Vite + React
    `.trim(),
    category: "Web Dev",
    tags: ["MERN", "Next.js", "React", "Node.js"],
    readTime: "6 min read",
    date: "April 2025",
    emoji: "⚛️",
  },
  {
    id: "wordpress-tips-for-developers",
    title: "5 WordPress Tips Every Developer Should Know",
    excerpt:
      "After 2+ years of WordPress development and 10+ client sites, here are the tips that saved me the most time and headaches.",
    content: `
WordPress powers 43% of the web. Here's what I've learned building production sites:

**1. Use child themes — always**
Never edit a parent theme directly. A child theme protects your customizations from being wiped on updates.

**2. ACF (Advanced Custom Fields) is your best friend**
For any custom data structure, ACF lets you build admin UIs without writing a single PHP line.

**3. Disable XML-RPC if you don't use it**
Add this to wp-config.php: add_filter('xmlrpc_enabled', '__return_false');
This blocks a common attack vector.

**4. Use WP-Optimize for performance**
Cleans your database, minifies CSS/JS, and sets up caching in minutes.

**5. Local by Flywheel for local development**
The best local WordPress environment. Docker-based, fast, and has one-click sharing.
    `.trim(),
    category: "Web Dev",
    tags: ["WordPress", "WooCommerce", "PHP", "Tips"],
    readTime: "4 min read",
    date: "March 2025",
    emoji: "🌍",
  },
  {
    id: "building-ai-chatbot-portfolio",
    title: "How I Built an AI Chatbot for a WordPress Site",
    excerpt:
      "A step-by-step walkthrough of integrating a Hugging Face AI model into a WordPress plugin with streaming responses.",
    content: `
One of my recent projects involved building a custom AI chatbot for a WordPress site.
Here's how I approached it:

**Architecture:**
- Frontend: Custom WordPress plugin (vanilla JS + CSS)
- Backend: Python FastAPI server hosted on Railway
- AI Model: Hugging Face Inference API (Mistral 7B)
- Communication: Server-Sent Events (SSE) for streaming

**Key learnings:**
1. SSE is much simpler than WebSockets for one-way streaming
2. Hugging Face's free tier works great for demos
3. Always add rate limiting to your AI endpoints

**The hardest part?**
Streaming tokens word-by-word in WordPress without React. Vanilla JS EventSource API was the answer.

Check out my GitHub for the full source code.
    `.trim(),
    category: "AI",
    tags: ["AI", "WordPress", "FastAPI", "Chatbot"],
    readTime: "7 min read",
    date: "May 2025",
    emoji: "💬",
  },
];

// All unique categories — derived dynamically from the posts array
export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];
