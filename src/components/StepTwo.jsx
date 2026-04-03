"use client";

import React, { use } from "react";
import { Textfield } from "@/components/Textfield";
import { useState } from "react";
import { Button } from "./Button";

export const StepTwo = ({ handleNextStep, handlePrevStep, currentStep }) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    emailError: "",
    numberError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const isEmailValid = () => {
    if (email.trim() === "") {
      return setErrors({ ...errors, emailError: "Мэйл хаягаа оруулна уу." });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      return setErrors({
        ...errors,
        emailError: "Зөв мейл хаяг оруулна уу.",
      });
    } else setErrors({ ...errors, emailError: "" });
  };
  const isNumberValid = () => {
    if (number.trim() === "") {
      return setErrors({
        ...errors,
        numberError: "Утасны дугаараа оруулна уу.",
      });
    } else if (!/^[0-9]{8}$/.test(number)) {
      return setErrors({
        ...errors,
        numberError: "Зөв утасны дугаар оруулна уу.",
      });
    } else setErrors({ ...errors, numberError: "" });
  };
  const isPasswordValid = () => {
    if (password.trim() === "") {
      return setErrors({ ...errors, passwordError: "Нууц үг оруулна уу." });
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+=,.?-]).{8,}$/.test(
        password,
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
    if (confirmPassword.trim() === "") {
      return setErrors({
        ...errors,
        confirmPasswordError: "Нууц үгээ давтана уу.",
      });
    } else if (confirmPassword !== password) {
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
  return (
    <>
      <div className="min-h-108.5 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Textfield
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type={"email"}
            error={errors.emailError}
            onBlur={handleEmailBlur}
            required={true}
            labelName="Email"
            placeholder="Your email"
          />
          <Textfield
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            type={"number"}
            error={errors.numberError}
            onBlur={handleNumberBlur}
            required={true}
            labelName="Phone number"
            placeholder="Your phone number"
          />
          <Textfield
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={"password"}
            error={errors.passwordError}
            onBlur={handlePasswordBlur}
            required={true}
            labelName="Password"
            placeholder="Your password"
          />
          <Textfield
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
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
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          currentStep={currentStep}
        />
      </div>
    </>
  );
};
