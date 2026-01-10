import { ExternalLink } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  image,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border card-hover",
        className
      )}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
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
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              View Project <ExternalLink size={14} />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
