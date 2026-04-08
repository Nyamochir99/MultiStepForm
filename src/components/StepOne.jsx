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
  const isFirstNameValid = (firstname) => {
    if (firstname.trim() === "") {
      return setErrors({ ...errors, firstnameError: "Нэрээ оруулна уу." });
    } else if (!/^[A-Za-z-]+$/.test(firstname)) {
      return setErrors({
        ...errors,
        firstnameError: "Нэр нь тоо болон тэмдэгт агуулж болохгүй.",
      });
    } else setErrors({ ...errors, firstnameError: "" });
  };
  const isLastNameValid = (lastname) => {
    if (lastname.trim() === "") {
      return setErrors({ ...errors, lastnameError: "Овгоо оруулна уу." });
    } else if (!/^[A-Za-z-]+$/.test(lastname)) {
      return setErrors({
        ...errors,
        lastnameError: "Овог нь тоо болон тэмдэгт агуулж болохгүй.",
      });
    } else setErrors({ ...errors, lastnameError: "" });
  };
  const isUserNameValid = (username) => {
    if (username.trim() === "") {
      return setErrors({
        ...errors,
        usernameError: "Хэрэглэгчийн нэрээ оруулна уу.",
      });
    } else if (!/^[A-Za-z0-9]+$/.test(username)) {
      return setErrors({
        ...errors,
        usernameError: "Хэрэглэгчийн нэр нь тэмдэгт агуулж болохгүй.",
      });
    } else setErrors({ ...errors, usernameError: "" });
  };
  const isHavingErrors = () => {
    let isValid = true;
    let newErrors = {
      firstnameError: "",
      lastnameError: "",
      usernameError: "",
    };
    if (form.firstname.trim() === "") {
      newErrors.firstnameError = "Нэрээ оруулна уу.";
      isValid = false;
    } else if (!/^[A-Za-z-]+$/.test(form.firstname)) {
      newErrors.firstnameError = "Нэр нь тоо болон тэмдэгт агуулж болохгүй.";
      isValid = false;
    }
    if (form.lastname.trim() === "") {
      newErrors.lastnameError = "Овгоо оруулна уу.";
      isValid = false;
    } else if (!/^[A-Za-z-]+$/.test(form.lastname)) {
      newErrors.lastnameError = "Овог нь тоо болон тэмдэгт агуулж болохгүй.";
      isValid = false;
    }
    if (form.username.trim() === "") {
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
      <div className="min-h-108.5 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <Textfield
            value={form.firstname}
            onChange={(e) => {
              const first = e.target.value.replace(/\s/g, "");
              setForm({ ...form, firstname: first });
              isFirstNameValid(first);
            }}
            onBlur={() => isFirstNameValid(form.firstname)}
            error={errors.firstnameError}
            required={true}
            labelName="First name"
            placeholder="Your first name"
          />
          <Textfield
            value={form.lastname}
            onChange={(e) => {
              const last = e.target.value.replace(/\s/g, "");
              setForm({ ...form, lastname: last });
              isLastNameValid(last);
            }}
            onBlur={() => isLastNameValid(form.lastname)}
            error={errors.lastnameError}
            required={true}
            labelName="Last name"
            placeholder="Your last name"
          />
          <Textfield
            value={form.username}
            onChange={(e) => {
              const user = e.target.value.replace(/\s/g, "");
              setForm({ ...form, username: user });
              isUserNameValid(user);
            }}
            onBlur={() => isUserNameValid(form.username)}
            error={errors.usernameError}
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
