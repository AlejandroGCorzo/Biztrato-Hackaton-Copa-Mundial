import axios from "axios";
import { allInfo } from "./infoSlice";

export const getAllInfo = () => (dispatch) => {
  axios
    .get("/api/standings", {
      headers: {
        "Content-Type": "application/json",
        "Authorization":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc0MWQyMmZkOWFhYzIyNjcxNzdhZjciLCJpYXQiOjE2Njg2NTA5OTQsImV4cCI6MTY2ODczNzM5NH0.YB79nYDmzHM44tHB3bISMjs31q2bhqtxfbcs6uLdvgI"
      }
    })
    .then((res) => {
      axios.get("/api/match", {
        headers: {
          "Content-Type": "application/json",
          "Authorization":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc0MWQyMmZkOWFhYzIyNjcxNzdhZjciLCJpYXQiOjE2Njg2NTA5OTQsImV4cCI6MTY2ODczNzM5NH0.YB79nYDmzHM44tHB3bISMjs31q2bhqtxfbcs6uLdvgI"
        }
      }).then((resolve) => {
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
