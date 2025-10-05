import { Moon, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || !storedTheme) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "rounded-full transition-colors duration-300 cursor-pointer focus:outline-hidden"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunMedium className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />
      )}
    </button>
  );
};
