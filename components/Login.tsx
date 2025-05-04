"use client";

import { globalImages } from "@/util/images";
import Image from "next/image";
import React from "react";
import ESigeLogo from "./basic/ESigeLogo";
import { User, Lock, LogIn } from "lucide-react";
import H1 from "./basic/H1";
import Input from "./basic/Input";
import { useRouter } from "next/navigation";
import Button from "./basic/Button";

const Login = () => {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <div className="flex flex-wrap justify-center items-center gap-16">
      <div>
        <Image
          src={globalImages.asp_logo}
          alt="asp logo"
          width={500}
          height={500}
        />
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center gap-8 px-4 py-8 bg-white rounded-lg shadow-2xl max-w-[25rem]"
      >
        <div className="flex flex-col items-center gap-4">
          <ESigeLogo />
          <H1
            title={"Connectez-vous à votre compte"}
            className="mx-4 text-center"
          />
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Input
            type="text"
            placeholder="Nom d'utilisateur"
            icon={<User color="gray" />}
          />
          <Input
            type="password"
            placeholder="**********"
            icon={<Lock color="gray" />}
          />
        </div>

        <Button
          className="w-full"
          type="submit"
          title="Connectez - vous"
          icon={<LogIn />}
        />
      </form>
    </div>
  );
};

export default Login;
