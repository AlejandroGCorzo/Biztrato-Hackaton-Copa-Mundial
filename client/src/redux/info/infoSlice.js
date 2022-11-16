import { createSlice } from "@reduxjs/toolkit";

export const info = createSlice({
  name: "info",
  initialState: {
    teams: [],
    matchs: []
  },
  reducers: {
    allTeams: (state, action) => {
      state.teams = [...action.payload];
    },
    allMatchs: (state, action) => {
      state.matchs = [...action.payload]
    }
  },
});

export const { allTeams, allMatchs } = info.actions;

export default info.reducer;
