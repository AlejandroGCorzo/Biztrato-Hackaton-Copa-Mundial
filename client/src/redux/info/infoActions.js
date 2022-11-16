import axios from "axios";

export const getAllTeams = () => (dispatch) => {
  axios
    .get("http://api.cup2022.ir/api/v1/team", {
      header: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc0MWU2Y2ZkOWFhYzIyNjcxNzg5ZGIiLCJpYXQiOjE2Njg1NTQ3NTcsImV4cCI6MTY2ODY0MTE1N30.MYcZNkIyZoVNuwbCCKr0glCVQBpfJJGXszRlYLivzRk",
      },
    })
    .then((resolve) => console.log(resolve.data))
    .catch((e) => console.log(e));
};
