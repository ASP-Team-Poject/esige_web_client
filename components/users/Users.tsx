"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import Link from "next/link";
import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import { UserType } from "@/util/types";

// For pdf generation
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Loader from "../basic/Loader";
import NoData from "../basic/NoData";
import TableHeader from "../TableHeader";
import TableFooter from "../TableFooter";
import { getUsers } from "@/services/UserService";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [noHasAscendingOrder, setNoHasAscendingOrder] = useState<boolean>(true);
  const [nameHasAscendingOrder, setNameHasAscendingOrder] =
    useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<string>("10");
  const [totalPages, setTotalPages] = useState<number>(100); // TODO: change this when the st response is changed to Obj with totalPages
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);

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
    const loadUsers = async () => {
      setIsLoading(true);

      const data = await getUsers(page, Number.parseInt(size));
      setUsers(data.content);
      setTotalPages(data.totalPages);
      setIsLoading(false);
    };
    loadUsers();
  }, [page, size]);

  useEffect(() => {
    handleDownloadPdf();
  }, [isGeneratingPdf]);

  return (
    <PageContentWrapper pageTitle="Liste des Utilisateurs" id="pdf-content">
      <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
        {isGeneratingPdf ? "" : <TableHeader size={size} setSize={setSize} />}
        <div className=" w-full flex justify-center">
          {isLoading ? (
            <Loader colorClass="text-primary_color" size={50} />
          ) : (
            <>
              {users.length > 0 ? (
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
                            <span>{"Nom complet"}</span>
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
                        <th>{"Téléphone"}</th>
                        <th>Email</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={index}>
                          <td>{user.id}</td>
                          <td className="text-primary_color font-bold">
                            <Link href={`#`}>
                              {user.name || user.firstName || user.username}
                            </Link>
                          </td>
                          <td>{user.phone}</td>
                          <td>{user.email}</td>

                          <td>...</td>
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
        </div>
      </div>
    </PageContentWrapper>
  );
};

export default Users;
