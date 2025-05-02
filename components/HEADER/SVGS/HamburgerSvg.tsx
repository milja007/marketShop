const HamburgerSvg = () => {
  return (
    <svg
      className="w-6 h-6 text-gray-700 md:hidden"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export default HamburgerSvg;
