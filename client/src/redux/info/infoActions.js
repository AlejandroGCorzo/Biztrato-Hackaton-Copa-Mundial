import axios from "axios";
import { allTeams } from "./infoSlice";

export const getAllTeams = () => (dispatch) => {
  axios
    .get("/api/standings")
    .then((resolve) => {
      const teams = resolve.data.data.map((el) => {
        delete el._id;
        return el;
      });
      dispatch(allTeams(teams));
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
    .then(response => console.log(response.data.data))
    .catch(error => console.log(error))
}
