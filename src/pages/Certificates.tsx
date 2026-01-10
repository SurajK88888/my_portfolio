import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import CertificatesFloatingElements from "@/components/ui/CertificatesFloatingElements";
import { Award, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import javaBasicCertificate from "@/assets/java_basic_certificate.jpg";
import generativeAiFundamentalCertificate from "@/assets/GenerativeAI_Fundamental.jpg";
import pythonDataStructureCertificate from "@/assets/Python_dataStructure.jpg";
import smartCityIntershipCertificate from "@/assets/Tulip_internship_ICCC.jpg";
import webDevelopementBootCampUdemy from "@/assets/Web_Development_BootCamp_Udemy.jpg";
import androidDevelopementCertificate from "@/assets/Android_Development_Certificate.jpg";
import workshopCertificateGenAItoAgenticAi from "@/assets/Workshop_Certificate_GenAI_to_Agentic_Ai.jpg";
import candCplusplusCertificate from "@/assets/C_and_CplusplusCertificate.jpg";
import aiToolWorkshop from "@/assets/Ai_Tool_Workshop_certificate.jpg";
import genAiandOpenAiBasic from "@/assets/GenAI_and_OpenAI_basic.jpg";

import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

type CertificateCategory = "all" | "course" | "internship";

const certificates = [
  {
    title: "Java Basic Certificate",
    issuer: "HackerRank",
    date: "2025",
    category: "course" as const,
    description: "Certification validating core Java programming skills including syntax, data types, and object-oriented programming.",
    image: javaBasicCertificate,
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "DeepLearning.AI",
    date: "2025",
    category: "course" as const,
    description: "Comprehensive course covering the fundamentals of generative AI models and their applications.",
    image: generativeAiFundamentalCertificate,
  },
  {
    title: "Research/Design/Fieldwork to ICCC Certification",
    issuer: "Tulip",
    date: "2024",
    category: "internship" as const,
    description: "Successfully completed an internship at Ranchi Smart City Limited under the TULIP (The Urban Learning Internship Program) from 04 Jan 2024 to 04 Mar 2024. Gained practical experience in research, design, and fieldwork related to ICCC (Integrated Command and Control Centres), demonstrating diligence and commitment during the internship period.",
    image: smartCityIntershipCertificate,
  },
  {
    title: "Python Data Structure",
    issuer: "Coursera",
    date: "2025",
    category: "course" as const,
    description: "In-depth training on Python programming for data science and machine learning applications.",
    image: pythonDataStructureCertificate,
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    category: "course" as const,
    description: "Successfully completed 'The Complete 2024 Web Development Bootcamp' on Udemy, a comprehensive 61.5-hour program led by Dr. Angela Yu. Gained hands-on experience in full-stack web development, covering modern frontend, backend, and best development practices.",
    image: webDevelopementBootCampUdemy,
  },
  {
    title: "Android Development",
    issuer: "AICTE-Eduskills",
    date: "2025",
    category: "internship" as const,
    description: "Successfully completed a 10-week Android Developer Virtual Internship under AICTE–EduSkills during October–December 2025, supported by Google for Developers.Gained practical experience in Android application development, strengthening mobile development skills through structured virtual training.",
    image: androidDevelopementCertificate,
  },
  {
    title: "GenAI to OpenAI Workshop",
    issuer: "SRM Institute Of Science and Technology",
    date: "2025",
    category: "course" as const,
    description: "Generative AI to Agentic AI: Exploring the next Era with Microsoft Azure",
    image: workshopCertificateGenAItoAgenticAi,
  },
  {
    title: "C and C++",
    issuer: "Sky It Institute of Computer Education",
    date: "2022",
    category: "course" as const,
    description: "Successfully completed a 3-month 'C & C++ Programming' course from Sky IT Institute of Computer Education, Ranchi, in March–April 2022. Built a strong foundation in procedural programming, logic building, and core programming concepts using C and C++.",
    image: candCplusplusCertificate,
  },
  {
    title: "AI Tools Workshop",
    issuer: "be10x",
    date: "2024",
    category: "course" as const,
    description: "Successfully completed a 1-day AI Tools Workshop conducted by be10X on 21st January 2024. Gained practical exposure to modern AI tools and workflows, enhancing productivity and understanding of real-world AI applications.",
    image: aiToolWorkshop,
  },
  {
    title: "GenAI and OpenAI",
    issuer: "Coursera",
    date: "2025",
    category: "course" as const,
    description: "Successfully completed the 'OpenAI and Generative AI' online non-credit course authorized by SRM University and offered through Coursera. Gained foundational understanding of OpenAI technologies and Generative AI concepts, validated through identity-verified course completion.",
    image: genAiandOpenAiBasic,
  },
];

const filterOptions: { label: string; value: CertificateCategory }[] = [
  { label: "All", value: "all" },
  { label: "Courses", value: "course" },
  { label: "Internships", value: "internship" },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<CertificateCategory>("all");

  const filteredCertificates = certificates.filter((cert) => {
    if (activeFilter === "all") return true;
    return cert.category === activeFilter;
  });

  return (
    <Layout>
      <section className="py-24 relative overflow-hidden">
        <CertificatesFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="My"
            highlight="Certificates"
            subtitle="Professional certifications and achievements"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                onClick={() => setActiveFilter(option.value)}
                className="min-w-[100px]"
              >
                {option.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl border border-border card-hover overflow-hidden"
              >
                {cert.image && (
                  <div 
                    className="aspect-video overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(cert.image)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span className="text-primary">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none">
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors">
            <X className="w-6 h-6 text-foreground" />
          </DialogClose>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-full object-contain max-h-[90vh] rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Certificates;
