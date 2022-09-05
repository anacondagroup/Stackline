import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MockData } from "../utils/types";
import { getSales } from "../api/sales";

interface MockState {
  sales: MockData[];
}

const initialState: MockState = {
  sales: [],
};

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    fetch: (state, action: PayloadAction<MockData[]>) => {
      state.sales = action.payload;
    },
  },
});

export const { fetch } = salesSlice.actions;
export default salesSlice.reducer;
