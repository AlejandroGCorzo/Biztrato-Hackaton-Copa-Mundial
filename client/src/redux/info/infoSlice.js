import { createSlice } from "@reduxjs/toolkit";

export const info = createSlice({
  name: "info",
  initialState: {
    groups: [],
  },
  reducers: {
    allInfo: (state, action) => {
      state.groups = [...action.payload];
    },
  },
});

export const { allInfo } = info.actions;

export default info.reducer;
