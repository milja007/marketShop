"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MENUDATA } from "@/data(fake)/CONSTANTS/CATEGORIES"; // Ensure this data structure matches Category interface below
import Image, { StaticImageData } from "next/image";

// Define Category and Subcategory interfaces if not already globally defined
interface Subcategory {
  name: string;
  slug: string;
}

interface Category {
  src: StaticImageData; // Assuming src is always StaticImageData from import
  name: string;
  slug: string; // Although not used in MobileMenu logic, good to keep for consistency
  subcategories?: Subcategory[]; // Make subcategories optional
}

// --- SVG Components ---
// Added className prop to allow styling from parent
// Use currentColor for fill/stroke to inherit text color

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
    strokeWidth={2} // Ensure strokeWidth is set
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

// --- MobileMenu Component ---

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenCategory(null); // Collapse categories when closing menu
  };

  // Use the same icon style as the main navbar for consistency
  // Added more distinct hover colors
  const iconButtonStyle = `
    p-2 rounded-full text-zinc-600 hover:text-emerald-600 hover:bg-zinc-200
    dark:text-zinc-300 dark:hover:text-emerald-400 dark:hover:bg-zinc-700
    transition-colors duration-200 focus:outline-none focus:ring-2
    focus:ring-emerald-500 focus:ring-offset-1 dark:focus:ring-offset-zinc-900
  `;

  // Cast MENUDATA to the expected type
  const typedMenudata = MENUDATA as Category[];

  return (
    <>
      {/* Hamburger Button (visible only on mobile) */}
      {!menuOpen && (
        <button
          onClick={openMenu}
          className={`${iconButtonStyle} md:hidden`} // Apply consistent icon style, hide on md+
          aria-label="Open menu"
        >
          <HamburgerSvg className="w-6 h-6" />
        </button>
      )}

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 dark:bg-zinc-900/80 z-40 md:hidden" // Made overlay darker
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Menu Panel */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 sm:w-72
          bg-zinc-50 dark:bg-zinc-900 shadow-xl z-50 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden font-sans
        `} // Darker dark bg (zinc-900), lighter light bg (zinc-50)
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-heading"
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-300 dark:border-zinc-700 h-16 flex-shrink-0">
          <h2
            id="menu-heading"
            className="font-bold text-lg text-zinc-900 dark:text-zinc-100"
          >
            MENU
          </h2>
          <div className="flex items-center space-x-2">
            {/* Login Icon/Link - FIXED: Removed nested <a> */}
            <Link
              href="/login"
              className={iconButtonStyle} // Apply styles directly to Link
              aria-label="Login / My Account"
              onClick={closeMenu} // Close menu on click
            >
              <LoginSvg className="w-5 h-5" />
            </Link>
            {/* Close Button */}
            <button
              onClick={closeMenu}
              className={iconButtonStyle} // Apply consistent icon style
              aria-label="Close menu"
            >
              <CloseSvg className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Menu Body (Scrollable) */}
        <ul className="flex-grow overflow-y-auto py-2">
          {typedMenudata.map((cat) => {
            const isCategoryOpen = openCategory === cat.name;
            return (
              <li
                key={cat.name}
                className="border-b border-zinc-200 dark:border-zinc-700 last:border-b-0"
              >
                {/* Category Item Wrapper */}
                <div
                  className={`flex items-center px-2 py-1 transition-colors duration-150 ${
                    isCategoryOpen
                      ? "bg-zinc-100 dark:bg-zinc-800"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {/* Category Image */}
                  <Image
                    src={cat.src}
                    alt={`${cat.name} category icon`} // Better alt text
                    width={25}
                    height={25} // Ensure height is also set
                    className="mr-3 flex-shrink-0 rounded" // Added margin and rounded
                  />
                  {/* Category Button/Link */}
                  <button
                    className="w-full flex items-center justify-between px-1 py-2 text-sm font-semibold text-left text-zinc-800 dark:text-zinc-200"
                    onClick={() =>
                      setOpenCategory(isCategoryOpen ? null : cat.name)
                    }
                    aria-expanded={isCategoryOpen} // Accessibility
                  >
                    <span
                      className={`${
                        isCategoryOpen
                          ? "text-emerald-700 dark:text-emerald-400"
                          : ""
                      }`}
                    >
                      {cat.name}
                    </span>
                    {/* Arrow Icon - rotates on open */}
                    {cat.subcategories && cat.subcategories.length > 0 && (
                      <Arrowsvg
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                          isCategoryOpen
                            ? "rotate-90 text-emerald-700 dark:text-emerald-400"
                            : ""
                        }`}
                      />
                    )}
                  </button>
                </div>

                {/* Submenu (Conditional & Animated - basic height transition) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isCategoryOpen ? "max-h-96" : "max-h-0"
                  }`} // Basic height animation
                >
                  {cat.subcategories && cat.subcategories.length > 0 && (
                    <ul className="pl-8 pr-2 py-1 bg-zinc-100 dark:bg-zinc-800">
                      {" "}
                      {/* Slightly different bg for submenu */}
                      {cat.subcategories.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.slug}
                            className="block px-4 py-2 text-sm text-zinc-700 hover:text-emerald-700 hover:bg-zinc-200 dark:text-zinc-300 dark:hover:text-emerald-400 dark:hover:bg-zinc-700 rounded transition-colors duration-150" // Enhanced submenu links
                            onClick={closeMenu} // Close menu on sub-item click
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
