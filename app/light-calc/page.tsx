import React from "react";
import Image from "next/image";

import photoimg from "@/public/KALKULATOR/autof.jpg";
import autoimg from "@/public/KALKULATOR/photop.jpg";

// Component imports
import DliToPpfdCalc from "@/components/CALCS/DliToPpfdCalc";
import GenericLightCalc from "@/components/CALCS/GenericLightCalc";
import ImageSlide from "@/components/CALCS/ImageSlide";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { CALCULATORSECTIONS } from "@/data(fake)/CONSTANTS/FACTORSandCALCS";
const LightCalc = () => {
  return (
    <div className="bg-slate-100 font-sans min-h-screen">
      <section className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-10">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900">
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
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start transition-shadow duration-300 hover:shadow-2xl overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-stretch">
            <div className="rounded-lg overflow-hidden shadow-md w-full max-w-md mx-auto lg:mx-0">
              <ImageSlide
                imageUrls={[autoimg, photoimg]}
                alt="Cannabis plant growth stages"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center lg:pl-4">
            <p className="text-base text-gray-600 max-w-md text-center lg:text-left leading-relaxed">
              <strong className="font-semibold text-gray-900">Firstly</strong>,
              observe the DLI (Daily Light Integral) charts. These differ
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

        {CALCULATORSECTIONS.map((section, index) => {
          let calculatorComponent;
          if (section.type === "DLI") {
            calculatorComponent = <DliToPpfdCalc />;
          } else if (section.type === "GENERIC" && section.calcProps) {
            calculatorComponent = <GenericLightCalc {...section.calcProps} />;
          } else {
            calculatorComponent = (
              <div className="text-red-500 p-4">
                Error: Calculator type not configured correctly for ID:{" "}
                {section.id}
              </div>
            );
          }

          return (
            <div
              key={section.id}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-start transition-shadow duration-300 hover:shadow-2xl overflow-hidden"
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-stretch">
                {calculatorComponent}{" "}
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

                <p className="text-base text-gray-600 max-w-md text-center lg:text-left leading-relaxed">
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
