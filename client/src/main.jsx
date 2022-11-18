import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import axios from "axios";
import { logIn } from "./redux/info/infoActions";

axios.defaults.headers["Authorization"] = `Bearer ${
  window.localStorage.getItem("token")
    ? window.localStorage.getItem("token")
    : logIn()
}`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
