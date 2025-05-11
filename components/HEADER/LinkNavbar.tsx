"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

// Assuming SVGs are now colocated or paths are adjusted
// If SVGS folder is inside components/LinkNavbar/
import Arrowsvg from "./SVGS/Arrowsvg";
import HomeSvg from "./SVGS/HomeSvg";
// If SVGs are in a global components/SVGS folder, use:
// import Arrowsvg from "@/components/SVGS/Arrowsvg";
// import HomeSvg from "@/components/SVGS/HomeSvg";

import { MENUDATA } from "@/data(fake)/CATEGORIES"; // This path should still work if it's an alias

import SubmenuContent from "./SubmenuContent";
import { StaticImageData } from "next/image";
export interface Subcategory {
  name: string;
  slug: string;
}
interface SubmenuPosition {
  top: number;
  left: number;
}
interface Category {
  src: StaticImageData;
  name: string;
  slug: string;
  subcategories: Subcategory[];
}
const LinkNavbar: React.FC = () => {
  const [activeCategoryName, setActiveCategoryName] = useState<string | null>(
    null
  );
  const [submenuPosition, setSubmenuPosition] = useState<SubmenuPosition>({
    top: 0,
    left: 0,
  });
  const [currentSubcategories, setCurrentSubcategories] = useState<
    Subcategory[]
  >([]);
  const categoryItemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculateAndSetPosition = useCallback((categoryName: string) => {
    const parentLiElement = categoryItemRefs.current[categoryName];
    if (parentLiElement) {
      const rect = parentLiElement.getBoundingClientRect();
      setSubmenuPosition({
        top: rect.bottom + 2,
        left: rect.left,
      });
    }
  }, []);

  const handleCategoryMouseEnter = (category: Category) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    if (category.subcategories && category.subcategories.length > 0) {
      setCurrentSubcategories(category.subcategories);
      setActiveCategoryName(category.name);
      requestAnimationFrame(() => calculateAndSetPosition(category.name));
    } else {
      setActiveCategoryName(null);
      setCurrentSubcategories([]);
    }
  };

  const handleCategoryMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveCategoryName(null);
      setCurrentSubcategories([]);
    }, 200);
  };

  const handleSubmenuMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveCategoryName(null);
      setCurrentSubcategories([]);
    }, 200);
  };

  useEffect(() => {
    if (activeCategoryName) {
      const recompute = () => calculateAndSetPosition(activeCategoryName);
      window.addEventListener("scroll", recompute, true);
      window.addEventListener("resize", recompute);
      return () => {
        window.removeEventListener("scroll", recompute, true);
        window.removeEventListener("resize", recompute);
      };
    }
  }, [activeCategoryName, calculateAndSetPosition]);

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  const typedMenudata = MENUDATA as Category[];

  return (
    <nav className="bg-alabaster border-b border-gray-300 w-full font-bold">
      <div
        className="overflow-x-auto md:flex  lg:justify-center"
        style={{ overflowY: "visible" }}
      >
        <ul className="flex">
          <li className="flex ">
            <HomeSvg />
          </li>
          {typedMenudata.map((category) => (
            <li
              key={category.name}
              ref={(el: HTMLLIElement | null) => {
                categoryItemRefs.current[category.name] = el;
              }} // Corrected ref
              className="  font-semibold px-3 py-2 text-sm text-gray-700
                         border-b-5 border-transparent hover:border-green-500 h-13
                         flex-shrink-0 transition-all duration-200 cursor-default"
              onMouseEnter={() => handleCategoryMouseEnter(category)}
              onMouseLeave={handleCategoryMouseLeave}
            >
              <Link
                href={category.slug}
                className="font-semibold px-4 py-3 text-sm text-gray-700 hover:text-emerald-900 flex items-center whitespace-nowrap"
                onMouseEnter={() => handleCategoryMouseEnter(category)}
              >
                {category.name}
                {category.subcategories &&
                  category.subcategories.length > 0 && <Arrowsvg />}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isMounted &&
        activeCategoryName &&
        currentSubcategories.length > 0 &&
        createPortal(
          <SubmenuContent
            subcategories={currentSubcategories}
            style={{
              position: "fixed",
              top: `${submenuPosition.top}px`,
              left: `${submenuPosition.left}px`,
            }}
            onMouseEnter={handleSubmenuMouseEnter}
            onMouseLeave={handleSubmenuMouseLeave}
          />,
          document.body
        )}
    </nav>
  );
};

export default LinkNavbar;
