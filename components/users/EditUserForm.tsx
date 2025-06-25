"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Input from "../basic/Input";
import { Lock, LockOpen, Mail, Save, School, User } from "lucide-react";
import Button from "../basic/Button";
import Select from "../basic/Select";
import {
  ProvedType,
  ProvinceType,
  SchoolRegion,
  SousProvedType,
  UserType,
} from "@/util/types";
import { getSchoolRegions } from "@/services/SchoolServise";
import { localStorageKeys, requestMessages, userRoles } from "@/util/constants";
import { editUser } from "@/services/UserService";
import { Toast } from "../basic/Toast";

const INIT_FORM = {
  name: "",
  email: "",
  username: "",
  roles: "", // ex.: "[\"ROLE_SOUSPROVED\"]",
  mdp: "",
  sousProvedId: 0,
  provedId: 0,
  provinceId: 0,
};
const EditUserForm = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [passwordType, setPasswordType] = useState<string>("password");
  const [userForm, setUserForm] = useState<Partial<UserType>>(INIT_FORM);
  const [provinces, setProvinces] = useState<ProvinceType[] | null>(null);
  const [proveds, setProveds] = useState<ProvedType[] | null>(null);
  const [sousProveds, setSousProveds] = useState<SousProvedType[] | null>(null);
  const [regions, setRegions] = useState<SchoolRegion[] | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedProved, setSelectedProved] = useState<string | null>(null);
  const [selectedSousProved, setSelectedSousProved] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    const loadRegions = async () => {
      const storedRegions = localStorage.getItem(localStorageKeys.REGIONS);
      if (storedRegions) {
        const parsedRegions: SchoolRegion[] = JSON.parse(storedRegions);
        setRegions(parsedRegions);
      } else {
        const loadedRegions = await getSchoolRegions();
        if (loadedRegions) {
          setRegions(loadedRegions);
        }
        localStorage.setItem(
          localStorageKeys.REGIONS,
          JSON.stringify(loadedRegions)
        );
      }
    };
    loadRegions();

    if (pathname.endsWith("update")) {
      const currentSelectedUser = localStorage.getItem(
        localStorageKeys.CURRENT_SELECTED_USER
      );
      if (currentSelectedUser) {
        const parsedcurrentSelectedUser: Partial<UserType> =
          JSON.parse(currentSelectedUser);
        setSelectedProvince(parsedcurrentSelectedUser.provinceId + "" || "");
        setUserForm(parsedcurrentSelectedUser);
      }
    } else {
      localStorage.removeItem(localStorageKeys.CURRENT_SELECTED_USER);
    }
  }, []);

  useEffect(() => {
    if (regions) {
      const allProvinces = regions.flatMap((region) => region.province);
      setProvinces(allProvinces);
    }
  }, [regions]);

  useEffect(() => {
    if (selectedProvince && regions) {
      const allProveds = regions.flatMap((region) =>
        `${region.province.id}` === selectedProvince ? region.proveds : []
      );
      setSousProveds([]);
      setSelectedProved(null);
      setProveds(allProveds);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedProved) {
      const selectedProvedObj = proveds?.find(
        (obj) => `${obj.proved.id}` === selectedProved
      );
      setSousProveds(selectedProvedObj?.sousProved || []);
      setSelectedSousProved(null);
    }
  }, [selectedProved]);

  useEffect(() => {
    if (proveds && userForm.provedId) {
      setSelectedProved(userForm.provedId + "");
    }
  }, [proveds]);

  useEffect(() => {
    if (sousProveds && userForm.sousProvedId) {
      setSelectedSousProved(userForm.sousProvedId + "");
    }
  }, [sousProveds]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Partial<UserType> = {
      ...userForm,
      provinceId: parseInt(selectedProvince!),
      provedId: parseInt(selectedProved!),
      sousProvedId: parseInt(selectedSousProved!),
      password: userForm.mdp,
      userId: 1,
      slug: userForm.username,
      isDeleted: false,
      active: true,
    };
    console.log("DATAA ", data);
    setIsLoading(true);
    try {
      const response = await editUser(data);
      if (response) {
        setToast({
          type: "success",
          message: "Operation fait avec success !!",
        });
        router.push("/users");
      }
    } catch (error: any) {
      if (error.message === requestMessages.SERVER_UNREACHABLE) {
        setToast({
          type: "error",
          message: requestMessages.SERVER_UNREACHABLE,
        });
      } else {
        setToast({
          type: "error",
          message:
            "Operation a echouée, veuillez réessayer ou contacter votre administrateur. !!",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-6 px-4 py-6 bg-white rounded-lg shadow-2xl "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <Input
          value={userForm.name || ""}
          handleChange={(value: string) =>
            setUserForm({ ...userForm, name: value })
          }
          label="Nom complet"
          type="text"
          placeholder="Nom"
          icon={<School color="gray" />}
        />
        <Input
          value={userForm.email || ""}
          handleChange={(value: string) =>
            setUserForm({ ...userForm, email: value })
          }
          label="Email"
          type="email"
          placeholder="Email"
          icon={<Mail color="gray" />}
        />

        <Select
          label="Role"
          options={[
            { id: userRoles.ROLE_NATIONAL, value: "Superviseur national" },
            { id: userRoles.ROLE_PROVINCE, value: "Superviseur provincial" },
            {
              id: userRoles.ROLE_PROVED,
              value: "Superviseur province educationnelle",
            },
            {
              id: userRoles.ROLE_SOUSPROVED,
              value: "Superviseur sous province educationnelle",
            },
          ]}
          currentOptionId={userForm.roles || ""}
          handleOnChange={(e: any) =>
            setUserForm({ ...userForm, roles: e.target.value })
          }
        />

        <Select
          label="Province"
          title="Sélectionner la province"
          options={
            provinces?.map((province) => {
              return { id: `${province.id}`, value: province.libelle };
            }) || []
          }
          currentOptionId={selectedProvince || ""}
          handleOnChange={(e: any) => setSelectedProvince(e.target.value)}
        />
        <Select
          label="Proved"
          title="Sélectionner la Proved"
          options={
            proveds?.map((obj) => {
              return {
                id: `${obj.proved.id}`,
                value: obj.proved.libelle,
              };
            }) || []
          }
          currentOptionId={selectedProved || ""}
          handleOnChange={(e: any) => setSelectedProved(e.target.value)}
        />
        <Select
          label="Sous Proved"
          title="Sélectionner la Sous Proved"
          options={
            sousProveds?.map((sousProved) => {
              return {
                id: `${sousProved.id}`,
                value: sousProved.libelle,
              };
            }) || []
          }
          currentOptionId={selectedSousProved || ""}
          handleOnChange={(e: any) => setSelectedSousProved(e.target.value)}
        />

        <Input
          value={userForm.username || ""}
          handleChange={(value: string) =>
            setUserForm({ ...userForm, username: value })
          }
          label="Nom d'utilisateur"
          type="text"
          placeholder="Nom d'utilisateur"
          icon={<User color="gray" />}
          title="Utilisé pour se connecter"
        />

        <Input
          value={userForm.mdp || ""}
          handleChange={(value: string) =>
            setUserForm({ ...userForm, mdp: value })
          }
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
      </div>

      <Button
        isSubmitting={isLoading}
        className="w-full bg-primary_color lg:w-fit lg:self-end lg:px-8"
        type="submit"
        title="Enregistrer"
        icon={<Save />}
      />
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </form>
  );
};

export default EditUserForm;
