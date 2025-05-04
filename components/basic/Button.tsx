import React, { ReactNode } from "react";

const Button = ({
  type,
  title,
  icon,
  className,
}: {
  type: "submit" | "reset" | "button" | undefined;
  title: string;
  icon: ReactNode;
  className?: string;
}) => {
  return (
    <button
      type={type}
      className={`flex gap-2 justify-center items-center bg-primary_color hover:bg-primary_color_hover text-white font-bold p-2 rounded-sm ${
        className && className
      }`}
    >
      <span>{title}</span>
      {icon}
    </button>
  );
};

export default Button;
