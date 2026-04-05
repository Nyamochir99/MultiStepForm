"use client";

import React, { use } from "react";
import { Textfield } from "@/components/Textfield";
import { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";

export const StepTwo = ({
  handleNextStep,
  handlePrevStep,
  currentStep,
  form,
  setForm,
}) => {
  const [errors, setErrors] = useState({
    emailError: "",
    numberError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const trimedEmail = form.email;
  const trimedNumber = form.number;
  const trimedPassword = form.password;
  const trimedConfirmPassword = form.confirmPassword;

  const isEmailValid = () => {
    if (trimedEmail.trim() === "") {
      return setErrors({ ...errors, emailError: "Мэйл хаягаа оруулна уу." });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
    ) {
      return setErrors({
        ...errors,
        emailError: "Зөв мейл хаяг оруулна уу.",
      });
    } else setErrors({ ...errors, emailError: "" });
  };
  const isNumberValid = () => {
    if (trimedNumber.trim() === "") {
      return setErrors({
        ...errors,
        numberError: "Утасны дугаараа оруулна уу.",
      });
    } else if (!/^[0-9]{8}$/.test(form.number)) {
      return setErrors({
        ...errors,
        numberError: "Зөв утасны дугаар оруулна уу.",
      });
    } else setErrors({ ...errors, numberError: "" });
  };
  const isPasswordValid = () => {
    if (trimedPassword.trim() === "") {
      return setErrors({ ...errors, passwordError: "Нууц үг оруулна уу." });
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+=,.?-]).{8,}$/.test(
        form.password,
      )
    ) {
      return setErrors({
        ...errors,
        passwordError:
          "Нууц үг нь. Том, жижиг үсэг, тоо, тусгай тэмдэгт/!@#$%^&*_+=,.?-/ агуулсан, 8-аас дээш тэмдэгттэй байна.",
      });
    } else setErrors({ ...errors, passwordError: "" });
  };
  const isConfirmPasswordValid = () => {
    if (trimedConfirmPassword.trim() === "") {
      return setErrors({
        ...errors,
        confirmPasswordError: "Нууц үгээ давтана уу.",
      });
    } else if (form.confirmPassword !== form.password) {
      return setErrors({
        ...errors,
        confirmPasswordError: "Таны оруулсан нууц үг таарахгүй байна.",
      });
    } else setErrors({ ...errors, emailError: "" });
  };
  const handleEmailBlur = () => {
    isEmailValid();
  };
  const handleNumberBlur = () => {
    isNumberValid();
  };
  const handlePasswordBlur = () => {
    isPasswordValid();
  };
  const handleConfirmPassworBlur = () => {
    isConfirmPasswordValid();
  };
  const isHavingErrors = () => {
    let isValid = true;
    let newErrors = {
      emailError: "",
      numberError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
    if (trimedEmail.trim() === "") {
      newErrors.emailError = "Мэйл хаягаа оруулна уу.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
    ) {
      newErrors.emailError = "Зөв мейл хаяг оруулна уу.";
      isValid = false;
    }

    if (trimedNumber.trim() === "") {
      newErrors.numberError = "Утасны дугаараа оруулна уу.";
      isValid = false;
    } else if (!/^[0-9]{8}$/.test(form.number)) {
      newErrors.numberError = "Зөв утасны дугаар оруулна уу.";
      isValid = false;
    }

    if (trimedPassword.trim() === "") {
      newErrors.passwordError = "Нууц үг оруулна уу.";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+=,.?-]).{8,}$/.test(
        form.password,
      )
    ) {
      newErrors.passwordError = "Нууц үг шаардлага хангахгүй байна.";
      isValid = false;
    }

    if (trimedConfirmPassword.trim() === "") {
      newErrors.confirmPasswordError = "Нууц үгээ давтана уу.";
      isValid = false;
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPasswordError = "Нууц үг таарахгүй байна.";
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
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              type={"text"}
              error={errors.emailError}
              onBlur={handleEmailBlur}
              required={true}
              labelName="Email"
              placeholder="Your email"
            />
            <Textfield
              value={form.number}
              onChange={(e) => {
                setForm({ ...form, number: e.target.value });
              }}
              type={"text"}
              error={errors.numberError}
              onBlur={handleNumberBlur}
              required={true}
              labelName="Phone number"
              placeholder="Your phone number"
            />
            <Textfield
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              type={"password"}
              error={errors.passwordError}
              onBlur={handlePasswordBlur}
              required={true}
              labelName="Password"
              placeholder="Your password"
            />
            <Textfield
              value={form.confirmPassword}
              onChange={(e) => {
                setForm({ ...form, confirmPassword: e.target.value });
              }}
              type={"password"}
              error={errors.confirmPasswordError}
              onBlur={handleConfirmPassworBlur}
              required={true}
              labelName="Confirm password"
              placeholder="Confirm password"
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
