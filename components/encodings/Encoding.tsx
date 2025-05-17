"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import { ArrowRight } from "lucide-react";
import { localStoragekeys } from "@/util/constants";
import { useParams, useRouter } from "next/navigation";
import { getFormatedDate } from "@/util/functions";
import { SchoolType } from "@/util/types";

const stStatus = {
  PENDING: "En cours",
  COMPLETED: "Completé",
  NOT_STARTED: "Non commencé",
};

const Encoding = () => {
  const { yearId, schoolId } = useParams();
  const router = useRouter();

  const [currentSchool, setCurrentSchool] = useState<SchoolType | null>(null);

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

  useEffect(() => {
    const school = JSON.parse(
      localStorage.getItem(localStoragekeys.CURRENT_SCHOOL)!
    );
    setCurrentSchool(school);
  }, []);

  return (
    <PageContentWrapper
      pageTitle={`Encodage de l'Établissement:${
        currentSchool?.nom || currentSchool?.libelle
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          {sts.map((st, index) => (
            <div
              key={index}
              onClick={() =>
                router.push(
                  `/encodings/${yearId}/${schoolId}/${st.name.toLowerCase()}`
                )
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
    </PageContentWrapper>
  );
};

export default Encoding;
