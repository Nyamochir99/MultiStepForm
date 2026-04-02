"use client";

import React, { useState } from "react";
import { Textfield } from "./Textfield";

export const StepTwo = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");

  const isemailValid = () => {
    if (email === "") return "Мэйл хаягаа оруулна уу.";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
      return "Зөв мэйл хаяг оруулна уу.";
  };
  const isLastNameValid = () => {
    if (lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUserNameValid = () => {
    if (username === "") return "Username cannot be empty";
    if (!/^[A-Za-z0-9]+$/.test(username))
      return "Username cannot contain special characters";
  };
  return (
    <div className="flex flex-col gap-3">
      <Textfield
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
        error={isFirstNameValid()}
        required={true}
        labelName="First name"
        placeholder="Your first name"
      />
      <Textfield
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
        error={isLastNameValid()}
        required={true}
        labelName="Last name"
        placeholder="Your last name"
      />
      <Textfield
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        error={isUserNameValid()}
        required={true}
        labelName="Username"
        placeholder="Your username"
      />
    </div>
  );
};
