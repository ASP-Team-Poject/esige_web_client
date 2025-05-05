import React from "react";
import AnimatedDoughnutChart from "./DoughnutChart";

const StatisticCard = ({
  title,
  total,
  value,
  color,
}: {
  title: string;
  total: number;
  value: number;
  color?: string;
}) => {
  return (
    <div className="flex justify-center items-center p-2 gap-2 rounded-md bg-white shadow-lg">
      <div className="w-fit h-fit rounded-full font-bold flex justify-center items-center">
        <AnimatedDoughnutChart total={total} value={value} color={color} />
      </div>
      <div className="flex flex-col">
        <label className="font-bold text-md">{value}</label>
        <label className="text-gray-500">{title}</label>
      </div>
    </div>
  );
};

export default StatisticCard;
