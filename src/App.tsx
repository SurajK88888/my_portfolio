import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/context/ThemeContext";
import LoadingScreen from "@/components/ui/LoadingScreen";

import Index from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Testimonials from "./pages/Testimonials";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Show loading screen on initial mount; hide after it completes
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />

            {/* Full-page loading screen — auto-dismisses after 1.5s */}
            {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

            {/* Main app — rendered behind loader, visible after load */}
            <div className={loading ? "invisible" : "visible"}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/projects" element={<Projects />} />
                  {/* Case study detail page — id matches project slug */}
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </div>

            <Analytics />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
