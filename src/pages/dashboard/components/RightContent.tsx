import React from "react";
import { Chart } from "../../../components/chart/Chart";
import { Table } from "../../../components/table/Table";

export const RightContent = () => {
  return (
    <>
      <div className="right-container">
        <Chart></Chart>
        <Table></Table>
      </div>
    </>
  );
};
