"use client";

import React, { useState } from "react";
import Link from "next/link";
import { menuData } from "@/data(fake)/categories";

// Placeholder SVGs — swap in your own icons if you like
const LoginSvg = () => (
  <svg className="w-5 h-5 ml-auto" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
  </svg>
);
const Arrowsvg = () => (
  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
const CloseSvg = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenCategory(null);
  };

  return (
    <>
      {/* Hamburger Icon */}
      {!menuOpen && (
        <button
          onClick={openMenu}
          className="p-2 md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
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
        </button>
      )}

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide‐out Panel */}
      <div
        className={`
          fixed top-0 left-0 h-screen w-64 sm:w-72
          bg-white shadow-xl z-50 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        {/* Menu */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16 flex-shrink-0">
          <h1 className="font-bold text-lg">MENU</h1>
          <div className="flex items-center">
            <LoginSvg />
            <button
              onClick={closeMenu}
              className="ml-4 p-1"
              aria-label="Close menu"
            >
              <CloseSvg />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <ul className="flex-grow overflow-y-auto p-2">
          {menuData.map((cat) => (
            <li key={cat.name} className="mb-2">
              <button
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-emerald-900 rounded transition-colors duration-150"
                onClick={() =>
                  setOpenCategory(openCategory === cat.name ? null : cat.name)
                }
              >
                <span>{cat.name}</span>
                {cat.subcategories && <Arrowsvg />}
              </button>

              {/* Submenu (click‐to‐open) */}
              {cat.subcategories && openCategory === cat.name && (
                <ul className="mt-1 bg-white border border-gray-300 rounded shadow-lg">
                  {cat.subcategories.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        href={sub.slug}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-900"
                        onClick={closeMenu}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
