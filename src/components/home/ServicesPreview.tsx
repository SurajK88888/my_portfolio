import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Brain, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive, and scalable web applications built with React, Node.js, and cutting-edge technologies.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Clean, professional visuals and branding that communicate your message effectively.",
  },
  {
    icon: Brain,
    title: "AI Application Development",
    description: "AI-powered tools and intelligent web apps leveraging the latest in machine learning and generative AI.",
  },
  {
    icon: Presentation,
    title: "PPT Design",
    description: "Professional, visually engaging presentations that captivate your audience.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(252,115,25,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,115,25,0.06)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="My"
          highlight="Services"
          subtitle="What I can do for you"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="outline" className="border-border/50 hover:border-primary/50">
              Learn More <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
