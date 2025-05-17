import React, { ReactNode } from "react";
import Loader from "./Loader";

const Button = ({
  type,
  title,
  icon,
  isSubmitting,
  className,
  onClick,
}: {
  type: "submit" | "reset" | "button" | undefined;
  title: string;
  icon: ReactNode;
  isSubmitting?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isSubmitting}
      type={type}
      className={`flex gap-2 justify-center items-center hover:bg-primary_color_hover text-white font-bold p-2 rounded-sm ${
        className ? className : "bg-primary_color"
      }`}
    >
      {isSubmitting ? <Loader /> : <span>{title}</span>}
      {icon}
    </button>
  );
};

export default Button;
