import { useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/ui/SEOHead";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Github, MessageCircle, Send, Loader2, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

// ─── EmailJS config — update these keys in your .env or here ───────────────
const EMAILJS_SERVICE_ID = "service_sr4x7ho";
const EMAILJS_TEMPLATE_ID = "template_7wmtlrv";
const EMAILJS_PUBLIC_KEY = "i3pslQzDctD8raY7T";

// ─── Contact info — edit here to update across the page ────────────────────
const CONTACT_INFO = {
  email: "surajk961612@gmail.com",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/suraj-kumar-4209b8188",
  github: "https://github.com/SurajK88888",
  whatsapp: "", // Add your WhatsApp URL here e.g. "https://wa.me/91XXXXXXXXXX"
};

// ─── Form validation schema ─────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Copy email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
    toast({ title: "Copied!", description: "Email address copied to clipboard." });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      toast({ title: "Validation Error", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({ title: "Failed to Send", description: "Something went wrong. Please try again or email directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <SEOHead title="Contact" description="Get in touch for projects, ideas, or opportunities." />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Get In" highlight="Touch" subtitle="Have a project in mind? Let's work together" />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* ── Contact Info Panel ─────────────────────────────────── */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {/* Email row — with copy button */}
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border group hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium group-hover:text-primary transition-colors truncate block">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  {/* Copy email to clipboard button */}
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    {emailCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                <h4 className="font-semibold">Connect With Me</h4>
                <div className="flex gap-4">
                  <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  {CONTACT_INFO.whatsapp && (
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                      <MessageCircle size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* ── Contact Form ────────────────────────────────────────── */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="bg-background" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required className="bg-background" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} required className="bg-background resize-none" />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Send Message</>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
