import React from "react";
import Search from "./search";
import BokiGrowLogo from "./GrowLogo";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900">
      {/* Navbar container */}
      <nav className="flex items-center px-8 xl:px-12 py-0 w-full">
        {/* Left: menu icon & logo */}
        <div className="flex space-x-4 items-center">
          <svg
            className="w-6 h-6 text-gray-700 md:hidden"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <BokiGrowLogo className="w-32 h-auto text-green-700" />
        </div>

        {/* Center: search & categories */}
        <div className="hidden md:flex items-center space-x-4 flex-1 justify-center md:mr-16 xl:mr-24">
          <Search />
          <button className="md:ml-8 xl:ml-12">All categories</button>
        </div>

        {/* Right: icons */}
        <div className="flex space-x-4 items-center">
          <svg
            width={26}
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M3 13L12 4L21 13" />
            <path d="M4 10V20H20V10" />
            <rect x="10" y="14" width="4" height="6" rx="0.5" />
          </svg>

          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 20c0-2.5 4-4 8-4s8 1.5 8 4"
            />
          </svg>

          <svg
            className="w-6 h-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>

          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5h13.6M7 13L5.4 5M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile-only search below nav */}
      <div className="md:hidden w-full mt-2 px-4">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
