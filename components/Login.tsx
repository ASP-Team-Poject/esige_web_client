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
import { LoginCredentials } from "@/util/types";
import { login } from "@/services/UserService";
import { Toast } from "./basic/Toast";
import Cookies from "js-cookie";
import { localStoragekeys } from "@/util/constants";

const Login = () => {
  const [loginForm, setLoginForm] = useState<LoginCredentials>({
    username: "gombe",
    password: "sigerdc",
  });
  const [isSubmitting, setISubmitting] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [passwordType, setPasswordType] = useState<string>("password");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginForm.username || !loginForm.password) {
      setToast({
        message: "Le nom d'utilisateur et le mot de passe sont obligatoires.",
        type: "error",
      });

      return;
    }
    setISubmitting(true);
    try {
      const currentUser = await login(loginForm);
      setToast({
        message: "Vous êtes connecté avec succès !",
        type: "success",
      });

      localStorage.setItem(
        localStoragekeys.CURRRENT_USER,
        JSON.stringify({
          ...currentUser,
          displayName: currentUser.firstName || currentUser.username,
        })
      );

      // Put the user id in the Cookies for the middleware
      Cookies.set(localStoragekeys.USER_ID, `${currentUser.id}`);

      router.push("/home");
    } catch (error) {
      console.log("Error", error);
      setToast({
        message:
          "La connexion a échoué.\n Veuillez vérifier vos informations d'identification et réessayer, ou contactez votre administrateur.",
        type: "error",
      });
    } finally {
      setISubmitting(false);
      setTimeout(() => setToast(null), 6000);
    }
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
            value={loginForm.username}
            handleChange={(value: string) =>
              setLoginForm({ ...loginForm, username: value })
            }
            type="text"
            placeholder="Nom d'utilisateur"
            icon={<User color="gray" />}
            required={true}
          />

          <Input
            value={loginForm.password}
            handleChange={(value: string) =>
              setLoginForm({ ...loginForm, password: value })
            }
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
            required={true}
          />
          <label className="text-gray-500 text-sm">
            {"Mot de passe oublié ? Veuillez contacter l'administrateur"}
          </label>
        </div>

        <Button
          isSubmitting={isSubmitting}
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

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Login;
