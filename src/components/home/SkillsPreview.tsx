import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SkillRing from "@/components/ui/SkillRing";

const skills = [
  { name: "React / Next.js", percentage: 90 },
  { name: "JavaScript / TypeScript", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "AI Tools", percentage: 85 },
  { name: "WordPress", percentage: 88 },
  { name: "Design", percentage: 82 },
];

const SkillsPreview = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Passionate about building modern web experiences with cutting-edge technologies. 
            From frontend frameworks to AI tools, I bring ideas to life with clean, efficient code.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillRing
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/skills">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              View All Skills <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;
