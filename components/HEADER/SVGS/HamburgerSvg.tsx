// MobileMenu.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MENUDATA } from "@/data(fake)/CONSTANTS/CATEGORIES";
import Image, { StaticImageData } from "next/image";
import { ThemeToggleButton } from "@/components/ThemeProvider/ThemeToggleButton";

// Define Category and Subcategory interfaces (assuming they are similar to LinkNavbar)
interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  src: StaticImageData;
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

const CloseSvg = ({ className = "w-6 h-6" }: { className?: string }) => (
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

const HamburgerSvg = ({ className = "w-6 h-6" }: { className?: string }) => (
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

  // Updated icon button style with theme variables
  const iconButtonStyle = `
    p-2 rounded-full 
    text-muted-foreground hover:text-primary hover:bg-muted
    dark:text-muted-foreground dark:hover:text-primary dark:hover:bg-muted
    transition-colors duration-200 focus:outline-none focus:ring-2
    focus:ring-ring focus:ring-offset-1 dark:focus:ring-offset-card 
  `; // ring-offset from card as panel is bg-card

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
          // Using black with alpha for overlay in both modes for simplicity
          className="fixed inset-0 bg-black/60 dark:bg-black/70 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <div
        className={`
          fixed top-0 left-0 h-screen w-64 sm:w-72
          bg-card text-card-foreground /* Panel uses card theme */
          z-50 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden font-sans
        `} // Removed shadow
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-heading"
      >
        <div className="flex items-center justify-between p-4 border-b border-border h-16 flex-shrink-0">
          <h2
            id="menu-heading"
            className="font-bold text-lg" // Inherits text-card-foreground
          >
            MENU
          </h2>
          <div className="flex items-center space-x-2">
            <ThemeToggleButton />
            <button
              onClick={closeMenu}
              className={iconButtonStyle}
              aria-label="Close menu"
            >
              <CloseSvg className="w-6 h-6" />
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
                <div
                  className={`flex items-center px-2 py-1 transition-colors duration-150 ${
                    isCategoryOpen
                      ? "bg-accent text-accent-foreground" // Selected item uses accent
                      : "hover:bg-muted" // Hover uses muted
                  }`}
                >
                  <Image
                    src={cat.src}
                    alt={`${cat.name} category icon`}
                    width={25}
                    height={25}
                    className="mr-3 flex-shrink-0 rounded"
                  />
                  <button
                    className="w-full flex items-center justify-between px-1 py-2 text-sm font-semibold text-left" // Inherits text color
                    onClick={() =>
                      setOpenCategory(isCategoryOpen ? null : cat.name)
                    }
                    aria-expanded={isCategoryOpen}
                  >
                    <span
                      className={`${
                        isCategoryOpen ? "text-cactus" : "" // Special color for open category name
                      }`}
                    >
                      {cat.name}
                    </span>
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <Arrowsvg
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                          isCategoryOpen
                            ? "rotate-90 text-cactus" // Arrow also cactus when open
                            : ""
                        }`}
                      />
                    )}
                  </button>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isCategoryOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {cat.subcategories && cat.subcategories.length > 0 && (
                    // Submenu uses muted background
                    <ul className="pl-8 pr-2 py-1 bg-muted text-muted-foreground">
                      {cat.subcategories.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.slug}
                            // Submenu links hover to accent
                            className="block px-4 py-2 text-sm hover:text-accent-foreground hover:bg-accent rounded transition-colors duration-150"
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
