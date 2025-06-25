import React from "react";

const InputRadio = ({
  label,
  name,
  currentValue,
  allValues,
  handleChange,
}: {
  label: string;
  name: string;
  currentValue: string | undefined;
  allValues: string[];
  handleChange: (e: any) => void;
}) => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <label className="whitespace-nowrap">{`${label} : `}</label>

      {allValues.map((value: string, index) => (
        <label
          key={index}
          className="flex gap-1 items-center cursor-pointer whitespace-nowrap"
        >
          <input
            className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
            type="radio"
            name={name}
            value={value || ""}
            checked={currentValue === value}
            onChange={handleChange}
          />
          {value}
        </label>
      ))}
    </div>
  );
};

export default InputRadio;
