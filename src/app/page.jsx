"use client";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { StepLast } from "@/components/StepLast";
import { StepOne } from "@/components/StepOne";
import { StepThreee } from "@/components/StepThreee";
import { StepTwo } from "@/components/StepTwo";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentstep] = useState(0);

  const currentStepComponent = [StepOne, StepTwo, StepThreee, StepLast];
  const StepForm = currentStepComponent[currentStep];

  const handleNextStep = () => {
    setCurrentstep(currentStep + 1);
  };
  const handlePrevStep = () => {
    setCurrentstep(currentStep - 1);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-120 min-h-163.75 bg-white p-8 flex rounded-lg flex-col justify-between">
        <div className="flex flex-col gap-7">
          <Header />
          <StepForm />
        </div>
        <Button
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          currentStep={currentStep}
          error={error}
        />
      </div>
    </div>
  );
}
