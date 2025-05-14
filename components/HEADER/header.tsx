// Header.tsx
import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import LinkNavbar from "./LinkNavbar";

const Header: React.FC = () => (
  <>
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-background text-foreground">
      <Navbar />
    </nav>

    {/* Spacer for fixed navbar */}
    <div className="h-16 bg-background"></div>

    {/* Search bar for mobile */}
    <div className="w-full bg-background md:hidden p-2">
      <Search />
    </div>

    {/* LinkNavbar for desktop, sticky below main navbar */}
    <div className="hidden md:flex sticky top-16 z-40 bg-background">
      <LinkNavbar />
    </div>
  </>
);

export default Header;
