"use client";

import Link from "next/link";
import { useState } from "react";
import Arrowsvg from "./Arrowsvg";
import LoginSvg from "./LoginSvg";
const menuData = [
  {
    name: "Grow Tents",
    slug: "/grow-tents", // This slug will be used for the main category link
    subcategories: [
      { name: "Budget Tents", slug: "/grow-tents/budget" },
      { name: "Premium Tents", slug: "/grow-tents/premium" },
      { name: "Propagation Tents", slug: "/grow-tents/propagation" },
    ],
  },
  {
    name: "Lighting",
    slug: "/lighting",
    subcategories: [
      { name: "LED Grow Lights", slug: "/lighting/led" },
      { name: "HPS Grow Lights", slug: "/lighting/hps" },
      { name: "Light Reflectors", slug: "/lighting/reflectors" },
      { name: "Ballasts", slug: "/lighting/ballasts" },
    ],
  },
  {
    name: "Ventilation",
    slug: "/ventilation",
    subcategories: [
      { name: "Extractors", slug: "/ventilation/extractors" },
      { name: "Carbon Filters", slug: "/ventilation/filters" },
      { name: "Ducting & Fans", slug: "/ventilation/ducting" },
    ],
  },
  {
    name: "Nutrients",
    slug: "/nutrients",
    subcategories: [],
  },
  {
    name: "Ventilation2",
    slug: "/ventilation",
    subcategories: [
      { name: "Extractors", slug: "/ventilation/extractors" },
      { name: "Carbon Filters", slug: "/ventilation/filters" },
      { name: "Ducting & Fans", slug: "/ventilation/ducting" },
    ],
  },
  {
    name: "Ventilation3",
    slug: "/ventilation",
    subcategories: [
      { name: "Extractors", slug: "/ventilation/extractors" },
      { name: "Carbon Filters", slug: "/ventilation/filters" },
      { name: "Ducting & Fans", slug: "/ventilation/ducting" },
    ],
  },
];

const HamburgerSvg = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen((open) => !open);
  }
  return (
    <>
      {menuOpen ? (
        <div className="flex flex-column scale-z-50 border border-red-500 absolute top-0 left-8  w-max h-max">
          <div className="  border border-red-500 bg-red-100">
            <h1>MENU</h1>
            <LoginSvg />
            <Arrowsvg />
          </div>

          <ul className="flex flex-col justify-center max-w-screen-xl mx-auto relative right-14  ">
            {menuData.map((category) => (
              <li
                key={category.name}
                className="group relative font-semibold px-3 py-2 text-sm  text-gray-700 
              border-b-5 border-transparent        
              hover:border-green-500  h-12.5             
              transition-all duration-200 "
              >
                <Link
                  href={category.slug}
                  className=" font-semibold px-4 py-3 text-sm  text-gray-700 hover:text-emerald-900  flex items-center whitespace-nowrap  group-hover:text-black"
                >
                  {category.name}

                  {category.subcategories &&
                    category.subcategories.length > 0 && <Arrowsvg />}
                </Link>

                {category.subcategories &&
                  category.subcategories.length > 0 && (
                    <ul
                      className={`
                      absolute    
                      bg-white border border-gray-300 rounded-b-md shadow-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible /* Still works! */
                      transition-all duration-200 ease-in-out
                      z-50 min-w-[200px]
                      `}
                      role="menu"
                      aria-orientation="horizontal"
                    >
                      {category.subcategories.map((sub) => (
                        <li key={sub.name} role="none">
                          <Link
                            href={sub.slug}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-900"
                            role="menuitem"
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
      ) : (
        <svg
          className="w-6 h-6 text-gray-700 md:hidden"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          onClick={openMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </>
  );
};

export default HamburgerSvg;
