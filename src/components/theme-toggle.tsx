import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function readStoredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  return stored === "dark" || stored === "light" ? stored : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#141414" : "#ffffff");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // The inline script in src/routes/__root.tsx already painted the DOM with
  // the stored theme before hydration. useEffect only syncs React state so the
  // button icon reflects reality on first render after hydration.
  useEffect(() => {
    setTheme(readStoredTheme());
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:underline focus-visible:decoration-current focus-visible:underline-offset-4"
    >
      <span aria-hidden="true" className="text-xs">
        {theme === "dark" ? "☾" : "☀"}
      </span>
    </button>
  );
}
