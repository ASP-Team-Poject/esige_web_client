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

const UserProfileForm = () => {
  const [passwordType, setPasswordType] = useState<string>("password");

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/users");
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-primary_color p-12 flex flex-col items-center relative rounded-t-lg">
        <div className="bg-white absolute -top-4 flex justify-center items-center w-20 h-20 rounded-full border-[4px] border-primary_color">
          <User color="gray" size={50} />
        </div>
        <label className="text-white text-lg font-bold absolute bottom-1">
          Prince Ilunga
        </label>
      </div>
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
            disabled={true}
            title="Vous ne pouvez pas modifier ce champ."
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
            title="Vous ne pouvez pas modifier ce champ."
            disabled={true}
            label="Province"
            options={["Kinshasa", "Kasai Central", "Kongo Central", "Lualaba"]}
          />
          <Select
            title="Vous ne pouvez pas modifier ce champ."
            disabled={true}
            label="Province Educationnelle"
            options={["Lunkunga", "Tshangu", "Mont Amba", "Galiement"]}
          />
          <Select
            title="Vous ne pouvez pas modifier ce champ."
            disabled={true}
            label="Sous Province Educationnelle"
            options={["Gombe", "Tshangu", "Mont Amba"]}
          />
        </div>

        <Button
          className="w-full lg:w-fit lg:self-end lg:px-8"
          type="submit"
          title="Mettre à jour"
          icon={<Save />}
        />
      </form>
    </div>
  );
};

export default UserProfileForm;
