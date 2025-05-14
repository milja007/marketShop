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

    const result = (ppfdValue * hoursValue * 3600) / 1_000_000;
    setDliResult(result);
  };

  return (
    // Adjusted margins for better fit if parent is handling centering/spacing.
    // Consider props for these if they need to be dynamic.
    <div className="flex flex-col w-full max-w-xs mx-auto my-8 p-4 md:p-0">
      {" "}
      {/* Example: Responsive width and centering */}
      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-card-foreground">
        PPFD and Time to DLI
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Approximate conversion from PPFD to DLI.
      </p>
      {/* PPFD Input */}
      <div className="mb-4">
        <label
          htmlFor="dli_ppfdInput"
          className="block text-sm font-medium text-card-foreground/80 mb-1"
        >
          PPFD (μmol/s/m²):
        </label>
        <input
          type="number"
          id="dli_ppfdInput"
          ref={ppfdInputRef}
          defaultValue={300}
          min={0}
          className="shadow-sm appearance-none border border-border rounded w-full py-2 px-3 bg-input text-foreground placeholder:text-muted-foreground/60 leading-tight focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
        />
      </div>
      {/* Time Input */}
      <div className="mb-4">
        <label
          htmlFor="dli_hoursInput"
          className="block text-sm font-medium text-card-foreground/80 mb-1"
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
          className="shadow-sm appearance-none border border-border rounded w-full py-2 px-3 bg-input text-foreground placeholder:text-muted-foreground/60 leading-tight focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"
        />
      </div>
      {/* Calculate Button */}
      <div className="mt-6">
        <button
          onClick={calcPpfdAndHoursToDli}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:focus:ring-offset-card transition duration-150 ease-in-out"
        >
          Calculate DLI
        </button>
      </div>
      {/* Error Message */}
      {error && (
        <div
          className="bg-destructive/20 border border-destructive/30 text-destructive px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {/* Result Message */}
      {dliResult !== null && !error && (
        <div
          // Using a slightly different green shade for better text contrast in dark mode
          className="bg-green-500/15 border border-green-500/30 text-green-700 dark:text-green-300 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <span className="font-bold">Result:</span> DLI ={" "}
          {dliResult.toFixed(2)} mol/m²/day
        </div>
      )}
    </div>
  );
};

export default DliToPpfdCalc;
