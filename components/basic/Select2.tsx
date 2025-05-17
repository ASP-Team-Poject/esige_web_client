import React from "react";

const Select2 = ({
  name,
  title,
  value,
  handleChange,
}: {
  name: string;
  title: string;
  value: string;
  handleChange: (e: any) => void;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={name} className="whitespace-nowrap">
        {title}
      </label>
      <select
        name={name}
        id={name}
        onChange={(e) => handleChange(e)}
        value={`${value}`.toLocaleLowerCase()}
        className="h-fit bg-white w-full  border-b-[1px] border-[#ccc] focus:outline-none focus:ring-0 text-gray-600"
      >
        <option value="oui">OUI</option>
        <option value="non">NON</option>
      </select>
    </div>
  );
};

export default Select2;
