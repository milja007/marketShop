"use client";
import React, { useState } from "react";
import Search from "./Search";
import BokiGrowLogo from "./SVGS/GrowLogo";
import CartSvg from "./SVGS/CartSvg";
import HeartSvg from "./SVGS/HeartSvg";
import LoginSvg from "./SVGS/LoginSvg";
import HamburgerSvg from "./SVGS/HamburgerSvg";

const Navbar: React.FC = () => {
  const [searchIsActive, setSearchIsActive] = useState(false);

  return (
    <nav
      className="flex justify-between items-center
        px-4 sm:px-8 xl:px-12 h-20 w-full
        bg-white dark:bg-gray-900"
    >
      {/* Left Section */}
      <div className="flex items-baseline">
        <HamburgerSvg />
        <div
          className={`
            ml-2 sm:ml-4 transition-all duration-300 ease-in-out
            ${searchIsActive ? "w-0 opacity-0 md:hidden" : "w-auto opacity-100"}
          `}
        >
          <BokiGrowLogo className="w-28 sm:w-32 h-auto text-green-700" />
        </div>
      </div>

      {/* Middle/Search Section: always grows on lg+ */}
      <div className="hidden lg:flex items-center mx-2 lg:flex-1 min-w-0 transition-all duration-300 ease-in-out">
        <Search isActive={searchIsActive} onFocusChange={setSearchIsActive} />
      </div>

      {/* Right Section */}
      <div className="flex space-x-2 sm:space-x-4 items-center">
        <button
          className="
            hidden lg:flex bg-cactus text-white font-semibold
            py-2 px-4 rounded-lg shadow-md hover:bg-amber-700
            focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
            transition-colors duration-200
          "
        >
          All categories
        </button>
        <LoginSvg />
        <HeartSvg />
        <CartSvg />
      </div>
    </nav>
  );
};

export default Navbar;
