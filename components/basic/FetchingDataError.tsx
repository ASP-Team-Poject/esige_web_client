import { FileWarning } from "lucide-react";
import React from "react";

const FetchingDataError = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <FileWarning className="h-16 w-16 text-red-400 mb-2" />
      <p className="text-red-500 mb-2">{message}</p>
    </div>
  );
};

export default FetchingDataError;
