"use client"; // This directive indicates this is a Client Component in Next.js

import React, { useRef, useState } from "react";

// Define the props interface for the generic calculator
interface GenericLightCalcProps {
  title: string; // Title of the specific calculator
  inputLabel: string; // Label for the input field
  outputLabel: string; // Label for the result display
  inputDefaultValue: number; // Default value for the input
  conversionFactors: { [key: string]: number | null }; // The specific set of factors for this calculation

  calculationType:
    | "ppfd-to-lux"
    | "lux-to-ppfd"
    | "lumens-to-ppf"
    | "ppf-to-lumens";
  outputUnit: string; // The unit for the output result
  noteText: string; // Explanatory note about the calculation/approximation
}

const formatOptionText = (key: string): string => {
  return key
    .replace(/-/g, " ")
    .replace(/(\d+)\s?(nm|K|k)/g, "($1$2)") // Add parenthesis around units like (650nm), (3000K)
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const GenericLightCalc: React.FC<GenericLightCalcProps> = ({
  title,
  inputLabel,
  outputLabel,
  inputDefaultValue,
  conversionFactors,
  calculationType,
  outputUnit,
  noteText,
}) => {
  // Create a ref for the input element
  const inputRef = useRef<HTMLInputElement>(null);

  // State to manage the selected light source type (defaulting to the first option key)
  const [lightType, setLightType] = useState<string>(
    Object.keys(conversionFactors)[0]
  );
  // State to store the calculated result
  const [result, setResult] = useState<number | null>(null);
  // State to store any error messages
  const [error, setError] = useState<string | null>(null);

  // Function to handle the change in the light type select dropdown
  const handleLightTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLightType(event.target.value);
    setResult(null);
    setError(null);
  };

  // Function to perform the calculation
  const performCalculation = () => {
    setResult(null);
    setError(null);

    const inputValueString = inputRef.current?.value ?? "";
    const inputValue = parseFloat(inputValueString);

    if (isNaN(inputValue) || inputValue < 0) {
      setError(
        `Please enter a valid positive number for ${inputLabel.replace(
          ":",
          ""
        )}.`
      );
      return;
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

    // Allow non-positive factor only if it's multiplication (like PPFD to LUX, where 0 is valid)
    // For division-based calculations (LUX to PPFD), factor must be positive.
    // We check the calculateFunction logic implicitly here. A simple check:
    // If the output unit suggests division might happen (e.g., contains '/'), enforce positive factor.
    // This is a heuristic; a more robust way would be to pass a flag in props if needed.
    const requiresPositiveFactor = outputUnit.includes("/");
    if (requiresPositiveFactor && conversionFactor <= 0) {
      setError(
        `Conversion factor for "${formatOptionText(
          lightType
        )}" must be positive for this calculation.`
      );
      return;
    }

    try {
      let calculatedResult: number;

      // --- Use the calculationType to determine the logic ---
      switch (calculationType) {
        case "ppfd-to-lux":
          // PPFD (input) * Factor (LUX per PPFD) = LUX (output)
          calculatedResult = inputValue * conversionFactor;
          break;
        case "lux-to-ppfd":
          // LUX (input) * Factor (PPFD per LUX) = PPFD (output)
          // Note: Factor is pre-calculated inverse (1 / (LUX per PPFD))
          // Zero factor check is done above
          calculatedResult = inputValue * conversionFactor;
          break;
        case "lumens-to-ppf":
          // Lumens (input) * Factor (PPF per Lumen) = PPF (output)
          calculatedResult = inputValue * conversionFactor;
          break;
        case "ppf-to-lumens":
          // PPF (input) * Factor (Lumens per PPF) = Lumens (output)
          // Note: Factor is pre-calculated inverse (1 / (PPF per Lumen))
          // Zero factor check is done above
          calculatedResult = inputValue * conversionFactor;
          break;
        default:
          // Should not happen if types are correct
          console.error("Unknown calculation type:", calculationType);
          throw new Error("Invalid calculation type specified.");
      }
      // --- End of calculation logic switch ---

      if (isNaN(calculatedResult) || !isFinite(calculatedResult)) {
        setError(
          "Calculation resulted in an invalid number. Check input and factors."
        );
        return;
      }
      setResult(calculatedResult);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(`Calculation error: ${e.message}`);
      } else {
        setError(`An unknown calculation error occurred.`);
      }
    }
  };

  return (
    <div className="flex flex-col   w-80 mt-20 mb-20 ml-10">
      <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {noteText}
      </p>

      {/* Input Field */}
      <div className="mb-5">
        <label
          htmlFor={`input-${title.replace(/\s+/g, "-")}`}
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
        >
          {inputLabel}
        </label>
        <input
          type="number"
          id={`input-${title.replace(/\s+/g, "-")}`}
          ref={inputRef}
          defaultValue={inputDefaultValue}
          min={0}
          step="any"
          className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded max-w-xs w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Light Type Select */}
      <div className="mb-6">
        <label
          htmlFor={`lightTypeSelect-${title.replace(/\s+/g, "-")}`}
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
        >
          Light Source Type:
        </label>
        <select
          id={`lightTypeSelect-${title.replace(/\s+/g, "-")}`}
          value={lightType}
          onChange={handleLightTypeChange}
          className="shadow-sm appearance-none border border-gray-300 dark:border-gray-600 rounded max-w-xs w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {Object.keys(conversionFactors).map((key) => (
            <option key={key} value={key}>
              {formatOptionText(key)}
            </option>
          ))}
        </select>
      </div>

      {/* Calculate Button */}
      <div className="mt-6">
        <button
          onClick={performCalculation}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Calculate {outputLabel.replace("Calculated ", "").replace(":", "")}
        </button>
      </div>

      {/* Display Error Message */}
      {error && (
        <div
          className="mt-4 bg-red-100 dark:bg-red-300 border border-red-400 dark:border-red-500 text-red-700 dark:text-red-900 px-4 py-3 rounded relative max-w-md"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* Display Result */}
      {result !== null && !error && (
        <div
          className="mt-4 bg-green-100 dark:bg-green-300 border border-green-400 dark:border-green-500 text-green-800 dark:text-green-900 px-4 py-3 rounded relative max-w-md"
          role="alert"
        >
          <span className="font-bold">{outputLabel}</span>{" "}
          <span className="text-lg">{result.toFixed(2)}</span> {outputUnit}
        </div>
      )}
    </div>
  );
};

export default GenericLightCalc;
