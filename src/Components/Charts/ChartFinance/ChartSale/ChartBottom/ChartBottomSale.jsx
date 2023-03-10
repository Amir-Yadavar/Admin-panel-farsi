import React, { useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {dataSaleBottom}from '../../../../../data';

export default function ChartBottomSale() {
    const [dataChart , setDataChart] = useState(dataSaleBottom)
    
    const style = {
        top: '50%',
        right: 0,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
      };
  
    return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={dataChart}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </>
  );
}
