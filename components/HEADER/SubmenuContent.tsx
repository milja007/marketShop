// SubmenuContent.tsx
import React, { CSSProperties } from "react";
import Link from "next/link";

export interface Subcategory {
  name: string;
  slug: string;
}
interface SubmenuPortalContentProps {
  subcategories: Subcategory[];
  style: CSSProperties;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SubmenuContent: React.FC<SubmenuPortalContentProps> = ({
  subcategories,
  style,
  onMouseEnter,
  onMouseLeave,
}) => (
  <ul
    style={style} // Applies position, top, left, and zIndex
    // Updated with theme colors, removed shadow
    className={`
      bg-card border border-border text-card-foreground
      rounded-md min-w-[220px] py-2 text-sm
    `}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    role="menu"
    aria-orientation="vertical"
  >
    {subcategories.map((sub) => (
      <li key={sub.name} role="none" className="px-1">
        <Link
          href={sub.slug}
          // Updated with theme hover colors
          className="block px-3 py-1.5 
                     hover:bg-accent hover:text-accent-foreground
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
