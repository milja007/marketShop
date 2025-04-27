"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const categories = [
  {
    label: "Products",
    items: ["Lighting", "Ventilation", "Nutrition"],
  },
  {
    label: "Services",
    items: ["Consulting", "Design", "Support"],
  },
  {
    label: "Knowledge",
    items: ["Blog", "Guides", "Research"],
  },
  {
    label: "Company",
    items: ["About Us", "Team", "Contact"],
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 text-white z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight uppercase"
        >
          Grow Dutch
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-10 text-sm font-medium uppercase">
          {categories.map((cat) => (
            <div key={cat.label} className="relative group">
              <button className="flex items-center gap-1 hover:text-green-400 transition">
                {cat.label}
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-40 min-w-[160px]">
                {cat.items.map((item) => (
                  <Link
                    key={item}
                    href={`/category/${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Menu - Home + Login */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-green-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
              <path d="M9 22V12h6v10" />
            </svg>
          </Link>
          <Link
            href="/login"
            className={`hover:text-green-400 ${
              pathname === "/login" ? "underline" : ""
            }`}
          >
            Login
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 flex transition-transform duration-300 ease-in-out`}
      >
        {/* Left Slide-In Panel */}
        <div
          className={`w-[65%] bg-black transform ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col`}
        >
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
            <span className="text-xl font-semibold uppercase">Menu</span>
            <button onClick={() => setMobileOpen(false)}>
              <svg
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Home + Login */}
          <div className="flex justify-between px-6 py-4 border-b border-white/10">
            <Link href="/" className="hover:text-green-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 9.5L12 4l9 5.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                <path d="M9 22V12h6v10" />
              </svg>
            </Link>
            <Link href="/login" className="hover:text-green-400">
              Login
            </Link>
          </div>

          {/* Accordion Menu */}
          <div className="flex flex-col gap-4 px-6 mt-6 pb-8 overflow-y-auto">
            {categories.map((cat) => (
              <div key={cat.label} className="border-b border-white/10 pb-3">
                <button
                  onClick={() => toggleMobileDropdown(cat.label)}
                  className="w-full flex justify-between items-center text-lg uppercase"
                >
                  {cat.label}
                  <ChevronDownIcon
                    className={`w-5 h-5 transform transition-transform ${
                      activeDropdown === cat.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === cat.label && (
                  <div className="mt-2 ml-2 flex flex-col gap-2 text-sm">
                    {cat.items.map((item) => (
                      <Link
                        key={item}
                        href={`/category/${item
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                        className="text-gray-300 hover:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Transparent area at bottom */}
          <div className="flex-grow bg-black/30"></div>
        </div>

        {/* Right Translucent Overlay (backdrop) */}
        <div
          className={`w-[35%] bg-black/50 backdrop-blur-sm ${
            mobileOpen ? "block" : "hidden"
          }`}
          onClick={() => setMobileOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
