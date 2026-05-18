// ============================================================
// useScrollAnimation.ts — Reusable IntersectionObserver hook.
// Returns a ref + isVisible boolean.
// Usage: const { ref, isVisible } = useScrollAnimation();
//        Then: <div ref={ref} className={isVisible ? "animate-fade-up" : "opacity-0"}>
// threshold: 0–1, how much of the element must be visible to trigger (default 0.15)
// ============================================================
import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;   // 0.0–1.0; default 0.15
  once?: boolean;       // if true, stays visible once triggered; default true
}

const useScrollAnimation = ({ threshold = 0.15, once = true }: Options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing after first trigger if once=true
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, isVisible };
};

export default useScrollAnimation;
