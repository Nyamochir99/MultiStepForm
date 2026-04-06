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

  const isEmailValid = (email) => {
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
  const isNumberValid = (number) => {
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
  const isPasswordValid = (password) => {
    if (password.trim() === "") {
      return setErrors({ ...errors, passwordError: "Нууц үг оруулна уу." });
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+=,.?-]).{8,}$/.test(
        password,
      )
    ) {
      const passwordErrors = [];

      if (password.length < 8) passwordErrors.push("- 8-с дээш тэмдэгттэй.");
      if (!/[A-Z]/.test(password)) passwordErrors.push("- Том үсэг агуулах.");
      if (!/[a-z]/.test(password)) passwordErrors.push("- Жижиг үсэг агуулах.");
      if (!/[0-9]/.test(password)) passwordErrors.push("- Тоо агуулах.");
      if (!/[!@#$%^&*_+=,.?-]/.test(password))
        passwordErrors.push("- Тусгай тэмдэгт агуулах. ( !@#$%^&*_+=,.?- )");
      if (passwordErrors.length > 0) {
        const lastError =
          "Нууц үг нь дараах шаардлагуудыг хангах ёстой:\n" +
          passwordErrors.join("\n");
        return setErrors({ ...errors, passwordError: lastError });
      }
    } else setErrors({ ...errors, passwordError: "" });
  };
  const isConfirmPasswordValid = (confirmPassword) => {
    if (confirmPassword.trim() === "") {
      return setErrors({
        ...errors,
        confirmPasswordError: "Нууц үгээ давтана уу.",
      });
    } else if (confirmPassword !== form.password) {
      return setErrors({
        ...errors,
        confirmPasswordError: "Нууц үг таарахгүй байна.",
      });
    } else setErrors({ ...errors, emailError: "" });
  };
  const isHavingErrors = () => {
    let isValid = true;
    let newErrors = {
      emailError: "",
      numberError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
    if (form.email.trim() === "") {
      newErrors.emailError = "Мэйл хаягаа оруулна уу.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
    ) {
      newErrors.emailError = "Зөв мейл хаяг оруулна уу.";
      isValid = false;
    }

    if (form.number.trim() === "") {
      newErrors.numberError = "Утасны дугаараа оруулна уу.";
      isValid = false;
    } else if (!/^[0-9]{8}$/.test(form.number)) {
      newErrors.numberError = "Зөв утасны дугаар оруулна уу.";
      isValid = false;
    }

    if (form.password.trim() === "") {
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

    if (form.confirmPassword.trim() === "") {
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
                const mail = e.target.value.replace(/\s/g, "");
                setForm({ ...form, email: mail });
                isEmailValid(mail);
              }}
              type={"text"}
              error={errors.emailError}
              onBlur={() => isEmailValid(form.email)}
              required={true}
              labelName="Email"
              placeholder="Your email"
            />
            <Textfield
              value={form.number}
              onChange={(e) => {
                const num = e.target.value.replace(/\D/g, "");
                setForm({ ...form, number: num });
                isNumberValid(num);
              }}
              type={"text"}
              error={errors.numberError}
              onBlur={() => isNumberValid(form.number)}
              required={true}
              labelName="Phone number"
              placeholder="Your phone number"
            />
            <Textfield
              value={form.password}
              onChange={(e) => {
                const pass = e.target.value.replace(/\s/g, "");
                setForm({ ...form, password: pass });
                isPasswordValid(pass);
              }}
              type={"password"}
              error={errors.passwordError}
              onBlur={() => isPasswordValid(form.password)}
              required={true}
              labelName="Password"
              placeholder="Your password"
            />
            <Textfield
              value={form.confirmPassword}
              onChange={(e) => {
                const confirmPass = e.target.value.replace(/\s/g, "");
                setForm({ ...form, confirmPassword: confirmPass });
                isConfirmPasswordValid(confirmPass);
              }}
              type={"password"}
              error={errors.confirmPasswordError}
              onBlur={() => isConfirmPasswordValid(form.confirmPassword)}
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
