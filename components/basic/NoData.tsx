import { FileSearch } from "lucide-react";
import React from "react";

const NoData = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <FileSearch className="h-16 w-16 text-gray-400 mb-2" />
      <p className="text-gray-500 mb-2">{"Aucune donnée disponible"}</p>
    </div>
  );
};

export default NoData;
