import { MockData } from "../utils/types";

export const getSales = async (): Promise<MockData[]> => {
  return require("../data/sales.json");
};
