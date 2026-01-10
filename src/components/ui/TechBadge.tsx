import { cn } from "@/lib/utils";

interface TechBadgeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  delay?: number;
}

const TechBadge = ({ icon, label, className, delay = 0 }: TechBadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-sm",
        "hover:border-primary/50 hover:bg-primary/10 transition-all duration-300",
        "animate-fade-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="text-primary">{icon}</span>
      <span className="text-sm font-medium text-foreground/80">{label}</span>
    </div>
  );
};

export default TechBadge;
