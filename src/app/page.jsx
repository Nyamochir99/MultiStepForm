"use client";

import { StepLast } from "@/components/StepLast";
import { StepOne } from "@/components/StepOne";
import { StepThreee } from "@/components/StepThreee";
import { StepTwo } from "@/components/StepTwo";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentStep, setCurrentstep] = useState(null);
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        setForm(storedForm);
      } else {
        setForm({
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
      }
    }
  }, [form]);
  useEffect(() => {
    if (currentStep !== null) {
      localStorage.setItem("step", JSON.stringify(currentStep));
    } else {
      const storedStep = JSON.parse(localStorage.getItem("step"));
      if (storedStep) {
        setCurrentstep(storedStep);
      } else {
        setCurrentstep(0);
      }
      if (storedStep === 3) {
        setCurrentstep(0);
      }
    }
  }, [currentStep]);

  if (!form) return null;
  if (currentStep === null) return null;

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
