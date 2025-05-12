"use client";

import Image, { StaticImageData } from "next/image"; // Import StaticImageData
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"; // Assuming lucide-react is installed

// Update the type to correctly accept StaticImageData
type ImageSliderProps = {
  imageUrls: StaticImageData[];
  alt: string; // Changed from string[] to StaticImageData[] // This comment is from your original code
};

const ImageSlide = ({ imageUrls, alt }: ImageSliderProps) => {
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

  // Placeholder for previous image function if you want to implement it for the left arrow
  // function showPrev() {
  //   setImgIndex((index) => {
  //     if (index === 0) return imageUrls.length - 1;
  //     return index - 1;
  //   });
  // }

  // Handle case where there are no images
  if (!imageUrls || imageUrls.length === 0) {
    return (
      <div className="w-90 h-90 mx-auto relative rounded-lg shadow-lg flex items-center justify-center">
        <p>No images to display.</p>
      </div>
    );
  }

  return (
    // Assuming 'w-90' and 'h-90' are custom classes you've defined or resolve correctly.
    // Standard Tailwind would use something like w-[90%] or w-96 (for rem values).
    <div className=" mt-10 w-90 h-90 mx-auto relative rounded-lg shadow-lg overflow-hidden md:h-auto">
      {" "}
      {/* Added overflow-hidden for safety with animations */}
      <Image
        key={imageIndex} // IMPORTANT: Add key to trigger re-render and animation
        src={imageUrls[imageIndex]}
        alt={alt} // Use the alt prop passed to the component
        priority={imageIndex === 0} // Good practice: only prioritize the first/initial image
        width={600}
        height={400}
        className="w-full h-auto object-contain animate-fadeIn" // Add animate-fadeIn class
      />
      {/* Note: Both buttons currently call showNext. You might want the left arrow to call a showPrev function. */}
      <button
        onClick={showNext} // Consider changing to showPrev for this button
        className="absolute top-4 left-0 transform -translate-y-1/2 p-2 text-grey rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity hover:opacity-100 opacity-75"
        aria-label="View Previous Image"
      >
        <ArrowBigLeft size={30} />
      </button>
      <button
        onClick={showNext}
        className="absolute top-4 right-0 transform -translate-y-1/2 p-2 text-grey rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity hover:opacity-100 opacity-75"
        aria-label="View Next Image"
      >
        <ArrowBigRight size={30} />
      </button>
    </div>
  );
};

export default ImageSlide;
