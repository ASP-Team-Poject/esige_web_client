"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import H2 from "../basic/H2";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSchoolYears } from "@/services/SchoolServise";
import { SchoolYearType } from "@/util/types";
import Loader from "../basic/Loader";
import { localStorageKeys } from "@/util/constants";
import FetchingDataError from "../basic/FetchingDataError";

const SchoolYears = ({ path }: { path: string }) => {
  const [schoolYears, setSchoolYears] = useState<SchoolYearType[] | null>(null);
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const handleClick = (year: SchoolYearType) => {
    localStorage.setItem(
      localStorageKeys.CURRENT_SCHOOL_YEAR,
      JSON.stringify(year)
    );
    router.push(`${path}/${year.id}`);
  };

  useEffect(() => {
    const loadSchoolYears = async () => {
      try {
        const years = await getSchoolYears();
        if (years) {
          setSchoolYears(years);
        }
      } catch (error: any) {
        setError(error.message);
      }
    };
    loadSchoolYears();
  }, []);

  return (
    <PageContentWrapper pageTitle={"Selectionner l'Année"}>
      <div className="flex flex-col gap-4">
        <H2 title="Années scolaires disponibles:" />
        {error ? (
          <FetchingDataError message={error} />
        ) : (
          <>
            {schoolYears ? (
              <div className="flex gap-4 flex-wrap">
                {schoolYears.map((year, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(year)}
                    className="flex flex-col justify-center cursor-pointer gap-4 p-4 rounded-xl bg-primary_color hover:bg-primary_color_hover"
                  >
                    <label className="text-white font-bold text-center cursor-pointer">
                      {year.libAnneeScolaire}
                    </label>
                    <label className="flex gap-2 shadow-none cursor-pointer [box-shadow:0px_0px_64px_white] bg-green-300 px-4 py-2 rounded-3xl">
                      <span className="bg-[#14532d] h-6 w-6 cursor-pointer rounded-full flex justify-center items-center">
                        {" "}
                        <Check color="#fff" />
                      </span>
                      <span className="text-[#14532d] cursor-pointer">
                        {year.active ? "ACTIVE" : "NOT ACTIVE"}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <Loader colorClass="text-primary_color" size={50} />
            )}
          </>
        )}
      </div>
    </PageContentWrapper>
  );
};

export default SchoolYears;
