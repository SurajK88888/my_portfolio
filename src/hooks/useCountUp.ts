// ============================================================
// useCountUp.ts — Animates a number from 0 to a target value.
// Triggers only when the element enters the viewport.
// Usage: const { count, ref } = useCountUp(target, duration);
// ============================================================
import { useState, useEffect, useRef } from "react";

const useCountUp = (target: number, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animate once when element first comes into view
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Ease-out: progress slows at the end
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

export default useCountUp;
