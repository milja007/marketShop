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
      {/* Title */}
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        PPFD and Time to DLI
      </h3>

      {/* PPFD Input */}
      <div className="mb-4">
        <label
          htmlFor="dli_ppfdInput"
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
        >
          PPFD (μmol/s/m²):
        </label>
        <input
          type="number"
          id="dli_ppfdInput"
          ref={ppfdInputRef}
          defaultValue={300}
          min={0}
          className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Time Input */}
      <div className="mb-4">
        <label
          htmlFor="dli_hoursInput"
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
        >
          Time (hours):
        </label>
        <input
          type="number"
          id="dli_hoursInput"
          ref={hoursInputRef}
          defaultValue={18}
          min={0}
          max={24}
          className="shadow appearance-none border border-gray-300 dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      {/* Calculate Button */}
      <div className="mt-6">
        <button
          onClick={calcPpfdAndHoursToDli}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Calculate DLI
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div
          className="bg-red-100 dark:bg-red-300 border border-red-400 dark:border-red-500 text-red-700 dark:text-red-900 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* Result Message */}
      {dliResult !== null && !error && (
        <div
          className="bg-green-100 dark:bg-green-300 border border-green-400 dark:border-green-500 text-green-700 dark:text-green-900 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <span className="font-bold">Result:</span> DLI ={" "}
          {dliResult.toFixed(2)} mol/m²/day
        </div>
      )}
    </>
  );
};

export default DliToPpfdCalc;
