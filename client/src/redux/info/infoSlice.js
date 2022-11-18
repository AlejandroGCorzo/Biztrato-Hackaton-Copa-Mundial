import { createSlice } from "@reduxjs/toolkit";

export const info = createSlice({
  name: "info",
  initialState: {
    groups: [],
    timestamp: {
      hour: "00",
      minute: "00"
    }
  },
  reducers: {
    allInfo: (state, action) => {
      state.groups = [...action.payload];
    },
    timestamp: (state, action) => {
      state.timestamp = { ...action.payload }
    }
  },
});

export const { allInfo, timestamp } = info.actions;

export default info.reducer;
