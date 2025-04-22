"use client"; // This directive indicates this is a Client Component in Next.js

import React, { useRef, useState } from "react";

interface GenericLightCalcProps {
  title: string;
  inputLabel: string;
  outputLabel: string;
  inputDefaultValue: number;
  conversionFactors: { [key: string]: number | null };
  formatOptionText: (key: string) => string;
  calculateFunction: (inputValue: number, factor: number) => number;
  outputUnit: string;
  noteText: string;
}

const GenericLightCalc: React.FC<GenericLightCalcProps> = ({
  title,
  inputLabel,
  outputLabel,
  inputDefaultValue,
  conversionFactors,
  formatOptionText,
  calculateFunction,
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

    const requiresPositiveFactor =
      outputUnit.includes("/") ||
      title.toLowerCase().includes("lux to ppfd") ||
      title.toLowerCase().includes("ppf to lumens");
    if (requiresPositiveFactor && conversionFactor <= 0) {
      setError(
        `Conversion factor for "${formatOptionText(
          lightType
        )}" must be positive for this calculation.`
      );
      return;
    }

    try {
      const calculatedResult = calculateFunction(inputValue, conversionFactor);
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
    <>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-xs mb-3">{noteText}</p>
      {/* Input Field - Smaller Padding and Text */}
      <div className="mb-3">
        {" "}
        {/* Reduced margin-bottom */}
        <label
          htmlFor={`input-${title.replace(/\s+/g, "-")}`}
          className="block text-gray-700 text-sm font-medium mb-1"
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
          className="shadow-sm appearance-none border border-gray-300 rounded max-w-xs w-full py-1 px-2 text-sm leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent" // Reduced py and text-sm
        />
      </div>
      {/* Light Type Select - Smaller Padding and Text */}
      <div className="mb-3">
        {" "}
        {/* Reduced margin-bottom */}
        <label
          htmlFor={`lightTypeSelect-${title.replace(/\s+/g, "-")}`}
          className="block text-gray-700 text-sm font-medium mb-1"
        >
          Light Source Type:
        </label>
        <select
          id={`lightTypeSelect-${title.replace(/\s+/g, "-")}`}
          value={lightType}
          onChange={handleLightTypeChange}
          className="shadow-sm appearance-none border border-gray-300 rounded max-w-xs w-full py-1 px-2 text-sm leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent bg-white" // Reduced py and text-sm
        >
          {Object.keys(conversionFactors).map((key) => (
            <option key={key} value={key}>
              {formatOptionText(key)}
            </option>
          ))}
        </select>
      </div>
      {/* Calculate Button - Smaller Padding and Text */}
      <div className="mt-2">
        {" "}
        {/* Reduced margin-top */}
        <button
          onClick={performCalculation}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out" // Reduced py and px, text-sm
        >
          Calculate {outputLabel.replace("Calculated ", "").replace(":", "")}
        </button>
      </div>
      {/* Display Error Message - Smaller Padding and Text */}
      {error && (
        <div
          className="mt-2 bg-red-100 border border-red-300 text-red-700 px-2 py-1 rounded relative max-w-xs text-xs" // Reduced py and px, text-xs
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {/* Display Result - Smaller Padding and Text */}
      {result !== null && !error && (
        <div
          className="mt-2 bg-green-100 border border-green-300 text-green-800 px-2 py-1 rounded relative max-w-xs text-sm" // Reduced py and px, text-sm
          role="alert"
        >
          <span className="font-semibold">{outputLabel}</span>
          <span className="text-base font-medium">{result.toFixed(2)}</span>
          {outputUnit}
        </div>
      )}
    </>
  );
};

export default GenericLightCalc;
