import React, { useState } from "react";
import { saleProductTop } from "../../../../../data";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartTopSale() {
  
    const [dataSaleTop,setDataSaleTop] = useState(saleProductTop)
  
    return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dataSaleTop}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="rgb(54 160 210 / 70%)" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
