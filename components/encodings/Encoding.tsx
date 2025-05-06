"use client";

import React, { useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import H2 from "../basic/H2";
import { ArrowRight, Check } from "lucide-react";
import { schools } from "@/util/constants";
import { useParams, useRouter } from "next/navigation";
import { getFormatedDate } from "@/util/functions";

const stStatus = {
  PENDING: "En cours",
  COMPLETED: "Completé",
  NOT_STARTED: "Non commencé",
};

const Encoding = () => {
  const [choosedSchoolYear, setChoosedSchoolYear] = useState<string>("");
  const schoolYears = ["2022-2023", "2023-2024"];
  const { id } = useParams();
  const router = useRouter();

  const currentSchool = schools.find((school) => school.id + "" === id);
  const sts = [
    {
      name: "ST1",
      status: stStatus.PENDING,
      filledRate: 65,
      modifiedAt: new Date().toISOString(),
    },
    {
      name: "ST2",
      status: stStatus.COMPLETED,
      filledRate: 100,
      modifiedAt: new Date().toISOString(),
    },
    {
      name: "ST3",
      status: stStatus.NOT_STARTED,
      filledRate: 0,
      modifiedAt: new Date().toISOString(),
    },
  ];

  return (
    <PageContentWrapper
      pageTitle={"Encodage de l'Établissement: " + currentSchool?.name}
    >
      {choosedSchoolYear ? (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <label onClick={() => setChoosedSchoolYear("")}>
              <H2
                className="underline cursor-pointer"
                title={`Années scolaires disponibles`}
              />
            </label>
            <ArrowRight color="gray" />
            <H2 title={` ${choosedSchoolYear}`} />
          </div>

          <div className="flex flex-wrap gap-4">
            {sts.map((st) => (
              <div
                onClick={() =>
                  router.push(`/encodings/${id}/${st.name.toLowerCase()}`)
                }
                className="flex flex-col justify-center cursor-pointer gap-4 p-4 rounded-xl bg-[rgb(245,245,245)] shadow-md shadow-gray-300 hover:shadow-xl"
              >
                <label className="text-white font-bold text-center cursor-pointer flex gap-16 justify-between">
                  <span
                    className={`p-2 rounded-full ${
                      st.status === stStatus.COMPLETED
                        ? "text-green-500 bg-green-100"
                        : st.status === stStatus.PENDING
                        ? "text-yellow-500 bg-yellow-100"
                        : "text-red-500 bg-red-100"
                    }`}
                  >
                    {st.name}
                  </span>
                  <span
                    className={`p-2 text-white rounded-md ${
                      st.status === stStatus.COMPLETED
                        ? "bg-green-500"
                        : st.status === stStatus.PENDING
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {st.status}
                  </span>
                </label>
                <div className="flex flex-col gap-2 ">
                  <label className="cursor-pointer">{`Formulaire ${st.name}`}</label>
                  <label
                    className={`h-2 w-full rounded-lg ${
                      st.status === stStatus.COMPLETED
                        ? "bg-green-500"
                        : st.status === stStatus.PENDING
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  ></label>
                  <label className="flex justify-between gap-2">
                    <span>
                      {getFormatedDate(new Date(st.modifiedAt), true, true)}
                    </span>
                    <ArrowRight color="gray" className="cursor-pointer" />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <H2 title="Années scolaires disponibles" />
          <div className="flex gap-4 flex-wrap">
            {schoolYears.map((year) => (
              <div
                onClick={() => setChoosedSchoolYear(year)}
                className="flex flex-col justify-center cursor-pointer gap-4 p-4 rounded-xl bg-primary_color hover:bg-primary_color_hover"
              >
                <label className="text-white font-bold text-center cursor-pointer">
                  {year}
                </label>
                <label className="flex gap-2 shadow-none cursor-pointer [box-shadow:0px_0px_64px_white] bg-green-300 px-4 py-2 rounded-3xl">
                  <span className="bg-[#14532d] h-6 w-6 cursor-pointer rounded-full flex justify-center items-center">
                    {" "}
                    <Check color="#fff" />
                  </span>
                  <span className="text-[#14532d] cursor-pointer">ACTIVE</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageContentWrapper>
  );
};

export default Encoding;
