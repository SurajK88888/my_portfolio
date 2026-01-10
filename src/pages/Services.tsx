import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import ServicesFloatingElements from "@/components/ui/ServicesFloatingElements";
import { Code, Palette, Brain, Presentation, Layers, ShoppingCart } from "lucide-react";
const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive, and scalable web applications built with React, Node.js, and cutting-edge technologies. From single-page apps to complex platforms.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Clean, professional visuals and branding that communicate your message effectively. Logos, social media graphics, marketing materials.",
  },
  {
    icon: Brain,
    title: "AI Application Development",
    description: "AI-powered tools and intelligent web apps leveraging the latest in machine learning and generative AI. Chatbots, automation, smart features.",
  },
  {
    icon: Presentation,
    title: "PPT Design",
    description: "Professional, visually engaging presentations that captivate your audience. Business pitches, educational content, corporate decks.",
  },
  {
    icon: Layers,
    title: "WordPress Development",
    description: "Custom WordPress websites with modern themes, plugins, and optimizations. E-commerce, blogs, portfolios, and business sites.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Complete online store setups with product management, payment integration, and user-friendly shopping experiences.",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <ServicesFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="My"
            highlight="Services"
            subtitle="Delivering services with modern technology, strong design aesthetics, and honest timelines"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* Process */}
          <div className="bg-card rounded-xl border border-border p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center mb-12">
              My <span className="text-primary">Process</span>
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discover", desc: "Understanding your needs and goals" },
                { step: "02", title: "Design", desc: "Creating wireframes and visual concepts" },
                { step: "03", title: "Develop", desc: "Building with clean, efficient code" },
                { step: "04", title: "Deliver", desc: "Testing and launching your project" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
