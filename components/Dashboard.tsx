"use client";
import React from "react";
import AnimatedDoughnutChart from "./DoughnutChart";
import { AnimatedBarChart } from "./BarChart";
import StatisticCard from "./StatisticCard";
import Select from "./basic/Select";
import PageContentWrapper from "./layout/PageContentWrapper";

const Dashboard = () => {
  const statisticData = {
    identifiedSchools: 215,
    allSchools: 542,
    coveringRate: 60,
    selectedSchoolYear: "2024-2025",
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        <StatisticCard
          title="Établissements Identifie"
          total={statisticData.allSchools}
          value={statisticData.identifiedSchools}
        />
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
          <label className="font-bold text-lg">Annee</label>
          <Select
            options={[
              "2025-2026",
              "2024-2025",
              "2023-2024",
              "2022-2023",
              "2021-2022",
              "2020-2021",
            ]}
          />
        </div>
      </div>
      <PageContentWrapper pageTitle="Taux de progression par Ville">
        <AnimatedBarChart />
      </PageContentWrapper>
    </div>
  );
};

export default Dashboard;
