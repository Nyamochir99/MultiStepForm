import React from "react";
import { Logo } from "./Logo";

export const StepLast = () => {
  return (
    <div className="w-120 bg-white p-8 flex rounded-lg">
      <div className="h-35.5 flex flex-col gap-2 ">
        <Logo />
        <div className="text-[26px] text-[#202124] font-semibold">
          You're All Set 🔥
        </div>
        <div className="text-[18px] text-[#8e8e8e] ">
          We have received your submission. Thank you!
        </div>
      </div>
    </div>
  );
};
