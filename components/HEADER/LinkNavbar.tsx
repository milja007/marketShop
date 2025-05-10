import Link from "next/link";
import React from "react";
import Arrowsvg from "./SVGS/Arrowsvg";
import { MENUDATA } from "@/data(fake)/CATEGORIES";
import HomeSvg from "./SVGS/HomeSvg";
const LinkNavbar = () => {
  return (
    <nav className="bg-alabaster border-b border-gray-300 w-full font-bold mt-4 overflow-x-auto overflow-y-hidden">
      <ul className="flex justify-center max-w-screen-xl mx-auto relative  ">
        <HomeSvg />
        {MENUDATA.map((category) => (
          <li
            key={category.name}
            className="group relative font-semibold px-3 py-2 text-sm  text-gray-700 
    border-b-5 border-transparent        
    hover:border-green-500  h-13            
    transition-all duration-200"
          >
            <Link
              href={category.slug}
              className=" font-semibold px-4 py-3 text-sm  text-gray-700 hover:text-emerald-900  flex items-center whitespace-nowrap  group-hover:text-black"
            >
              {category.name}

              {category.subcategories && category.subcategories.length > 0 && (
                <Arrowsvg />
              )}
            </Link>

            {category.subcategories && category.subcategories.length > 0 && (
              <ul
                className={`
                  absolute left- top-full mt-1.5 pt-1
                  bg-white border border-gray-300 rounded-b-md shadow-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible /* Still works! */
                  transition-all duration-200 ease-in-out
                  z-50 min-w-[200px]
                `}
                role="menu"
                aria-orientation="vertical"
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
    </nav>
  );
};

export default LinkNavbar;
