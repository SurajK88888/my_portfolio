// ============================================================
// Footer.tsx — Site footer with quick links, contact info,
//              social links, back-to-top button, and tech credit.
// ============================================================
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

// ── Footer data — edit here to update across the footer ──────
const SOCIAL = {
  linkedin: "https://linkedin.com/in/suraj-kumar-4209b8188",
  github: "https://github.com/SurajK88888",
  email: "surajk961612@gmail.com",
};

const quickLinks = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50 relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ── Brand ────────────────────────────────────────── */}
          <div>
            <Link to="/" className="text-2xl font-bold font-space text-primary glow-text">
              Suraj Kumar
            </Link>
            <p className="mt-3 text-muted-foreground text-sm max-w-xs">
              Gen AI / AI Application Developer passionate about building intelligent web applications.
            </p>
            {/* Availability badge */}
            <span className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* ── Quick Links ───────────────────────────────────── */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Contact & Socials ─────────────────────────────── */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SOCIAL.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail size={15} />
                <span>{SOCIAL.email}</span>
              </a>
            </div>
            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
          <p>© {currentYear} Suraj Kumar. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-primary font-medium">React</span>
            {" & "}
            <span className="text-primary font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>

      {/* ── Back to top button (fixed bottom-right) ──────────── */}
      <button
        onClick={scrollToTop}
        title="Back to top"
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-primary/40 hover:shadow-lg transition-all duration-200"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
