"use client";

import React, { useEffect, useState } from "react";
import { AnimatedBarChart } from "./BarChart";
import StatisticCard from "./StatisticCard";
import Select from "./basic/Select";
import PageContentWrapper from "./layout/PageContentWrapper";
import { SchoolYearType } from "@/util/types";
import { getSchoolYears } from "@/services/SchoolServise";
import { Toast } from "./basic/Toast";
import { localStorageKeys } from "@/util/constants";

const Dashboard = () => {
  const [schoolYears, setSchoolYears] = useState<SchoolYearType[] | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const statisticData = {
    identifiedSchools: 215,
    allSchools: 542,
    coveringRate: 60,
    selectedSchoolYear: "2024-2025",
  };

  useEffect(() => {
    const loadSchoolYears = async () => {
      try {
        const years = await getSchoolYears();
        if (years) {
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
    localStorage.removeItem(localStorageKeys.CURRENT_SCHOOL);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        <StatisticCard
          title="Taux de couverture"
          total={statisticData.allSchools}
          value={statisticData.identifiedSchools}
          color="red"
        />
        <StatisticCard
          title="Toutes les ecoles"
          total={statisticData.allSchools}
          value={statisticData.allSchools}
          color="#1578d6"
        />
        <div className="flex flex-col gap-2 justify-center items-center p-4 rounded-md bg-white shadow-lg flex-1">
          <Select
            label="Année"
            options={
              schoolYears?.map((year) => {
                return { id: `${year.id}`, value: year.libAnneeScolaire };
              }) || []
            }
          />
        </div>
      </div>
      <PageContentWrapper pageTitle="Taux de progression par Ville">
        <AnimatedBarChart />
      </PageContentWrapper>
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

export default Dashboard;
