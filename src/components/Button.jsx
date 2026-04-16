import React from "react";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { ArrowLeftIcon } from "./ArrowLeftIcon";

export const Button = ({ currentStep, handleNextStep, handlePrevStep }) => {
  const stepCount = currentStep + 1;
  return (
    <div className="h-11 w-104 flex gap-1 mt-13.5">
      {currentStep !== 0 && (
        <div
          onClick={handlePrevStep}
          className="h-full w-32 cursor-pointer flex justify-center items-center bg-white rounded-md border border-[#CBD5E1] text-[16px] text-[#121316] hover:bg-[#D6D8DB] transition duration-300"
        >
          <ArrowLeftIcon /> Back
        </div>
      )}
      <div
        onClick={handleNextStep}
        className={`${currentStep === 0 ? "w-full" : "w-70"} h-full flex justify-center items-center rounded-md bg-[#121316] text-white text-[16px] font-medium hover:opacity-80 transition duration-300 cursor-pointer`}
      >
        Continue {stepCount}/3 <ArrowRightIcon />
      </div>
      {}
    </div>
  );
};
