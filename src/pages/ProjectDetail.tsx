// ============================================================
// ProjectDetail.tsx — Case study page for each project.
// Route: /projects/:id  (id matches project slug in projects.ts)
// Reads data from centralized src/data/projects.ts.
// ============================================================
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/ui/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Tag, Calendar, Lightbulb, Target, TrendingUp } from "lucide-react";
import { projects } from "@/data/projects";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// ── Animated section wrapper ──────────────────────────────────
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  // Find the project matching the slug from the URL
  const project = projects.find((p) => p.id === id);

  // Show 404-style message if project not found
  if (!project) {
    return (
      <Layout>
        <SEOHead title="Project Not Found" description="The requested project could not be found." />
        <section className="py-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link to="/projects">
              <Button variant="hero">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead title={project.title} description={project.shortDescription || project.fullDescription} />
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">

          {/* ── Back button ────────────────────────────────────── */}
          <div className="mb-8">
            <Link to="/projects">
              <Button variant="outline" size="sm" className="gap-2 hover:border-primary/50">
                <ArrowLeft size={16} /> All Projects
              </Button>
            </Link>
          </div>

          {/* ── Project header ─────────────────────────────────── */}
          <FadeIn>
            <div className="mb-10">
              {/* Category badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                <Tag size={12} /> {project.category}
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">{project.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.fullDescription}</p>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" className="gap-2">
                      <ExternalLink size={16} /> Live Site
                    </Button>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2 hover:border-primary/50">
                      <Github size={16} /> GitHub
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </FadeIn>

          {/* ── Project image / placeholder ────────────────────── */}
          <FadeIn delay={100}>
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-card border border-border rounded-2xl mb-12 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-6xl opacity-40">🖥️</span>
              )}
            </div>
          </FadeIn>

          {/* ── Tech stack tags ────────────────────────────────── */}
          <FadeIn delay={150}>
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Tag className="text-primary" size={20} /> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── Case study: Challenge / Solution / Outcome ─────── */}
          <div className="grid md:grid-cols-1 gap-6">
            <FadeIn delay={200}>
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold">The Challenge</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold">The Solution</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="p-6 bg-card border border-primary/30 rounded-xl bg-primary/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold">The Outcome</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
              </div>
            </FadeIn>
          </div>

          {/* ── Year / metadata ────────────────────────────────── */}
          <FadeIn delay={350}>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={14} />
              <span>Completed in {project.year}</span>
            </div>
          </FadeIn>

          {/* ── CTA bottom ─────────────────────────────────────── */}
          <FadeIn delay={400}>
            <div className="mt-16 p-8 bg-card border border-border rounded-2xl text-center">
              <h3 className="text-xl font-bold mb-2">Interested in a similar project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your idea and build something amazing together.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">Get In Touch</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
