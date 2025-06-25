"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import Link from "next/link";
import { getSTs } from "@/services/SchoolServise";
import { SchoolStType } from "@/util/types";
import { getFormatedDate } from "@/util/functions";
import Loader from "../basic/Loader";

// For pdf generation
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import NoData from "../basic/NoData";
import TableHeader from "../TableHeader";
import TableFooter from "../TableFooter";
import { useParams, useRouter } from "next/navigation";
import { localStorageKeys } from "@/util/constants";
import FetchingDataError from "../basic/FetchingDataError";

const SchoolSTs = () => {
  const [schoolSTs, setSchoolSTs] = useState<SchoolStType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<string>("10");

  const [totalPages, setTotalPages] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const router = useRouter();
  const { yearId }: { yearId: string } = useParams();
  const [error, setError] = useState<string>("");

  const handleGoPreviousPage = () => {
    const newPage = page === 0 ? 0 : page - 1;
    setPage(newPage);
  };

  const handleGoNextPage = () => {
    const newPage = page === totalPages - 1 ? totalPages : page + 1;
    setPage(newPage);
  };

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
      pdf.save("identifications.pdf");
      setIsGeneratingPdf(false);
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    currentSchoolSt: SchoolStType
  ) => {
    e.preventDefault();

    localStorage.setItem(
      localStorageKeys.CURRENT_SCHOOL_ST,
      JSON.stringify(currentSchoolSt)
    );

    const stTypeLC = currentSchoolSt.type.toLocaleLowerCase();
    const url = `/encodings/${yearId}/${currentSchoolSt.idetablissement}/${stTypeLC}`;
    router.push(url);
  };

  useEffect(() => {
    const loadSchoolSTs = async () => {
      setIsLoading(true);
      try {
        const data = await getSTs(yearId, page, Number.parseInt(size));
        if (data) {
          setSchoolSTs(data.content);
          setTotalPages(data.totalPages);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadSchoolSTs();
  }, [page, size]);

  useEffect(() => {
    handleDownloadPdf();
  }, [isGeneratingPdf]);

  return (
    <PageContentWrapper pageTitle="Liste des Identifications" id="pdf-content">
      <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
        {isGeneratingPdf ? "" : <TableHeader size={size} setSize={setSize} />}

        <div className="w-full flex justify-center">
          {isLoading ? (
            <Loader colorClass="text-primary_color" size={50} />
          ) : (
            <>
              {error ? (
                <FetchingDataError message={error} />
              ) : (
                <>
                  {schoolSTs.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-[rgb(248,248,248)]">
                            <th>Id</th>
                            <th>{"Nom de l'Établissements"}</th>
                            <th>Nom du Formulaire</th>
                            <th>{"Chef de l'Etablissement"}</th>
                            <th>Province</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {schoolSTs.map((schoolSt, index) => (
                            <tr key={index}>
                              <td>{schoolSt.id}</td>
                              <td>
                                {schoolSt.formulaire?.nom_etablissement ||
                                  schoolSt.nomEtab}
                              </td>

                              <td className="text-primary_color font-bold">
                                <Link
                                  href={`#`}
                                  onClick={(e) => handleClick(e, schoolSt)}
                                >
                                  {schoolSt.type}
                                </Link>
                              </td>
                              <td>
                                {schoolSt.formulaire.nomChefEtablissement}
                              </td>
                              <td>{schoolSt.formulaire.province}</td>
                              <td>
                                {getFormatedDate(
                                  new Date(schoolSt.date),
                                  true,
                                  true
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {isGeneratingPdf ? (
                        ""
                      ) : (
                        <TableFooter
                          page={page}
                          totalPages={totalPages}
                          handleGoPreviousPage={handleGoPreviousPage}
                          handleGoNextPage={handleGoNextPage}
                          handleDownloadPdf={() => setIsGeneratingPdf(true)}
                        />
                      )}
                    </div>
                  ) : (
                    <NoData />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </PageContentWrapper>
  );
};

export default SchoolSTs;
