"use client";

import React, { useState } from "react";
import Search from "./Search";
import BokiGrowLogo from "./SVGS/GrowLogo";

const ClientNavb: React.FC = () => {
  const [isMdSearchActive, setIsMdSearchActive] = useState(false);

  const handleMdSearchToggle = () => {
    setIsMdSearchActive((prev) => !prev);
  };

  const handleMdSearchClose = () => {
    setIsMdSearchActive(false);
  };

  const searchWrapperBaseClasses =
    "hidden md:flex items-center transition-all duration-300 ease-in-out mx-2";
  let searchWrapperConditionalClasses = "";

  if (isMdSearchActive) {
    searchWrapperConditionalClasses =
      "md:flex-1 md:justify-start lg:flex-1 xl:flex-1";
  } else {
    searchWrapperConditionalClasses =
      "md:w-auto md:justify-center md:mr-16 lg:w-auto lg:mr-16 xl:flex-1";
  }
  const finalSearchWrapperClasses = `${searchWrapperBaseClasses} ${searchWrapperConditionalClasses}`;

  return (
    <div className="flex items-center flex-1">
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${
            isMdSearchActive
              ? "md:w-0 md:opacity-0 md:hidden"
              : "md:w-auto md:opacity-100"
          }
          lg:w-auto lg:opacity-100 lg:flex mr-4 {/* Always visible on LG+, with margin */}
        `}
      >
        <BokiGrowLogo className="w-32 h-auto text-green-700" />
      </div>

      <div className={finalSearchWrapperClasses}>
        <Search
          isMdSearchActive={isMdSearchActive}
          onMdSearchToggle={handleMdSearchToggle}
          onMdSearchClose={handleMdSearchClose}
        />
      </div>
    </div>
  );
};

export default ClientNavb;
