"use client";

import React, { useEffect, useState } from "react";
import PageContentWrapper from "../layout/PageContentWrapper";
import Link from "next/link";
import { getSchools } from "@/services/SchoolServise";
import {
  SchoolRegion,
  SchoolType,
  SchoolYearType,
  UserType,
} from "@/util/types";
import { getFormatedDate } from "@/util/functions";

import Loader from "../basic/Loader";
import NoData from "../basic/NoData";
import TableFooter from "../TableFooter";
import TableHeader from "../TableHeader";
import { localStorageKeys } from "@/util/constants";
import FetchingDataError from "../basic/FetchingDataError";
import { useRouter } from "next/navigation";

const EncodingSchools = () => {
  const [schools, setSchools] = useState<SchoolType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<string>("10");
  const [totalPages, setTotalPages] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [schoolYear, setSchoolYear] = useState<SchoolYearType | null>(null);
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

  const handleSchoolSelection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    school: SchoolType
  ) => {
    e.preventDefault();
    localStorage.setItem(
      localStorageKeys.CURRENT_SCHOOL,
      JSON.stringify(school)
    );
    router.push(`/encodings/${schoolYear?.id}/${school.id}`);
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
    const loadSchools = async () => {
      setIsLoading(true);
      try {
        if (currentUser && regions) {
          const data = await getSchools(
            page,
            Number.parseInt(size),
            currentUser,
            regions
          );
          if (data) {
            setSchools(data.content);
            setTotalPages(data.totalPages);
          }
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadSchools();
  }, [page, size, schoolYear]);

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
                            <th>Province</th>
                            <th>Proved</th>
                            <th>Sous Proved</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {schools.map((school, index) => (
                            <tr key={index}>
                              <td>{school.id}</td>
                              <td className="text-primary_color font-bold">
                                <Link
                                  href="#"
                                  onClick={(e) =>
                                    handleSchoolSelection(e, school)
                                  }
                                >
                                  {school.nom || school.libelle}
                                </Link>
                              </td>
                              <td>{school.province}</td>
                              <td>{school.proved}</td>
                              <td>{school.sousproved}</td>
                              <td>
                                {getFormatedDate(
                                  new Date(school.createdAt),
                                  true,
                                  true
                                )}
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
