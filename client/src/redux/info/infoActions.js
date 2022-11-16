import axios from "axios";
import { allTeams } from "./infoSlice";

export const getAllTeams = () => (dispatch) => {
  axios
    .get("/api/team")
    .then((resolve) => {
      //   console.log(resolve.data.data);
      const teams = resolve.data.data.map((el) => {
        return {
          id: el.id,
          name: el.name_en,
          fifa_code: el.fifa_code,
          flag: el.flag,
          group: el.groups,
        };
      });
      //   console.log(teams);
      dispatch(allTeams(teams));
    })
    .catch((e) => console.log(e));
};
