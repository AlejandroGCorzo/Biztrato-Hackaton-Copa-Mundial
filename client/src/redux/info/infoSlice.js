import { createSlice } from "@reduxjs/toolkit";

export const info = createSlice({
  name: "info",
  initialState: {
    teams: [],
    groups: [],
    timestamp: {
      hour: "00",
      minute: "00",
    },
  },
  reducers: {
    allInfo: (state, action) => {
      state.groups = [...action.payload];
    },
    allTeams: (state, action) => {
      state.teams = action.payload;
    },
    timestamp: (state, action) => {
      state.timestamp = { ...action.payload };
    },
  },
});

export const { allInfo, timestamp, allTeams } = info.actions;

export default info.reducer;
