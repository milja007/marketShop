// src/components/Navbar.tsx
import React from "react";
import Search from "./Search";
import BokiGrowLogo from "./SVGS/GrowLogo";
import CartSvg from "./SVGS/CartSvg";
import HeartSvg from "./SVGS/HeartSvg";
import LoginSvg from "./SVGS/LoginSvg";
import HomeSvg from "./SVGS/HomeSvg";
import HamburgerSvg from "./SVGS/HamburgerSvg";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center
    px-8 xl:px-12 h-16 w-full
    bg-white dark:bg-gray-900"
    >
      <div className="flex space-x-4 items-center">
        <HamburgerSvg />
        <BokiGrowLogo className="w-32 h-auto text-green-700" />
      </div>

      <div className="hidden md:flex items-center space-x-4 flex-1 justify-center md:mr-16 xl:mr-24">
        <Search />
        <button
          className="
    md:ml-8 xl:ml-12
    bg-cactus text-white font-semibold
    py-2 px-4
    rounded-lg
    shadow-md
    hover:bg-amber-700
    focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
    transition-colors duration-200
  "
        >
          All categories
        </button>
      </div>

      <div className="flex space-x-4 ">
        <HomeSvg />
        <LoginSvg />

        <HeartSvg />

        <CartSvg />
      </div>
    </nav>
  );
};

export default Navbar;
