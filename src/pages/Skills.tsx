// ============================================================
// Skills.tsx — Skills page using icon cards instead of progress bars.
// To add/remove skills: edit the skillCategories array below.
// ============================================================
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/ui/SEOHead";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillIconCard from "@/components/ui/SkillIconCard";
import SkillsFloatingElements from "@/components/ui/SkillsFloatingElements";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// ── All skills data — edit here to add/remove/change level ───
const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { icon: "🟨", name: "JavaScript", level: "Expert" as const },
      { icon: "🔷", name: "TypeScript", level: "Advanced" as const },
      { icon: "🐍", name: "Python", level: "Advanced" as const },
      { icon: "☕", name: "Java", level: "Intermediate" as const },
      { icon: "🌐", name: "HTML / CSS", level: "Expert" as const },
      { icon: "➕", name: "C / C++", level: "Intermediate" as const },
    ],
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { icon: "⚛️", name: "React.js", level: "Expert" as const },
      { icon: "▲", name: "Next.js", level: "Advanced" as const },
      { icon: "💨", name: "Tailwind CSS", level: "Expert" as const },
      { icon: "🅱️", name: "Bootstrap", level: "Advanced" as const },
      { icon: "🖌️", name: "Figma", level: "Advanced" as const },
      { icon: "🎭", name: "Framer Motion", level: "Intermediate" as const },
    ],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      { icon: "🟩", name: "Node.js", level: "Advanced" as const },
      { icon: "🚂", name: "Express.js", level: "Advanced" as const },
      { icon: "🍃", name: "MongoDB", level: "Advanced" as const },
      { icon: "🔗", name: "REST APIs", level: "Expert" as const },
      { icon: "🔐", name: "JWT / Auth", level: "Advanced" as const },
      { icon: "🐘", name: "SQL Basics", level: "Intermediate" as const },
    ],
  },
  {
    title: "AI & Generative AI",
    icon: "🤖",
    skills: [
      { icon: "🧠", name: "AI App Dev", level: "Advanced" as const },
      { icon: "✨", name: "OpenAI / GPT", level: "Advanced" as const },
      { icon: "🦜", name: "LangChain", level: "Intermediate" as const },
      { icon: "🔬", name: "Gen AI Concepts", level: "Advanced" as const },
      { icon: "📊", name: "Matplotlib", level: "Intermediate" as const },
      { icon: "🛠️", name: "AI Tools (Claude, etc.)", level: "Expert" as const },
    ],
  },
  {
    title: "WordPress & CMS",
    icon: "🌍",
    skills: [
      { icon: "🔵", name: "WordPress Dev", level: "Expert" as const },
      { icon: "🛒", name: "WooCommerce", level: "Expert" as const },
      { icon: "🔌", name: "Plugin Dev", level: "Advanced" as const },
      { icon: "🎨", name: "Theme Customization", level: "Expert" as const },
    ],
  },
  {
    title: "Design & Tools",
    icon: "🖼️",
    skills: [
      { icon: "🎨", name: "Canva", level: "Expert" as const },
      { icon: "✏️", name: "Graphic Design", level: "Advanced" as const },
      { icon: "📊", name: "PPT Design", level: "Expert" as const },
      { icon: "🐙", name: "Git / GitHub", level: "Advanced" as const },
      { icon: "☁️", name: "Vercel / Netlify", level: "Advanced" as const },
    ],
  },
];

// ── Animated section wrapper ──────────────────────────────────
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <Layout>
      <SEOHead title="Skills" description="My technical skills and tools." />
      <section className="py-24 relative overflow-hidden">
        <SkillsFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="My"
            highlight="Skills"
            subtitle="Technologies and tools I work with to build amazing products"
          />

          {/* Skill categories grid */}
          <div className="space-y-12">
            {skillCategories.map((category) => (
              <AnimatedSection key={category.title}>
                <div className="p-6 bg-card/50 border border-border rounded-2xl">
                  {/* Category header */}
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <span>{category.icon}</span>
                    <span className="text-primary">{category.title}</span>
                  </h3>

                  {/* Skills grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {category.skills.map((skill) => (
                      <SkillIconCard
                        key={skill.name}
                        icon={skill.icon}
                        name={skill.name}
                        level={skill.level}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
