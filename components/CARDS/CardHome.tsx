import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState, MouseEvent } from "react";

// Cart SVG Icon - THIS IS THE SAME AS BEFORE
const CartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);

interface Tag {
  text: string;
  color?: string; // e.g., 'bg-red-500'
  textColor?: string; // e.g., 'text-white'
}

interface CardHomeProps {
  imageUrl: string | StaticImageData;
  imageAlt: string;
  brand?: string;
  title: string;
  features?: string[];
  price: string;
  oldPrice?: string;
  href?: string;
  buttonText?: string;
  /** @deprecated Use onAddToCart for add actions instead */
  onButtonClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    quantity?: number
  ) => void;
  onAddToCart?: (
    quantity: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  tags?: Tag[]; // This prop is for "Best Seller", "Nice Action", etc.
  className?: string;
  imageAspectRatio?: string;
  objectFit?: "cover" | "contain";
  showQuantitySelector?: boolean;
  initialQuantity?: number; // Defaults to 1
}

const CardHome: React.FC<CardHomeProps> = ({
  imageUrl,
  imageAlt,
  brand,
  title,
  features,
  price,
  oldPrice,
  href,
  buttonText,
  onButtonClick,
  onAddToCart,
  tags, // Tags prop for badges like "Best Seller"
  className = null,
  imageAspectRatio = "aspect-square",
  objectFit = "contain",
  showQuantitySelector = false,
  initialQuantity = 1, // Default initial quantity set to 1
}) => {
  // Ensures quantity is at least 1, using the initialQuantity prop
  const [quantity, setQuantity] = useState<number>(
    initialQuantity > 0 ? initialQuantity : 1
  );

  const baseCardClasses = `
    bg-white rounded-lg overflow-hidden
    transition-all duration-300 ease-in-out group
    shadow-md hover:shadow-lg
    flex flex-col border border-slate-200 hover:border-slate-300 h-full
  `;

  const cardFocusClasses = href
    ? "focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 focus-within:ring-offset-white"
    : "";

  const handleQuantityChange = (newQuantity: number) => {
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    } else if (isNaN(newQuantity)) {
      setQuantity(1); // Reset to 1 if input is not a number
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const isAddToCartAction = buttonText?.toLowerCase().includes("add");

  const handleButtonAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href && (onButtonClick || onAddToCart)) e.preventDefault();

    if (isAddToCartAction && onAddToCart) {
      onAddToCart(quantity, e);
    } else if (onButtonClick) {
      onButtonClick(e, isAddToCartAction ? quantity : undefined);
    }
  };

  const cardContent = (
    <>
      <div className={`relative overflow-hidden ${imageAspectRatio} w-full`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit={objectFit}
          className="transition-transform duration-300 ease-in-out group-hover:scale-105 p-2 sm:p-4"
        />
        {/* THIS IS WHERE THE TAGS LIKE "BEST SELLER" ARE RENDERED */}
        {tags && tags.length > 0 && (
          <div className="absolute top-2.5 left-2.5 z-10 flex flex-col items-start space-y-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`
                  ${tag.color || "bg-emerald-500"}
                  ${tag.textColor || "text-white"}
                  text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-sm
                `}
              >
                {tag.text}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        {brand && (
          <p className="text-xs text-gray-500 mb-0.5 sm:mb-1 uppercase tracking-wide">
            {brand}
          </p>
        )}
        <h3
          className={`text-sm sm:text-base font-semibold text-gray-800 mb-1.5 sm:mb-2 leading-snug ${
            href ? "group-hover:text-emerald-600" : ""
          } transition-colors duration-200 line-clamp-2`}
        >
          {title}
        </h3>

        {features && features.length > 0 && (
          <ul className="text-xs text-gray-600 mb-2 sm:mb-3 space-y-0.5 list-disc list-inside flex-grow min-h-[40px] sm:min-h-[50px]">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="truncate text-slate-500">
                {feature.startsWith("• ") ? feature.substring(2) : feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          {" "}
          {/* Pushes content below to the bottom */}
          <div className="mb-2 sm:mb-3 text-left">
            {oldPrice && (
              <span className="text-xs sm:text-sm text-gray-400 line-through mr-1.5 sm:mr-2">
                {oldPrice}
              </span>
            )}
            <span className="text-base sm:text-lg font-bold text-emerald-600">
              {price}
            </span>
          </div>
          {/* Quantity Selector */}
          {showQuantitySelector &&
            buttonText && ( // Only show if prop is true and there's a button
              <div className="mb-2 sm:mb-3 flex items-center justify-center sm:justify-start space-x-2">
                {" "}
                {/* Adjusted to justify-start on sm screens */}
                <button
                  onClick={handleDecrement}
                  className="px-3 py-1 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500 disabled:opacity-50"
                  aria-label="Decrease quantity"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(parseInt(e.target.value, 10))
                  }
                  className="w-12 text-center border-slate-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-sm sm:text-base appearance-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" // Hide number spinners
                  min="1"
                  aria-label="Quantity"
                />
                <button
                  onClick={handleIncrement}
                  className="px-3 py-1 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            )}
          {/* Main Action Button (e.g., Add to Cart) */}
          {buttonText && (
            <button
              onClick={handleButtonAction}
              className={`w-full text-xs sm:text-sm font-semibold py-2 sm:py-2.5 px-3 rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center space-x-1.5
                ${
                  isAddToCartAction
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500"
                    : "bg-slate-600 hover:bg-slate-700 text-white focus:ring-slate-500" // Default style for other buttons
                }`}
            >
              {isAddToCartAction && (
                <CartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
              <span>{buttonText}</span>
            </button>
          )}
          {/* Fallback for Link if no buttonText is provided */}
          {!buttonText && href && (
            <span className="block text-center text-xs sm:text-sm text-emerald-600 group-hover:text-emerald-700 font-semibold transition-colors duration-200 py-2 sm:py-2.5 px-3 rounded-md bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 group-hover:border-emerald-300">
              View Details <span aria-hidden="true">&rarr;</span>
            </span>
          )}
        </div>
      </div>
    </>
  );

  // Determine if the whole card should be a link
  // It should be a link if href is provided AND there are no specific button actions (onAddToCart or onButtonClick)
  const isCardLinkable = href && !onAddToCart && !onButtonClick;

  if (isCardLinkable) {
    return (
      <Link
        href={href}
        className={`${baseCardClasses} ${cardFocusClasses} ${className}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={`${baseCardClasses} ${className} outline-none`}>
      {cardContent}
    </div>
  );
};

export default CardHome;
