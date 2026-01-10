import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Code2, Brain, Palette, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import GlowingImage from "@/components/ui/GlowingImage";
import TypeWriter from "@/components/ui/TypeWriter";
import FloatingElements from "@/components/ui/FloatingElements";
import TechBadge from "@/components/ui/TechBadge";
import profileImage from "@/assets/profile.jpg";
import resumePdf from "@/assets/resume_suraj_kumar.pdf";

const roles = ["Gen AI Developer", "AI Application Developer", "Full Stack Developer", "WordPress Expert", "Graphic Designer"];

const HeroSection = () => {
  const [showResume, setShowResume] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Suraj_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Main background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mx-0 my-0 ml-[25px]">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-up" style={{
            animationDelay: "100ms"
          }}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-space leading-tight animate-fade-up" style={{
              animationDelay: "200ms"
            }}>
                Hi, I'm{" "}
                <span className="relative">
                  <span className="text-primary glow-text">Suraj Kumar</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium h-10 animate-fade-up" style={{
              animationDelay: "300ms"
            }}>
                <TypeWriter words={roles} className="text-foreground/90" />
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up" style={{
            animationDelay: "400ms"
          }}>
              Passionate about building intelligent web applications and leveraging 
              cutting-edge AI technologies. Crafting digital experiences with{" "}
              <span className="text-primary font-medium">3+ years</span> of expertise.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{
            animationDelay: "500ms"
          }}>
              <TechBadge icon={<Brain size={16} />} label="Gen AI / AI Apps" delay={600} />
              <TechBadge icon={<Code2 size={16} />} label="MERN Stack" delay={700} />
              <TechBadge icon={<Palette size={16} />} label="UI/UX" delay={800} />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-up" style={{
            animationDelay: "600ms"
          }}>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Let's Talk 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group border-border/50 hover:border-primary/50" onClick={handleDownload}>
                <Download className="mr-2 group-hover:-translate-y-0.5 transition-transform" size={18} />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 animate-fade-up" style={{
            animationDelay: "700ms"
          }}>
              <span className="text-sm text-muted-foreground">Follow me</span>
              <div className="h-px w-8 bg-border" />
              <div className="flex gap-3">
                <a href="https://linkedin.com/in/suraj-kumar-4209b8188" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 rounded-xl border border-border/50 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://github.com/SurajK88888" target="_blank" rel="noopener noreferrer" className="group w-11 h-11 rounded-xl border border-border/50 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:surajk961612@gmail.com" className="group w-11 h-11 rounded-xl border border-border/50 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full border border-primary/10 animate-pulse" />
              <div className="absolute w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-full border border-primary/5" style={{
              animation: "pulse 3s ease-in-out infinite",
              animationDelay: "0.5s"
            }} />
            </div>
            
            {/* Floating tech icons around image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center text-primary animate-float shadow-lg" style={{
              animationDelay: "0s"
            }}>
                <Brain size={20} />
              </div>
              <div className="absolute top-1/4 -right-4 w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-primary animate-float shadow-lg" style={{
              animationDelay: "1s"
            }}>
                <Code2 size={18} />
              </div>
              <div className="absolute bottom-1/4 -left-4 w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-primary animate-float shadow-lg" style={{
              animationDelay: "2s"
            }}>
                <Palette size={18} />
              </div>
            </div>
            
            <div className="animate-scale-in relative z-10">
              <GlowingImage src={profileImage} alt="Suraj Kumar - AI Application Developer" size="xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{
        animationDelay: "1000ms"
      }}>
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-border/50 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;