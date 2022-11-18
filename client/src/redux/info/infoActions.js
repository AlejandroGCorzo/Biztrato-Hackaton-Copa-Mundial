import axios from "axios";
import { allInfo, timestamp, allTeams } from "./infoSlice";

export const getAllTeams = () => async (dispatch) => {
  try {
    let response = await axios.get("/api/team");
    let teams = response.data.data;
    dispatch(allTeams(teams));
  } catch (error) {
    console.log(error.response);
  }
};
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

export const setTimestamp = (value) => (dispatch) => {
  let hour = "00";
  let minute = "00";
  if (value.length <= 3) {
    hour =
      value[0] === "-" ? "" + (value.slice(0) - 3) : "" + (value.slice(1) - 3);
  } else {
    hour =
      value[0] === "-"
        ? "" + (value.split(":")[0] - 3)
        : "" + (value.split(":")[0] - 3);
    minute =
      value[0] === "-" ? "-" + value.split(":")[1] : "" + value.split(":")[1];
  }

  dispatch(
    timestamp({
      hour,
      minute,
    })
  );
};

export async function TEAMSS() {
  let teams;
  await axios.get("/api/team").then((resolve) => {
    teams = resolve.data.data.map((team) => {
      return {
        id: team.id,
        name: team.name_en,
        // _id: team._id
      }
    });
  });
  return teams;
}

export const getMatchsDay = (day) => {
  axios.get("/api/bymatch/" + day)
}

