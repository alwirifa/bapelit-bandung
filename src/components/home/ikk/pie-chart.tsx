"use client";

import React from "react";
import { useMedia } from "react-use";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#A855F7"];

interface DataItem {
  year: number;
  value: number;
}

interface IKKChartProps {
  data: DataItem[];
}

function IKKPieChart({ data }: IKKChartProps) {
  const isMobile = useMedia("(max-width: 768px)", false);

  return (
    <ResponsiveContainer width="100%" height={isMobile ? 250 : 400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="year"
          cx="50%"
          cy="50%"
          outerRadius={isMobile ? 80 : 150}
          fill="#8884d8"
          label={!isMobile} // Hide labels on mobile for cleaner look
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend  align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default IKKPieChart;
