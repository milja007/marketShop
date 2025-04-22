"use client";
import React from "react";
// Assuming your image imports are now correctly configured or images are in the public folder
import autoimg from "@/assets/autof.webp"; // Or import from public if using next/image correctly
import photoimg from "@/assets/photop.webp"; // Or import from public if using next/image correctly
import Image from "next/image";
import DliToPpfdCalc from "@/components/CALCS/DliToPpfdCalc";
import PpfToLuxCalc from "@/components/CALCS/PpfdToLuxCalc";
import LuxToPpfd from "@/components/CALCS/LuxToPpfdCalc";
import LumensToPpfCalc from "@/components/CALCS/LumensToPpfCalc";
import PpfToLumens from "@/components/CALCS/PpfToLumensCalc";
// Removed: import ImageSlide from "@/components/ImageSlider/ImageSlide";
const conversionFactors: { [key: string]: number | null } = {
  "Natural Daylight 6500K": 43.478261, // Replace null with your factor for Option 1 (e.g., 90)
  "Halogen Lamp 3000K": 28.913615, // Replace null with your factor for Option 2 (e.g., 80)
  "High CRI LED 6500K": 5.802603, // Replace null with your factor for Option 3 (e.g., 70)
  "High CRI LED 4000K": 5.6108597, // Replace null with your factor for Option 4 (e.g., 95)
  "High CRI LED 3000K": 5.2555701, // Replace null with your factor for Option 5 (e.g., 54)
  "Low CRI LED 6500K": 7.4588939, // Replace null with your factor for Option 6
  "Low CRI LED 3500K": 6.235595, // Replace null with your factor for Option 7
  "HPS 2000K": 7.7079295, // Replace null with your factor for Option 8
  "CMH 3000K": 5.5092988, // Replace null with your factor for Option 9 "Fluorescent Lamp 5000K": 74112821, // Replace null with your factor for Option 10
  "Monochromatic Red LED 650 nm": 13.012295, // Replace null with your factor for Option 11
  "Monochromatic Blue LED 450 nm": 8.654105, // Replace null with your factor for Option 12
  "Red + Blue LED 450+650 nm": 11.270037, // Replace null with your factor for Option 13
  "Red + Blue + White LED 450+650nm+3500K": 38.926554, // Replace null with your factor for Option 14
};

// Helper function to format option keys into more readable text
const formatOptionText = (key: string): string => {
  // Simple formatting: replace hyphens with spaces and capitalize first letter of each word
  return key
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
const LightCalc = () => {
  // Using the imported image objects directly for the side-by-side view (next/image prefers the imported object)
  const CHART_IMAGES = [autoimg, photoimg];

  return (
    // Main container: basic centering and padding, responsive
    <div className="container mx-auto px-4 py-8">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
        {" "}
        {/* Added responsive text size */}
        All Growing Light Calculations You Need!
      </h1>
      {/* Introductory Text */}
      <p className="text-center text-base sm:text-lg mb-8 text-gray-700">
        {" "}
        {/* Added responsive text size */}
        Here is my calc all in one place, everything you need for calculating.
      </p>
      {/* Charts Section (Simplified Image Display) */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          {" "}
          {/* Added responsive text size */}
          Helpful Charts
        </h2>
        {/* Description before the charts */}
        <p className="text-gray-700 text-sm sm:text-base text-center mb-8">
          {" "}
          {/* Added responsive text size */}
          Understanding the relationship between light intensity (PPFD) and
          duration (photoperiod) is crucial for plant growth. These charts
          provide valuable insights into recommended Daily Light Integral (DLI)
          targets for different plant stages and types, including specific
          guidance for autoflowering varieties. Use them as a guide in
          conjunction with the calculators below to optimize your lighting
          setup.
        </p>

        {/* --- Responsive Image Display (Side-by-Side) --- */}
        {/* Flex container: column on small screens, row on medium and up */}
        {/* Items centered, gap added on medium and up */}
        <div className="flex flex-col md:flex-row md:gap-8 items-center justify-center mb-12">
          {/* Mapping over images to display them */}
          {CHART_IMAGES.map((img, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0"
            >
              {" "}
              {/* Container for each image */}
              <Image
                src={img} // Use the imported image object
                alt={`Chart ${index === 0 ? "Autoflower DLI" : "Photoperiod"}`} // Descriptive alt text
                // Add width and height for Image optimization
                width={600}
                height={400}
                // object-contain: ensures full image is visible
                // w-full md:w-auto: makes image fill container width on small screens, auto width on medium+
                // max-h-96: limits max height to prevent excessive vertical space
                className="object-contain w-full md:w-auto max-h-96" // Simplified styling
              />
            </div>
          ))}
        </div>
        {/* --- End Responsive Image Display --- */}
      </div>{" "}
      {/* End Charts Section */}
      {/* Calculator Sections (Remain below charts) */}
      {/* Grid layout: single column on small screens, two columns on medium and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Hours and PPFD to DLI Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            PPFD to DLI
          </h2>{" "}
          {/* Added responsive text size */}
          {/* Calculator Input/Output Placeholder - Actual calculator logic will go here */}
          <div className="border p-4 mb-4">
            <DliToPpfdCalc />
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700 text-sm sm:text-base">
            {" "}
            {/* Added responsive text size */}
            This calculator helps you find the Daily Light Integral (DLI), which
            is the total amount of PAR light received over a 24-hour period. DLI
            is a crucial metric for plant growth as it accounts for both light
            intensity (PPFD) and duration (photoperiod). Use this to ensure your
            plants get the right total amount of light per day. The formula is
            DLI = PPFD * hours * 3600 / 1,000,000.
          </p>
        </div>

        {/* PPF to LUX Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            PPFD to Lux
          </h2>{" "}
          {/* Added responsive text size */}
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <PpfToLuxCalc
              conversionFactors={conversionFactors}
              formatOptionText={formatOptionText}
            />
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700 text-sm sm:text-base">
            {" "}
            {/* Added responsive text size */}
            PPF (Photosynthetic Photon Flux) measures the total amount of PAR
            (Photosynthetically Active Radiation) light emitted by a source in
            micromoles per second (μmol/s). LUX is a measure of illuminance
            perceived by the human eye. Converting PPF to LUX can give you a
            rough idea of how bright a grow light might appear, but its not
            useful for determining plant growth potential as plants use a
            different light spectrum than humans see most brightly. This
            conversion is highly dependent on the light sources spectrum.
          </p>
        </div>

        {/* LUX to PPF Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Lux to PPFD
          </h2>{" "}
          {/* Added responsive text size */}
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <LuxToPpfd
              conversionFactors={conversionFactors}
              formatOptionText={formatOptionText}
            />
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700 text-sm sm:text-base">
            {" "}
            {/* Added responsive text size */}
            This calculator attempts to convert a LUX reading (human-centric
            light measurement) to PPF (plant-centric light measurement). While
            you might use a standard light meter that gives LUX readings, this
            conversion is **highly inaccurate** for grow lights because the
            relationship between LUX and PPF varies significantly based on the
            light sources spectral distribution (the mix of colors in the
            light). Use this tool only for very rough estimations; a proper PAR
            meter is needed for accurate PPFD/PPF measurements.
          </p>
        </div>

        {/* Lumens to PPF Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Lumens to PPF
          </h2>{" "}
          {/* Added responsive text size */}
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <LumensToPpfCalc
              conversionFactors={conversionFactors}
              formatOptionText={formatOptionText}
            />
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700 text-sm sm:text-base">
            {" "}
            {/* Added responsive text size */}
            Lumens measure the total amount of visible light emitted by a
            source, weighted according to human eye sensitivity. PPF measures
            the total amount of photosynthetically active radiation (PAR)
            relevant to plants. Plants utilize a different spectrum of light
            than humans perceive most brightly (e.g., they use more blue and red
            light, less green). Therefore, converting Lumens to PPF is **not a
            reliable method** for assessing a grow lights effectiveness for
            plants. This calculation is provided for informational purposes but
            is highly dependent on the lights spectrum and should not be used
            for precise grow light planning.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            PPF to Lumens
          </h2>{" "}
          {/* Added responsive text size */}
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <PpfToLumens
              conversionFactors={conversionFactors}
              formatOptionText={formatOptionText}
            />
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700 text-sm sm:text-base">
            {" "}
            {/* Added responsive text size */}
            Lumens measure the total amount of visible light emitted by a
            source, weighted according to human eye sensitivity. PPF measures
            the total amount of photosynthetically active radiation (PAR)
            relevant to plants. Plants utilize a different spectrum of light
            than humans perceive most brightly (e.g., they use more blue and red
            light, less green). Therefore, converting Lumens to PPF is **not a
            reliable method** for assessing a grow lights effectiveness for
            plants. This calculation is provided for informational purposes but
            is highly dependent on the lights spectrum and should not be used
            for precise grow light planning.
          </p>
        </div>
      </div>{" "}
      {/* End Calculator Sections */}
    </div>
  );
};

export default LightCalc;
