import { FileCode, FileText, Pen, Code, Terminal, Database, Cpu, Globe, Layers, Braces } from "lucide-react";

const ProjectsFloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Icons */}
      <div className="absolute top-20 left-[5%] animate-float opacity-20">
        <FileCode className="w-10 h-10 text-primary" />
      </div>
      
      <div 
        className="absolute top-32 right-[10%] animate-float opacity-25"
        style={{ animationDelay: "0.5s" }}
      >
        <Pen className="w-8 h-8 text-primary" />
      </div>
      
      <div 
        className="absolute top-[20%] left-[15%] animate-float opacity-20"
        style={{ animationDelay: "1s" }}
      >
        <Code className="w-12 h-12 text-primary" />
      </div>
      
      <div 
        className="absolute top-[25%] right-[20%] animate-float opacity-30"
        style={{ animationDelay: "1.5s" }}
      >
        <Terminal className="w-9 h-9 text-primary" />
      </div>
      
      <div 
        className="absolute top-[40%] left-[8%] animate-float opacity-20"
        style={{ animationDelay: "2s" }}
      >
        <Database className="w-10 h-10 text-primary" />
      </div>
      
      <div 
        className="absolute top-[45%] right-[5%] animate-float opacity-25"
        style={{ animationDelay: "0.8s" }}
      >
        <FileText className="w-8 h-8 text-primary" />
      </div>
      
      <div 
        className="absolute top-[55%] left-[20%] animate-float opacity-20"
        style={{ animationDelay: "1.2s" }}
      >
        <Cpu className="w-11 h-11 text-primary" />
      </div>
      
      <div 
        className="absolute top-[60%] right-[15%] animate-float opacity-25"
        style={{ animationDelay: "1.8s" }}
      >
        <Globe className="w-9 h-9 text-primary" />
      </div>
      
      <div 
        className="absolute top-[70%] left-[10%] animate-float opacity-20"
        style={{ animationDelay: "0.3s" }}
      >
        <Layers className="w-10 h-10 text-primary" />
      </div>
      
      <div 
        className="absolute top-[75%] right-[8%] animate-float opacity-30"
        style={{ animationDelay: "2.2s" }}
      >
        <Braces className="w-8 h-8 text-primary" />
      </div>

      {/* Programming Language Text Logos */}
      <div 
        className="absolute top-[15%] right-[30%] animate-float opacity-15 font-mono font-bold text-primary text-lg"
        style={{ animationDelay: "0.7s" }}
      >
        {"</>"}
      </div>
      
      <div 
        className="absolute top-[35%] left-[25%] animate-float opacity-15 font-mono font-bold text-primary text-sm"
        style={{ animationDelay: "1.3s" }}
      >
        .py
      </div>
      
      <div 
        className="absolute top-[50%] right-[25%] animate-float opacity-15 font-mono font-bold text-primary text-sm"
        style={{ animationDelay: "0.9s" }}
      >
        .tsx
      </div>
      
      <div 
        className="absolute top-[65%] left-[30%] animate-float opacity-15 font-mono font-bold text-primary text-sm"
        style={{ animationDelay: "1.6s" }}
      >
        .js
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />
    </div>
  );
};

export default ProjectsFloatingElements;
