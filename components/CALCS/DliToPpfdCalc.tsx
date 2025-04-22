"use client";
import { useRef, useState } from "react";

const DliToPpfdCalc: React.FC = () => {
  const ppfdInputRef = useRef<HTMLInputElement>(null);
  const hoursInputRef = useRef<HTMLInputElement>(null);

  const [dliResult, setDliResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calcDLItoPPFD = () => {
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
      hoursValue < 0
    ) {
      setError("Please enter valid positive numbers for PPFD and Time.");
      return; // Stop the calculation if validation fails
    }

    // *** Calculation ***
    // Formula: DLI = PPFD * hours * 3600 / 1,000,000
    // 3600 converts hours to seconds
    // 1,000,000 converts µmol to mol
    const result = (ppfdValue * hoursValue * 3600) / 1_000_000;

    // *** Update State ***
    // Update the state with the calculated result, triggering a re-render to display it
    setDliResult(result);
  };

  return (
    <>
      <div>
        <label htmlFor="ppfdInputRef" style={{ marginRight: "8px" }}>
          PPFD (umol/s/m²):
        </label>
        {/* Assign the ref to the input element */}
        {/* Use defaultValue here for the initial value */}
        <input
          type="number" // Specifies the input type is number
          id="ppfdInputRef" // Unique ID to link label and input
          ref={ppfdInputRef} // <-- Assign the ref here
          defaultValue={500} // Sets the initial default value when using refs
          min={0} // Minimum allowed value
          // max={50000} // Optional maximum
          // step={1} // Optional step value
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        {" "}
        {/* Add some spacing */}
        <label htmlFor="hoursInputRef" style={{ marginRight: "8px" }}>
          Time (hours):
        </label>
        {/* Assign the ref to the input element */}
        {/* Use defaultValue here for the initial value */}
        <input
          type="number" // Specifies the input type is number
          id="hoursInputRef" // Unique ID to link label and input
          ref={hoursInputRef} // <-- Assign the ref here
          defaultValue={10} // Sets the initial default value when using refs
          min={0} // Minimum allowed value
          max={24} // Maximum sensible hours in a day
          // step={1} // Optional step value
        />
      </div>

      <div style={{ marginTop: "16px" }}>
        {" "}
        {/* Add some spacing */}
        <button onClick={calcDLItoPPFD}>Calculate DLI</button>
      </div>

      {/* Display error message if the error state is not null */}
      {error && <div style={{ marginTop: "16px", color: "red" }}>{error}</div>}

      {/* Display the result only if dliResult is not null and there's no error */}
      {dliResult !== null && !error && (
        <div style={{ marginTop: "16px", fontWeight: "bold" }}>
          Result: DLI = {dliResult.toFixed(2)}
        </div>
      )}
    </>
  );
};

export default DliToPpfdCalc;
