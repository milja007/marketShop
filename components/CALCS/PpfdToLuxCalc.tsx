"use client"; // This directive indicates this is a Client Component in Next.js

import React, { useRef, useState } from "react";

// Define placeholder conversion factors (LUX per PPFD) for 14 different light types.
// IMPORTANT: Replace the 'null' values below with your actual conversion factors (numbers).
// These factors are highly spectrum-dependent and vary between specific light fixtures.
interface PpfdToLuxCalcProps {
  conversionFactors: { [key: string]: number | null };
  formatOptionText: (key: string) => string;
}

const PpfdToLuxCalc: React.FC<PpfdToLuxCalcProps> = ({
  conversionFactors,
  formatOptionText,
}) => {
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

    // Check if a valid conversion factor exists and is not null for the selected type
    if (conversionFactor === undefined || conversionFactor === null) {
      setError(
        `Conversion factor not available for ${formatOptionText(
          lightType
        )}. Please add the factor.`
      );
      return;
    }
    if (conversionFactor <= 0) {
      setError(
        `Conversion factor for ${formatOptionText(lightType)} must be positive.`
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
    <div className="bg-white p-6 rounded-lg shadow">
      {/* Explanation about the approximation */}
      <p className="text-gray-700 text-sm sm:text-base mb-4">
        This calculator converts PPFD (Photosynthetic Photon Flux Density) to
        LUX (a measure of illuminance based on human vision). **Note:** This
        conversion is highly approximate and depends heavily on the light
        sources spectral distribution. The factors used here are typical
        examples. A proper PAR meter is needed for accurate PPFD measurements.
      </p>

      <div className="mb-4">
        <label
          htmlFor="ppfdInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          PPFD (μmol/s/m²):
        </label>
        <input
          type="number"
          id="ppfdInput" // Unique ID for the label
          ref={ppfdInputRef} // Attach the ref to the input
          defaultValue={100} // Sets the initial default value
          min={0} // Minimum allowed value
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Basic Tailwind styling
        />
      </div>
      {/* Light Type Select */}
      <div className="mb-6">
        <label
          htmlFor="lightTypeSelect"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Spectrum:
        </label>
        <select
          id="lightTypeSelect" // Unique ID for the label
          value={lightType} // Bind the select value to the state
          onChange={handleLightTypeChange} // Handle changes with the state update function
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Basic Tailwind styling
        >
          {/* Map over the conversionFactors keys to create 14 options */}
          {Object.keys(conversionFactors).map((key) => (
            <option key={key} value={key}>
              {formatOptionText(key)}{" "}
              {/* Use the helper function to format text */}
            </option>
          ))}
        </select>
      </div>
      {/* Calculate Button */}
      <div className="mb-4">
        <button
          onClick={calcPPFDToLUX}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" // Basic Tailwind styling
        >
          Calculate
        </button>
      </div>
      {/* Display Error Message */}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          {" "}
          {/* Basic Tailwind error styling */}
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {/* Display Result */}
      {luxResult !== null && !error && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {" "}
          {/* Basic Tailwind success styling */}
          <span className="font-bold">Calculated = </span>{" "}
          {luxResult.toFixed(0)} lux
        </div>
      )}
    </div>
  );
};

export default PpfdToLuxCalc;
