"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"; // Assuming lucide-react is installed

type ImageSliderProps = {
  imageUrls: string[];
};

const ImageSlide = ({ imageUrls }: ImageSliderProps) => {
  // State to track the current image index
  const [imageIndex, setImgIndex] = useState(0);

  // Function to show the next image
  function showNext() {
    setImgIndex((index) => {
      // If at the last image, loop back to the first (0), otherwise go to the next
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  // Function to show the previous image
  function showPrev() {
    setImgIndex((index) => {
      // If at the first image (0), loop back to the last, otherwise go to the previous
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    // Main container: Responsive width, centered, relative positioning, overflow hidden
    // w-full: full width on small screens (up to max-w-md)
    // max-w-md: limits max width to 'md' (448px) from the smallest breakpoint up
    // lg:max-w-lg: slightly increases max width to 'lg' (512px) on large screens
    // mx-auto: center the container
    // relative: needed for absolute positioning of arrows
    // overflow-hidden: prevents image or arrows from overflowing
    // min-h-[300px]: Added a minimum height to prevent the container from collapsing completely if images are very thin
    <div className="w-full max-w-md lg:max-w-lg mx-auto relative overflow-hidden rounded-lg shadow-lg min-h-[300px]">
      {" "}
      {/* Adjusted max-width classes */}
      {/* Image component */}
      {/* Use object-contain to show the full image without cropping */}
      {/* w-full h-auto ensures it scales responsively within the container while maintaining aspect ratio */}
      <Image
        src={imageUrls[imageIndex]}
        alt="Slide"
        // Use fill or specific sizes based on needs. Using specific sizes with w-full h-auto object-contain is common.
        // Adjust these sizes or use layout="fill" based on your design requirements.
        width={600} // Reduced example base width
        height={400} // Reduced example base height
        className="w-full h-auto object-contain" // Changed object-cover to object-contain, removed aspect-video
      />
      {/* Left Arrow Button */}
      <button
        onClick={showPrev} // Call showPrev function
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 ml-2 bg-black bg-opacity-50 text-white rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity hover:opacity-100 opacity-75" // Styling and positioning
        aria-label="View Previous Image" // Accessibility
      >
        <ArrowBigLeft size={30} /> {/* Adjust size as needed */}
      </button>
      {/* Right Arrow Button */}
      <button
        onClick={showNext} // Call showNext function
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 mr-2 bg-black bg-opacity-50 text-white rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity hover:opacity-100 opacity-75" // Styling and positioning
        aria-label="View Next Image" // Accessibility
      >
        <ArrowBigRight size={30} /> {/* Adjust size as needed */}
      </button>
    </div>
  );
};

export default ImageSlide;
