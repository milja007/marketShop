"use client";
import React from "react";
import Navbar from "./Navbar";
import Search from "./Search"; // Will use the updated Search component
import LinkNavbar from "./LinkNavbar";

const Header: React.FC = () => (
  <>
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-white dark:bg-gray-900">
      <Navbar />
    </nav>
    <div className="h-20 bg-white dark:bg-gray-900"></div>{" "}
    {/* Spacer for fixed Navbar */}
    {/* Search bar for mobile screens (md:hidden) - uses the same Search component */}
    <div className="sticky top-20 z-30 w-full bg-white dark:bg-gray-900 md:hidden p-2">
      {/* <Search isActive={true} onFocusChange={()=>{}}/>  // This might be too simplistic if mobile needs to interact with other states */}
      {/* Let's rely on the Search component's internal CSS for mobile, and pass default/dummy props. */}
      {/* The Search component will behave mostly as "always active" on mobile based on its current CSS. */}
      <Search isActive={false} onFocusChange={() => {}} />
      {/* Actually, for mobile, it might be better if `isActive` is false initially, so it doesn't show X buttons.
           The component's CSS makes it look expanded on mobile anyway.
           This needs testing for the exact desired mobile UX.
           Given the logic, `isActive` should reflect an "expanded search state".
           For mobile, it's always expanded visually, so `isActive=true` might make more sense,
           but then you'd need to ensure X buttons don't show up incorrectly.
           The Search component currently hides X buttons based on breakpoints (e.g. `md:flex lg:hidden`). So it should be fine.
       */}
    </div>
    <div className="hidden md:flex sticky top-20 z-40 bg-white dark:bg-gray-900">
      <LinkNavbar />
    </div>
  </>
);

export default Header;
