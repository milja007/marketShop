"use client";
import React, { useRef, useEffect } from "react";
import SearchSvgIcon from "./SVGS/SearchSvg";
import CloseSvgIcon from "./SVGS/CloseSvg";

interface SearchProps {
  isMdSearchActive?: boolean;
  onMdSearchToggle?: () => void;
  onMdSearchClose?: () => void;
}

const Search: React.FC<SearchProps> = ({
  isMdSearchActive,
  onMdSearchToggle,
  onMdSearchClose,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ... (useEffect hooks and handlers remain the same) ...
  useEffect(() => {
    if (isMdSearchActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMdSearchActive]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMdSearchActive &&
        onMdSearchClose &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        inputRef.current?.value === ""
      ) {
        onMdSearchClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMdSearchActive, onMdSearchClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMdSearchActive && onMdSearchClose) {
        onMdSearchClose();
        if (inputRef.current) inputRef.current.value = "";
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMdSearchActive, onMdSearchClose]);

  const handleSearchIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inputRef.current?.value) {
      console.log("Submitting search:", inputRef.current.value);
    } else {
      inputRef.current?.focus();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMdSearchClose) {
      onMdSearchClose();
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  // --- Class Definitions ---
  let containerClasses = `relative flex items-center transition-all duration-300 ease-in-out group`;
  const inputBaseClasses = `h-10 border border-gray-300 rounded-lg py-1 text-sm focus:outline-none focus:ring-1 focus:ring-cactus focus:border-cactus bg-white text-black dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 transition-all duration-300 ease-in-out`;
  let currentInputClasses = "";

  const clickableSearchButtonBaseClasses = `absolute right-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-500 dark:text-gray-400 group-hover:text-cactus focus:outline-none`;
  let iconButtonConditionalClasses = "";

  if (onMdSearchToggle !== undefined) {
    if (isMdSearchActive) {
      containerClasses += ` md:w-full lg:w-[40rem] xl:w-full`;
      currentInputClasses = `${inputBaseClasses} md:w-full md:opacity-100 md:pl-10 md:pr-10 lg:w-[40rem] lg:opacity-100 lg:pl-4 lg:pr-10 xl:w-full xl:opacity-100 xl:pl-4 xl:pr-10`;
    } else {
      containerClasses += ` md:w-10 md:cursor-pointer lg:w-[40rem] xl:w-full`;
      currentInputClasses = `${inputBaseClasses} md:w-0 md:opacity-0 md:pointer-events-none lg:w-[40rem] lg:opacity-100 lg:pl-4 lg:pr-10 xl:w-full xl:opacity-100 xl:pl-4 xl:pr-10`;
      // For Navbar MD-inactive state: hide clickable button on MD, show on LG+
      iconButtonConditionalClasses = "md:hidden lg:inline-flex"; // Use inline-flex for better SVG alignment in button
    }
  } else {
    containerClasses += ` w-full max-w-full mx-auto mt-2`;
    currentInputClasses = `${inputBaseClasses} w-full opacity-100 pl-4 pr-10`;
  }

  const finalClickableSearchButtonClasses = `${clickableSearchButtonBaseClasses} ${iconButtonConditionalClasses}`;
  // --- End Class Definitions ---

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      onClick={() => {
        if (onMdSearchToggle && !isMdSearchActive) {
          onMdSearchToggle();
        }
      }}
    >
      {isMdSearchActive && onMdSearchClose && (
        <button
          onClick={handleCloseClick}
          aria-label="Close search"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <CloseSvgIcon />
        </button>
      )}

      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className={currentInputClasses}
        onFocus={() => {
          if (onMdSearchToggle && !isMdSearchActive) {
            onMdSearchToggle();
          }
        }}
        // onBlur logic can be added here if needed
      />

      {/* Visual Icon for MD Inactive State (Navbar context only) */}
      {onMdSearchToggle !== undefined && !isMdSearchActive && (
        <div className="hidden md:flex lg:hidden items-center justify-center h-full w-full text-gray-500 dark:text-gray-400 pointer-events-none">
          <SearchSvgIcon />
        </div>
      )}

      {/* Clickable Search/Submit Icon Button */}
      <button
        type="button"
        onClick={handleSearchIconClick}
        aria-label={inputRef.current?.value ? "Submit search" : "Search"}
        className={finalClickableSearchButtonClasses} // Use the updated class string
      >
        <SearchSvgIcon />
      </button>
    </div>
  );
};

export default Search;
