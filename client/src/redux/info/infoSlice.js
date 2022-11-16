import { createSlice } from "@reduxjs/toolkit";

export const info = createSlice({
  name: "info",
  initialState: {
<<<<<<< HEAD
    teams: [],
    matchs: []
  },
  reducers: {
    allTeams: (state, action) => {
      state.teams = [...action.payload];
    }
=======
    groups: [],
  },
  reducers: {
    allInfo: (state, action) => {
      state.groups = [...action.payload];
    },
>>>>>>> b4fc307ef7d98845f54da66d697f2d3af75f612a
  },
});

export const { allInfo } = info.actions;

export default info.reducer;
