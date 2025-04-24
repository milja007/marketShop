"use client";

import React, { useRef, useState } from "react";

const DliToPpfdCalc: React.FC = () => {
  const ppfdInputRef = useRef<HTMLInputElement>(null);
  const hoursInputRef = useRef<HTMLInputElement>(null);

  const [dliResult, setDliResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calcPpfdAndHoursToDli = () => {
    setDliResult(null);
    setError(null);

    const ppfdValueString = ppfdInputRef.current?.value ?? "";
    const hoursValueString = hoursInputRef.current?.value ?? "";

    const ppfdValue = parseFloat(ppfdValueString);
    const hoursValue = parseFloat(hoursValueString);

    if (
      isNaN(ppfdValue) ||
      isNaN(hoursValue) ||
      ppfdValue < 0 ||
      hoursValue <= 0 // Hours must be greater than 0 for DLI calculation
    ) {
      setError(
        "Please enter valid positive numbers for PPFD and Time (Time > 0)."
      );
      return;
    }

    // Calculation: DLI (mol/m²/day) = PPFD (µmol/s/m²) * Hours * 3600 (s/h) / 1,000,000 (µmol/mol)
    const result = (ppfdValue * hoursValue * 3600) / 1_000_000;

    setDliResult(result);
  };

  return (
    <>
      {" "}
      {/* Use fragment to avoid extra div if this is placed inside another container */}
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        PPFD and Time to DLI
      </h3>
      <div className="mb-4">
        {" "}
        {/* Added margin-bottom */}
        <label
          htmlFor="dli_ppfdInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {" "}
          {/* Block label for better layout */}
          PPFD (μmol/s/m²):
        </label>
        <input
          type="number" // Specifies the input type is number
          id="dli_ppfdInput" // Unique ID to link label and input
          ref={ppfdInputRef} // <-- Assign the ref here
          defaultValue={300} // Sets the initial default value when using refs
          min={0} // Minimum allowed value
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Tailwind form styling
        />
      </div>
      <div className="mb-4">
        {" "}
        {/* Added margin-bottom */}
        <label
          htmlFor="dli_hoursInput"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {" "}
          {/* Block label for better layout */}
          Time (hours):
        </label>
        <input
          type="number" // Specifies the input type is number
          id="dli_hoursInput" // Unique ID to link label and input
          ref={hoursInputRef} // <-- Assign the ref here
          defaultValue={18} // Sets the initial default value when using refs
          min={0} // Minimum allowed value
          max={24} // Maximum sensible hours in a day
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" // Tailwind form styling
        />
      </div>
      <div className="mt-6">
        {" "}
        {/* Added margin-top */}
        <button
          onClick={calcPpfdAndHoursToDli}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" // Tailwind button styling with transition
        >
          Calculate DLI
        </button>
      </div>
      {/* Display error message if the error state is not null */}
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          {" "}
          {/* Tailwind error styling */}
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {dliResult !== null && !error && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          {" "}
          {/* Tailwind success styling */}
          <span className="font-bold">Result:</span> DLI ={" "}
          {dliResult.toFixed(2)} mol/m²/day
        </div>
      )}
    </>
  );
};

export default DliToPpfdCalc;
