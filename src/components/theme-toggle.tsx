import { useEffect, useState } from "react";

import { ThemeSwitch, type Theme } from "@/components/arc/theme-switch/theme-switch";

function getStoredTheme(): Theme {
  try {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "oklch(18% 0.009 135)" : "oklch(97.8% 0.008 85)");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getStoredTheme());
  }, []);

  const changeTheme = (next: Theme) => {
    try {
      localStorage.setItem("theme", next);
    } catch {
      // The active appearance still changes if browser storage is unavailable.
    }
    applyTheme(next);
    setTheme(next);
  };

  return <ThemeSwitch theme={theme} variant="rise" iconOnly onThemeChange={changeTheme} />;
}
