"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import Link from "next/link";
import { Edit2, Trash2 } from "lucide-react";
import { getSchools } from "@/services/SchoolServise";
import { SchoolType, SchoolYearType } from "@/util/types";
import { getFormatedDate } from "@/util/functions";

import Loader from "../basic/Loader";
import NoData from "../basic/NoData";
import TableFooter from "../TableFooter";
import TableHeader from "../TableHeader";
import { localStorageKeys } from "@/util/constants";
import FetchingDataError from "../basic/FetchingDataError";

const EncodingSchools = () => {
  const [schools, setSchools] = useState<SchoolType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<string>("10");
  const [totalPages, setTotalPages] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [schoolYear, setSchoolYear] = useState<SchoolYearType | null>(null);

  const handleGoPreviousPage = () => {
    const newPage = page === 0 ? 0 : page - 1;
    setPage(newPage);
  };

  const handleGoNextPage = () => {
    const newPage = page === totalPages - 1 ? totalPages : page + 1;
    setPage(newPage);
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
      } finally {
        setIsLoading(false);
      }
    };
    loadSchools();
  }, [page, size]);

  useEffect(() => {
    const savedSchoolYear = localStorage.getItem(
      localStorageKeys.CURRENT_SCHOOL_YEAR
    );
    if (savedSchoolYear) {
      const parsedSchoolYear = JSON.parse(savedSchoolYear);
      setSchoolYear(parsedSchoolYear);
    }
  }, []);

  return (
    <PageContentWrapper
      pageTitle={`Liste des Établissements de l'Année ${schoolYear?.libAnneeScolaire}`}
      id="pdf-content"
    >
      <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
        <TableHeader size={size} setSize={setSize} />
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
                            <th>Id</th>
                            <th>{"Nom de l'Établissements"}</th>
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

                      <TableFooter
                        page={page}
                        totalPages={totalPages}
                        handleGoPreviousPage={handleGoPreviousPage}
                        handleGoNextPage={handleGoNextPage}
                      />
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

export default EncodingSchools;
