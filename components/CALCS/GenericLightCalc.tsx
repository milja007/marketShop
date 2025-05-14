"use client"; // This directive indicates this is a Client Component in Next.js

import React, { useRef, useState } from "react";

// Define the props interface for the generic calculator
interface GenericLightCalcProps {
  title: string;
  inputLabel: string;
  outputLabel: string;
  inputDefaultValue: number;
  conversionFactors: { [key: string]: number | null };
  calculationType:
    | "ppfd-to-lux"
    | "lux-to-ppfd"
    | "lumens-to-ppf"
    | "ppf-to-lumens";
  outputUnit: string;
  noteText: string;
}

const formatOptionText = (key: string): string => {
  return key
    .replace(/-/g, " ")
    .replace(/(\d+)\s?(nm|K|k)/g, "($1$2)")
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [lightType, setLightType] = useState<string>(
    Object.keys(conversionFactors)[0]
  );
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLightTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLightType(event.target.value);
    setResult(null);
    setError(null);
  };

  const performCalculation = () => {
    // ... (your existing calculation logic remains the same) ...
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
    const requiresPositiveFactor = outputUnit.includes("/"); // Heuristic
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
      switch (calculationType) {
        case "ppfd-to-lux":
          calculatedResult = inputValue * conversionFactor;
          break;
        case "lux-to-ppfd":
          calculatedResult = inputValue * conversionFactor;
          break;
        case "lumens-to-ppf":
          calculatedResult = inputValue * conversionFactor;
          break;
        case "ppf-to-lumens":
          calculatedResult = inputValue * conversionFactor;
          break;
        default:
          console.error("Unknown calculation type:", calculationType);
          throw new Error("Invalid calculation type specified.");
      }
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
    // Adjusted margins for better fit if parent is handling centering/spacing.
    <div className="flex flex-col w-full max-w-xs mx-auto my-8 p-4 md:p-0">
      {" "}
      {/* Example: Responsive width and centering */}
      <h3 className="text-xl font-semibold mb-2 text-card-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{noteText}</p>
      {/* Input Field */}
      <div className="mb-5">
        <label
          htmlFor={`input-${title.replace(/\s+/g, "-")}`}
          className="block text-sm font-medium text-card-foreground/80 mb-1"
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
          className="shadow-sm appearance-none border border-border rounded w-full py-2 px-3 bg-input text-foreground placeholder:text-muted-foreground/60 leading-tight focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
        />
      </div>
      {/* Light Type Select */}
      <div className="mb-6">
        <label
          htmlFor={`lightTypeSelect-${title.replace(/\s+/g, "-")}`}
          className="block text-sm font-medium text-card-foreground/80 mb-1"
        >
          Light Source Type:
        </label>
        <select
          id={`lightTypeSelect-${title.replace(/\s+/g, "-")}`}
          value={lightType}
          onChange={handleLightTypeChange}
          className="shadow-sm appearance-none border border-border rounded w-full py-2 px-3 bg-input text-foreground leading-tight focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
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
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-5 rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:focus:ring-offset-card transition duration-150 ease-in-out"
        >
          Calculate {outputLabel.replace("Calculated ", "").replace(":", "")}
        </button>
      </div>
      {/* Display Error Message */}
      {error && (
        <div
          className="mt-4 bg-destructive/20 border border-destructive/30 text-destructive px-4 py-3 rounded relative max-w-md"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {/* Display Result */}
      {result !== null && !error && (
        <div
          // Using a slightly different green shade for better text contrast in dark mode
          className="mt-4 bg-green-500/15 border border-green-500/30 text-green-700 dark:text-green-300 px-4 py-3 rounded relative max-w-md"
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
