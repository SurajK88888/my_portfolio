// ============================================================
// LoadingScreen.tsx — Initial page loader shown on first visit.
// Auto-dismisses after `duration` ms (default 1500ms).
// Props: onComplete() — called when animation finishes.
// Reusable: can be placed in any app, change logo/colors via CSS vars.
// ============================================================
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
  duration?: number; // ms before dismissing, default 1500
}

const LoadingScreen = ({ onComplete, duration = 1500 }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Animate progress bar from 0 → 100 over `duration` ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // increments ~50 times over duration
      });
    }, duration / 50);

    // Start fade-out slightly before calling onComplete
    const fadeTimer = setTimeout(() => setFading(true), duration - 200);
    const doneTimer = setTimeout(onComplete, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-300 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Glow background orb */}
      <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Logo / Initials */}
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-3xl font-bold text-white font-space">SK</span>
        </div>
        {/* Spinning ring */}
        <div className="absolute -inset-1 rounded-2xl border-2 border-primary/30 border-t-primary animate-spin" />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold font-space text-foreground mb-1">Suraj Kumar</h1>
      <p className="text-muted-foreground text-sm mb-8">Gen AI · Full Stack · Designer</p>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
