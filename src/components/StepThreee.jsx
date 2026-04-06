"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Button } from "./Button";
import { Textfield } from "./Textfield";
import { Imagefield } from "./Imagefield";

export const StepThreee = ({
  handleNextStep,
  handlePrevStep,
  currentStep,
  form,
  setForm,
}) => {
  const [errors, setErrors] = useState({
    dateError: "",
    imageError: "",
  });
  const trimedDate = form.date;

  const isDateValid = () => {
    if (trimedDate.trim() === "") {
      return setErrors({ ...errors, dateError: "Төрсөн өдрөө оруулна уу." });
    }
    // const birthDate = new Date(form.date);
    // const today = new Date();
    // let age = today.getFullYear() - birthDate.getFullYear();
    // const monthDiff = today.getMonth() - birthDate.getMonth();
    // const dayDiff = today.getDate() - birthDate.getDate();
    // if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    //   age--;
    // }

    // if (age < 18) {
    //   setErrors({ ...errors, dateError: "Та 18 насанд хүрсэн байх ёстой." });
    // } else {
    //   setErrors({ ...errors, dateError: "" });
    // }
  };
  const isImagevalid = () => {
    if (form.image === "") {
      return setErrors({
        ...errors,
        imageError: "Профайл зурагаа оруулна уу.",
      });
    } else {
      return setErrors({ ...errors, imageError: "" });
    }
  };
  const isHavingErrors = () => {
    let isValid = true;
    let newErrors = {
      dateError: "",
      imageError: "",
    };
    if (trimedDate.trim() === "") {
      newErrors.dateError = "Төрсөн өдрөө оруулна уу.";
      isValid = false;
    }
    if (form.image === "") {
      newErrors.imageError = "Профайл зурагаа оруулна уу.";
      isValid = false;
    }
    setErrors(newErrors);
    if (isValid) {
      handleNextStep();
    }
  };
  return (
    <>
      <div className="w-120 min-h-163.75 bg-white p-8 flex rounded-lg flex-col gap-7">
        <Header />
        <div className="min-h-108.5 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Textfield
              value={form.date}
              onChange={(e) => {
                setForm({ ...form, date: e.target.value });
                isDateValid(e.target.value);
              }}
              type={"date"}
              error={errors.dateError}
              onBlur={() => isDateValid(form.date)}
              required={true}
              labelName="Date of birth"
            />
            <Imagefield
              value={form.image}
              onChange={(e) => {
                const imageValue = URL.createObjectURL(e.target.files[0]);
                setForm((prev) => ({ ...prev, image: imageValue }));
                isImagevalid(e.target.files[0]);
              }}
              onCancel={() => {
                setForm({ ...form, image: "" });
                isImagevalid(form.image);
              }}
              onBlur={() => isImagevalid(form.image)}
              error={errors.imageError}
              required={true}
              labelName="Profile image"
            />
          </div>
          <Button
            handleNextStep={isHavingErrors}
            handlePrevStep={handlePrevStep}
            currentStep={currentStep}
          />
        </div>
      </div>
    </>
  );
};
