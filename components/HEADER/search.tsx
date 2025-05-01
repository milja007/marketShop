import React from "react";

interface SearchProps {
  className?: string;
}

const Search: React.FC<SearchProps> = ({ className = "" }) => {
  return (
    <div
      className={`
        relative flex items-center transition-all duration-300 ease-in-out
        w-full max-w-sm mx-auto mt-2 md:mt-0
        md:w-10 md:focus-within:w-[60vw]
        lg:w-[32rem] lg:focus-within:w-[32rem]
        xl:w-[32rem] xl:max-w-full
        ${className}
      `}
    >
      <input
        type="text"
        placeholder="Search..."
        className={`
          h-10 w-full border border-gray-300 rounded pl-4 pr-10 py-1
          focus:outline-none bg-white text-black z-10
          transition-all duration-300 ease-in-out
          md:opacity-0 md:focus:opacity-100
          lg:opacity-100
        `}
      />

      <div
        className="
          pointer-events-none text-gray-500
          absolute right-2 top-1/2 transform -translate-y-1/2 z-20
          xl:static xl:transform-none xl:translate-y-0 xl:ml-[-2.5rem]
          flex items-center
        "
      >
        <svg
          className="h-5 w-5 text-gray-500"
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
      </div>
    </div>
  );
};

export default Search;
