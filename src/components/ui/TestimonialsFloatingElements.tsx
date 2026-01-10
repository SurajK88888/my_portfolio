import { Quote, Star, Heart, ThumbsUp, MessageSquare, Sparkles } from "lucide-react";

const TestimonialsFloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      <div className="absolute top-16 left-[8%] animate-float opacity-20">
        <Quote className="w-10 h-10 text-primary" />
      </div>
      
      <div 
        className="absolute top-24 right-[12%] animate-float opacity-25"
        style={{ animationDelay: "0.5s" }}
      >
        <Star className="w-8 h-8 text-primary fill-primary/20" />
      </div>
      
      <div 
        className="absolute top-[30%] left-[5%] animate-float opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <Heart className="w-9 h-9 text-primary" />
      </div>
      
      <div 
        className="absolute top-[25%] right-[8%] animate-float opacity-25"
        style={{ animationDelay: "1.5s" }}
      >
        <ThumbsUp className="w-10 h-10 text-primary" />
      </div>
      
      <div 
        className="absolute top-[50%] left-[10%] animate-float opacity-20"
        style={{ animationDelay: "2s" }}
      >
        <MessageSquare className="w-8 h-8 text-primary" />
      </div>
      
      <div 
        className="absolute top-[45%] right-[5%] animate-float opacity-25"
        style={{ animationDelay: "0.8s" }}
      >
        <Sparkles className="w-9 h-9 text-primary" />
      </div>
      
      <div 
        className="absolute top-[65%] left-[15%] animate-float opacity-20"
        style={{ animationDelay: "1.2s" }}
      >
        <Star className="w-7 h-7 text-primary fill-primary/20" />
      </div>
      
      <div 
        className="absolute top-[70%] right-[15%] animate-float opacity-25"
        style={{ animationDelay: "1.8s" }}
      >
        <Quote className="w-8 h-8 text-primary" />
      </div>

      {/* Star symbols */}
      <div 
        className="absolute top-[20%] right-[25%] animate-float opacity-15 text-primary text-2xl"
        style={{ animationDelay: "0.7s" }}
      >
        ★
      </div>
      
      <div 
        className="absolute top-[40%] left-[20%] animate-float opacity-15 text-primary text-xl"
        style={{ animationDelay: "1.3s" }}
      >
        ♥
      </div>
      
      <div 
        className="absolute top-[55%] right-[22%] animate-float opacity-15 text-primary text-lg"
        style={{ animationDelay: "0.9s" }}
      >
        ✓
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "55px 55px"
        }}
      />
    </div>
  );
};

export default TestimonialsFloatingElements;
