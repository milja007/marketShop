"use client"; // This directive indicates this is a Client Component in Next.js

import React from "react";
import Image from "next/image";

// Asset imports (ensure these paths are correct for your setup)
import autoimg from "@/assets/autof.webp";
import photoimg from "@/assets/photop.webp";
import purpleimg from "@/assets/shutterstock_1522132451-1.webp";
import budimg from "@/assets/wide-sml-purple-punch.jpg";
// Import the calculator components
import DliToPpfdCalc from "@/components/CALCS/DliToPpfdCalc"; // Assuming this exists and is styled similarly
import GenericLightCalc from "@/components/CALCS/GenericLightCalc";
import ImageSlide from "@/components/ImageSlider/ImageSlide";
// import { relative } from "path"; // This import is not used and can be removed

// --- Conversion Factors and Helpers (Keep as is or move to utils) ---
// Make sure Lumens <-> PPF factors are accurate!
const ppfdToLuxFactors: { [key: string]: number | null } = {
  /* ...factors */
};
const luxToPpfdFactors: { [key: string]: number | null } = {
  /* ...factors */
};
const lumensToPpfFactors: { [key: string]: number | null } = {
  /* ... **REAL FACTORS NEEDED** */
};
const ppfToLumensFactors: { [key: string]: number | null } = {
  /* ... **REAL FACTORS NEEDED** */
};
// Helper function to format option keys into more readable text
const formatOptionText = (key: string): string => {
  // Simple formatting: replace hyphens with spaces and capitalize first letter
  // Updated to add parenthesis around units like (650nm), (3000K)
  return key
    .replace(/-/g, " ")
    .replace(/(\d+)\s?(nm|K|k)/gi, "($1$2)") // Add parenthesis around units
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// --- Define Specific Calculation Functions ---

// PPFD (input) * Factor (LUX per PPFD) = LUX (output)
const calculatePpfdToLux = (ppfd: number, factor: number): number => {
  // Simple multiplication is correct here.
  return ppfd * factor;
};

// LUX (input) * Factor (PPFD per LUX) = PPFD (output)
// Note: The 'factor' passed here is expected to be the pre-calculated inverse (1 / (LUX per PPFD))
const calculateLuxToPpfd = (lux: number, factor: number): number => {
  // We pre-calculated the factor as PPFD per LUX, so we multiply.
  // We still check if the factor is non-zero to avoid potential issues,
  // though the factor calculation should ideally prevent null/zero factors.
  if (factor === 0) {
    // This case shouldn't happen if luxToPpfdFactors are generated correctly
    // from non-zero ppfdToLuxFactors, but it's safe to check.
    console.error("Error: LUX to PPFD conversion factor is zero.");
    // Returning NaN or throwing an error are options. Let's throw for clarity.
    throw new Error("LUX to PPFD conversion factor cannot be zero.");
  }
  // Since factor is PPFD/LUX, multiplication gives PPFD.
  return lux * factor;
};

// Lumens (input) * Factor (PPF per Lumen) = PPF (output)
// Note: The 'factor' passed here MUST be PPF per Lumen.
const calculateLumensToPpf = (lumens: number, factor: number): number => {
  // Simple multiplication is correct, assuming the factor is correct.
  return lumens * factor;
};

// PPF (input) * Factor (Lumens per PPF) = Lumens (output)
// Note: The 'factor' passed here is expected to be the pre-calculated inverse (1 / (PPF per Lumen))
const calculatePpfToLumens = (ppf: number, factor: number): number => {
  // We pre-calculated the factor as Lumens per PPF, so we multiply.
  // Add check for zero factor.
  if (factor === 0) {
    console.error("Error: PPF to Lumens conversion factor is zero.");
    throw new Error("PPF to Lumens conversion factor cannot be zero.");
  }
  // Since factor is Lumens/PPF, multiplication gives Lumens.
  return ppf * factor;
};

const LightCalc = () => {
  // Define the array of image assets
  const CHART_IMAGES = [autoimg, photoimg];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* --- Hero Section --- */}
      <section className="mb-12 sm:mb-16 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2 lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
              Grow Light Calculations Made Easy
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              All the tools you need in one place to optimize your plant
              lighting setup. Calculate your light based on autoflower or
              photoperiod (chart).
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Pass the CHART_IMAGES array directly to imageUrls */}
            <ImageSlide
              imageUrls={CHART_IMAGES}
              alt="Decorative image illustrating grow lights or plants"
              // Remove width and height props when using object-cover or object-contain within a sized container
              // className="rounded-lg shadow-xl object-cover" // className handled within ImageSlide
              // priority // Priority might be needed if this is above the fold
            />
          </div>
        </div>
      </section>

      {/* --- Charts Section (Empty in original, keeping structure) --- */}
      <section className="my-16 sm:my-20"></section>

      {/* --- Calculator Sections --- */}
      <section className="my-16 sm:my-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-gray-800">
          All Light Conversion Calculators
        </h2>
        {/* Responsive Grid Layout - More Columns on Large Screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Adjusted gap */}
          {/* DLI Calculator Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            {/* Added max-w-sm, mx-auto, w-full */}
            <DliToPpfdCalc /> {/* Assumes this component is also compact */}
            <p className="text-gray-600 text-xs mt-3 flex-grow">
              {/* Smaller text */}
              Calculate Daily Light Integral (DLI) from PPFD and photoperiod...
            </p>
          </div>
          {/* PPFD to LUX Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            {/* Added max-w-sm, mx-auto, w-full */}
            <GenericLightCalc
              title="PPFD to LUX" // Shorter title
              inputLabel="PPFD (μmol/s/m²):"
              outputLabel="LUX:"
              inputDefaultValue={100}
              conversionFactors={ppfdToLuxFactors}
              formatOptionText={formatOptionText}
              calculateFunction={calculatePpfdToLux}
              outputUnit="lux"
              noteText="Approximate conversion from PPFD to LUX." // Shorter note
            />
          </div>
          {/* LUX to PPFD Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            {/* Added max-w-sm, mx-auto, w-full */}
            <GenericLightCalc
              title="LUX to PPFD" // Shorter title
              inputLabel="LUX:"
              outputLabel="PPFD:"
              inputDefaultValue={5000}
              conversionFactors={luxToPpfdFactors}
              formatOptionText={formatOptionText}
              calculateFunction={calculateLuxToPpfd}
              outputUnit="μmol/s/m²"
              noteText="Approximate conversion from LUX to PPFD." // Shorter note
            />
          </div>
          {/* --- Image Break 1 --- */}
          <div className="md:col-span-2 lg:col-span-3 my-6 sm:my-8 flex justify-center items-center px-4">
            {/* Spans grid, adds vertical margin */}
            <Image
              src={purpleimg} // <<<--- ADD & REPLACE
              alt="Close up of healthy plant leaves under grow light"
              width={600} // Adjust width as needed
              height={200} // Adjust height for a wider/banner feel
              className="rounded-lg shadow-md object-cover w-full max-w-3xl" // Max width helps constrain
            />
          </div>
          {/* Lumens to PPF Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            {/* Added max-w-sm, mx-auto, w-full */}
            <GenericLightCalc
              title="Lumens to PPF" // Shorter title
              inputLabel="Lumens (lm):"
              outputLabel="PPF:"
              inputDefaultValue={10000}
              conversionFactors={lumensToPpfFactors} // ** NEEDS REAL FACTORS **
              formatOptionText={formatOptionText}
              calculateFunction={calculateLumensToPpf}
              outputUnit="μmol/s"
              noteText="Estimates PPF from Lumens. Requires accurate factors!" // Shorter note
            />
          </div>
          {/* PPF to Lumens Card - Smaller */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col max-w-sm mx-auto w-full">
            {/* Added max-w-sm, mx-auto, w-full */}
            <GenericLightCalc
              title="PPF to Lumens" // Shorter title
              inputLabel="PPF (μmol/s):"
              outputLabel="Lumens:"
              inputDefaultValue={200}
              conversionFactors={ppfToLumensFactors} // ** NEEDS REAL FACTORS **
              formatOptionText={formatOptionText}
              calculateFunction={calculatePpfToLumens}
              outputUnit="lm" // Standard unit for lumens
              noteText="Estimates Lumens from PPF. Requires accurate factors!" // Shorter note
            />
          </div>
          {/* Placeholder for potentially another calculator or leave empty for grid balance */}
          <div className="hidden lg:block"></div>
          {/* This helps align the last row in a 3-column grid if you have 5 items */}
          {/* --- Image Break 2 (Optional) --- */}
          <div className="md:col-span-2 lg:col-span-3 my-6 sm:my-8 flex justify-center items-center px-4">
            {/* Spans grid, adds vertical margin */}
            <Image
              src={budimg} // <<<--- ADD & REPLACE
              alt="Image of a modern LED grow light fixture"
              width={600} // Adjust width as needed
              height={200} // Adjust height for a wider/banner feel
              className="rounded-lg shadow-md object-cover w-full max-w-3xl" // Max width helps constrain
            />
          </div>
        </div>{" "}
        {/* End Grid */}
      </section>
    </div> // End main container
  );
};

export default LightCalc;
