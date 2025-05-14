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
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMdSearchActive && onMdSearchClose) {
        onMdSearchClose();
        if (inputRef.current) inputRef.current.value = "";
      }
    };
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isMdSearchActive, onMdSearchClose]);

  const performSearch = () => {
    if (inputRef.current?.value) {
      const searchTerm = inputRef.current.value;
      console.log("Submitaj ovo bejbi:", searchTerm);
    } else {
      inputRef.current?.focus();
    }
  };

  const handleSearchIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    performSearch();
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission if it were inside a form
      performSearch();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMdSearchClose) {
      onMdSearchClose();
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  // In Search.tsx
  let containerClasses = `relative flex items-center transition-all duration-300 ease-in-out group`; // This 'group' class is essential
  const inputBaseClasses = `
    h-10 border rounded-lg py-1 text-md 
    placeholder:text-white  // The new class
    focus:outline-zinc-900 focus:ring-1 focus:ring focus:border-white 
    bg-zinc-800 text-white 
    dark:bg-card dark:text-white dark:border
  `;
  let currentInputClasses = "";

  const clickableSearchButtonBaseClasses = `absolute right-3 top-1/2 transform -translate-y-1/2 z-10 text-white dark:text-gray-400 group-hover:text-whitee focus:outline-none`;
  let iconButtonConditionalClasses = "";

  if (onMdSearchToggle !== undefined) {
    if (isMdSearchActive) {
      containerClasses += ` md:w-full lg:w-[24rem] xl:w-[39rem] 2xl:w-[55rem]  `;
      currentInputClasses = `${inputBaseClasses} md:w-full md:opacity-100 md:pl-10 md:pr-10 lg:w-full lg:opacity-100 lg:pl-4 lg:pr-10 xl:w-full    `;
    }
    if (!isMdSearchActive) {
      containerClasses += ` md:w-10 md:cursor-pointer lg:w-[24rem] xl:w-[39rem]  2xl:w-[55rem] `;
      currentInputClasses = `${inputBaseClasses} md:w-0 md:opacity-0 md:pointer-events-none lg:w-full lg:opacity-100 lg:pl-4 lg:pr-10 xl:w-full   `;
      iconButtonConditionalClasses = "md:hidden lg:inline-flex";
    }
  } else {
    containerClasses += ` w-full max-w-full mx-auto mt-2 450px:w-105`;
    currentInputClasses = `${inputBaseClasses} w-full opacity-100 pl-4 pr-10 [500px]:w-20`;
  }

  const finalClickableSearchButtonClasses = `${clickableSearchButtonBaseClasses} ${iconButtonConditionalClasses}`;

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
        name="search"
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className={currentInputClasses}
        onFocus={() => {
          if (onMdSearchToggle && !isMdSearchActive) {
            onMdSearchToggle();
          }
        }}
        onKeyDown={handleInputKeyDown}
      />
      {onMdSearchToggle !== undefined && !isMdSearchActive && (
        <div className="hidden md:flex md:justify-end lg:hidden items-center justify-center h-full w-full text-gray-500 dark:text-gray-400 pointer-events-none">
          <SearchSvgIcon />
        </div>
      )}
      <button
        type="button"
        onClick={handleSearchIconClick}
        aria-label={inputRef.current?.value ? "Submit search" : "Search"}
        className={finalClickableSearchButtonClasses}
      >
        <SearchSvgIcon />
      </button>
    </div>
  );
};

export default Search;
