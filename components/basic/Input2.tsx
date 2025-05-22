import React from "react";

const Input2 = ({
  name,
  type,
  label,
  value,
  placeholder,
  disabled,
  labelShouldwrap,
  handleChange,
}: {
  name?: string;
  type?: string;
  label?: string;
  value: string | number;
  placeholder?: string;
  disabled?: boolean;
  labelShouldwrap?: boolean;
  handleChange: (e: any) => void;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={name} className={` ${labelShouldwrap ? "" : "whitespace-nowrap"}`}>
        {label}
      </label>
      <input
        className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
        type={type || "text"}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        min={0}
      />
    </div>
  );
};

export default Input2;
