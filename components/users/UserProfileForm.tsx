"use client";

import React, { useEffect, useState } from "react";
import Input from "../basic/Input";
import { LocationEditIcon, School, User } from "lucide-react";
import { UserType } from "@/util/types";
import { localStorageKeys } from "@/util/constants";
import Loader from "../basic/Loader";

const UserProfileForm = () => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit user profil form");
  };

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem(localStorageKeys.CURRENT_USER)!
    );

    console.log("USER => ", user);
    setCurrentUser(user);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {currentUser ? (
        <>
          <div className="bg-primary_color p-12 flex flex-col items-center relative rounded-t-lg">
            <div className="bg-white absolute -top-4 flex justify-center items-center w-20 h-20 rounded-full border-[4px] border-primary_color">
              <User color="gray" size={50} />
            </div>
            <label className="text-white text-lg font-bold absolute bottom-1">
              {currentUser.displayName}
            </label>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center gap-6 px-4 py-6 bg-white rounded-lg shadow-2xl "
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
              <Input
                value={currentUser.username}
                handleChange={(value: string) => {
                  console.log(value);
                }}
                label="Nom d'utilisateur"
                type="text"
                placeholder="Nom d'utilisateur"
                icon={<User color="gray" />}
                disabled={true}
                title="Vous ne pouvez pas modifier ce champ."
              />

              <Input
                disabled={true}
                value={currentUser.displayName}
                handleChange={(value: string) => {
                  console.log(value);
                }}
                label="Nom complet"
                type="text"
                placeholder="Nom"
                icon={<School color="gray" />}
              />
              <Input
                disabled={true}
                value={currentUser.phone}
                handleChange={(value: string) => {
                  console.log(value);
                }}
                label="Téléphone"
                type="tel"
                placeholder="Téléphone"
                icon={<User color="gray" />}
              />

              <Input
                disabled={true}
                value={currentUser.provinceId + ""}
                handleChange={(value: string) => {
                  console.log(value);
                }}
                label="Adresse complet"
                type="text"
                placeholder="Adresse complet"
                icon={<LocationEditIcon color="gray" />}
              />

              <Input
                disabled={true}
                value={""}
                handleChange={(value: string) => {
                  console.log(value);
                }}
                label="Province"
                type="text"
                placeholder="Province"
                icon={<LocationEditIcon color="gray" />}
              />

              <Input
                disabled={true}
                value={""}
                handleChange={(value: string) => {
                  console.log(value);
                }}
                label="Province Educationnelle"
                type="text"
                placeholder="Province Educationnelle"
                icon={<LocationEditIcon color="gray" />}
              />

              <Input
                disabled={true}
                value={""}
                handleChange={(value: string) => {
                  console.log(value);
                }}
                label="Sous Province Educationnelle"
                type="text"
                placeholder="Sous Province Educationnelle"
                icon={<LocationEditIcon color="gray" />}
              />
            </div>
          </form>
        </>
      ) : (
        <Loader colorClass="text-primary_color" size={50} />
      )}
    </div>
  );
};

export default UserProfileForm;
