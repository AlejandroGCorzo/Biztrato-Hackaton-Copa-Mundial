import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllTeams, getAllMatchs } from "./redux/info/infoActions";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Fixture from "./Components/Fixture/Fixture"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeams());
    dispatch(getAllMatchs())
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen">
      <BrowserRouter>
        <NavBar />
        <div className="flex ">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/fixture/:group" element={<Fixture />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
