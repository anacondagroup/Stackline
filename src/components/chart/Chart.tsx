import React from "react";
import { Sale } from "../../utils/types";
import { convertChartData } from "../../utils/convertChartData";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import "./styles.scss";

export interface SaleData {
  data: Sale[];
}

export const Chart = ({ data }: SaleData) => {
  const chartData = convertChartData(data);
  console.log(chartData);
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={550}>
        <LineChart width={800} height={300} data={chartData}>
          <XAxis dataKey="name" interval={0} textAnchor="1px" />
          <Line
            type="monotone"
            dataKey="wholesaleSales"
            stroke="#8884d8"
            dot={false}
            strokeWidth="2px"
          />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#82ca9d"
            dot={false}
            strokeWidth="2px"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
