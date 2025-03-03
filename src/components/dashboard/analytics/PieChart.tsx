"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const COLORS = ["#4CAF50", "#F44336", "#FFEB3B"];
type PieChartComponentProps = {
  analyticsDataPieChart: {
    id: number;
    title: string;
    value: number;
  }[];
};
const PieChartComponent: React.FC<PieChartComponentProps> = ({
  analyticsDataPieChart,
}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-lg font-semibold">
          SMS Analytics Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={analyticsDataPieChart}
              dataKey="value"
              nameKey="title"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={(entry) => entry.title}
            >
              {analyticsDataPieChart.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartComponent;
