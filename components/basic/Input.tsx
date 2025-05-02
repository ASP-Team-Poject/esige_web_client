import { User } from "lucide-react";
import React, { ReactNode } from "react";

const Input = ({
  type,
  placeholder,
  icon,
}: {
  type: string;
  placeholder: string;
  icon: ReactNode;
}) => {
  return (
    <div className="flex gap-2 justify-between items-center border-[1px] border-[#ccc] p-3 rounded-sm w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="bg-white w-full border-none focus:outline-none focus:ring-0"
      />
      {icon}
    </div>
  );
};

export default Input;
