"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const barData = [
  { name: "Kinshasa", Taux: 40 },
  { name: "Bandundu", Taux: 30 },
  { name: "Kolwezi", Taux: 50 },
  { name: "Congo Central", Taux: 20 },
  { name: "Goma", Taux: 70 },
  { name: "Lubumbashi", Taux: 60 },
  { name: "Mbadaka", Taux: 100 },
  { name: "Kisangani", Taux: 70 },
  { name: "Bukavu", Taux: 25 },
  { name: "Matadi", Taux: 70 },
  { name: "Tshuapa", Taux: 40 },
  { name: "Kasai", Taux: 70 },
  { name: "Ituri", Taux: 30 },
  { name: "Lualaba", Taux: 70 },
  { name: "Haut-Lomami", Taux: 30 },
  { name: "Sankuru", Taux: 70 },
  { name: "Kwango", Taux: 40 },
  { name: "Haut Uele", Taux: 70 },
  { name: "Bas Uele", Taux: 70 },
  { name: "Tanganyika", Taux: 60 },
  { name: "Mayi Ndombe", Taux: 70 },
  { name: "Lomami", Taux: 20 },
  { name: "Kasai Central", Taux: 70 },
];

export function AnimatedBarChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={barData}
        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval={0}
          tick={(props) => {
            const { x, y, payload } = props;
            return (
              <text
                x={x}
                y={y}
                dy={16}
                textAnchor="end"
                transform={`rotate(-60, ${x}, ${y})`}
                fontSize={12}
              >
                {payload.value}
              </text>
            );
          }}
        />
        <YAxis ticks={[0, 20, 40, 60, 80, 100]} domain={[0, 100]} />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="Taux" fill="#1578d6" animationDuration={1500} />
      </BarChart>
    </ResponsiveContainer>
  );
}
