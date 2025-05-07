"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Input from "../basic/Input";
import {
  LocationEditIcon,
  Lock,
  LockOpen,
  Save,
  School,
  User,
} from "lucide-react";
import Button from "../basic/Button";
import Select from "../basic/Select";

const CreateUserForm = () => {
  const [passwordType, setPasswordType] = useState<string>("password");

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/users");
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-6 px-4 py-6 bg-white rounded-lg shadow-2xl "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <Input
          label="Nom d'utilisateur"
          type="text"
          placeholder="Nom d'utilisateur"
          icon={<User color="gray" />}
        />

        <Input
          label="Mot de passe"
          type={passwordType}
          placeholder="**********"
          icon={
            passwordType === "password" ? (
              <Lock
                color="gray"
                onClick={() => setPasswordType("text")}
                className="cursor-pointer"
              />
            ) : (
              <LockOpen
                color="gray"
                onClick={() => setPasswordType("password")}
                className="cursor-pointer"
              />
            )
          }
        />
        <Input
          label="Nom complet"
          type="text"
          placeholder="Nom"
          icon={<School color="gray" />}
        />
        <Input
          label="Téléphone"
          type="tel"
          placeholder="Téléphone"
          icon={<User color="gray" />}
        />

        <Input
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

export default CreateUserForm;
