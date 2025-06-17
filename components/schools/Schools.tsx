"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import Link from "next/link";
import { ArrowBigDownIcon, ArrowBigUpIcon, Edit2, Trash2 } from "lucide-react";
import { getSchools } from "@/services/SchoolServise";
import { SchoolType } from "@/util/types";
import { getFormatedDate } from "@/util/functions";

// For pdf generation
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Loader from "../basic/Loader";
import NoData from "../basic/NoData";
import TableHeader from "../TableHeader";
import TableFooter from "../TableFooter";
import FetchingDataError from "../basic/FetchingDataError";

const Schools = () => {
  const [schools, setSchools] = useState<SchoolType[]>([]);
  const [noHasAscendingOrder, setNoHasAscendingOrder] = useState<boolean>(true);
  const [nameHasAscendingOrder, setNameHasAscendingOrder] =
    useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<string>("10");
  const [totalPages, setTotalPages] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
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
      pdf.save("etablissements.pdf");
      setIsGeneratingPdf(false);
    }
  };

  useEffect(() => {
    const loadSchools = async () => {
      setIsLoading(true);
      try {
        const data = await getSchools(page, Number.parseInt(size));
        if (data) {
          setSchools(data.content);
          setTotalPages(data.totalPages);
        }
      } catch (error: any) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    loadSchools();
  }, [page, size]);

  useEffect(() => {
    handleDownloadPdf();
  }, [isGeneratingPdf]);

  return (
    <PageContentWrapper pageTitle="Liste des Établissements" id="pdf-content">
      <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
        {isGeneratingPdf ? "" : <TableHeader size={size} setSize={setSize} />}
        <div className=" w-full flex justify-center">
          {isLoading ? (
            <Loader colorClass="text-primary_color" size={50} />
          ) : (
            <>
              {error ? (
                <FetchingDataError message={error} />
              ) : (
                <>
                  {schools.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-[rgb(248,248,248)]">
                            <th>
                              <label className="flex justify-between">
                                <span>Id</span>
                                <span className="flex">
                                  <ArrowBigUpIcon
                                    className={`h-5 w-5 cursor-pointer ${
                                      noHasAscendingOrder
                                        ? "text-primary_color"
                                        : ""
                                    }`}
                                    onClick={() => setNoHasAscendingOrder(true)}
                                  />
                                  <ArrowBigDownIcon
                                    className={`h-5 w-5 cursor-pointer ${
                                      !noHasAscendingOrder
                                        ? "text-primary_color"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      setNoHasAscendingOrder(false)
                                    }
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
                                      nameHasAscendingOrder
                                        ? "text-primary_color"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      setNameHasAscendingOrder(true)
                                    }
                                  />
                                  <ArrowBigDownIcon
                                    className={`h-5 w-5 cursor-pointer ${
                                      !nameHasAscendingOrder
                                        ? "text-primary_color"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      setNameHasAscendingOrder(false)
                                    }
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
                              <td>{school.id}</td>
                              <td className="text-primary_color font-bold">
                                <Link href={`/encodings/${school.id}`}>
                                  {school.nom || school.libelle}
                                </Link>
                              </td>
                              <td>{school.codeAdmin}</td>
                              <td>{school.codeEtablissement}</td>
                              <td>
                                {getFormatedDate(
                                  new Date(school.createdAt),
                                  true,
                                  true
                                )}
                              </td>
                              <td>
                                <label className="flex gap-2">
                                  <Trash2
                                    color="red"
                                    className="cursor-pointer"
                                  />
                                  <span className="text-gray-500">{"|"}</span>
                                  <Edit2
                                    color="green"
                                    className="cursor-pointer"
                                  />
                                </label>
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

export default Schools;
