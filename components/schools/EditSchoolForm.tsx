"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Input from "../basic/Input";
import { Save, School } from "lucide-react";
import Button from "../basic/Button";
import Select from "../basic/Select";
import {
  ProvedType,
  ProvinceType,
  SchoolRegion,
  SchoolType,
  SousProvedType,
} from "@/util/types";
import { editSchool, getSchoolRegions } from "@/services/SchoolServise";
import { Toast } from "../basic/Toast";
import { localStorageKeys, requestMessages } from "@/util/constants";

const EMPTY_FORM = {
  libelle: "",
  arreteMinisteriel: "",
  matriculeCecope: "",
  territoireCommuneVille: "",
  citeChefferieVillage: "",
};

const EditSchoolForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [schoolForm, setSchoolForm] = useState<Partial<SchoolType>>(EMPTY_FORM);
  const [regions, setRegions] = useState<SchoolRegion[] | null>(null);
  const [provinces, setProvinces] = useState<ProvinceType[] | null>(null);
  const [proveds, setProveds] = useState<ProvedType[] | null>(null);
  const [sousProveds, setSousProveds] = useState<SousProvedType[] | null>(null);

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
    if (regions) {
      const allProvinces = regions.flatMap((region) => region.province);
      setProvinces(allProvinces);
    }
  }, [regions]);

  useEffect(() => {
    if (selectedProvince && regions) {
      const allProveds = regions.flatMap((region) =>
        `${region.province.libelle}` === selectedProvince ? region.proveds : []
      );
      setSousProveds([]);
      setSelectedProved(null);
      setProveds(allProveds);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedProved) {
      const selectedProvedObj = proveds?.find(
        (obj) => `${obj.proved.libelle}` === selectedProved
      );
      setSousProveds(selectedProvedObj?.sousProved || []);
      setSelectedSousProved(null);
    }
  }, [selectedProved]);

  useEffect(() => {
    const loadRegions = async () => {
      const storedRegions = localStorage.getItem("regions");
      if (storedRegions) {
        const parsedRegions: SchoolRegion[] = JSON.parse(storedRegions);
        setRegions(parsedRegions);
      } else {
        const loadedRegions = await getSchoolRegions();
        if (loadedRegions) {
          setRegions(loadedRegions);
        }
        localStorage.setItem("regions", JSON.stringify(loadedRegions));
      }
    };
    loadRegions();

    if (pathname.endsWith("update")) {
      const currentScool = localStorage.getItem(
        localStorageKeys.CURRENT_SCHOOL
      );
      if (currentScool) {
        const parsedCurrentScool: Partial<SchoolType> =
          JSON.parse(currentScool);
        setSelectedProvince(parsedCurrentScool.province || "");
        setSchoolForm(parsedCurrentScool);
      }
    } else {
      localStorage.removeItem(localStorageKeys.CURRENT_SCHOOL);
    }
  }, []);

  useEffect(() => {
    if (proveds && schoolForm.proved) {
      setSelectedProved(schoolForm.proved);
    }
  }, [proveds]);

  useEffect(() => {
    if (sousProveds && schoolForm.sousproved) {
      setSelectedSousProved(schoolForm.sousproved);
    }
  }, [sousProveds]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Partial<SchoolType> = {
      ...schoolForm,
      province: selectedProvince!,
      proved: selectedProved!,
      sousproved: selectedSousProved!,
    };
    setIsLoading(true);
    try {
      const response = await editSchool(data);
      if (response) {
        setToast({
          type: "success",
          message: "Operation fait avec success !!",
        });
        router.push("/schools");
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
      <input type="hidden" value={schoolForm.id} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <Input
          value={schoolForm.libelle || ""}
          handleChange={(value: string) =>
            setSchoolForm({ ...schoolForm, libelle: value })
          }
          label="Nom de l'Établissement"
          type="text"
          placeholder="Nom de l'Établissement"
          icon={<School color="gray" />}
          required
        />
        <Select
          label="Province"
          title="Sélectionner la province"
          options={
            provinces?.map((province) => {
              return { id: `${province.libelle}`, value: province.libelle };
            }) || []
          }
          currentOptionId={selectedProvince || ""}
          handleOnChange={(e: any) => setSelectedProvince(e.target.value)}
          required
        />
        <Select
          label="Proved"
          title="Sélectionner la Proved"
          options={
            proveds?.map((obj) => {
              return {
                id: `${obj.proved.libelle}`,
                value: obj.proved.libelle,
              };
            }) || []
          }
          currentOptionId={selectedProved || ""}
          handleOnChange={(e: any) => setSelectedProved(e.target.value)}
          required
        />
        <Select
          label="Sous Proved"
          title="Sélectionner la Sous Proved"
          options={
            sousProveds?.map((sousProved) => {
              return {
                id: `${sousProved.libelle}`,
                value: sousProved.libelle,
              };
            }) || []
          }
          currentOptionId={selectedSousProved || ""}
          handleOnChange={(e: any) => setSelectedSousProved(e.target.value)}
          required
        />
        <Input
          value={schoolForm.arreteMinisteriel || ""}
          handleChange={(value: string) =>
            setSchoolForm({ ...schoolForm, arreteMinisteriel: value })
          }
          label="Arreté Ministeriel"
          type="text"
          placeholder="Arreté Ministeriel"
        />
        <Input
          value={schoolForm.matriculeCecope || ""}
          handleChange={(value: string) =>
            setSchoolForm({ ...schoolForm, matriculeCecope: value })
          }
          label="Matricule Cecope"
          type="text"
          placeholder="Matricule Cecope"
        />
        <Input
          value={schoolForm.territoireCommuneVille || ""}
          handleChange={(value: string) =>
            setSchoolForm({ ...schoolForm, territoireCommuneVille: value })
          }
          label="Territoire | Commune | Ville"
          type="text"
          placeholder="Territoire | Commune | Ville"
        />
        <Input
          value={schoolForm.citeChefferieVillage || ""}
          handleChange={(value: string) =>
            setSchoolForm({ ...schoolForm, citeChefferieVillage: value })
          }
          label="Cité | Chefferie | Village"
          type="text"
          placeholder="Cité | Chefferie | Village"
        />
      </div>

      <Button
        isSubmitting={isLoading}
        className="w-full lg:w-fit lg:self-end lg:px-8 bg-primary_color"
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

export default EditSchoolForm;
