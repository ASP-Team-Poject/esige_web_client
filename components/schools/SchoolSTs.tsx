"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import Link from "next/link";
import { ArrowBigDownIcon, ArrowBigUpIcon, File } from "lucide-react";
import Input from "../basic/Input";
import { getSTs } from "@/services/SchoolServise";
import { SchoolStType } from "@/util/types";
import { getFormatedDate } from "@/util/functions";
import Loader from "../basic/Loader";

// For pdf generation
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Button from "../basic/Button";

const SchoolSTs = () => {
  const [schoolSTs, setSchoolSTs] = useState<SchoolStType[]>([]);
  const [noHasAscendingOrder, setNoHasAscendingOrder] = useState<boolean>(true);
  const [nameHasAscendingOrder, setNameHasAscendingOrder] =
    useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<string>("10");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPages, setTotalPages] = useState<number>(100); // TODO: change this when the st response is changed to Obj with totalPages
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoPreviousPage = () => {
    const newPage = page === 0 ? 0 : page - 1;
    setPage(newPage);
  };

  const handleGoNextPage = () => {
    const newPage = page === totalPages - 1 ? totalPages : page + 1;
    setPage(newPage);
  };

  const handleDownloadPdf = async () => {
    const element = document.getElementById("pdf-content");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 }); // better resolution
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("identifications.pdf");
  };

  useEffect(() => {
    const loadSchoolSTs = async () => {
      setIsLoading(true);
      const data = await getSTs(page, Number.parseInt(size));
      setSchoolSTs(data);
      setIsLoading(false);
    };
    loadSchoolSTs();
  }, [page, size]);

  return (
    <PageContentWrapper pageTitle="Liste des Identifications" id="pdf-content">
      <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
        <div className="flex justify-between items-center w-full">
          <label className="flex justify-center items-center gap-2">
            Show{" "}
            <Input
              value={size}
              handleChange={(value: string) => setSize(value)}
              type="number"
              className="w-20 h-fit"
              minValue="1"
            />{" "}
            entries
          </label>
          <label className="flex justify-center items-center gap-2">
            Search{" "}
            <Input
              value=""
              handleChange={(value: string) => {
                console.log(value);
              }}
              type="text"
              placeholder="search"
            />
          </label>
        </div>
        <div className="w-full flex justify-center">
          {isLoading ? (
            <Loader colorClass="text-primary_color" size={50} />
          ) : (
            <>
              {schoolSTs.length > 0 ? (
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
                        <th>Nom du Formulaire</th>
                        <th>{"Chef de l'Etablissement"}</th>
                        <th>Province</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schoolSTs.map((schoolSt, index) => (
                        <tr key={index}>
                          <td>{schoolSt.id}</td>
                          <td>
                            {schoolSt.nomEtab ||
                              schoolSt.formulaire.nomEtablissement ||
                              schoolSt.formulaire.nom_etablissement}
                          </td>

                          <td className="text-primary_color font-bold">
                            <Link href={`/encodings/${schoolSt.id}`}>
                              {schoolSt.type}
                            </Link>
                          </td>
                          <td>{schoolSt.formulaire.nomChefEtablissement}</td>
                          <td>{schoolSt.formulaire.province}</td>
                          <td>
                            {getFormatedDate(
                              new Date(schoolSt.date),
                              true,
                              true
                            )}
                          </td>
                          <td>...</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <label
                        onClick={() => handleGoPreviousPage()}
                        className="text-primary_color hover:underline cursor-pointer"
                      >
                        Previous
                      </label>

                      <label className="border-[1px] border-[#ccc] p-3 rounded-sm">
                        Page {page + 1}
                      </label>
                      <label
                        onClick={() => handleGoNextPage()}
                        className="text-primary_color hover:underline cursor-pointer"
                      >
                        Next
                      </label>
                    </div>
                    <Button
                      title="Genere le Pdf"
                      icon={<File />}
                      type="button"
                      onClick={() => handleDownloadPdf()}
                    />
                  </div>
                </div>
              ) : (
                <label>No data</label>
              )}
            </>
          )}
        </div>
      </div>
    </PageContentWrapper>
  );
};

export default SchoolSTs;
