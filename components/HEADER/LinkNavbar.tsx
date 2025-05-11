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
import Arrowsvg from "./SVGS/Arrowsvg";
import HomeSvg from "./SVGS/HomeSvg";

import { MENUDATA } from "@/data(fake)/CATEGORIES";
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

  // Refs and state for dynamic fades
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

  // Memoized function to update fade visibility
  const updateFades = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      // Default to no fades if container isn't rendered yet
      setShowLeftFade(false);
      setShowRightFade(false);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const scrollThreshold = 5; // A small buffer (e.g., 5px) to prevent flicker at edges

    // Check if scrolling is actually possible
    const canScroll = scrollWidth > clientWidth + scrollThreshold;

    if (!canScroll) {
      setShowLeftFade(false);
      setShowRightFade(false);
      return;
    }

    // Determine if at the start or end of scroll
    const atStart = scrollLeft < scrollThreshold;
    const atEnd = scrollWidth - clientWidth - scrollLeft < scrollThreshold;

    setShowLeftFade(!atStart); // Show left fade if not at the very start
    setShowRightFade(!atEnd); // Show right fade if not at the very end
  }, []); // Empty dependency array: function is stable as it only uses refs and setState

  // Effect for initial fade check, resize events, and when menu data changes (which might alter scrollWidth)
  useLayoutEffect(() => {
    // Initial check once DOM is ready
    updateFades();

    const handleResize = () => updateFades();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateFades, typedMenudata]); // Re-run if MENUDATA changes or updateFades function identity changes (it won't here)

  // Effect for handling scroll events on the container, using requestAnimationFrame
  useEffect(() => {
    const scrollElement = scrollContainerRef.current;
    if (!scrollElement) return;

    let ticking = false; // To ensure updateFades is not called too frequently

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
  }, [updateFades]); // Re-run if updateFades function identity changes (it won't here)

  return (
    <nav className="bg-alabaster border-b border-gray-300 w-full font-bold">
      <div
        ref={scrollContainerRef}
        className={`
          overflow-x-auto md:flex lg:justify-center relative
          custom-horizontal-scrollbar scroll-fade-container
          ${showLeftFade ? "show-fade-left" : ""}
          ${showRightFade ? "show-fade-right" : ""}
        `}
        style={{ overflowY: "visible" }}
      >
        <ul className="flex">
          <li className="flex items-center mr-5">
            <HomeSvg />
          </li>
          {typedMenudata.map((category) => (
            <li
              key={category.name}
              ref={(el: HTMLLIElement | null) => {
                categoryItemRefs.current[category.name] = el;
              }}
              className="font-semibold px-1 py-2 text-sm text-gray-700
                         border-b-3 border-transparent hover:border-green-500 h-13
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
              zIndex: 50,
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
