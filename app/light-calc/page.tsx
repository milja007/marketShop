// const LightCalc = () => {
//   return (
//     <>
//       <h1>All Growing Light Calculations You Need!</h1>
//       <div>
//         <p></p>
//       </div>
//     </>
//   );
// };

// export default LightCalc;
import React from "react";

const LightCalc = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {" "}
      {/* Added a container for basic centering/padding */}
      {/* Main Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        All Growing Light Calculations You Need!
      </h1>
      {/* Introductory Text */}
      <p className="text-center text-lg mb-8">
        {" "}
        {/* Using a paragraph as requested */}
        Here is my calc all in one place, everything you need for calculating.
      </p>
      {/* Charts Section (Moved to the top) */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Helpful Charts
        </h2>
        {/* Description before the charts */}
        <p className="text-gray-700 text-center mb-8">
          Understanding the relationship between light intensity (PPFD) and
          duration (photoperiod) is crucial for plant growth. These charts
          provide valuable insights into recommended Daily Light Integral (DLI)
          targets for different plant stages and types, including specific
          guidance for autoflowering varieties. Use them as a guide in
          conjunction with the calculators below to optimize your lighting
          setup.
        </p>

        {/* Combined Chart Slide Placeholder */}
        {/* You can implement this as a single component that perhaps uses a carousel or tabs to show both charts */}
        <div className="bg-white p-6 rounded-lg shadow">
          {" "}
          {/* Basic card styling for the combined chart section */}
          <h3 className="text-xl font-medium mb-3">
            Photoperiod and Autoflower DLI Charts
          </h3>
          {/* Placeholder for the combined chart component */}
          <div className="border h-96 flex items-center justify-center">
            {" "}
            {/* Increased height for combined view */}
            <p>Combined Chart Component Placeholder (e.g., Carousel or Tabs)</p>
            {/* Your combined chart component (e.g., showing Photoperiod and Autoflower charts) will go here */}
          </div>
        </div>
      </div>{" "}
      {/* End Charts Section */}
      {/* Calculator Sections (Remain below charts) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {" "}
        {/* Grid layout for calculators */}
        {/* Hours and PPFD to DLI Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          {" "}
          {/* Basic card styling */}
          <h2 className="text-2xl font-semibold mb-3">Hours and PPFD to DLI</h2>
          {/* Calculator Input/Output Placeholder - Actual calculator logic will go here */}
          <div className="border p-4 mb-4">
            {/* Calculator UI elements (inputs, button, output) will be placed here */}
            <p>Calculator UI Placeholder</p>
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700">
            {/* Explanation text for Hours and PPFD to DLI */}
            Explanation for Hours and PPFD to DLI goes here. Describe what DLI
            is and how this calculation helps.
          </p>
        </div>
        {/* PPF to LUX Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">PPF to LUX</h2>
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <p>Calculator UI Placeholder</p>
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700">
            {/* Explanation text for PPF to LUX */}
            Explanation for PPF to LUX goes here. Explain the difference between
            PPF and LUX and why convert.
          </p>
        </div>
        {/* LUX to PPF Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">LUX to PPF</h2>
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <p>Calculator UI Placeholder</p>
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700">
            {/* Explanation text for LUX to PPF */}
            Explanation for LUX to PPF goes here. Explain when you might need to
            convert from LUX to PPF.
          </p>
        </div>
        {/* Lumens to PPF Calculator Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Lumens to PPF</h2>
          {/* Calculator Input/Output Placeholder */}
          <div className="border p-4 mb-4">
            <p>Calculator UI Placeholder</p>
          </div>
          {/* Explanation for this calculator */}
          <p className="text-gray-700">
            {/* Explanation text for Lumens to PPF */}
            Explanation for Lumens to PPF goes here. Explain the relationship
            between Lumens and PPF.
          </p>
        </div>
      </div>{" "}
      {/* End Calculator Sections */}
    </div>
  );
};

export default LightCalc;
