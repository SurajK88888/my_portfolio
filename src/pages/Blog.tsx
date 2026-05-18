// ============================================================
// Blog.tsx — Blog / Articles listing page.
// Reads all posts from src/data/blogPosts.ts.
// Features: category filter, read modal (inline), scroll animations.
// To add a new post: edit src/data/blogPosts.ts only.
// ============================================================
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/ui/SEOHead";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Clock, Tag, X, BookOpen } from "lucide-react";
import { blogPosts, blogCategories, type BlogPost } from "@/data/blogPosts";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

// ── Animated card wrapper ─────────────────────────────────────
const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="transition-all duration-600"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ── Blog article card ─────────────────────────────────────────
const BlogCard = ({ post, onRead }: { post: BlogPost; onRead: (post: BlogPost) => void }) => (
  <div className="group bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col h-full">
    {/* Cover banner */}
    <div className="aspect-[3/1.5] bg-gradient-to-br from-primary/20 via-primary/10 to-card flex items-center justify-center border-b border-border">
      <span className="text-5xl">{post.emoji}</span>
    </div>

    <div className="p-6 flex flex-col flex-1">
      {/* Category + read time */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock size={12} /> {post.readTime}
        </span>
      </div>

      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground flex items-center gap-1">
            <Tag size={9} /> {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-muted-foreground">{post.date}</span>
        <Button size="sm" variant="outline" className="gap-1.5 text-xs hover:border-primary/50" onClick={() => onRead(post)}>
          <BookOpen size={13} /> Read
        </Button>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <SEOHead title="Blog & Articles" description="Thoughts on AI, web development, design, and the things I'm learning." />
      <section className="py-24 relative overflow-hidden">
        {/* Background orb */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Blog &"
            highlight="Articles"
            subtitle="Thoughts on AI, web development, design, and the things I'm learning"
          />

          {/* ── Category filter ────────────────────────────────── */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {blogCategories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={cn("min-w-[80px]", activeCategory === cat && "glow-button")}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* ── Blog cards grid ────────────────────────────────── */}
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {filtered.map((post, i) => (
                <AnimatedCard key={post.id} delay={i * 80}>
                  <BlogCard post={post} onRead={setSelectedPost} />
                </AnimatedCard>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <span className="text-4xl mb-4 block">📝</span>
              <p>No articles in this category yet. Check back soon!</p>
            </div>
          )}

          {/* ── Coming soon note ───────────────────────────────── */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm">
              More articles coming soon — covering AI, React, WordPress, and freelancing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Article reader dialog ─────────────────────────────── */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-secondary p-2 hover:bg-primary/20 transition-colors">
            <X className="h-4 w-4" />
          </DialogClose>

          {selectedPost && (
            <div className="pt-2">
              {/* Header */}
              <div className="text-5xl mb-4">{selectedPost.emoji}</div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock size={12} /> {selectedPost.readTime}
                </span>
                <span className="text-xs text-muted-foreground">{selectedPost.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
              {/* Article content */}
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {selectedPost.content}
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Blog;
