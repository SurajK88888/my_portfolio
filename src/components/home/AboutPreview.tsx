import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlowingImage from "@/components/ui/GlowingImage";
import SectionTitle from "@/components/ui/SectionTitle";
import profileImage from "@/assets/profile.jpg";
const AboutPreview = () => {
  return <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(252,115,25,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,115,25,0.06)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[280px] h-[280px] rounded-full border border-primary/10 animate-pulse" />
            </div>
            <GlowingImage src={profileImage} alt="About Suraj Kumar" size="lg" />
          </div>

          {/* Content */}
          <div className="mx-[20px] ml-[25px] mr-[20px]">
            <SectionTitle title="About" highlight="Me" align="left" />
            <p className="text-muted-foreground mb-6">
              Suraj Kumar is currently pursuing an MCA with specialization in 
              Generative AI from SRM University, Chennai. He is a web developer, 
              graphic designer, and WordPress developer, with a strong professional 
              goal of becoming a Gen AI / AI Application Developer.
            </p>
            <p className="text-muted-foreground mb-8">
              A passionate tech enthusiast who loves learning new technologies and 
              building innovative solutions that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50">
                <h4 className="text-3xl font-bold text-primary">3+</h4>
                <p className="text-muted-foreground text-sm">Years Web Development</p>
              </div>
              <div className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50">
                <h4 className="text-3xl font-bold text-primary">2+</h4>
                <p className="text-muted-foreground text-sm">Years WordPress</p>
              </div>
            </div>

            <Link to="/about">
              <Button variant="outline" className="border-border/50 hover:border-primary/50">
                Read More <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutPreview;