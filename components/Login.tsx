"use client";

import { globalImages } from "@/util/images";
import Image from "next/image";
import React, { useState } from "react";
import ESigeLogo from "./basic/ESigeLogo";
import { User, Lock, LogIn, LockOpen } from "lucide-react";
import H1 from "./basic/H1";
import Input from "./basic/Input";
import { useRouter } from "next/navigation";
import Button from "./basic/Button";

const Login = () => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-6 px-4 py-6 bg-white rounded-lg shadow-2xl max-w-[25rem]"
      >
        <div className="flex flex-col items-center gap-4">
          <ESigeLogo />
          <H1
            title={"Connectez-vous à votre compte"}
            className="mx-4 text-center"
          />
          <label className="text-gray-500 text-sm">
            {"Vous n'avez pas de compte ? contactez l'administrateur"}
          </label>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Input
            type="text"
            placeholder="Nom d'utilisateur"
            icon={<User color="gray" />}
          />

          <Input
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
          <label className="text-gray-500 text-sm">
            {"Mot de passe oublié ? Veuillez contacter l'administrateur"}
          </label>
        </div>

        <Button
          className="w-full"
          type="submit"
          title="Connectez - vous"
          icon={<LogIn />}
        />

        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="w-[80%] relative border-b-[1px] border-[#ccc] flex justify-center">
            <label className="w-fit absolute -top-3 bg-white text-gray-500 text-sm">
              {"Ou connectez-vous avec"}
            </label>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <Image
              src={globalImages.facebook}
              height={25}
              width={25}
              alt="facebook"
            />
            <Image
              src={globalImages.google}
              height={25}
              width={25}
              alt="google"
            />
          </div>
        </div>
      </form>

      <div>
        <Image
          src={globalImages.asp_logo}
          alt="asp logo"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Login;
