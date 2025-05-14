// LinkNavbar.tsx
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

import Arrowsvg from "./SVGS/Arrowsvg";
import HomeSvg from "./SVGS/HomeSvg";

import { MENUDATA } from "@/data(fake)/CONSTANTS/CATEGORIES";
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
    // Updated nav with theme colors, removed shadow
    <nav className="bg-zinc-800 dark:bg-zinc-900 border-b border-border w-full font-sans">
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
        <ul className="flex text-white">
          {" "}
          {/* Default text color for items */}
          <li className="flex items-center mr-5 text-muted-foreground hover:text-white transition-colors duration-150">
            <HomeSvg /> {/* Ensure HomeSvg inherits currentColor */}
          </li>
          {typedMenudata.map((category) => (
            <li
              key={category.name}
              ref={(el: HTMLLIElement | null) => {
                categoryItemRefs.current[category.name] = el;
              }}
              // Updated text, border colors. Using border-b-[3px] for arbitrary value.
              className="font-semibold px-1 py-2 text-sm
                         border-b-[3px] border-transparent hover:border-secondary dark:hover:border-white   h-13
                         flex-shrink-0 transition-all duration-200 cursor-default"
              onMouseEnter={() => handleCategoryMouseEnter(category)}
              onMouseLeave={handleCategoryMouseLeave}
            >
              <Link
                href={category.slug}
                // Updated text, hover background/text colors
                className="font-semibold px-3 py-2.5 text-sm 
                           hover:bg-zinc-700 rounded-md flex items-center whitespace-nowrap
                           transition-colors duration-150"
                onMouseEnter={() => handleCategoryMouseEnter(category)}
              >
                {category.name}
                {category.subcategories &&
                  category.subcategories.length > 0 && (
                    <span className="ml-1.5">
                      <Arrowsvg /> {/* Ensure Arrowsvg inherits currentColor */}
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
            // Style SubmenuContent with theme variables (bg-card, border-border, text-card-foreground)
            // These are applied within SubmenuContent component now.
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
