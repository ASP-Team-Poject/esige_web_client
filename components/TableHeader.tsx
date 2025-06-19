import React from "react";
import Input from "./basic/Input";
import Select from "./basic/Select";

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
        <Select
          options={[
            { id: "5", value: "5" },
            { id: "10", value: "10" },
            { id: "15", value: "15" },
            { id: "20", value: "20" },
            { id: "25", value: "25" },
            { id: "30", value: "30" },
            { id: "35", value: "35" },
          ]}
          currentOptionId={size}
          handleOnChange={(e: any) => setSize(e.target.value)}
          className="w-20"
        />
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
