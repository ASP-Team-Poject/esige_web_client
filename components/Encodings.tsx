"use client";

import React, { useState } from "react";
import PageContentWrapper from "./layout/PageContentWrapper";
import Button from "./basic/Button";
import { ArrowBigDownIcon, ArrowBigUpIcon, School, Search } from "lucide-react";
import Select from "./basic/Select";
import H2 from "./basic/H2";
import Input from "./basic/Input";

const tabsNames: string[] = [
  "Tout",
  "Par province",
  "Non traite",
  "Traite",
  "Valide",
];
const schools = [
  {
    name: "College Boboto",
    codeAdmin: "BOBOTO2025001",
    code: "CODE1203888",
    createdAt: "01-05-2010",
  },
  {
    name: "Saint Raphael",
    codeAdmin: "RAPHAEL2025001",
    code: "CODE1203777",
    createdAt: "01-05-2011",
  },
  {
    name: "Saint Etienne",
    codeAdmin: "ETIENNE2025001",
    code: "CODE1203666",
    createdAt: "01-06-2011",
  },
];
const Encodings = () => {
  const [currentTabName, setCurrentTabName] = useState<string>(tabsNames[0]);
  const [noHasAscendingOrder, setNoHasAscendingOrder] = useState<boolean>(true);
  const [nameHasAscendingOrder, setNameHasAscendingOrder] =
    useState<boolean>(true);

  return (
    <PageContentWrapper pageTitle="Encodages">
      <div className="border-b-[2px] border-[#eee] p-1">
        {tabsNames.map((tabName) => (
          <label
            onClick={() => setCurrentTabName(tabName)}
            className={`opacity-80 border-b-[2px] cursor-pointer p-2 ${
              tabName === currentTabName
                ? "text-primary_color border-primary_color"
                : ""
            }`}
          >
            {tabName}
          </label>
        ))}
      </div>

      <div className="p-4">
        {currentTabName === tabsNames[0] ? (
          <div className="flex flex-col gap-4">
            <H2 title="Liste des Établissements" />
            <form className="flex items-center p-4 gap-4 rounded-lg shadow-xl">
              <Select
                label="Annee"
                options={[
                  "2025-2026",
                  "2024-2025",
                  "2023-2024",
                  "2022-2023",
                  "2021-2022",
                  "2020-2021",
                ]}
              />
              <Input
                label="Établissements"
                className="h-fit"
                type="text"
                placeholder="établissement"
                icon={<School color="gray" />}
              />
              <Select
                label="Type d'enseignement"
                options={[
                  "ST1(Prescolaire)",
                  "ST2(Primaire)",
                  "ST3(Secondaire)",
                ]}
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
                          <span>Nom de l'Établissements</span>
                          <span className="flex">
                            <ArrowBigUpIcon
                              className={`h-5 w-5 cursor-pointer ${
                                nameHasAscendingOrder
                                  ? "text-primary_color"
                                  : ""
                              }`}
                              onClick={() => setNameHasAscendingOrder(true)}
                            />
                            <ArrowBigDownIcon
                              className={`h-5 w-5 cursor-pointer ${
                                !nameHasAscendingOrder
                                  ? "text-primary_color"
                                  : ""
                              }`}
                              onClick={() => setNameHasAscendingOrder(false)}
                            />
                          </span>
                        </label>
                      </th>
                      <th>Code Administratif</th>
                      <th>Code de l'Etablissement</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schools.map((school, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td className="text-primary_color font-bold">
                          {school.name}
                        </td>
                        <td>{school.codeAdmin}</td>
                        <td>{school.code}</td>
                        <td>{school.createdAt}</td>
                        <td>...</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : currentTabName === tabsNames[1] ? (
          <div>Tab2</div>
        ) : currentTabName === tabsNames[2] ? (
          <div>Tab3</div>
        ) : currentTabName === tabsNames[3] ? (
          <div>Tab4</div>
        ) : currentTabName === tabsNames[4] ? (
          <div>Tab5</div>
        ) : (
          ""
        )}
      </div>
    </PageContentWrapper>
  );
};

export default Encodings;
