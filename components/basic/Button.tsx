import React, { ReactNode } from "react";
import Loader from "./Loader";

const Button = ({
  type,
  title,
  icon,
  isSubmitting,
  className,
}: {
  type: "submit" | "reset" | "button" | undefined;
  title: string;
  icon: ReactNode;
  isSubmitting?: boolean;
  className?: string;
}) => {
  return (
    <button
      disabled={isSubmitting}
      type={type}
      className={`flex gap-2 justify-center items-center bg-primary_color hover:bg-primary_color_hover text-white font-bold p-2 rounded-sm ${
        className && className
      }`}
    >
      {isSubmitting ? <Loader /> : <span>{title}</span>}
      {icon}
    </button>
  );
};

export default Button;
