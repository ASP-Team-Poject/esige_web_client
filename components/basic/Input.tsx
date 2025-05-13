import React, { ReactNode } from "react";

const Input = ({
  type,
  label,
  defaultValue,
  placeholder,
  icon,
  className,
  minValue,
  disabled,
  title,
  value,
  required,
  handleChange,
}: {
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  icon?: ReactNode;
  className?: string;
  minValue?: string;
  disabled?: boolean;
  required?: boolean;
  title?: string;
  value: string;
  handleChange: (value: string) => void;
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
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          title={title}
          disabled={disabled}
          required={required}
          type={type}
          defaultValue={defaultValue}
          min={minValue}
          placeholder={placeholder}
          className="bg-white w-full border-none focus:outline-none focus:ring-0 text-gray-600"
        />
        {icon}
      </div>
    </div>
  );
};

export default Input;
