import React from "react";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <Logo />
      <div className="text-[26px] text-[#202124] font-semibold">
        Join Us! 😎
      </div>
      <div className="text-[18px] text-[#8e8e8e] ">
        Please provide all current information accurately.
      </div>
    </div>
  );
};
