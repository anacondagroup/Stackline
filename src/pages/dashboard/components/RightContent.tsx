import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Chart } from "../../../components/chart/Chart";
import { SaleTable } from "../../../components/table/Table";

export const RightContent = () => {
  const mockData = useSelector((state: RootState) => state.sales.data)[0];
  return (
    <>
      <div className="right-container">
        <Chart data={mockData.sales}></Chart>
        <SaleTable data={mockData.sales}></SaleTable>
      </div>
    </>
  );
};
