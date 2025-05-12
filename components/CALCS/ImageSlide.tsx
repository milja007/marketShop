"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type ImageSliderProps = {
  imageUrls: StaticImageData[];
  alt: string;
};

const ImageSlide = ({ imageUrls, alt }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => (index === imageUrls.length - 1 ? 0 : index + 1));
  }

  if (!imageUrls || imageUrls.length === 0) {
    return (
      <div className="w-90 h-90 mx-auto relative rounded-lg shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <p className="text-gray-500 dark:text-gray-400">
          No images to display.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 w-90 h-90 mx-auto relative rounded-lg shadow-lg overflow-hidden md:h-auto">
      <Image
        key={imageUrls[imageIndex]?.src || imageIndex}
        src={imageUrls[imageIndex]}
        alt={alt}
        priority={imageIndex === 0}
        width={600}
        height={400}
        className="w-full h-auto object-contain animate-fadeIn"
      />
      <button
        onClick={showNextImage}
        className="absolute top-4 left-0 transform -translate-y-1/2 p-2 text-grey rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity hover:opacity-100 opacity-75"
        aria-label="View Previous Image"
      >
        <ArrowBigLeft size={30} />
      </button>
      <button
        onClick={showNextImage}
        className="absolute top-4 right-0 transform -translate-y-1/2 p-2 text-grey rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-opacity hover:opacity-100 opacity-75"
        aria-label="View Next Image"
      >
        <ArrowBigRight size={30} />
      </button>
    </div>
  );
};

export default ImageSlide;
