// src/components/Search.tsx
import React, { useRef, useEffect, useCallback } from "react"; // Added useCallback

interface SearchProps {
  isActive: boolean;
  onFocusChange: (isActive: boolean) => void;
  // className?: string;
}

const Search = ({ isActive, onFocusChange }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize collapseSearch because it's used in a useEffect hook
  // Its own dependencies are isActive and onFocusChange
  const collapseSearch = useCallback(
    (clearInput = true) => {
      if (inputRef.current && clearInput) {
        inputRef.current.value = "";
      }
      if (isActive) {
        // Uses isActive from component scope
        onFocusChange(false); // Uses onFocusChange from component scope
      }
      inputRef.current?.blur();
    },
    [isActive, onFocusChange]
  ); // Dependencies of collapseSearch

  const expandSearch = useCallback(() => {
    if (!isActive) {
      onFocusChange(true);
    }
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [isActive, onFocusChange]); // Also memoizing expandSearch for consistency if used in effects later

  // Effect for handling clicks outside to collapse (if input is empty)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isClickInsideContainer = containerRef.current?.contains(target);
      const isClickOnExternalExitButton = (event.target as HTMLElement).closest(
        "[data-search-external-exit]"
      );

      if (
        isActive &&
        !isClickInsideContainer &&
        !isClickOnExternalExitButton &&
        inputRef.current?.value === ""
      ) {
        // Directly call onFocusChange or the memoized collapseSearch
        // If calling collapseSearch, it should be a dependency of this useEffect too.
        // For simplicity here, directly changing focus state if criteria met.
        onFocusChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive, onFocusChange]); // Added onFocusChange, containerRef, inputRef are stable

  // Effect for "Escape" key to collapse search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isActive) {
        // Now using the memoized collapseSearch
        collapseSearch(inputRef.current?.value === "");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, collapseSearch]); // Added collapseSearch to dependencies

  const searchElementHeight = "h-12 md:h-14";
  const inputElementHeight = "h-full";

  const containerWidthClasses = `
    w-full
    ${
      isActive
        ? "lg:focus-within:w-[35rem] xl:focus-within:w-[40rem]"
        : "md:w-10 lg:w-64"
    }
  `;

  const inputPaddingAndOpacityClasses = `
    pr-10
    ${
      isActive
        ? "opacity-100 md:pl-10 lg:pl-4"
        : "pl-4 md:opacity-0 md:pointer-events-none lg:opacity-100 lg:pl-4"
    }
    ${!isActive && "md:cursor-pointer lg:cursor-text"}
  `;

  return (
    <div className="flex items-center w-full ">
      <div
        ref={containerRef}
        className={`
          relative flex items-center justify-end group
          ${searchElementHeight} ${containerWidthClasses}
          transition-all duration-300 ease-in-out
        `}
        onClick={() => {
          if (!isActive) expandSearch();
        }}
      >
        {isActive && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              collapseSearch(true);
            }}
            aria-label="Close search"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex lg:hidden text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}

        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          onFocus={expandSearch}
          className={`
            ${inputElementHeight} text-sm w-full
            border rounded-lg py-1
            text-gray-900 bg-white focus:ring-1 focus:ring-cactus focus:border-cactus
            transition-all duration-300 ease-in-out outline-none border-gray-300
            ${inputPaddingAndOpacityClasses}
          `}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            expandSearch();
            if (isActive && inputRef.current?.value) {
              console.log("Submit search:", inputRef.current.value);
            }
          }}
          aria-label={
            isActive && inputRef.current?.value
              ? "Submit search"
              : "Open search"
          }
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-gray-500 group-hover:text-cactus focus:outline-none"
        >
          <svg
            className="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
            />
          </svg>
        </button>
      </div>

      {isActive && (
        <button
          data-search-external-exit
          onClick={(e) => {
            e.stopPropagation();
            collapseSearch(true);
          }}
          aria-label="Close search"
          className={`
            hidden lg:flex items-center justify-center
            ${searchElementHeight} w-12
            ml-2 text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200
            rounded-md lg:rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400
            transition-opacity duration-150 ease-in-out z-20
          `}
        >
          <svg
            className="h-5 w-5 md:h-6 md:w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Search;
