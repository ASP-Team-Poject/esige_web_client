import { PieChart, Pie, Cell } from "recharts";
import { useState, useEffect } from "react";

const AnimatedDoughnutChart = ({
  total,
  value,
  color,
}: {
  total: number;
  value: number;
  color?: string;
}) => {
  const [progress, setProgress] = useState(0);
  const targetProgress = Math.trunc(((value * 100) / total) * 100) / 100; // percentage to reach
  const radius = 43;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          clearInterval(interval);
          return targetProgress;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  });

  const data = [
    { name: "Progress", value: progress },
    { name: "Remaining", value: 100 - progress },
  ];

  const COLORS = [color || "#00C49F", "#f3f3f3"];

  return (
    <div className="relative w-fit h-fit flex items-center justify-center">
      <PieChart width={85} height={85}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={radius - 10}
          outerRadius={radius}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute text-md font-semibold">{progress}%</div>
    </div>
  );
};

export default AnimatedDoughnutChart;
