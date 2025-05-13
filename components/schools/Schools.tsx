"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import Link from "next/link";
import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import Input from "../basic/Input";
import { getSchools } from "@/services/SchoolServise";
import { SchoolType } from "@/util/types";

const Schools = () => {
  const [schools, setSchools] = useState<SchoolType[]>([]);
  const [noHasAscendingOrder, setNoHasAscendingOrder] = useState<boolean>(true);
  const [nameHasAscendingOrder, setNameHasAscendingOrder] =
    useState<boolean>(true);

  useEffect(() => {
    const loadSchools = async () => {
      const data = await getSchools();
      setSchools(data);
    };
    loadSchools();
  });
  return (
    <PageContentWrapper pageTitle="Liste des Établissements">
      <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
        <div className="flex justify-between items-center w-full">
          <label className="flex justify-center items-center gap-2">
            Show{" "}
            <Input
              type="number"
              defaultValue="10"
              className="w-20 h-fit"
              minValue="1"
            />{" "}
            entries
          </label>
          <label className="flex justify-center items-center gap-2">
            Search <Input type="text" placeholder="search" />
          </label>
        </div>
        <div className="overflow-x-scroll w-full">
          {schools.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="bg-[rgb(248,248,248)]">
                  <th>
                    <label className="flex justify-between">
                      <span>No</span>
                      <span className="flex">
                        <ArrowBigUpIcon
                          className={`h-5 w-5 cursor-pointer ${
                            noHasAscendingOrder ? "text-primary_color" : ""
                          }`}
                          onClick={() => setNoHasAscendingOrder(true)}
                        />
                        <ArrowBigDownIcon
                          className={`h-5 w-5 cursor-pointer ${
                            !noHasAscendingOrder ? "text-primary_color" : ""
                          }`}
                          onClick={() => setNoHasAscendingOrder(false)}
                        />
                      </span>
                    </label>
                  </th>
                  <th>
                    <label className="flex justify-between">
                      <span>{"Nom de l'Établissements"}</span>
                      <span className="flex">
                        <ArrowBigUpIcon
                          className={`h-5 w-5 cursor-pointer ${
                            nameHasAscendingOrder ? "text-primary_color" : ""
                          }`}
                          onClick={() => setNameHasAscendingOrder(true)}
                        />
                        <ArrowBigDownIcon
                          className={`h-5 w-5 cursor-pointer ${
                            !nameHasAscendingOrder ? "text-primary_color" : ""
                          }`}
                          onClick={() => setNameHasAscendingOrder(false)}
                        />
                      </span>
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
                    <td>{index}</td>
                    <td className="text-primary_color font-bold">
                      <Link href={`/encodings/${school.id}`}>
                        {school.libelle}
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
          ) : (
            <label>No data</label>
          )}
        </div>
      </div>
    </PageContentWrapper>
  );
};

export default Schools;
