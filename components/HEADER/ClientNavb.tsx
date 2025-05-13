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

  const searchWrapperBaseClasses = "hidden md:flex items-center  mx-4    ";
  let searchWrapperConditionalClasses = "";

  if (isMdSearchActive) {
    searchWrapperConditionalClasses = "md:flex-1 md:justify-start lg:flex-1 ";
  }
  if (!isMdSearchActive) {
    searchWrapperConditionalClasses = "md:w-auto md:justify-center  lg:w-auto ";
  }
  const finalSearchWrapperClasses = `${searchWrapperBaseClasses} ${searchWrapperConditionalClasses}`;

  return (
    <div className="flex items-center flex-1">
      <div
        className={`
         
          ${
            isMdSearchActive
              ? "md:w-0 md:opacity-0 md:hidden"
              : "md:w-auto md:opacity-100"
          }
          lg:w-auto lg:opacity-100 lg:flex 
        `}
      >
        <BokiGrowLogo className="w-70 h-auto text-zinc-800" />
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
