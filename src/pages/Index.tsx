import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import SkillsPreview from "@/components/home/SkillsPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <SkillsPreview />
      <ServicesPreview />
      <TestimonialsPreview />
    </Layout>
  );
};

export default Index;
