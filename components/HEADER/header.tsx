import React from "react";
import Navbar from "./Navbar"; // Use the updated Navbar
import Search from "./Search"; // Use the updated Search
import LinkNavbar from "./LinkNavbar"; // Assuming LinkNavbar.tsx

const Header: React.FC = () => (
  <>
    {/* Original Navbar: fixed, h-16 */}
    <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-white dark:bg-gray-900">
      <Navbar />
    </nav>

    {/* Spacer for the fixed Navbar, original was h-14, should match nav height h-16 */}
    <div className="h-16 bg-white dark:bg-gray-900"></div>

    {/* Search bar for mobile screens (md:hidden), uses standalone Search component */}
    {/* Original sticky top-15, adjusted to top-16 due to h-16 navbar */}
    <div className="sticky top-16 z-30 w-full bg-white dark:bg-gray-900 md:hidden p-2">
      <Search />{" "}
      {/* This Search instance won't have md-specific active props */}
    </div>

    {/* LinkNavbar below main Navbar for md+ screens */}
    {/* Original: hidden md:flex fixed inset-x-0 top-16 z-40 */}
    <div className="hidden md:flex sticky top-16 z-40 bg-white dark:bg-gray-900">
      <LinkNavbar />
    </div>
  </>
);

export default Header;
