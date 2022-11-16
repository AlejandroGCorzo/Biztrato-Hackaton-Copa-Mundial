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
    }
  },
});

export const { allTeams } = info.actions;

export default info.reducer;
