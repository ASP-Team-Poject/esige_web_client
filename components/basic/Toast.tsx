// Toast.tsx
import React from "react";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const color = type === "success" ? "green" : "red";

  return (
    <div
      className={`fixed top-5 left-1/2 -translate-x-1/2 px-6 py-3 text-${color}-600 rounded shadow-lg z-50 transition-all duration-500 bg-${color}-100`}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button onClick={onClose} className={`text-${color}-600 font-bold`}>
          &times;
        </button>
      </div>
    </div>
  );
};
