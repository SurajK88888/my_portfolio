import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ExperienceFloatingElements from "@/components/ui/ExperienceFloatingElements";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Freelance Developer & Designer",
    company: "Self-Employed",
    location: "Remote",
    period: "2021 - Present",
    description: "Providing web development, WordPress development, graphic design, and AI application development services to clients worldwide.",
    highlights: [
      "Built 10+ websites for various clients",
      "Developed AI-powered applications",
      "Created brand identities and marketing materials",
      "Maintained long-term client relationships",
    ],
  },
  {
    title: "Web Developer",
    company: "Freelance Projects",
    location: "India",
    period: "2021 - Present",
    description: "3+ years of experience building modern, responsive web applications using React, Node.js, and various frontend technologies.",
    highlights: [
      "React & Next.js development",
      "MERN stack applications",
      "E-commerce solutions",
      "Performance optimization",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Freelance Projects",
    location: "India",
    period: "2022 - Present",
    description: "2+ years specializing in custom WordPress development, theme customization, and plugin development.",
    highlights: [
      "Custom theme development",
      "WooCommerce integration",
      "Plugin customization",
      "Website maintenance",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Freelance Projects",
    location: "Remote",
    period: "2022 - Present",
    description: "Creating visual content including logos, social media graphics, presentations, and brand materials.",
    highlights: [
      "Logo & brand identity design",
      "Social media graphics",
      "Professional presentations",
      "Marketing materials",
    ],
  },
];

const Experience = () => {
  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <ExperienceFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="My"
            highlight="Experience"
            subtitle="Professional journey and key achievements"
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 md:-translate-x-1/2 glow-ring" />

                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="p-6 bg-card rounded-xl border border-border card-hover">
                      <div className="flex items-center gap-2 text-primary text-sm mb-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
