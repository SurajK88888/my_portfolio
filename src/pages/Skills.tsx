import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBar from "@/components/ui/SkillBar";
import SkillsFloatingElements from "@/components/ui/SkillsFloatingElements";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript / TypeScript", percentage: 88 },
      { name: "Python", percentage: 82 },
      { name: "Java", percentage: 75 },
      { name: "HTML / CSS", percentage: 95 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", percentage: 90 },
      { name: "Tailwind CSS", percentage: 92 },
      { name: "Bootstrap", percentage: 85 },
      { name: "Next.js", percentage: 78 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js / Express.js", percentage: 80 },
      { name: "MongoDB", percentage: 82 },
      { name: "REST APIs", percentage: 85 },
      { name: "WordPress Development", percentage: 90 },
    ],
  },
  {
    title: "AI & Tools",
    skills: [
      { name: "AI Application Development", percentage: 85 },
      { name: "AI Tools (ChatGPT, Claude, etc.)", percentage: 92 },
      { name: "Matplotlib", percentage: 75 },
      { name: "Git & GitHub", percentage: 88 },
    ],
  },
  {
    title: "Design",
    skills: [
      { name: "Figma", percentage: 80 },
      { name: "Canva", percentage: 90 },
      { name: "Graphic Design", percentage: 85 },
      { name: "PPT Design", percentage: 88 },
    ],
  },
];

const techStack = [
  "React", "Node.js", "Express.js", "MongoDB", "TypeScript", "Python",
  "Tailwind CSS", "WordPress", "Figma", "Git", "GitHub", "REST APIs",
  "AI Tools", "Generative AI", "Canva", "Bootstrap", "Java", "Matplotlib"
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <SkillsFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="My"
            highlight="Skills"
            subtitle="Technologies and tools I work with to build amazing products"
          />

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Skill Bars by Category */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="p-6 bg-card rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={(categoryIndex * 4 + skillIndex) * 100}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
