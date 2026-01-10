import { cn } from "@/lib/utils";

interface GlowingImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-32 h-32",
  md: "w-48 h-48",
  lg: "w-64 h-64",
  xl: "w-80 h-80",
};

const GlowingImage = ({ src, alt, className, size = "lg" }: GlowingImageProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse" />
      <div
        className={cn(
          "relative rounded-full overflow-hidden glow-ring animate-glow-pulse",
          sizeClasses[size]
        )}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default GlowingImage;
