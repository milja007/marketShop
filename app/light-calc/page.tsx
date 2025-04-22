import React from "react";
// Assuming your image imports are now correctly configured or images are in the public folder
import autoimg from "@/assets/autof.webp"; // Or import from public if using next/image correctly
import photoimg from "@/assets/photop.webp"; // Or import from public if using next/image correctly
import Image from "next/image";
// Removed: import ImageSlide from "@/components/ImageSlider/ImageSlide";

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
            Hours and PPFD to DLI
          </h2>{" "}
          {/* Added responsive text size */}
          {/* Calculator Input/Output Placeholder - Actual calculator logic will go here */}
          <div className="border p-4 mb-4">
            {/* Calculator UI elements (inputs, button, output) will be placed here */}
            <p>Calculator UI Placeholder</p>
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
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">PPF to LUX</h2>{" "}
          {/* Added responsive text size */}
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <p>Calculator UI Placeholder</p>
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
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">LUX to PPF</h2>{" "}
          {/* Added responsive text size */}
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <p>Calculator UI Placeholder</p>
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
            <p>Calculator UI Placeholder</p>
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
