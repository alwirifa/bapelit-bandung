"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6"];

interface DataItem {
  year: number;
  value: number;
}

interface HarapanLamaSekolahChartProps {
  data: DataItem[];
}

function HarapanLamaSekolahPieChart({ data }: HarapanLamaSekolahChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="year"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default HarapanLamaSekolahPieChart;
