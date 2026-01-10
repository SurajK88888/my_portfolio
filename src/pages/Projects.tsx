import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectsFloatingElements from "@/components/ui/ProjectsFloatingElements";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "AI", "Design"];

const projects = [
  {
    id: 1,
    title: "egsoudworld.com",
    description: "E-commerce WordPress website for audio equipment including microphones, headphones, and professional audio gear. Features product listing, cart, and checkout functionality.",
    tags: ["WordPress", "E-commerce", "WooCommerce"],
    category: "Web",
    link: "https://egsoudworld.com",
    image: "", // Add image URL here
  },
  {
    id: 2,
    title: "psycho-bubble.com",
    description: "Psychology services platform with booking system, payment gateway integration, admin panel, user login, and comprehensive dashboards for both users and administrators.",
    tags: ["React", "Node.js", "Payment Integration"],
    category: "Web",
    link: "https://psycho-bubble.com",
    image: "", // Add image URL here
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An intelligent content generation tool powered by advanced AI models. Helps create blog posts, social media content, and marketing copy with ease.",
    tags: ["Python", "AI", "OpenAI API"],
    category: "AI",
    image: "", // Add image URL here
  },
  {
    id: 4,
    title: "Smart Chatbot Assistant",
    description: "AI-powered chatbot for customer support with natural language processing capabilities, context awareness, and seamless integration with web platforms.",
    tags: ["AI", "NLP", "React"],
    category: "AI",
    image: "", // Add image URL here
  },
  {
    id: 5,
    title: "Brand Identity Package",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
    tags: ["Figma", "Branding", "Logo Design"],
    category: "Design",
    image: "", // Add image URL here
  },
  {
    id: 6,
    title: "Corporate Presentation",
    description: "Professional PowerPoint design for a Fortune 500 company's annual report with engaging visuals and data visualization.",
    tags: ["PowerPoint", "Data Viz", "Corporate"],
    category: "Design",
    image: "", // Add image URL here
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        {/* Floating background elements */}
        <ProjectsFloatingElements />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="My"
            highlight="Projects"
            subtitle="A showcase of my recent work and creative solutions"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "min-w-[100px]",
                  activeCategory === category && "glow-button"
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
