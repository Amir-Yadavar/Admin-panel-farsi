import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartHome } from "./../../../data";

export default function ChartHome() {
  const [dataChart, setDataChart] = useState(chartHome);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={dataChart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="thisYear"
            stackId="1"
            stroke="#8884d8"
            fill="rgb(54 160 210 / 70%)"
          />
          <Area
            type="monotone"
            dataKey="lastYear"
            stackId="1"
            stroke="#82ca9d"
            fill="rgb(251 156 67)"
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
