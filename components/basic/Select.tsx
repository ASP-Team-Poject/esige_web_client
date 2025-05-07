import React from "react";

const Select = ({
  label,
  options,
  disabled,
  title,
}: {
  label?: string;
  options: string[];
  disabled?: boolean;
  title?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 flex-1 w-full">
      {label && <label className="font-bold opacity-70">{label}</label>}
      <select
        title={title}
        disabled={disabled}
        className="bg-white text-gray-600 border-[1px] border-[#ccc] p-3 rounded-sm w-full focus:outline-none focus:ring-0"
      >
        {options.map((option, index) => (
          <option key={index} className="">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
