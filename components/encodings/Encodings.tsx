"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import EncodingsContent from "./EncodingsContent";
import { SchoolType } from "@/util/types";
import { getSchools } from "@/services/SchoolServise";

const tabsNames: string[] = [
  "Non Identifiées",
  "En Cours d'identification",
  "Identifiées",
];

const Encodings = () => {
  const [currentTabName, setCurrentTabName] = useState<string>(tabsNames[0]);
  const [schools, setSchools] = useState<SchoolType[]>([]);

  useEffect(() => {
    const loadSchools = async () => {
      const data = await getSchools(0, 10);
      setSchools(data.content);
    };
    loadSchools();
  }, []);

  return (
    <PageContentWrapper pageTitle="Encodages">
      <div className="border-b-[2px] border-[#eee] p-1">
        {tabsNames.map((tabName, index) => (
          <label
            key={index}
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
          <EncodingsContent
            title="Liste des Établissements Non Identifiées"
            schools={schools}
          />
        ) : currentTabName === tabsNames[1] ? (
          <EncodingsContent
            title="Liste des Établissements En cours d'identification"
            schools={schools}
          />
        ) : currentTabName === tabsNames[2] ? (
          <EncodingsContent
            title="Liste des Établissements Identifiées"
            schools={schools}
          />
        ) : (
          ""
        )}
      </div>
    </PageContentWrapper>
  );
};

export default Encodings;
