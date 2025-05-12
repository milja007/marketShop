"use client";

import Link from "next/link";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";

// Assuming SVGs are now colocated or paths are adjusted
import Arrowsvg from "./SVGS/Arrowsvg"; // Make sure Arrowsvg is visible on dark bg
import HomeSvg from "./SVGS/HomeSvg"; // Make sure HomeSvg is visible on dark bg

import { MENUDATA } from "@/data(fake)/CONSTANTS/CATEGORIES";
import SubmenuContent from "./SubmenuContent"; // Ensure this component is also styled for the new theme
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
  src: StaticImageData; // This src is not used in the LinkNavbar JSX provided
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculateAndSetPosition = useCallback((categoryName: string) => {
    const parentLiElement = categoryItemRefs.current[categoryName];
    if (parentLiElement) {
      const rect = parentLiElement.getBoundingClientRect();
      setSubmenuPosition({ top: rect.bottom + 2, left: rect.left });
    }
  }, []);

  const handleCategoryMouseEnter = (category: Category) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
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
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
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
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const typedMenudata = MENUDATA as Category[];

  const updateFades = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      setShowLeftFade(false);
      setShowRightFade(false);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const scrollThreshold = 5;
    const canScroll = scrollWidth > clientWidth + scrollThreshold;

    if (!canScroll) {
      setShowLeftFade(false);
      setShowRightFade(false);
      return;
    }

    const atStart = scrollLeft < scrollThreshold;
    const atEnd = scrollWidth - clientWidth - scrollLeft < scrollThreshold;

    setShowLeftFade(!atStart);
    setShowRightFade(!atEnd);
  }, []);

  useLayoutEffect(() => {
    updateFades();
    const handleResize = () => updateFades();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateFades, typedMenudata]);

  useEffect(() => {
    const scrollElement = scrollContainerRef.current;
    if (!scrollElement) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateFades();
          ticking = false;
        });
        ticking = true;
      }
    };
    scrollElement.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
    };
  }, [updateFades]);

  return (
    <nav className="bg-zinc-800 border-b border-zinc-700 w-full font-sans shadow-lg">
      {/*
        Consider your custom fade CSS:
        If '.scroll-fade-container::before' and '::after' use white/light gradients
        for the fades, they might not look good on a dark background.
        You might need to adjust them to use dark gradients, e.g.,
        `linear-gradient(to right, var(--zinc-800), transparent)`
        where --zinc-800 is the same as bg-zinc-800.
      */}
      <div
        ref={scrollContainerRef}
        className={`
          overflow-x-auto md:flex lg:justify-center relative
          custom-horizontal-scrollbar scroll-fade-container
          ${showLeftFade ? "show-fade-left" : ""}
          ${showRightFade ? "show-fade-right" : ""}
        `}
        style={{ overflowY: "visible" }} // Keep overflowY visible for submenu
      >
        <ul className="flex">
          <li className="flex items-center mr-5 text-zinc-400 hover:text-emerald-500 transition-colors duration-150">
            {/* Ensure HomeSvg is adaptable or has a contrasting color */}
            <HomeSvg />
          </li>
          {typedMenudata.map((category) => (
            <li
              key={category.name}
              ref={(el: HTMLLIElement | null) => {
                categoryItemRefs.current[category.name] = el;
              }}
              className="font-semibold px-1 py-2 text-sm text-zinc-300
                         border-b-3 border-transparent hover:border-emerald-500 h-13 
                         flex-shrink-0 transition-all duration-200 cursor-default"
              onMouseEnter={() => handleCategoryMouseEnter(category)}
              onMouseLeave={handleCategoryMouseLeave}
            >
              <Link
                href={category.slug}
                className="font-semibold px-3 py-2.5 text-sm text-zinc-200 hover:text-white 
                           hover:bg-zinc-700 rounded-md flex items-center whitespace-nowrap 
                           transition-colors duration-150"
                // Note: Re-added onMouseEnter here to ensure submenu triggers if mouse quickly moves to Link
                onMouseEnter={() => handleCategoryMouseEnter(category)}
              >
                {category.name}
                {category.subcategories &&
                  category.subcategories.length > 0 && (
                    <span className="ml-1.5">
                      {" "}
                      {/* Added span for better spacing/styling of Arrowsvg if needed */}
                      {/* Ensure Arrowsvg is adaptable or has a contrasting color, e.g., by inheriting currentColor */}
                      <Arrowsvg />
                    </span>
                  )}
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
            // It's highly recommended to style SubmenuContent as well.
            // For a consistent Shadcn/zinc look, you might style it with classes like:
            // className="bg-zinc-800 border border-zinc-700 rounded-md shadow-2xl p-4 text-zinc-200"
            // Pass these as props or apply them within the SubmenuContent component itself.
            style={{
              position: "fixed",
              top: `${submenuPosition.top}px`,
              left: `${submenuPosition.left}px`,
              zIndex: 50,
              // Example: Add a default background here if SubmenuContent doesn't have its own
              // backgroundColor: "var(--color-zinc-800)", // if using CSS vars
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
