"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Input from "../basic/Input";
import { LocationEditIcon, Save, School, User } from "lucide-react";
import Button from "../basic/Button";
import Select from "../basic/Select";

const CreateSchoolForm = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/schools");
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-6 px-4 py-6 bg-white rounded-lg shadow-2xl "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <Input
          value=""
          handleChange={(value: string) => {
            console.log(value);
          }}
          label="Nom de l'Établissement"
          type="text"
          placeholder="Nom de l'Établissement"
          icon={<School color="gray" />}
        />
        <Input
          value=""
          handleChange={(value: string) => {
            console.log(value);
          }}
          label="Nom du Chef de l'Établissement"
          type="text"
          placeholder="Nom du Chef de l'Établissement"
          icon={<User color="gray" />}
        />

        <Input
          value=""
          handleChange={(value: string) => {
            console.log(value);
          }}
          label="Code Administratif"
          type="text"
          placeholder="Code Administratif"
        />
        <Input
          value=""
          handleChange={(value: string) => {
            console.log(value);
          }}
          label="Code de l'Établissement"
          type="text"
          placeholder="Code de l'Établissement"
        />

        <Input
          value=""
          handleChange={(value: string) => {
            console.log(value);
          }}
          label="Adresse complet"
          type="text"
          placeholder="Adresse complet"
          icon={<LocationEditIcon color="gray" />}
        />
        <Select
          label="Province"
          options={["Kinshasa", "Kasai Central", "Kongo Central", "Lualaba"]}
        />
        <Select
          label="Province Educationnelle"
          options={["Lunkunga", "Tshangu", "Mont Amba", "Galiement"]}
        />
        <Select
          label="Sous Province Educationnelle"
          options={["Gombe", "Tshangu", "Mont Amba"]}
        />
      </div>

      <Button
        className="w-full lg:w-fit lg:self-end lg:px-8"
        type="submit"
        title="Enregistrer"
        icon={<Save />}
      />
    </form>
  );
};

export default CreateSchoolForm;
