import React from "react";
import { SaleData } from "../chart/Chart";
import "./styles.scss";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { Sale } from "../../utils/types";

const columnHelper = createColumnHelper<Sale>();

const columns = [
  columnHelper.accessor("weekEnding", {
    cell: (info) => info.getValue(),
    header: "WEEK ENDING",
  }),
  columnHelper.accessor("retailSales", {
    cell: (info) => info.getValue(),
    header: "RETAIL SALES",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("wholesaleSales", {
    cell: (info) => info.getValue(),
    header: "WHOLESALE SALES",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("unitsSold", {
    cell: (info) => info.getValue(),
    header: "UNITS SOLD",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("retailerMargin", {
    cell: (info) => info.getValue(),
    header: "RETAILER MARGIN",
    meta: {
      isNumeric: true,
    },
  }),
];

export const SaleTable = ({ data }: SaleData) => {
  return (
    <div className="table-container">
      <DataTable columns={columns} data={data} />
    </div>
  );
};
