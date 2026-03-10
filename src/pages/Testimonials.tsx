import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Pankaj Kumar",
    role: "Business Owner",
    company: "EG Sound World",
    content: "Suraj delivered an exceptional e-commerce website that exceeded our expectations. Professional, responsive, and highly skilled in WordPress development.",
    rating: 5,
  },
  {
    name: "Soumya Sourya",
    role: "Psychologist",
    company: "Psycho Bubble",
    content: "The psychology services platform Suraj built is fantastic. The booking system and payment integration work flawlessly. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Client"
            highlight="Testimonials"
            subtitle="What people say about working with me"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border card-hover relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">
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
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
