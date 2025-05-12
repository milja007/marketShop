import React, { CSSProperties } from "react";
import Link from "next/link";

export interface Subcategory {
  name: string;
  slug: string;
}
interface SubmenuPortalContentProps {
  subcategories: Subcategory[];
  style: CSSProperties; // This style comes from LinkNavbar, including position and z-index
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  // className?: string; // Optional: if you want to pass additional classes from parent
}

const SubmenuContent: React.FC<SubmenuPortalContentProps> = ({
  subcategories,
  style,
  onMouseEnter,
  onMouseLeave,
  // className: additionalClassName = "", // For optional additional classes
}) => (
  <ul
    style={style} // Applies position, top, left, and zIndex (e.g., zIndex: 50 from LinkNavbar)
    className={`
      bg-zinc-800 border border-zinc-700 
      rounded-md shadow-xl 
      min-w-[220px] py-2 text-sm
    `} // Removed 'absolute' and 'z-[100]' as 'style' prop handles position and z-index better.
    // Adjusted min-width and padding for aesthetics.
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    role="menu"
    aria-orientation="vertical"
  >
    {subcategories.map((sub) => (
      <li key={sub.name} role="none" className="px-1">
        {" "}
        {/* Added px-1 for containing rounded links */}
        <Link
          href={sub.slug}
          className="block px-3 py-1.5 text-zinc-200 
                     hover:bg-zinc-700 hover:text-emerald-400 
                     rounded-sm transition-colors duration-150"
          role="menuitem"
        >
          {sub.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default SubmenuContent;
