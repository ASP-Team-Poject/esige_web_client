import React from "react";
import Input from "./basic/Input";

const TableHeader = ({
  size,
  setSize,
}: {
  size: string;
  setSize: (value: string) => void;
}) => {
  return (
    <div className="flex justify-between items-center w-full">
      <label className="flex justify-center items-center gap-2">
        Afficher{" "}
        <Input
          value={size}
          handleChange={(value: string) => setSize(value)}
          type="number"
          className="w-20 h-fit"
          minValue="1"
        />{" "}
        lignes
      </label>
      <label className="flex justify-center items-center gap-2">
        Recherche{" "}
        <Input
          value=""
          handleChange={(value: string) => {
            console.log(value);
          }}
          type="text"
          placeholder="recherche"
        />
      </label>
    </div>
  );
};

export default TableHeader;
