// @/components/ThemeProvider/ThemeProvider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // Essential for Tailwind CSS dark mode
      defaultTheme="system" // Recommended: respects user's system preference
      enableSystem
      disableTransitionOnChange // Optional: can prevent flashes on theme change
      {...props} // Spreads any other props you might pass to your ThemeProvider
    >
      {children}
    </NextThemesProvider>
  );
}
