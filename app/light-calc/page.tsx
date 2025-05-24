// In app/light-calc/page.tsx (your LightCalc component)

import React from "react";
import Image from "next/image";

import photoimg from "@/public/KALKULATOR/autof.jpg";
import autoimg from "@/public/KALKULATOR/photop.jpg";

// Component imports
import DliToPpfdCalc from "@/components/CALCS/DliToPpfdCalc";
import GenericLightCalc from "@/components/CALCS/GenericLightCalc"; // Assuming this path is correct
import ImageSlide from "@/components/CALCS/ImageSlide";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import fullCalculatorDataJson from "@/data(fake)/CONSTANTS/FACTORSandCALCS.json";

// --- Type Definitions for this file (LightCalc.tsx) ---
// (These should ideally be in a shared types file if GenericLightCalc needs them too,
// but for now, let's ensure they are correctly defined here for LightCalc's use)

// Define the specific calculation types that GenericLightCalc expects
type SpecificCalculationType =
  | "ppfd-to-lux"
  | "lux-to-ppfd"
  | "lumens-to-ppf"
  | "ppf-to-lumens";

interface FullCalculatorData {
  ppfdToLuxFactors: { [key: string]: number | null };
  luxToPpfdFactors: { [key: string]: number | null };
  lumensToPpfFactors: { [key: string]: number | null };
  ppfToLumensFactors: { [key: string]: number | null };
  calculatorSections: CalculatorSection[];
}

interface CalcProp {
  // This is for the data structure in your JSON's calculatorSections
  title: string;
  inputLabel: string;
  outputLabel: string;
  inputDefaultValue: number;
  conversionFactorsKey: keyof Omit<FullCalculatorData, "calculatorSections">;
  calculationType: string; // Keep as string here, will be validated/cast below
  outputUnit: string;
  noteText: string;
}

interface CalculatorSection {
  id: string;
  type: "DLI" | "GENERIC";
  imageSrc: string;
  imageAlt: string;
  description: string;
  calcProps?: CalcProp;
}
// --- End Type Definitions ---

const typedFullCalculatorData = fullCalculatorDataJson as FullCalculatorData;
const CALCULATORSECTIONS_ARRAY: CalculatorSection[] =
  typedFullCalculatorData.calculatorSections;

const LightCalc = () => {
  return (
    <div className="bg-background font-sans min-h-screen">
      {/* Header Section ... (keep as is) */}
      <section className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-10">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
          All Your Growing Light{" "}
          <span className="block sm:inline bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 sm:py-0.5 rounded-lg shadow-md mt-2 sm:mt-0 mx-1">
            {" "}
            Calculators
          </span>{" "}
          <br className="hidden sm:block lg:hidden" />
          in One Place!
        </h1>
      </section>

      <MaxWidthWrapper className="pb-24 pt-4 lg:grid lg:grid-cols-1 sm:pb-32 lg:gap-y-16 lg:pt-6 xl:pt-8 lg:pb-52">
        {/* First informational card ... (keep as is) */}
        <div className="bg-card text-card-foreground p-6 md:p-8 rounded-xl shadow-lg dark:border dark:border-border flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start transition-shadow duration-300 hover:shadow-2xl dark:hover:shadow-[0_0_15px_rgba(var(--border),0.5)] overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-stretch">
            <div className="rounded-lg overflow-hidden shadow-md w-full max-w-md mx-auto lg:mx-0">
              <ImageSlide
                imageUrls={[autoimg, photoimg]}
                alt="Cannabis plant growth stages"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:pl-4">
            <p className="text-base text-card-foreground max-w-md text-center lg:text-left leading-relaxed">
              <strong className="font-semibold text-card-foreground">
                {" "}
                Firstly
              </strong>
              , observe the DLI (Daily Light Integral) charts. These differ
              depending on whether your plant is a{" "}
              <span className="bg-orange-500 px-2 py-1 font-semibold text-white rounded shadow-sm">
                photoperiod
              </span>{" "}
              (1) variety or an{" "}
              <span className="bg-orange-500 px-2 py-1 font-semibold text-white rounded shadow-sm">
                autoflowering
              </span>{" "}
              (2) variety. For best results, follow the DLI recommendations for
              your plant's current growth stage using the calculators below.
            </p>
          </div>
        </div>

        {CALCULATORSECTIONS_ARRAY.map((section, index) => {
          let calculatorComponent;
          if (section.type === "DLI") {
            calculatorComponent = <DliToPpfdCalc />;
          } else if (section.type === "GENERIC" && section.calcProps) {
            // ✅ **MODIFICATION HERE**
            // Get the actual conversion factors object based on the key
            const factorsObject =
              typedFullCalculatorData[section.calcProps.conversionFactorsKey];

            if (factorsObject) {
              // Ensure calculationType is one of the specific types GenericLightCalc expects
              const specificCalcType = section.calcProps
                .calculationType as SpecificCalculationType;

              calculatorComponent = (
                <GenericLightCalc
                  title={section.calcProps.title}
                  inputLabel={section.calcProps.inputLabel}
                  outputLabel={section.calcProps.outputLabel}
                  inputDefaultValue={section.calcProps.inputDefaultValue}
                  conversionFactors={factorsObject} // Pass the resolved factors object
                  calculationType={specificCalcType} // Pass the casted/validated type
                  outputUnit={section.calcProps.outputUnit}
                  noteText={section.calcProps.noteText}
                />
              );
            } else {
              // Handle case where factorsObject might not be found (e.g., bad key)
              calculatorComponent = (
                <div className="bg-destructive/10 text-destructive p-4 rounded-md">
                  Error: Conversion factors not found for calculator ID:{" "}
                  {section.id}
                </div>
              );
            }
          } else {
            calculatorComponent = (
              <div className="bg-destructive/10 text-destructive p-4 rounded-md">
                Error: Calculator type not configured correctly for ID:{" "}
                {section.id}
              </div>
            );
          }

          return (
            // Card Structure ... (keep as is)
            <div
              key={section.id}
              className="bg-card text-card-foreground p-6 md:p-8 rounded-xl shadow-lg dark:border dark:border-border flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start transition-shadow duration-300 hover:shadow-2xl dark:hover:shadow-[0_0_15px_rgba(var(--border),0.5)] overflow-hidden"
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-stretch">
                {calculatorComponent}
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:pl-4">
                {section.imageSrc && (
                  <div className="w-full max-w-md mx-auto lg:mx-0 mb-5 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      width={400}
                      height={240}
                      className="object-cover w-full h-full"
                      priority={index < 1}
                      loading={index < 1 ? "eager" : "lazy"}
                    />
                  </div>
                )}
                <p className="text-base text-card-foreground max-w-md text-center lg:text-left leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          );
        })}
      </MaxWidthWrapper>
    </div>
  );
};

export default LightCalc;
