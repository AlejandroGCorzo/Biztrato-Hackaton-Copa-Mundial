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
    .then(response => console.log(response.data.data))
    .catch(error => console.log(error))
}
