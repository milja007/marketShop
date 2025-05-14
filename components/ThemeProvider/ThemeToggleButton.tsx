// components/ThemeToggleButton.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Sun Icon SVG
const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 011.06-1.06l1.591 1.59a.75.75 0 11-1.06 1.06l-1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.836 17.836a.75.75 0 01-1.06 1.06l-1.591-1.591a.75.75 0 111.06-1.06l1.591 1.591zm-1.06-7.07a.75.75 0 011.06 0l1.591 1.591a.75.75 0 11-1.06 1.06l-1.591-1.59a.75.75 0 010-1.061zM12 21a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V20.25A.75.75 0 0112 21zM6.106 18.894a.75.75 0 01-1.06-1.06l1.591-1.591a.75.75 0 111.06 1.06l-1.591 1.591zM3.439 12.439a.75.75 0 010-1.06l1.591-1.591a.75.75 0 111.06 1.06l-1.591 1.59a.75.75 0 01-1.06 0zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" />
  </svg>
);

// Moon Icon SVG
const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.51 1.713-6.625 4.362-8.452a.75.75 0 01.819.162z"
      clipRule="evenodd"
    />
  </svg>
);

export function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a skeleton or null to avoid hydration mismatch
    // Matching the size of your LoginSvg
    return (
      <button
        aria-label="Toggle theme"
        disabled
        className="p-0" // Assuming LoginSvg had minimal padding on the button itself
      >
        <div className="w-6 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
      </button>
    );
  }

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      // Adapt styling from your LoginSvg and make it theme-aware
      // text-foreground will use the current theme's text color
      // hover:text-primary will use your theme's primary color for hover
      className="p-0 text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
      // If you want to keep a very similar hover to --color-whitee:
      // className="text-foreground hover:text-[--color-whitee] focus:outline-none ..."
      // You might need a dark mode equivalent for --color-whitee if it doesn't contrast well.
    >
      {isDarkMode ? (
        <SunIcon className="w-6 h-6" /> // Show Sun icon to switch to light
      ) : (
        <MoonIcon className="w-6 h-6" /> // Show Moon icon to switch to dark
      )}
    </button>
  );
}
