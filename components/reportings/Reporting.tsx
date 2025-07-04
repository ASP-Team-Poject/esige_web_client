"use client";

import React, { useEffect, useState } from "react";
import Select from "../basic/Select";
import { Info } from "lucide-react";
import PageContentWrapper from "../layout/PageContentWrapper";
import {
  AnnuaireType,
  ProvedType,
  ProvinceType,
  SchoolRegion,
  SchoolYearType,
  SousProvedType,
} from "@/util/types";
import { getSchoolRegions, getSchoolYears } from "@/services/SchoolServise";
import { getAnnuaire } from "@/services/ReportService";
import ReportingContentWrapper from "./ReportingContentWrapper";
import Loader from "../basic/Loader";
import { Toast } from "../basic/Toast";
import FetchingDataError from "../basic/FetchingDataError";
import NoData from "../basic/NoData";
import { localStorageKeys } from "@/util/constants";

const Reporting = () => {
  const [schoolYears, setSchoolYears] = useState<SchoolYearType[] | null>(null);
  const [regions, setRegions] = useState<SchoolRegion[] | null>(null);
  const [provinces, setProvinces] = useState<ProvinceType[] | null>(null);
  const [proveds, setProveds] = useState<ProvedType[] | null>(null);
  const [sousProveds, setSousProveds] = useState<SousProvedType[] | null>(null);

  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedProved, setSelectedProved] = useState<string | null>(null);
  const [selectedSousProved, setSelectedSousProved] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [annuaireData, setAnnuaireData] = useState<AnnuaireType | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSchoolYears = async () => {
      try {
        const years = await getSchoolYears();
        if (years) {
          setSelectedYear(`${years[years.length - 1].id}`); // Set the most recent year as default
          setSchoolYears(years);
        }
      } catch (error: any) {
        setToast({
          message: error.message,
          type: "error",
        });
      }
    };
    loadSchoolYears();

    const loadRegions = async () => {
      const storedRegions = localStorage.getItem(localStorageKeys.REGIONS);
      if (storedRegions) {
        const parsedRegions: SchoolRegion[] = JSON.parse(storedRegions);
        setRegions(parsedRegions);
      } else {
        const loadedRegions = await getSchoolRegions();
        if (loadedRegions) {
          setRegions(loadedRegions);
        }
        localStorage.setItem(
          localStorageKeys.REGIONS,
          JSON.stringify(loadedRegions)
        );
      }
    };
    loadRegions();
  }, []);

  useEffect(() => {
    if (regions) {
      const allProvinces = regions.flatMap((region) => region.province);
      setProvinces(allProvinces);
    }
  }, [regions]);

  useEffect(() => {
    if (selectedProvince && regions) {
      const allProveds = regions.flatMap((region) =>
        `${region.province.id}` === selectedProvince ? region.proveds : []
      );
      setSousProveds([]);
      setSelectedProved(null);
      setProveds(allProveds);
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedProved) {
      const selectedProvedObj = proveds?.find(
        (obj) => `${obj.proved.id}` === selectedProved
      );
      setSousProveds(selectedProvedObj?.sousProved || []);
      setSelectedSousProved(null);
    }
  }, [selectedProved]);

  useEffect(() => {
    setIsLoading(true);
    const loadAnnuaireData = async () => {
      try {
        if (
          selectedSousProved &&
          selectedYear &&
          selectedProvince &&
          selectedProved
        ) {
          const annuaireData = await getAnnuaire({
            selectedYear,
            selectedProvince,
            selectedProved,
            selectedSousProved,
          });

          if (annuaireData) {
            console.log("annuaireData 2", annuaireData);
            setAnnuaireData(annuaireData);
          }
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadAnnuaireData();
  }, [selectedSousProved]);

  useEffect(() => {
    if (selectedYear) {
      setSelectedProvince(null);
      setSelectedProved(null);
      setSelectedSousProved(null);
    }
  }, [selectedYear]);

  return (
    <div className="flex flex-col gap-8">
      <PageContentWrapper pageTitle={"Générer Annuaire"}>
        <form className="flex gap-4">
          <Select
            label="Année"
            title="Sélectionner l'année scolaire"
            options={
              schoolYears?.map((year) => {
                return { id: `${year.id}`, value: year.libAnneeScolaire };
              }) || []
            }
            currentOptionId={selectedYear || ""}
            handleOnChange={(e: any) => setSelectedYear(e.target.value)}
          />
          <Select
            label="Province"
            title="Sélectionner la province"
            options={
              provinces?.map((province) => {
                return { id: `${province.id}`, value: province.libelle };
              }) || []
            }
            currentOptionId={selectedProvince || ""}
            handleOnChange={(e: any) => setSelectedProvince(e.target.value)}
          />
          <Select
            label="Proved"
            title="Sélectionner la Proved"
            options={
              proveds?.map((obj) => {
                return {
                  id: `${obj.proved.id}`,
                  value: obj.proved.libelle,
                };
              }) || []
            }
            currentOptionId={selectedProved || ""}
            handleOnChange={(e: any) => setSelectedProved(e.target.value)}
          />
          <Select
            label="Sous Proved"
            title="Sélectionner la Sous Proved"
            options={
              sousProveds?.map((sousProved) => {
                return {
                  id: `${sousProved.id}`,
                  value: sousProved.libelle,
                };
              }) || []
            }
            currentOptionId={selectedSousProved || ""}
            handleOnChange={(e: any) => setSelectedSousProved(e.target.value)}
          />
        </form>
      </PageContentWrapper>
      {selectedSousProved ? (
        <>
          {isLoading ? (
            <Loader colorClass="text-primary_color" size={48} />
          ) : (
            <>
              {error ? (
                <FetchingDataError message={error} />
              ) : (
                <>
                  {annuaireData ? (
                    <ReportingContentWrapper
                      annuaireData={annuaireData!}
                      selectedSousProved={
                        sousProveds?.find(
                          (sousProved) =>
                            `${sousProved.id}` === selectedSousProved
                        )?.libelle || ""
                      }
                      selectedProved={
                        proveds?.find(
                          (proved) => `${proved.proved.id}` === selectedProved
                        )?.proved.libelle || ""
                      }
                      selectedProvince={
                        provinces?.find(
                          (province) => `${province.id}` === selectedProvince
                        )?.libelle || ""
                      }
                      selectedYear={
                        schoolYears?.find(
                          (year) => `${year.id}` === selectedYear
                        )?.libAnneeScolaire || ""
                      }
                    />
                  ) : (
                    <NoData />
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-64">
          <Info className="text-primary_color mb-4" size={48} />
          <p className="text-gray-500 text-2xl">
            {
              "Veuillez sélectionner les champs ci-dessus jusqu'au Sous Proved pour Générer Annuaire."
            }
          </p>
        </div>
      )}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Reporting;
