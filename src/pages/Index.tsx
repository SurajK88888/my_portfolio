import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import SkillsPreview from "@/components/home/SkillsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import SEOHead from "@/components/ui/SEOHead";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Home"
        description="Suraj Kumar — Gen AI & AI Application Developer, Full Stack Developer, and WordPress Expert. Building intelligent web applications with 3+ years of experience."
        url="https://surajkumar.dev"
      />
      <HeroSection />
      <AboutPreview />
      <SkillsPreview />
      <ServicesPreview />
      <TestimonialsPreview />
    </Layout>
  );
};

export default Index;
