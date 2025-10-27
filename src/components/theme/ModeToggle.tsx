import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/theme-provider";
import { subtleButtonStyle } from "../layout/Header";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <Button
      variant={"ghost"}
      size="icon"
      onClick={() => {
        document.startViewTransition(switchTheme);
      }}
      className={subtleButtonStyle}
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
