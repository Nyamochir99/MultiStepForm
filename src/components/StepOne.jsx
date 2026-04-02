"use client";

import React, { use } from "react";
import { Textfield } from "@/components/Textfield";
import { useState } from "react";

export const StepOne = ({ error }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const isFirstNameValid = () => {
    if (firstname.trim() === "") {
      setError(true);
      return "Нэрээ оруулна уу.";
    }

    if (!/^[A-Za-z-]+$/.test(firstname)) {
      setError(true);
      return "Нэр нь тоо болон тэмдэгт агуулж болохгүй.";
    }
  };
  const isLastNameValid = () => {
    if (lastname === "") return "Овгоо оруулна уу.";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Овог нь тоо болон тэмдэгт агуулж болохгүй.";
  };
  const isUserNameValid = () => {
    if (username === "") return "Хэрэглэгчийн нэрээ оруулна уу";
    if (!/^[A-Za-z0-9]+$/.test(username))
      return "Хэрэглэгчийн нэр нь тэмдэгт агуулж болохгүй.";
  };
  return (
    <div className="flex flex-col gap-3">
      <Textfield
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
        error={error}
        onFocus={isFirstNameValid()}
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
