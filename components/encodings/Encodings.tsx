"use client";

import React, { useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import EncodingsContent from "./EncodingsContent";
import { schools } from "@/util/constants";

const tabsNames: string[] = [
  "Non Identifiées",
  "En Cours d'identification",
  "Identifiées",
];

const Encodings = () => {
  const [currentTabName, setCurrentTabName] = useState<string>(tabsNames[0]);

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
