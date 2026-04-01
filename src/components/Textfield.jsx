import React from "react";

export const Textfield = ({
  error,
  labelName,
  required,
  type,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#334155] text-[14px] font-semibold">
        {labelName} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <input
        className={`w-full p-3 text-[#121316] text-[16px] font-normal rounded-lg border ${error ? "border-[#E14942]" : "border-[#CBD5E1]"}`}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className="text-[#E14942] text-[14px] ">{error}</p>}
    </div>
  );
};
