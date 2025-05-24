// MobileMenu.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import MENUDATA from "@/data(fake)/CONSTANTS/CATEGORIES.json";
import Image from "next/image";
import { ThemeToggleButton } from "@/components/ThemeProvider/ThemeToggleButton";

// Define Category and Subcategory interfaces
interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  src: string;
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}

// --- SVG Components (left as is per instruction, they use currentColor) ---
const LoginSvg = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
  </svg>
);

const Arrowsvg = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const CloseSvg = ({ className = "w-6 h-6 " }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const HamburgerSvg = ({ className = "w-6 h-6 " }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
// --- End SVG Components ---

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenCategory(null);
  };

  // Updated icon button style with "browny zinc" (stone) for light mode
  const iconButtonStyle = `
    p-2 rounded-full 
    text-stone-600 hover:text-stone-800 hover:bg-stone-100 /* Light mode: Stone text, darker Stone hover text, Stone hover bg */
    dark:text-muted-foreground dark:hover:text-primary dark:hover:bg-muted /* Original dark mode styles */
    transition-colors duration-200 focus:outline-none focus:ring-2
    focus:ring-ring focus:ring-offset-2 focus:ring-offset-background 
    dark:focus:ring-offset-card 
  `;

  const typedMenudata = MENUDATA as Category[];

  return (
    <>
      {!menuOpen && (
        <button
          onClick={openMenu}
          className={`${iconButtonStyle} md:hidden`}
          aria-label="Open menu"
        >
          <HamburgerSvg className="w-6 h-6" />
        </button>
      )}

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-screen w-64 sm:w-72
          bg-card text-card-foreground shadow-xl 
          z-50 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden font-sans
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-heading"
      >
        <div className="flex items-center justify-between p-4 border-b border-border h-16 flex-shrink-0">
          <h2
            id="menu-heading"
            className="font-bold text-lg text-stone-800 dark:text-card-foreground" // Browny zinc (stone) title in light mode
          >
            MENU
          </h2>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <ThemeToggleButton />
            <button
              onClick={closeMenu}
              className={iconButtonStyle}
              aria-label="Close menu"
            >
              <CloseSvg className="w-6 h-6 " />
            </button>
          </div>
        </div>

        <ul className="flex-grow overflow-y-auto py-2">
          {typedMenudata.map((cat) => {
            const isCategoryOpen = openCategory === cat.name;
            return (
              <li
                key={cat.name}
                className="border-b border-border last:border-b-0"
              >
                <div // Clickable area for category
                  className={`flex items-center px-3 py-2 transition-colors duration-150 group ${
                    isCategoryOpen
                      ? "bg-stone-100 dark:bg-accent dark:text-accent-foreground" // Light: Active Stone bg. Dark: Original active.
                      : "hover:bg-stone-100 dark:hover:bg-muted" // Light: Hover Stone bg. Dark: Original hover.
                  }`}
                >
                  <Image
                    src={cat.src}
                    alt={`${cat.name} category icon`}
                    width={24}
                    height={24}
                    className="mr-3 flex-shrink-0 rounded h-auto w-auto "
                    // Ensure priority is NOT set here, or is explicitly priority={false}
                  />
                  <button
                    className="w-full flex items-center justify-between text-sm text-left"
                    onClick={() =>
                      setOpenCategory(isCategoryOpen ? null : cat.name)
                    }
                    aria-expanded={isCategoryOpen}
                  >
                    <span // Category name styling
                      className={` 
                        ${
                          isCategoryOpen
                            ? "font-semibold text-stone-800 dark:text-accent-foreground" // Light: Darker Stone, bold. Dark: Original active.
                            : "font-medium text-stone-700 dark:text-card-foreground" // Light: Browny Stone. Dark: Original.
                        }`}
                    >
                      {cat.name}
                    </span>
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <Arrowsvg // Arrow styling
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                          isCategoryOpen
                            ? "rotate-90 text-stone-800 dark:text-accent-foreground" // Light: Darker Stone. Dark: Original active.
                            : "text-stone-500 dark:text-muted-foreground/70" // Light: Muted Stone. Dark: Original muted.
                        }`}
                      />
                    )}
                  </button>
                </div>

                <div // Submenu container
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isCategoryOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {cat.subcategories && cat.subcategories.length > 0 && (
                    <ul className="pl-10 pr-2 py-1.5 bg-stone-50 dark:bg-muted text-stone-700 dark:text-muted-foreground">
                      {" "}
                      {/* Light: Lighter Stone bg, Stone text. Dark: Original. */}
                      {cat.subcategories.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.slug}
                            className="block px-4 py-1.5 text-sm rounded transition-colors duration-150
                                       hover:bg-stone-200 hover:text-stone-800  /* Light: Stone hover bg, Darker Stone hover text */
                                       dark:hover:text-accent-foreground dark:hover:bg-accent /* Original dark hover */"
                            onClick={closeMenu}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
