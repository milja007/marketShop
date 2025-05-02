import React from "react";

const BokiGrowLogo = ({ className = "w-32 h-auto text-green-700" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    fill="none"
    className={className}
  >
    {/* Stylized 'Boki' with leaf over 'i' */}
    <text
      x="10"
      y="35"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fill="currentColor"
      fontWeight="bold"
    >
      Bok
    </text>
    {/* Leaf over 'i' */}
    <path
      d="M60 15 C62 10, 68 10, 70 15 C68 12, 62 12, 60 15 Z"
      fill="currentColor"
    />
    <text
      x="60"
      y="35"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fill="currentColor"
      fontWeight="bold"
    >
      Grow
    </text>
  </svg>
);

export default BokiGrowLogo;
