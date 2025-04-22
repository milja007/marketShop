"use client"; // This directive indicates this is a Client Component in Next.js

import React, { useRef, useState } from "react";

// Define placeholder conversion factors (PPF per Lumen) for different light types.
// IMPORTANT: Replace the null values with your actual conversion factors (numbers).
// These factors are highly spectrum-dependent.
const conversionFactors: { [key: string]: number | null } = {
  "Natural Daylight 6500K": null, // Add your factor here
  "Halogen Lamp 3000K": null, // Add your factor here
  "High CRI LED 6500K": null, // Add your factor here
  "High CRI LED 4000K": null, // Add your factor here
  "High CRI LED 3000K": null, // Add your factor here
  "Low CRI LED 6500K": null, // Add your factor here
  "Low CRI LED 3500K": null, // Add your factor here
  "HPS 2000K": null, // Add your factor here
  "CMH 3000K": null, // Add your factor here
  "Fluorescent Lamp 5000K": null, // Add your factor here
  "Monochromatic Red LED 650 nm": null, // Add your factor here
  "Monochromatic Blue LED 450 nm": null, // Add your factor here
  "Red + Blue LED 450+650 nm": null, // Add your factor here
  "Red + Blue + White LED 450+650nm+3500K": null, // Add your factor here
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

const LumensToPpfCalc: React.FC = () => {
  // Create a ref for the Lumens input element
  const lumensInputRef = useRef<HTMLInputElement>(null);

  // State to manage the selected light source type (defaulting to the first option key)
  const [lightType, setLightType] = useState<string>(
    Object.keys(conversionFactors)[0]
  );
  // State to store the calculated PPF result
  const [ppfResult, setPpfResult] = useState<number | null>(null);
  // State to store any error messages
  const [error, setError] = useState<string | null>(null);

  // Function to handle the change in the light type select dropdown
  const handleLightTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // Update the lightType state with the selected value
    setLightType(event.target.value);
    // Clear previous result and error when the light type changes
    setPpfResult(null);
    setError(null);
  };

  // Function to calculate PPF from Lumens and the selected light type
  const calcLUMENStoPPF = () => {
    // Clear previous results and errors
    setPpfResult(null);
    setError(null);

    // Get the Lumens value from the input ref, defaulting to an empty string if null
    const lumensValueString = lumensInputRef.current?.value ?? "";
    // Convert the string value to a floating-point number
    const lumensValue = parseFloat(lumensValueString);

    // *** Validation ***
    // Check if the Lumens value is a valid non-negative number
    if (isNaN(lumensValue) || lumensValue < 0) {
      setError("Please enter a valid positive number for Lumens.");
      return; // Stop the calculation if validation fails
    }

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
    // Formula: PPF = Lumens * ConversionFactor (PPF per Lumen)
    const result = lumensValue * conversionFactor;

    // *** Update State ***
    // Update the state with the calculated result, triggering a re-render to display it
    setPpfResult(result);
  };

  return (
    <>
      {" "}
      {/* Use fragment to avoid extra div if this is placed inside another container */}
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Lumens to PPF Calculator
      </h3>
      {/* Explanation about the approximation */}
      <p className="text-gray-700 text-sm sm:text-base mb-4">
        This calculator converts Lumens (human-centric) to PPF (plant-centric).
        **Note:** This conversion is highly approximate and depends heavily on
        the light sources spectral distribution.
      </p>
      {/* Lumens Input */}
      <div className="mb-4">
        {" "}
        {/* Added margin-bottom */}
        <label
          htmlFor="lumensInput"
          className="block text-gray-700 text-sm font-bold mb-2" // Block label for better layout
        >
          Lumens:
        </label>
        <input
          type="number"
          id="lumensInput" // Unique ID for the label
          ref={lumensInputRef} // Attach the ref to the input
          defaultValue={80000} // Sets the initial default value (example)
          min={0} // Minimum allowed value
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Tailwind form styling
        />
      </div>
      {/* Light Type Select */}
      <div className="mb-6">
        {" "}
        {/* Added margin-bottom */}
        <label
          htmlFor="lightTypeSelectLumens"
          className="block text-gray-700 text-sm font-bold mb-2" // Block label for better layout
        >
          Light Source Type:
        </label>
        <select
          id="lightTypeSelectLumens" // Unique ID for the label
          value={lightType} // Bind the select value to the state
          onChange={handleLightTypeChange} // Handle changes with the state update function
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Tailwind form styling
        >
          {Object.keys(conversionFactors).map((key) => (
            <option key={key} value={key}>
              {formatOptionText(key)} {/* Use the formatting function */}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        {" "}
        {/* Added margin-bottom */}
        <button
          onClick={calcLUMENStoPPF}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" // Tailwind button styling with transition
        >
          Calculate PPF
        </button>
      </div>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert" // Tailwind error styling
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {ppfResult !== null && !error && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert" // Tailwind success styling
        >
          <span className="font-bold">Calculated PPF:</span>{" "}
          {ppfResult.toFixed(2)} μmol/s
        </div>
      )}
    </>
  );
};

export default LumensToPpfCalc;
