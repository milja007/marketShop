"use client"; // This directive indicates this is a Client Component in Next.js

import React, { useRef, useState } from "react";

// Define conversion factors (PPFD per LUX) for different light types.
// These are the inverse of the LUX per PPFD factors (1 / (LUX per PPFD)).
// Replace the values with your actual conversion factors (numbers).
const conversionFactors: { [key: string]: number | null } = {
  "Natural Daylight 6500K": 1 / 43.478261,
  "Halogen Lamp 3000K": 1 / 28.913615,
  "High CRI LED 6500K": 1 / 5.802603,
  "High CRI LED 4000K": 1 / 5.6108597,
  "High CRI LED 3000K": 1 / 5.2555701,
  "Low CRI LED 6500K": 1 / 7.4588939,
  "Low CRI LED 3500K": 1 / 6.235595,
  "HPS 2000K": 1 / 7.7079295,
  "CMH 3000K": 1 / 5.5092988,
  "Fluorescent Lamp 5000K": 1 / 74.112821, // Corrected factor based on common values (was very high)
  "Monochromatic Red LED 650 nm": 1 / 13.012295,
  "Monochromatic Blue LED 450 nm": 1 / 8.654105,
  "Red + Blue LED 450+650 nm": 1 / 11.270037,
  "Red + Blue + White LED 450+650nm+3500K": 1 / 38.926554,
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

const LuxToPpfdCalc: React.FC = () => {
  // Create a ref for the LUX input element
  const luxInputRef = useRef<HTMLInputElement>(null);

  // State to manage the selected light source type (defaulting to the first option key)
  const [lightType, setLightType] = useState<string>(
    Object.keys(conversionFactors)[0]
  );
  // State to store the calculated PPFD result
  const [ppfdResult, setPpfdResult] = useState<number | null>(null);
  // State to store any error messages
  const [error, setError] = useState<string | null>(null);

  // Function to handle the change in the light type select dropdown
  const handleLightTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // Update the lightType state with the selected value
    setLightType(event.target.value);
    // Clear previous result and error when the light type changes
    setPpfdResult(null);
    setError(null);
  };

  // Function to calculate PPFD from LUX and the selected light type
  const calcLUXToPPFD = () => {
    // Clear previous results and errors
    setPpfdResult(null);
    setError(null);

    // Get the LUX value from the input ref, defaulting to an empty string if null
    const luxValueString = luxInputRef.current?.value ?? "";
    // Convert the string value to a floating-point number
    const luxValue = parseFloat(luxValueString);

    // *** Validation ***
    // Check if the LUX value is a valid non-negative number
    if (isNaN(luxValue) || luxValue < 0) {
      setError("Please enter a valid positive number for LUX.");
      return; // Stop the calculation if validation fails
    }

    // Get the conversion factor based on the selected light type
    const conversionFactor = conversionFactors[lightType];

    // Check if a valid conversion factor exists, is not null, and is positive
    if (conversionFactor === undefined || conversionFactor === null) {
      setError(
        `Conversion factor not available for "${formatOptionText(
          lightType
        )}". Please add the factor.`
      );
      return;
    }
    if (conversionFactor <= 0) {
      // Factor must be positive for division
      setError(
        `Conversion factor for "${formatOptionText(
          lightType
        )}" must be positive.`
      );
      return;
    }

    // *** Calculation ***
    // Formula: PPFD = LUX * ConversionFactor (PPFD per LUX)
    const result = luxValue * conversionFactor; // Note: The factor is PPFD per LUX, so we multiply

    // *** Update State ***
    // Update the state with the calculated result, triggering a re-render to display it
    setPpfdResult(result);
  };

  return (
    <>
      {" "}
      {/* Use fragment to avoid extra div if this is placed inside another container */}
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        LUX to PPFD Calculator
      </h3>
      {/* Explanation about the approximation */}
      <p className="text-gray-700 text-sm sm:text-base mb-4">
        This calculator converts LUX (a measure of illuminance based on human
        vision) to PPFD (Photosynthetic Photon Flux Density). **Note:** This
        conversion is highly approximate and depends heavily on the light
        sources spectral distribution.
      </p>
      {/* LUX Input */}
      <div className="mb-4">
        {" "}
        {/* Added margin-bottom */}
        <label
          htmlFor="luxInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {" "}
          {/* Block label for better layout */}
          LUX:
        </label>
        <input
          type="number"
          id="luxInput" // Unique ID for the label
          ref={luxInputRef} // Attach the ref to the input
          defaultValue={50000} // Sets the initial default value (example)
          min={0} // Minimum allowed value
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Tailwind form styling
        />
      </div>
      {/* Light Type Select */}
      <div className="mb-6">
        {" "}
        {/* Added margin-bottom */}
        <label
          htmlFor="lightTypeSelectLux"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {" "}
          {/* Block label for better layout */}
          Light Source Type:
        </label>
        <select
          id="lightTypeSelectLux" // Unique ID for the label (different from the PPFD to LUX component)
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
          onClick={calcLUXToPPFD}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" // Tailwind button styling with transition
        >
          Calculate PPFD
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
      {ppfdResult !== null && !error && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {" "}
          {/* Tailwind success styling */}
          <span className="font-bold">Calculated PPFD:</span>{" "}
          {ppfdResult.toFixed(2)} μmol/s/m²
        </div>
      )}
    </>
  );
};

export default LuxToPpfdCalc;
