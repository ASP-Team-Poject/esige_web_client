"use client";

import { globalImages } from "@/util/images";
import Image from "next/image";
import React from "react";
import ESigeLogo from "./basic/ESigeLogo";
import { User, Lock, LogIn } from "lucide-react";
import H1 from "./basic/H1";
import Input from "./basic/Input";
import { useRouter } from "next/navigation";

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
            className="font-bold mx-4"
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

        <button
          type="submit"
          className="flex gap-2 justify-center items-center bg-primary_color hover:bg-primary_color_hover text-white font-bold p-4 rounded-sm w-full"
        >
          <LogIn />
          <span>Connectez-vous</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
