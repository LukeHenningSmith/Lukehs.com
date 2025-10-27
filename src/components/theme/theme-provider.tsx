import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  ...props
}: ThemeProviderProps) {
  const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) {
      /* ignore */
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      return "dark";
    return defaultTheme;
  };

  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return; // user preference wins

      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
        setThemeState(e.matches ? "dark" : "light");
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange as any);
      else if ((mq as any).addListener) (mq as any).addListener(onChange);

      return () => {
        if (mq.removeEventListener)
          mq.removeEventListener("change", onChange as any);
        else if ((mq as any).removeListener)
          (mq as any).removeListener(onChange);
      };
    } catch (e) {
      /* ignore */
    }
  }, []);

  const value = {
    theme,
    setTheme: (t: Theme) => {
      try {
        localStorage.setItem("theme", t);
      } catch (e) {
        /* ignore */
      }
      setThemeState(t);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
