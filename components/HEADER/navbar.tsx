// Navbar.tsx
import React from "react";
import HamburgerSvg from "./SVGS/HamburgerSvg"; // Assuming MobileMenu handles this
import Languaesvg from "./SVGS/Languaesvg";
import LoginSvg from "./SVGS/LoginSvg";
import HeartSvg from "./SVGS/HeartSvg";
import CartSvg from "./SVGS/CartSvg";
import ClientNavb from "./ClientNavb";
import MobileMenu from "./SVGS/HamburgerSvg"; // Added for hamburger functionality

const Navbar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center dark:bg-accent
      px-4 sm:px-8 xl:px-12 h-16 w-full
      bg-secondary text-secondary-foreground" // Updated colors
    >
      <div className="flex items-center md:hidden">
        {" "}
        {/* Show MobileMenu trigger on small screens */}
        <MobileMenu />
      </div>
      <div className="hidden md:flex items-center">
        {" "}
        {/* Original Hamburger for larger screens, if needed, or remove if MobileMenu is comprehensive */}
        <HamburgerSvg />{" "}
        {/* This could be a drawer toggle for larger screens or a different menu */}
      </div>

      <ClientNavb />

      <div className="flex space-x-2 sm:space-x-4 items-center">
        <button
          className="
            hidden md:flex bg-zinc-800 text-white font-semibold
            py-2 px-4 rounded-lg hover:bg-zinc-700 
            focus:outline-none focus:ring-offset-2 focus:ring-offset-zinc-800
            transition-colors duration-150 dark:border dark:border-white
            " // Updated colors, removed shadow, refined focus
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
