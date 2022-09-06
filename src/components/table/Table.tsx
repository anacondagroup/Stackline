import React from "react";
import { SaleData } from "../chart/Chart";
import "./styles.scss";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const SaleTable = ({ data }: SaleData) => {
  return (
    <div className="table-container">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Week Ending</Th>
              <Th isNumeric>Retail Sales</Th>
              <Th isNumeric>WholeSale Sales</Th>
              <Th isNumeric>Units Sold</Th>
              <Th isNumeric>Retailer Margin</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((sale, index) => (
              <Tr key={index}>
                <Td>{sale.weekEnding}</Td>
                <Td isNumeric>{sale.retailSales}</Td>
                <Td isNumeric>{sale.wholesaleSales}</Td>
                <Td isNumeric>{sale.unitsSold}</Td>
                <Td isNumeric>${sale.retailerMargin}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
