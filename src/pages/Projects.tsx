import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/ui/SEOHead";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectsFloatingElements from "@/components/ui/ProjectsFloatingElements";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// Import centralized project data — edit projects in src/data/projects.ts only
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  // Filter projects by selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <SEOHead title="Projects" description="A showcase of my recent work and creative solutions." />
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
            {projectCategories.map((category) => (
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
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.shortDescription}
                  tags={project.tags}
                  link={project.link}
                  image={project.image}
                  detailPath={`/projects/${project.id}`}
                />
              ))}
            </div>
          ) : (
            // Empty state — shown when no projects match the selected category
            <div className="col-span-3 text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                No projects in the <span className="text-primary">{activeCategory}</span> category yet. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
