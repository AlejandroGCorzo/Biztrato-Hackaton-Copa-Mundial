import axios from "axios";
import { allInfo } from "./infoSlice";

export const getAllInfo = () => (dispatch) => {
  axios
    .get("/api/standings")
    .then((res) => {
      axios.get("/api/match").then((resolve) => {
        const matches = resolve.data.data;
        const teams = res.data.data.map((group) => {
          delete group._id;
          return {
            ...group,
            matches: matches
              .filter((match) => match.group === group.group)
              .map((el) => {
                delete el._id;
                return el;
              })
              .sort((a, b) => (a.local_date > b.local_date ? 1 : -1)),
          };
        });
        dispatch(allInfo(teams));
      });
    })
    .catch((e) => console.log(e));
};

export const getAllMatchs = () => (dispatch) => {
  axios.get("/api/match", {
    headers: {
      "Content-Type": "application/json",
      "Authorization":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc0MWQyMmZkOWFhYzIyNjcxNzdhZjciLCJpYXQiOjE2Njg1NTk3MDgsImV4cCI6MTY2ODY0NjEwOH0.GdyuRkNbXfFmM-LmHOz3w2KppWDWK5tS_I8THfzGk14"
    }
  })
    .then(response => {
      const newMatchs = response.data.data.map((el) => {
        return {
          group: el.group,
          home_team: el.home_team_en,
          home_flag: el.home_flag,
          away_team: el.away_team_en,
          away_flag: el.away_flag,
          date: el.local_date,
          matchday: el.matchday,
          home_score: el.home_score,
          away_score: el.away_score
        }
      })

      dispatch(allMatchs(newMatchs))
    })
    .catch(error => console.log(error))
}
