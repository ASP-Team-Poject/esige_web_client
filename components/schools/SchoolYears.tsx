"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import H2 from "../basic/H2";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { getYearsId } from "@/services/SchoolServise";
import { SchoolYearType } from "@/util/types";
import Loader from "../basic/Loader";

const SchoolYears = ({ path }: { path: string }) => {
  const [schoolYears, setSchoolYears] = useState<SchoolYearType[] | null>(null);
  const router = useRouter();

  const handleClick = (yearId: number) => {
    router.push(`${path}/${yearId}`);
  };

  useEffect(() => {
    const loadSchoolYears = async () => {
      const years = await getYearsId();
      setSchoolYears(years);
    };
    loadSchoolYears();
  }, []);

  return (
    <PageContentWrapper pageTitle={"Selectionner l'Année"}>
      <div className="flex flex-col gap-4">
        <H2 title="Années scolaires disponibles:" />
        {schoolYears ? (
          <div className="flex gap-4 flex-wrap">
            {schoolYears.map((year, index) => (
              <div
                key={index}
                onClick={() => handleClick(year.id)}
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
      </div>
    </PageContentWrapper>
  );
};

export default SchoolYears;
