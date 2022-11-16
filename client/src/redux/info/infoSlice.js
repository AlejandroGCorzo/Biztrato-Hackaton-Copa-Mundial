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
    },
    allMatchs: (state, action) => {
      state.matchs = [...action.payload]
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

<<<<<<< HEAD
export const { allTeams, allMatchs } = info.actions;
=======
export const { allInfo } = info.actions;
>>>>>>> development

export default info.reducer;
