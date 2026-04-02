import React from "react";
import { ArrowRight } from "./ArrowRight";
import { ArrowLeft } from "./ArrowLeft";

export const Button = ({ currentStep, handleNextStep, handlePrevStep }) => {
  const stepCount = currentStep + 1;
  return (
    <div className="h-11 w-104 flex gap-1">
      {currentStep !== 0 && (
        <div
          onClick={handlePrevStep}
          className="h-full w-32 felx justify-center items-center bg-white rounded-md border border-[#CBD5E1] text-[16px] text-[#121316] hover:bg-[#D6D8DB]"
        >
          <ArrowLeft /> Back
        </div>
      )}
      <div
        onClick={handleNextStep}
        className={`${currentStep === 0 ? "w-full" : "w-70"} h-full flex justify-center items-center rounded-md bg-[#121316] text-white text-[16px] font-medium hover:opacity-80 transition duration-300 cursor-pointer`}
      >
        Continue {stepCount}/3 <ArrowRight />
      </div>
      {}
    </div>
  );
};
