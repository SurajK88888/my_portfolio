// ============================================================
// Testimonials.tsx — Client testimonials page.
// Features:
//   1. Static testimonial cards from the testimonials array
//   2. PDF Testimonial Viewer: client can click to see PDF proof
//   3. Upload button so you can add new PDFs from the browser
//      (stored in localStorage as base64 for demo; in production
//      you'd upload to a server/cloud storage instead)
// To add static testimonials: edit the testimonials array.
// ============================================================
import { useState, useRef } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/ui/SEOHead";
import SectionTitle from "@/components/ui/SectionTitle";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Quote, Star, FileText, Upload, X, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// ── Static testimonial data — edit here to add/remove ────────
const testimonials = [
  {
    name: "Pankaj Kumar",
    role: "Business Owner",
    company: "EG Sound World",
    content:
      "Suraj delivered an exceptional e-commerce website that exceeded our expectations. Professional, responsive, and highly skilled in WordPress development.",
    rating: 5,
    pdfUrl: "", // Add a PDF proof URL or leave empty
  },
  {
    name: "Soumya Sourya",
    role: "Psychologist",
    company: "Psycho Bubble",
    content:
      "The psychology services platform Suraj built is fantastic. The booking system and payment integration work flawlessly. Highly recommended!",
    rating: 5,
    pdfUrl: "", // Add a PDF proof URL or leave empty
  },
];

// ── PDF Testimonial type (for uploaded ones) ──────────────────
interface PdfTestimonial {
  id: string;
  name: string;
  dataUrl: string; // base64 PDF data
  uploadedAt: string;
}

// Load any previously uploaded PDF testimonials from localStorage
const loadUploadedPdfs = (): PdfTestimonial[] => {
  try {
    return JSON.parse(localStorage.getItem("testimonial_pdfs") || "[]");
  } catch {
    return [];
  }
};

const Testimonials = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [uploadedPdfs, setUploadedPdfs] = useState<PdfTestimonial[]>(loadUploadedPdfs);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle PDF file selection and store as base64 in localStorage
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast({ title: "Invalid file", description: "Please upload a PDF file.", variant: "destructive" });
      return;
    }
    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      const newPdf: PdfTestimonial = {
        id: Date.now().toString(),
        name: file.name.replace(".pdf", ""),
        dataUrl,
        uploadedAt: new Date().toLocaleDateString(),
      };
      const updated = [...uploadedPdfs, newPdf];
      setUploadedPdfs(updated);
      localStorage.setItem("testimonial_pdfs", JSON.stringify(updated));
      setIsUploading(false);
      toast({ title: "Uploaded!", description: `"${newPdf.name}" added to testimonials.` });
    };
    reader.readAsDataURL(file);
    // Reset input so same file can be re-uploaded
    e.target.value = "";
  };

  // Remove a PDF testimonial by id
  const handleRemovePdf = (id: string) => {
    const updated = uploadedPdfs.filter((p) => p.id !== id);
    setUploadedPdfs(updated);
    localStorage.setItem("testimonial_pdfs", JSON.stringify(updated));
    toast({ title: "Removed", description: "PDF testimonial removed." });
  };

  return (
    <Layout>
      <SEOHead title="Testimonials" description="What clients and colleagues say about my work." />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Client"
            highlight="Testimonials"
            subtitle="What people say about working with me"
          />

          {/* ── Static testimonial cards ───────────────────────── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-card rounded-xl border border-border card-hover relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

                {/* Star rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">"{t.content}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar initials */}
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{t.name}</h4>
                      <p className="text-muted-foreground text-xs">{t.role} at {t.company}</p>
                    </div>
                  </div>

                  {/* View PDF proof if available */}
                  {t.pdfUrl && (
                    <button
                      onClick={() => setSelectedPdf(t.pdfUrl)}
                      title="View testimonial proof"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── PDF Testimonials section ───────────────────────── */}
          <div className="border border-border rounded-2xl p-8 bg-card/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  PDF Testimonials
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Official testimonials and recommendations in document form
                </p>
              </div>

              {/* Upload button */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  disabled={isUploading}
                >
                  <Upload size={16} />
                  {isUploading ? "Uploading..." : "Add PDF Testimonial"}
                </Button>
              </div>
            </div>

            {/* Uploaded PDF grid */}
            {uploadedPdfs.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>No PDF testimonials yet. Click "Add PDF Testimonial" to upload one.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {uploadedPdfs.map((pdf) => (
                  <div
                    key={pdf.id}
                    className="group relative p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{pdf.name}</h4>
                        <p className="text-muted-foreground text-xs mt-1">Added {pdf.uploadedAt}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1 gap-1 text-xs"
                        onClick={() => setSelectedPdf(pdf.dataUrl)}
                      >
                        <ExternalLink size={12} /> View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1 text-xs text-destructive hover:text-destructive"
                        onClick={() => handleRemovePdf(pdf.id)}
                      >
                        <X size={12} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── PDF Viewer Dialog ─────────────────────────────────── */}
      <Dialog open={!!selectedPdf} onOpenChange={() => setSelectedPdf(null)}>
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-background border-border">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-primary p-2 text-primary-foreground hover:bg-primary/90 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          {selectedPdf && (
            <iframe
              src={selectedPdf}
              className="w-full h-full rounded-lg"
              title="Testimonial PDF"
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Testimonials;
