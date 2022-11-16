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
