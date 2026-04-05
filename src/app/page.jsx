"use client";

import { StepLast } from "@/components/StepLast";
import { StepOne } from "@/components/StepOne";
import { StepThreee } from "@/components/StepThreee";
import { StepTwo } from "@/components/StepTwo";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentstep] = useState(2);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    date: "",
    image: "",
  });

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
      <StepForm
        form={form}
        setForm={setForm}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
        currentStep={currentStep}
      />
    </div>
  );
}
