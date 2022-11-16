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
