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
    style={style}
    className="absolute bg-white border border-gray-300 rounded-b-md shadow-lg
               z-[100] min-w-[200px] py-1" // Ensure high z-index; py-1 for padding
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    role="menu"
    aria-orientation="vertical"
  >
    {subcategories.map((sub) => (
      <li key={sub.name} role="none">
        <Link
          href={sub.slug}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-900"
          role="menuitem"
        >
          {sub.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default SubmenuContent;
