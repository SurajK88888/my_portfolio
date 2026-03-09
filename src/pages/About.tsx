import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowingImage from "@/components/ui/GlowingImage";
import FloatingElements from "@/components/ui/FloatingElements";
import { GraduationCap, Target, Heart } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        {/* Professional background elements */}
        <FloatingElements />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px] pointer-events-none" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(252,115,25,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,115,25,0.06)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="flex justify-center relative">
              {/* Decorative rings behind image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] rounded-full border border-primary/10 animate-pulse" />
                <div className="absolute w-[380px] h-[380px] rounded-full border border-primary/5" style={{ animation: "pulse 3s ease-in-out infinite", animationDelay: "0.5s" }} />
              </div>
              <div className="animate-fade-up">
                <GlowingImage
                  src={profileImage}
                  alt="Suraj Kumar"
                  size="xl"
                />
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <SectionTitle
                title="About"
                highlight="Me"
                align="left"
              />
              <p className="text-muted-foreground mb-6 text-lg">
                I am currently pursuing an MCA with specialization in 
                Generative AI from SRM University, Chennai. I am a web developer, 
                graphic designer, and WordPress developer, with a strong professional 
                goal of becoming a Gen AI / AI Application Developer.
              </p>
              <p className="text-muted-foreground mb-6">
                A passionate tech enthusiast who loves learning new technologies and 
                building innovative solutions. With 3+ years of web development experience 
                and deep expertise in AI technologies, I bridge the gap between intelligent 
                systems and beautiful user interfaces.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="text-3xl font-bold text-primary mb-1">3+</h4>
                  <p className="text-muted-foreground text-sm">Years Web Development</p>
                </div>
                <div className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="text-3xl font-bold text-primary mb-1">2+</h4>
                  <p className="text-muted-foreground text-sm">Years WordPress</p>
                </div>
                <div className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="text-3xl font-bold text-primary mb-1">10+</h4>
                  <p className="text-muted-foreground text-sm">Projects Completed</p>
                </div>
                <div className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                  <h4 className="text-3xl font-bold text-primary mb-1">100%</h4>
                  <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Goals */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-up" style={{ animationDelay: "400ms" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold">MCA - Generative AI Specialization</h4>
                  <p className="text-muted-foreground text-sm">SRM University, Kattankulathur</p>
                  <p className="text-primary text-sm">2025 - 2027</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <h4 className="font-semibold">BCA - Bachelor of Computer Applications</h4>
                  <p className="text-muted-foreground text-sm">Ranchi University, Jharkhand</p>
                  <p className="text-muted-foreground text-sm">2021 - 2024</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 animate-fade-up" style={{ animationDelay: "500ms" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Goals & Values</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Become a leading Gen AI / AI Application Developer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Build innovative AI-powered solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Continuous learning and growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">Deliver quality work with honest timelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
