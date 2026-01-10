const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg rotate-45 animate-float opacity-30" />
      <div 
        className="absolute top-40 right-20 w-16 h-16 border border-primary/30 rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div 
        className="absolute bottom-40 left-20 w-12 h-12 bg-primary/10 rounded-lg animate-float opacity-30"
        style={{ animationDelay: "0.5s" }}
      />
      <div 
        className="absolute bottom-20 right-40 w-24 h-24 border border-primary/15 rounded-2xl rotate-12 animate-float opacity-20"
        style={{ animationDelay: "1.5s" }}
      />
      <div 
        className="absolute top-60 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-float opacity-40"
        style={{ animationDelay: "2s" }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Dotted pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "30px 30px"
        }}
      />
    </div>
  );
};

export default FloatingElements;
