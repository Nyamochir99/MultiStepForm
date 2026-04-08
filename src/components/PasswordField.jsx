import React, { useState } from "react";

export const PasswordField = ({
  error,
  labelName,
  required,
  type,
  onChange,
  placeholder,
  value,
  onBlur,
}) => {
  const [inputType, setInputType] = useState(type);

  const hidePassword = () => {
    setInputType("password");
  };
  const showPassword = () => {
    setInputType("text");
  };
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#334155] text-[14px] font-semibold">
        {labelName} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <div className="relative">
        <input
          onBlur={onBlur}
          className={`w-full p-3 text-[#121316] text-[16px] font-normal rounded-lg border ${error ? "border-[#E14942]" : "border-[#CBD5E1]"}`}
          value={value}
          type={inputType}
          onChange={onChange}
          placeholder={placeholder}
        />
        {inputType === "password" ? (
          <svg
            onClick={showPassword}
            className="absolute top-3.25 right-3.25 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#334155"
          >
            <path d="M595.58-384.51q47.5-47.59 47.5-115.58t-47.59-115.49q-47.59-47.5-115.58-47.5t-115.49 47.59q-47.5 47.59-47.5 115.58t47.59 115.49q47.59 47.5 115.58 47.5t115.49-47.59ZM403.5-423.5Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM228.62-296.12Q115.16-372.23 61.54-500q53.62-127.77 167.02-203.88Q341.97-780 479.95-780q137.97 0 251.43 76.12Q844.84-627.77 898.46-500q-53.62 127.77-167.02 203.88Q618.03-220 480.05-220q-137.97 0-251.43-76.12ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z" />
          </svg>
        ) : (
          <svg
            onClick={hidePassword}
            className="absolute top-3.25 right-3.25 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#334155"
          >
            <path d="M630.92-441.08 586-486q9-49.69-28.35-89.35Q520.31-615 466-606l-44.92-44.92q13.54-6.08 27.77-9.12 14.23-3.04 31.15-3.04 68.08 0 115.58 47.5T643.08-500q0 16.92-3.04 31.54-3.04 14.61-9.12 27.38Zm127.23 124.46L714-358q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-46.61-46.61q37.92-15.08 77.46-22.23Q438.39-780 480-780q140.61 0 253.61 77.54T898.46-500q-22.23 53.61-57.42 100.08-35.2 46.46-82.89 83.3Zm32.31 231.39L628.62-245.85q-30.77 11.39-68.2 18.62Q523-220 480-220q-141 0-253.61-77.54Q113.77-375.08 61.54-500q22.15-53 57.23-98.88 35.08-45.89 77.23-79.58l-110.77-112 42.16-42.15 705.22 705.22-42.15 42.16Zm-552.3-551.08q-31.7 25.23-61.66 60.66Q146.54-540.23 128-500q50 101 143.5 160.5T480-280q27.31 0 54.39-4.62 27.07-4.61 45.92-9.53L529.69-346q-10.23 4.15-23.69 6.61-13.46 2.47-26 2.47-68.08 0-115.58-47.5T316.92-500q0-12.15 2.47-25.42 2.46-13.27 6.61-24.27l-87.84-86.62ZM541-531Zm-131.77 65.77Z" />
          </svg>
        )}
      </div>
      {error && <pre className="text-[#E14942] text-[14px] ">{error}</pre>}
    </div>
  );
};
