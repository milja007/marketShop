import React from "react";
import HamburgerSvg from "./SVGS/HamburgerSvg";
import Languaesvg from "./SVGS/Languaesvg";
import LoginSvg from "./SVGS/LoginSvg";
import HeartSvg from "./SVGS/HeartSvg";
import CartSvg from "./SVGS/CartSvg";
import InteractiveNavGroup from "./ClientNavb";

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center
      px-4 sm:px-8 xl:px-12 h-16 w-full
      bg-white dark:bg-gray-900"
    >
      <div className="flex items-center">
        <HamburgerSvg />
      </div>

      <InteractiveNavGroup />

      <div className="flex space-x-2 sm:space-x-4 items-center">
        <button
          className="
            hidden md:flex bg-cactus text-white font-semibold
            py-2 px-4 rounded-lg shadow-md hover:bg-amber-700
            focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
            transition-colors duration-200
          "
        >
          All categories
        </button>
        <Languaesvg />
        <LoginSvg />
        <HeartSvg />
        <CartSvg />
      </div>
    </nav>
  );
};

export default Navbar;
