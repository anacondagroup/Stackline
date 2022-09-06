import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MockData } from "../utils/types";

interface MockState {
  data: MockData[];
}

const initialState: MockState = {
  data: [
    {
      id: "",
      title: "",
      image: "",
      subtitle: "",
      brand: "",
      reviews: [],
      retailer: "",
      details: [],
      tags: [],
      sales: [],
    },
  ],
};

export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    fetch: (state, action: PayloadAction<MockData[]>) => {
      state.data = action.payload;
    },
  },
});

export const { fetch } = salesSlice.actions;
export default salesSlice.reducer;
