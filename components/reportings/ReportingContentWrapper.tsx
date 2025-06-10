"use client";

import React, { useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import ReportingContent from "./ReportingContent";
import { AnnuaireType } from "@/util/types";
import { getAnnuaireTables } from "@/util/functions";

const tabsNames: string[] = ["Couverture du recensement", "Salles d'activités"];

const ReportingContentWrapper = ({
  annuaireData,
}: {
  annuaireData: AnnuaireType;
}) => {
  const [currentTabName, setCurrentTabName] = useState<string>(tabsNames[0]);
  const { couverture_du_recensement_tables, salles_activites_tables } =
    getAnnuaireTables(annuaireData);

  return (
    <PageContentWrapper>
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
          <ReportingContent data={couverture_du_recensement_tables} />
        ) : currentTabName === tabsNames[1] ? (
          <ReportingContent data={salles_activites_tables} />
        ) : (
          ""
        )}
      </div>
    </PageContentWrapper>
  );
};

export default ReportingContentWrapper;
