// ============================================================
// ProjectCard.tsx — Reusable project card component.
// Props: title, description, tags, link (live), image, detailPath (case study route), className
// Used by: Projects.tsx
// ============================================================
import { ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;         // Live site URL (external)
  image?: string;        // Preview image
  detailPath?: string;   // Internal route for case study, e.g. /projects/psycho-bubble
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  image,
  detailPath,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border card-hover",
        className
      )}
    >
      {/* Project image preview (if available) */}
      {image ? (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : (
        // Placeholder banner when no image is provided
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-4xl opacity-50">🖥️</span>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {detailPath && (
            <Link to={detailPath}>
              <Button variant="default" size="sm" className="gap-2">
                <BookOpen size={14} /> Case Study
              </Button>
            </Link>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                Live Site <ExternalLink size={14} />
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
