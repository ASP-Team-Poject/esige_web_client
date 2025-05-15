import React from "react";

type LoaderProps = {
  colorClass?: string; // Tailwind color class like "text-blue-500"
  size?: number; // Optional size in pixels
};

const Loader: React.FC<LoaderProps> = ({
  colorClass = "text-white",
  size = 24,
}) => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className={`animate-spin ${colorClass}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        style={{ width: size, height: size }}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
    </div>
  );
};

export default Loader;
