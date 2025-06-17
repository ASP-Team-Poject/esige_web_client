import React from "react";

const Select = ({
  label,
  options,
  disabled,
  title,
  currentOptionId,
  required,
  handleOnChange,
}: {
  label?: string;
  options: { id: string; value: string }[];
  disabled?: boolean;
  title?: string;
  currentOptionId?: string;
  required?: boolean;
  handleOnChange?: (e: any) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 flex-1 w-full">
      {label && <label className="font-bold opacity-70">{label}</label>}
      <select
        onChange={handleOnChange}
        value={currentOptionId}
        title={title}
        disabled={disabled}
        className="bg-white text-gray-600 border-[1px] border-[#ccc] p-3 rounded-sm w-full focus:outline-none focus:ring-0"
        required={required}
      >
        {title && (
          <option value="" disabled>
            {title}
          </option>
        )}

        {options.map((option, index) => (
          <option value={option.id} key={index} className="">
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
