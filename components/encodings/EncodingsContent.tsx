"use client";

import React, { useEffect, useState } from "react";
import Input from "../basic/Input";
import { School, Search } from "lucide-react";
import Select from "../basic/Select";
import Button from "../basic/Button";
import H2 from "../basic/H2";
import Link from "next/link";
import { SchoolType, SchoolYearType } from "@/util/types";
import { localStorageKeys } from "@/util/constants";
import { useParams, useRouter } from "next/navigation";
import { getSchoolYears } from "@/services/SchoolServise";
import { Toast } from "../basic/Toast";

const EncodingsContent = ({
  title,
  schools,
}: {
  title: string;
  schools: SchoolType[];
}) => {
  const router = useRouter();
  const { yearId } = useParams();
  const [schoolYears, setSchoolYears] = useState<SchoolYearType[] | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleSchoolSelection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    school: SchoolType
  ) => {
    e.preventDefault();
    localStorage.setItem(
      localStorageKeys.CURRENT_SCHOOL,
      JSON.stringify(school)
    );
    router.push(`/encodings/${yearId}/${school.id}`);
  };

  useEffect(() => {
    const loadSchoolYears = async () => {
      try {
        const years = await getSchoolYears();
        if (years) {
          setSchoolYears(years);
        }
      } catch (error: any) {
        setToast({
          message: error.message,
          type: "error",
        });
      }
    };
    loadSchoolYears();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <H2 title={title} />
      <form className="flex items-center p-4 gap-4 rounded-lg shadow-xl">
        <Select
          label="Année"
          options={
            schoolYears?.map((year) => {
              return { id: `${year.id}`, value: year.libAnneeScolaire };
            }) || []
          }
        />
        <Input
          value=""
          handleChange={(value: string) => {
            console.log(value);
          }}
          label="Établissements"
          className="h-fit"
          type="text"
          placeholder="établissement"
          icon={<School color="gray" />}
        />

        <Button
          className="h-fit self-end"
          type="submit"
          title="Rechercher"
          icon={<Search />}
        />
      </form>
      <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
        <div className="flex justify-between items-center w-full">
          <label className="flex justify-center items-center gap-2">
            Show{" "}
            <Input
              value=""
              handleChange={(value: string) => {
                console.log(value);
              }}
              type="number"
              defaultValue="10"
              className="w-20 h-fit"
              minValue="1"
            />{" "}
            entries
          </label>
          <label className="flex justify-center items-center gap-2">
            Search{" "}
            <Input
              value=""
              handleChange={(value: string) => {
                console.log(value);
              }}
              type="text"
              placeholder="search"
            />
          </label>
        </div>
        <div className="overflow-x-scroll w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-[rgb(248,248,248)]">
                <th>
                  <label className="flex justify-between">
                    <span>Id</span>
                
                  </label>
                </th>
                <th>
                  <label className="flex justify-between">
                    <span>{"Nom de l'Établissement"}</span>
                  
                  </label>
                </th>
                <th>Code Administratif</th>
                <th>Code de l&apos;Etablissement</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school, index) => (
                <tr key={index}>
                  <td>{school.id}</td>
                  <td className="text-primary_color font-bold">
                    <Link
                      href="#"
                      onClick={(e) => handleSchoolSelection(e, school)}
                    >
                      {school.nom || school.libelle}
                    </Link>
                  </td>
                  <td>{school.codeAdmin}</td>
                  <td>{school.codeEtablissement}</td>
                  <td>{school.createdAt}</td>
                  <td>...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default EncodingsContent;
