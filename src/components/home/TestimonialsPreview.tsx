import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialsFloatingElements from "@/components/ui/TestimonialsFloatingElements";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    company: "EG Sound World",
    content: "Suraj delivered an exceptional e-commerce website that exceeded our expectations. Professional, responsive, and highly skilled.",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Psychologist",
    company: "Psycho Bubble",
    content: "The psychology services platform Suraj built is fantastic. The booking system and payment integration work flawlessly.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Startup Founder",
    company: "TechStart India",
    content: "Working with Suraj on our AI-powered application was a great experience. He understands both technical and business aspects.",
    rating: 5,
  },
];

const TestimonialsPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <TestimonialsFloatingElements />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Client"
          highlight="Testimonials"
          subtitle="What people say about working with me"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border card-hover relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic line-clamp-3">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/testimonials">
            <Button variant="outline" size="lg" className="gap-2">
              View All Testimonials
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
