import React, { useState } from "react";
import { buyProductTop } from "../../../../../data";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ChartBuyTop() {
  
    const [dataSaleTop,setDataSaleTop] = useState(buyProductTop)
  
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
          <Bar dataKey="value" fill="rgb(251 156 67)" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
