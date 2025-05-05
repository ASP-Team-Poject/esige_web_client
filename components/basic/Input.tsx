import React, { ReactNode } from "react";

const Input = ({
  type,
  label,
  defaultValue,
  placeholder,
  icon,
  className,
  minValue,
}: {
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  icon?: ReactNode;
  className?: string;
  minValue?: string;
}) => {
  return (
    <div className="flex flex-col flex-1 gap-2">
      {label && <label className="font-bold opacity-70">{label}</label>}
      <div
        className={`flex gap-2 justify-between items-center border-[1px] border-[#ccc] p-3 rounded-sm ${
          className && className
        }`}
      >
        <input
          type={type}
          defaultValue={defaultValue}
          min={minValue}
          placeholder={placeholder}
          className="bg-white w-full border-none focus:outline-none focus:ring-0"
        />
        {icon}
      </div>
    </div>
  );
};

export default Input;
