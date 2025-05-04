import React from "react";

const Select = ({ label, options }: { label?: string; options: string[] }) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      {label && <label className="font-bold opacity-70">{label}</label>}
      <select className="bg-white border-[1px] border-[#ccc] p-3 rounded-sm w-full focus:outline-none focus:ring-0">
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
