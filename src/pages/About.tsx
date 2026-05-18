// ============================================================
// About.tsx — Full About page with animated count-up stats,
//             education timeline, goals list, and scroll animations.
// ============================================================
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowingImage from "@/components/ui/GlowingImage";
import FloatingElements from "@/components/ui/FloatingElements";
import { GraduationCap, Target, Heart } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import useCountUp from "@/hooks/useCountUp";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import SEOHead from "@/components/ui/SEOHead";

// ── Stats data — edit here to change numbers/labels ──────────
const stats = [
  { target: 3, suffix: "+", label: "Years Web Dev" },
  { target: 2, suffix: "+", label: "Years WordPress" },
  { target: 10, suffix: "+", label: "Projects Done" },
  { target: 100, suffix: "%", label: "Client Satisfaction" },
];

// ── Animated stat card using count-up ────────────────────────
const StatCard = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target, 1200);
  return (
    <div ref={ref} className="p-4 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
      <h4 className="text-3xl font-bold text-primary mb-1">
        {count}{suffix}
      </h4>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

// ── Education data — edit here ────────────────────────────────
const education = [
  {
    degree: "MCA — Generative AI Specialization",
    school: "SRM University, Kattankulathur",
    year: "2025 – 2027",
    current: true,
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "Ranchi University, Jharkhand",
    year: "2021 – 2024",
    current: false,
  },
];

// ── Goals data — edit here ────────────────────────────────────
const goals = [
  "Become a leading Gen AI / AI Application Developer",
  "Build innovative AI-powered solutions for real-world problems",
  "Continuous learning and growth in emerging technologies",
  "Deliver quality work with honest timelines",
];

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: eduRef, isVisible: eduVisible } = useScrollAnimation();

  return (
    <Layout>
      <SEOHead
        title="About Me"
        description="Learn more about Suraj Kumar's journey, education, and goals as a Gen AI and Web Developer."
        url="https://surajkumar.dev/about"
      />
      <section className="py-24 relative overflow-hidden">
        <FloatingElements />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(252,115,25,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,115,25,0.06)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">

          {/* ── Hero: image + bio + stats ─────────────────────── */}
          <div
            ref={heroRef}
            className={`grid lg:grid-cols-2 gap-16 items-center mb-24 transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Profile image */}
            <div className="flex justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[320px] h-[320px] rounded-full border border-primary/10 animate-pulse" />
                <div className="absolute w-[380px] h-[380px] rounded-full border border-primary/5"
                  style={{ animation: "pulse 3s ease-in-out infinite", animationDelay: "0.5s" }} />
              </div>
              <GlowingImage src={profileImage} alt="Suraj Kumar" size="xl" />
            </div>

            {/* Bio + stats */}
            <div>
              <SectionTitle title="About" highlight="Me" align="left" />

              <p className="text-muted-foreground mb-6 text-lg">
                I am currently pursuing an MCA with specialization in Generative AI from SRM University,
                Chennai. I am a web developer, graphic designer, and WordPress developer, with a strong
                professional goal of becoming a Gen AI / AI Application Developer.
              </p>
              <p className="text-muted-foreground mb-8">
                A passionate tech enthusiast who loves learning new technologies and building innovative
                solutions. With 3+ years of web development experience and deep expertise in AI technologies,
                I bridge the gap between intelligent systems and beautiful user interfaces.
              </p>

              {/* Animated stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Education & Goals ─────────────────────────────── */}
          <div
            ref={eduRef}
            className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
              eduVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Education */}
            <div className="p-8 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className={`border-l-2 pl-4 ${edu.current ? "border-primary" : "border-border"}`}
                  >
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.school}</p>
                    <p className={`text-sm ${edu.current ? "text-primary" : "text-muted-foreground"}`}>
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals & Values */}
            <div className="p-8 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Goals & Values</h3>
              </div>
              <ul className="space-y-3">
                {goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
