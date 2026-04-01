"use client";

import { Header } from "@/components/Header";
import { Textfield } from "@/components/Textfield";
import { useState } from "react";

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const isFirstNameValid = () => {
    if (firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "First name cannot contain special characters or numbers.";
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
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-120 h-163.75 bg-white p-8 flex rounded-lg flex-col justify-between">
        <div className="flex flex-col gap-7">
          <Header />
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
        </div>
      </div>
    </div>
  );
}
