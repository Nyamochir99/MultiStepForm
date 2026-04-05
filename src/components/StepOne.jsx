"use client";

import { Textfield } from "@/components/Textfield";
import { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";

export const StepOne = ({
  handleNextStep,
  handlePrevStep,
  currentStep,
  form,
  setForm,
}) => {
  const [errors, setErrors] = useState({
    firstnameError: "",
    lastnameError: "",
    usernameError: "",
  });
  const trimedFirstname = form.firstname;
  const trimedLastname = form.lastname;
  const trimedUsername = form.username;

  const isFirstNameValid = () => {
    if (trimedFirstname.trim() === "") {
      return setErrors({ ...errors, firstnameError: "Нэрээ оруулна уу." });
    } else if (!/^[A-Za-z-]+$/.test(form.firstname)) {
      return setErrors({
        ...errors,
        firstnameError: "Нэр нь тоо болон тэмдэгт агуулж болохгүй.",
      });
    } else setErrors({ ...errors, firstnameError: "" });
  };
  const isLastNameValid = () => {
    if (trimedLastname.trim() === "") {
      return setErrors({ ...errors, lastnameError: "Овгоо оруулна уу." });
    } else if (!/^[A-Za-z-]+$/.test(form.lastname)) {
      return setErrors({
        ...errors,
        lastnameError: "Овог нь тоо болон тэмдэгт агуулж болохгүй.",
      });
    } else setErrors({ ...errors, lastnameError: "" });
  };
  const isUserNameValid = () => {
    if (trimedUsername.trim() === "") {
      return setErrors({
        ...errors,
        usernameError: "Хэрэглэгчийн нэрээ оруулна уу.",
      });
    } else if (!/^[A-Za-z0-9]+$/.test(form.username)) {
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
    let newErrors = {
      firstnameError: "",
      lastnameError: "",
      usernameError: "",
    };
    if (trimedFirstname.trim() === "") {
      newErrors.firstnameError = "Нэрээ оруулна уу.";
      isValid = false;
    } else if (!/^[A-Za-z-]+$/.test(form.firstname)) {
      newErrors.firstnameError = "Нэр нь тоо болон тэмдэгт агуулж болохгүй.";
      isValid = false;
    }
    if (trimedLastname.trim() === "") {
      newErrors.lastnameError = "Овгоо оруулна уу.";
      isValid = false;
    } else if (!/^[A-Za-z-]+$/.test(form.lastname)) {
      newErrors.lastnameError = "Овог нь тоо болон тэмдэгт агуулж болохгүй.";
      isValid = false;
    }
    if (trimedUsername.trim() === "") {
      newErrors.usernameError = "Хэрэглэгчийн нэрээ оруулна уу.";
      isValid = false;
    } else if (!/^[A-Za-z0-9]+$/.test(form.username)) {
      newErrors.usernameError = "Хэрэглэгчийн нэр нь тэмдэгт агуулж болохгүй.";
      isValid = false;
    }
    setErrors(newErrors);
    if (isValid) {
      handleNextStep();
    }
  };
  // const isHavingErrors = () => {
  //   const test1 = isFirstNameValid();
  //   const test2 = isLastNameValid();
  //   const test3 = isUserNameValid();
  //   if (test1 || test2 || test3) {
  //     handleNextStep();
  //   }
  // };
  return (
    <>
      <div className="w-120 min-h-163.75 bg-white p-8 flex rounded-lg flex-col gap-7">
        <Header />
        <div className="min-h-108.5 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Textfield
              value={form.firstname}
              onChange={(e) => {
                setForm({ ...form, firstname: e.target.value });
                isFirstNameValid(e.target.value);
              }}
              error={errors.firstnameError}
              onBlur={handleFirstNameBlur}
              required={true}
              labelName="First name"
              placeholder="Your first name"
            />
            <Textfield
              value={form.lastname}
              onChange={(e) => {
                setForm({ ...form, lastname: e.target.value });
                handleLastNameBlur();
              }}
              error={errors.lastnameError}
              onBlur={handleLastNameBlur}
              required={true}
              labelName="Last name"
              placeholder="Your last name"
            />
            <Textfield
              value={form.username}
              onChange={(e) => {
                setForm({ ...form, username: e.target.value });
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
      </div>
    </>
  );
};
