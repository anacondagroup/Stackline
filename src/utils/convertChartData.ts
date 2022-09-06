import { Sale } from "./types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export interface ChartData {
  name: string;
  retailSales: number;
  wholesaleSales: number;
}

export const convertChartData = (sales: Sale[]) => {
  return sales.map((sale, index, array) => {
    if (
      index > 0 &&
      new Date(sale.weekEnding).getUTCMonth() ===
        new Date(array[index - 1].weekEnding).getUTCMonth()
    ) {
      return {
        name: "",
        retailSales: sale.retailSales,
        wholesaleSales: sale.wholesaleSales,
      };
    } else {
      return {
        name: MONTHS[new Date(sale.weekEnding).getUTCMonth()],
        retailSales: sale.retailSales,
        wholesaleSales: sale.wholesaleSales,
      };
    }
  });
};
