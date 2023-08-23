import React from "react";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts";

const data = [
  {
    name: "Sun",
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: "Mon",
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: "Tues",
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: "Wednes",
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: "Thurs",
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: "Fri",
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    name: "Satur",
    total: Math.floor(Math.random() * 500) + 100,
  },
];

const Overview = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#7091F5"
          fontSize={12}
          tickLine={true}
          axisLine={false}
        />
        <YAxis
          stroke="#7091F5"
          fontSize={12}
          tickLine={true}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#191D88" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Overview;
