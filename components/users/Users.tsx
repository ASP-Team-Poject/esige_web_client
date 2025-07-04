"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import Link from "next/link";
import { SchoolRegion, UserType } from "@/util/types";

// For pdf generation
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Loader from "../basic/Loader";
import NoData from "../basic/NoData";
import TableHeader from "../TableHeader";
import TableFooter from "../TableFooter";
import { getUsers } from "@/services/UserService";
import FetchingDataError from "../basic/FetchingDataError";
import { localStorageKeys } from "@/util/constants";
import { useRouter } from "next/navigation";

const Users = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<string>("10");
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<Partial<UserType>>();
  const [regions, setRegions] = useState<SchoolRegion[]>();
  const router = useRouter();

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
    const user = localStorage.getItem(localStorageKeys.CURRENT_USER);
    if (user) {
      const currentUser = JSON.parse(user);
      setCurrentUser(currentUser);
    }

    const regionInSL = localStorage.getItem(localStorageKeys.REGIONS);
    if (regionInSL) {
      const regions: SchoolRegion[] = JSON.parse(regionInSL);
      setRegions(regions);
    }
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      try {
        if (currentUser && regions) {
          const data = await getUsers(
            page,
            Number.parseInt(size),
            debouncedSearch,
            currentUser,
            regions
          );
          if (data) {
            setUsers(data.content);
            setTotalPages(data.totalPages);
          }
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadUsers();
  }, [page, size, debouncedSearch, currentUser, regions]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    handleDownloadPdf();
  }, [isGeneratingPdf]);

  const handleUserSelection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    selectedUser: UserType
  ): void => {
    e.preventDefault();
    localStorage.setItem(
      localStorageKeys.CURRENT_SELECTED_USER,
      JSON.stringify(selectedUser)
    );

    router.push("/users/update");
  };

  return (
    <PageContentWrapper pageTitle="Liste des Utilisateurs" id="pdf-content">
      <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
        {isGeneratingPdf ? (
          ""
        ) : (
          <TableHeader
            size={size}
            setSize={setSize}
            search={search}
            setSearch={setSearch}
          />
        )}
        <div className=" w-full flex justify-center">
          {isLoading ? (
            <Loader colorClass="text-primary_color" size={50} />
          ) : (
            <>
              {error ? (
                <FetchingDataError message={error} />
              ) : (
                <>
                  {users.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-[rgb(248,248,248)]">
                            <th>Id</th>
                            <th>{"Nom complet"}</th>
                            <th>{"Email"}</th>
                            <th>{"Nom d'utilisateur"}</th>
                            <th>{"Role"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user, index) => (
                            <tr key={index}>
                              <td>{user.id}</td>
                              <td className="text-primary_color font-bold">
                                <Link
                                  href={`#`}
                                  onClick={(e) => handleUserSelection(e, user)}
                                >
                                  {user.name || user.firstName || user.username}
                                </Link>
                              </td>
                              <td>{user.email}</td>
                              <td>{user.username}</td>
                              <td>{user.roles}</td>
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

export default Users;
