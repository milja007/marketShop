import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import LinkNavbar from "./LinkNavbar";

const Header: React.FC = () => (
  <>
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-white dark:bg-gray-900">
      <Navbar />
    </nav>

    <div className="h-16 bg-white dark:bg-gray-900"></div>

    <div className="w-full bg-white dark:bg-gray-900 md:hidden p-2">
      <Search />
    </div>

    <div className="hidden md:flex sticky top-16 z-40 bg-white dark:bg-gray-900">
      <LinkNavbar />
    </div>
  </>
);

export default Header;
