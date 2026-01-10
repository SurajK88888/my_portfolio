import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold font-space text-primary glow-text">
              Suraj Kumar
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Gen AI / AI Application Developer passionate about building intelligent web applications and leveraging cutting-edge AI technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:surajk961612@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <span className="text-sm">surajk961612@gmail.com</span>
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={16} />
                <span className="text-sm">+91-00000000</span>
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/in/suraj-kumar-4209b8188"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/SurajK88888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {currentYear} Suraj Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
