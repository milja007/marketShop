"use client"; // This directive indicates this is a Client Component in Next.js

import React, { useRef, useState } from "react";

// Define conversion factors (LUX per PPFD) for different light types.
// These factors are highly spectrum-dependent and vary between specific light fixtures.
// Replace the values with your actual conversion factors (numbers).
const conversionFactors: { [key: string]: number | null } = {
  "Natural Daylight 6500K": 43.478261,
  "Halogen Lamp 3000K": 28.913615,
  "High CRI LED 6500K": 5.802603,
  "High CRI LED 4000K": 5.6108597,
  "High CRI LED 3000K": 5.2555701,
  "Low CRI LED 6500K": 7.4588939,
  "Low CRI LED 3500K": 6.235595,
  "HPS 2000K": 7.7079295,
  "CMH 3000K": 5.5092988,
  "Fluorescent Lamp 5000K": 74.112821, // Corrected factor based on common values (was very high)
  "Monochromatic Red LED 650 nm": 13.012295,
  "Monochromatic Blue LED 450 nm": 8.654105,
  "Red + Blue LED 450+650 nm": 11.270037,
  "Red + Blue + White LED 450+650nm+3500K": 38.926554,
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

const PpfdToLuxCalc: React.FC = () => {
  // Create a ref for the PPFD input element
  const ppfdInputRef = useRef<HTMLInputElement>(null);

  // State to manage the selected light source type (defaulting to the first option key)
  const [lightType, setLightType] = useState<string>(
    Object.keys(conversionFactors)[0]
  );
  // State to store the calculated LUX result
  const [luxResult, setLuxResult] = useState<number | null>(null);
  // State to store any error messages
  const [error, setError] = useState<string | null>(null);

  // Function to handle the change in the light type select dropdown
  const handleLightTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // Update the lightType state with the selected value
    setLightType(event.target.value);
    // Clear previous result and error when the light type changes
    setLuxResult(null);
    setError(null);
  };

  // Function to calculate LUX from PPFD and the selected light type
  const calcPPFDToLUX = () => {
    // Clear previous results and errors
    setLuxResult(null);
    setError(null);

    // Get the PPFD value from the input ref, defaulting to an empty string if null
    const ppfdValueString = ppfdInputRef.current?.value ?? "";
    // Convert the string value to a floating-point number
    const ppfdValue = parseFloat(ppfdValueString);

    // *** Validation ***
    // Check if the PPFD value is a valid non-negative number
    if (isNaN(ppfdValue) || ppfdValue < 0) {
      setError("Please enter a valid positive number for PPFD.");
      return; // Stop the calculation if validation fails
    }

    // Get the conversion factor based on the selected light type
    const conversionFactor = conversionFactors[lightType];

    if (conversionFactor === undefined || conversionFactor === null) {
      setError(
        `Conversion factor not available for "${formatOptionText(
          lightType
        )}". Please add the factor.`
      );
      return;
    }
    if (conversionFactor <= 0) {
      setError(
        `Conversion factor for "${formatOptionText(
          lightType
        )}" must be positive.`
      );
      return;
    }

    // *** Calculation ***
    // Formula: LUX = PPFD * ConversionFactor (LUX per PPFD)
    const result = ppfdValue * conversionFactor;

    // *** Update State ***
    // Update the state with the calculated result, triggering a re-render to display it
    setLuxResult(result);
  };

  return (
    <>
      {" "}
      {/* Use fragment to avoid extra div if this is placed inside another container */}
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        PPFD to LUX Calculator
      </h3>
      {/* Explanation about the approximation */}
      <p className="text-gray-700 text-sm sm:text-base mb-4">
        This calculator converts PPFD (Photosynthetic Photon Flux Density) to
        LUX (a measure of illuminance based on human vision). **Note:** This
        conversion is highly approximate and depends heavily on the light
        sources spectral distribution.
      </p>
      {/* PPFD Input */}
      <div className="mb-4">
        {" "}
        {/* Added margin-bottom */}
        <label
          htmlFor="ppfdInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {" "}
          {/* Block label for better layout */}
          PPFD (μmol/s/m²):
        </label>
        <input
          type="number"
          id="ppfdInput" // Unique ID for the label
          ref={ppfdInputRef} // Attach the ref to the input
          defaultValue={300} // Sets the initial default value
          min={0} // Minimum allowed value
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Tailwind form styling
        />
      </div>
      {/* Light Type Select */}
      <div className="mb-6">
        {" "}
        {/* Added margin-bottom */}
        <label
          htmlFor="lightTypeSelectPpfd"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {" "}
          {/* Block label for better layout */}
          Light Source Type:
        </label>
        <select
          id="lightTypeSelectPpfd" // Unique ID
          value={lightType} // Bind the select value to the state
          onChange={handleLightTypeChange} // Handle changes with the state update function
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Tailwind form styling
        >
          {/* Map over the conversionFactors keys to create options */}
          {Object.keys(conversionFactors).map((key) => (
            <option key={key} value={key}>
              {formatOptionText(key)} {/* Use the formatting function */}
            </option>
          ))}
        </select>
      </div>
      {/* Calculate Button */}
      <div className="mb-4">
        {" "}
        {/* Added margin-bottom */}
        <button
          onClick={calcPPFDToLUX}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" // Tailwind button styling with transition
        >
          Calculate LUX
        </button>
      </div>
      {/* Display Error Message */}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          {" "}
          {/* Tailwind error styling */}
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {luxResult !== null && !error && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {" "}
          {/* Tailwind success styling */}
          <span className="font-bold">Calculated LUX:</span>{" "}
          {luxResult.toFixed(2)} lux
        </div>
      )}
    </>
  );
};

export default PpfdToLuxCalc;
