import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Download, FileText, Eye, X } from "lucide-react";
import resumePdf from "@/assets/resume_suraj_kumar.pdf";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Suraj_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="My"
            highlight="Resume"
            subtitle="Download my resume to learn more about my qualifications"
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-2">Suraj Kumar</h3>
              <p className="text-primary mb-4">Gen AI / AI Application Developer</p>
              <p className="text-muted-foreground mb-8">
                MCA (Generative AI) student at SRM University with 3+ years of web development 
                experience and expertise in AI technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="gap-2" onClick={handleDownload}>
                  <Download size={18} />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" className="gap-2" onClick={() => setShowResume(true)}>
                  <Eye size={18} />
                  View Online
                </Button>
              </div>
            </div>

            {/* Resume Preview */}
            <div className="mt-12 bg-card rounded-xl border border-border p-8">
              <h4 className="text-xl font-bold mb-6 text-primary">Quick Overview</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold mb-2">Education</h5>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• MCA (Generative AI) - SRM University (2025-2027)</li>
                    <li>• BCA - Ranchi University (2021-2024)</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">Experience</h5>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 3+ years Web Development</li>
                    <li>• 2+ years WordPress Development</li>
                    <li>• Freelance Graphic Designer</li>
                    <li>• AI Application Development</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-2">Key Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Python", "AI Tools", "WordPress", "Figma", "MERN Stack"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Resume Dialog */}
      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-background border-border">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90 transition-colors">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <iframe
            src={resumePdf}
            className="w-full h-full rounded-lg"
            title="Resume"
          />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Resume;
