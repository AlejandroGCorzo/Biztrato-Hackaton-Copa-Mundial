import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTeams } from "./redux/info/infoActions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl bg-red-500 font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
