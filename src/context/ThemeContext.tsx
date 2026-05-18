// ============================================================
// ThemeContext.tsx — Global dark/light mode state.
// Usage: wrap App with <ThemeProvider>, then use useTheme() hook
// in any component to get { theme, toggleTheme }.
// Theme persists in localStorage as "portfolio-theme".
// ============================================================
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Read saved preference, default to dark
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return (saved as Theme) || "dark";
  });

  // Apply/remove "dark" class on <html> whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Convenience hook — import and use anywhere: const { theme, toggleTheme } = useTheme();
export const useTheme = () => useContext(ThemeContext);
