import React from "react";

export const Imagefield = ({
  error,
  labelName,
  required,
  onChange,
  value,
  onBlur,
  onCancel,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#334155] text-[14px] font-semibold">
        {labelName} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <div className="h-45 w-full flex flex-col justify-center items-center gap-2 bg-[#7F7F800D] rounded-md relative overflow-hidden">
        <input
          onChange={onChange}
          onBlur={onBlur}
          type="file"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
        />
        {value ? (
          <>
            <img
              src={value}
              className="w-full h-full object-cover relative"
              alt=""
            />
            <div
              onClick={onCancel}
              className="h-6 w-6 rounded-full bg-[#202124] flex justify-center items-center absolute top-4 right-4 cursor-pointer"
            >
              <svg
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0.705L6.295 0L3.5 2.795L0.705 0L0 0.705L2.795 3.5L0 6.295L0.705 7L3.5 4.205L6.295 7L7 6.295L4.205 3.5L7 0.705Z"
                  fill="white"
                />
              </svg>
            </div>
          </>
        ) : (
          <>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
                fill="white"
              />
              <path
                d="M17.5 10.5V17.5H10.5V10.5H17.5ZM17.5 9.5H10.5C9.95 9.5 9.5 9.95 9.5 10.5V17.5C9.5 18.05 9.95 18.5 10.5 18.5H17.5C18.05 18.5 18.5 18.05 18.5 17.5V10.5C18.5 9.95 18.05 9.5 17.5 9.5ZM15.07 13.93L13.57 15.865L12.5 14.57L11 16.5H17L15.07 13.93Z"
                fill="#202124"
              />
            </svg>
            <span className="text-[#09090B] text-[14px] font-medium">
              Add image
            </span>
          </>
        )}
      </div>
      {error && <p className="text-[#E14942] text-[14px] ">{error}</p>}
    </div>
  );
};
