"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import ReportingContent from "./ReportingContent";
import { AnnuaireType } from "@/util/types";
import { getAnnuaireTables } from "@/util/functions";
import Loader from "../basic/Loader";
import Button from "../basic/Button";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const tabsNames: string[] = ["Couverture du recensement", "Salles d'activités"];

const ReportingContentWrapper = ({
  selectedSousProved,
  selectedProved,
  selectedProvince,
  selectedYear,
  annuaireData,
}: {
  annuaireData: AnnuaireType;
  selectedSousProved: string;
  selectedProved: string;
  selectedProvince: string;
  selectedYear: string;
}) => {
  const [currentTabName, setCurrentTabName] = useState<string>(tabsNames[0]);
  const { couverture_du_recensement_tables, salles_activites_tables } =
    getAnnuaireTables(annuaireData);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

  const handleDownloadPdf = async () => {
    if (isGeneratingPdf) {
      const element = document.getElementById("pdf-content");
      if (!element) return;

      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(
        `Annuaire_${selectedSousProved}_${selectedProved}_${selectedProvince}_${selectedYear}.pdf`
      );
      setIsGeneratingPdf(false);
    }
  };

  useEffect(() => {
    handleDownloadPdf();
  }, [isGeneratingPdf]);

  return (
    <div className="flex flex-col">
      {isGeneratingPdf ? (
        <Loader colorClass="text-primary_color" />
      ) : (
        <Button
          onClick={() => setIsGeneratingPdf(true)}
          title="Télécharger le pdf"
          icon={<Download />}
          type="button"
          className="bg-red-500 self-end"
        />
      )}
      <PageContentWrapper
        pageTitle={`Annuaire ${selectedSousProved} - ${selectedProved} - ${selectedProvince} - ${selectedYear}`}
        id="pdf-content"
      >
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
    </div>
  );
};

export default ReportingContentWrapper;
