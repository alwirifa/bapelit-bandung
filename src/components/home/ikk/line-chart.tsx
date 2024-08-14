"use client";

import React from "react";
import { useMedia } from "react-use";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  year: number;
  value: number;
}

interface IKKChartProps {
  data: DataItem[];
}

function IKKLineChart({ data }: IKKChartProps) {
  const isMobile = useMedia("(max-width: 768px)", false);

  return (
    <ResponsiveContainer width="100%" height={isMobile ? 250 : 400}>
      <LineChart
        data={data}
        margin={isMobile ? { top: 10, right: 10, left: 0, bottom: 10 } : { top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#3B82F6"
          strokeWidth={isMobile ? 2 : 3}
          activeDot={{ r: isMobile ? 6 : 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default IKKLineChart;
