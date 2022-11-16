import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllTeams } from "./redux/info/infoActions";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen">
      <BrowserRouter>
        <Sidebar />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
