"use client";

import React, { use } from "react";
import { Textfield } from "@/components/Textfield";
import { useState } from "react";
import { Button } from "./Button";

export const StepOne = ({ handleNextStep, handlePrevStep, currentStep }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({
    firstnameError: "",
    lastnameError: "",
    usernameError: "",
  });

  const isFirstNameValid = () => {
    if (firstname.trim() === "") {
      return setErrors({ ...errors, firstnameError: "Нэрээ оруулна уу." });
    } else if (!/^[A-Za-z-]+$/.test(firstname)) {
      return setErrors({
        ...errors,
        firstnameError: "Нэр нь тоо болон тэмдэгт агуулж болохгүй.",
      });
    } else setErrors({ ...errors, firstnameError: "" });
  };
  const isLastNameValid = () => {
    if (lastname === "") {
      return setErrors({ ...errors, lastnameError: "Овгоо оруулна уу." });
    } else if (!/^[A-Za-z-]+$/.test(lastname)) {
      return setErrors({
        ...errors,
        lastnameError: "Овог нь тоо болон тэмдэгт агуулж болохгүй.",
      });
    } else setErrors({ ...errors, lastnameError: "" });
  };
  const isUserNameValid = () => {
    if (username === "") {
      return setErrors({
        ...errors,
        usernameError: "Хэрэглэгчийн нэрээ оруулна уу",
      });
    } else if (!/^[A-Za-z0-9]+$/.test(username)) {
      return setErrors({
        ...errors,
        usernameError: "Хэрэглэгчийн нэр нь тэмдэгт агуулж болохгүй.",
      });
    } else setErrors({ ...errors, usernameError: "" });
  };
  const handleFirstNameBlur = () => {
    isFirstNameValid();
  };
  const handleLastNameBlur = () => {
    isLastNameValid();
  };
  const handleUserNameBlur = () => {
    isUserNameValid();
  };
  const isHavingErrors = () => {
    let isValid = true;
    if (firstname.trim() === "") return (isValid = false);
    if (!/^[A-Za-z-]+$/.test(firstname)) return (isValid = false);
    if (lastname === "") return (isValid = false);
    if (!/^[A-Za-z-]+$/.test(lastname)) return (isValid = false);
    if (username === "") return (isValid = false);
    if (!/^[A-Za-z0-9]+$/.test(username)) return (isValid = false);

    if (isValid) {
      handleNextStep();
    }
  };
  return (
    <>
      <div className="min-h-108.5 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Textfield
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
              handleFirstNameBlur();
            }}
            error={errors.firstnameError}
            onBlur={handleFirstNameBlur}
            required={true}
            labelName="First name"
            placeholder="Your first name"
          />
          <Textfield
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              handleLastNameBlur();
            }}
            error={errors.lastnameError}
            onBlur={handleLastNameBlur}
            required={true}
            labelName="Last name"
            placeholder="Your last name"
          />
          <Textfield
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              handleUserNameBlur();
            }}
            error={errors.usernameError}
            onBlur={handleUserNameBlur}
            required={true}
            labelName="Username"
            placeholder="Your username"
          />
        </div>
        <Button
          handleNextStep={isHavingErrors}
          handlePrevStep={handlePrevStep}
          currentStep={currentStep}
        />
      </div>
    </>
  );
};
