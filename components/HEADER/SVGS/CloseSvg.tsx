import React from "react";

const CloseSvg = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="border border-white rounded-lg"
    >
      <line
        x1="6"
        y1="18"
        x2="18"
        y2="6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseSvg;
