import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { getAllTeams, getAllMatchs } from "./redux/info/infoActions";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Fixture from "./Components/Fixture/Fixture"
=======
import { getAllInfo } from "./redux/info/infoActions";
import "./Index.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Fixture from "./Components/Fixture/Fixture";
>>>>>>> development

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
<<<<<<< HEAD
    dispatch(getAllTeams());
    dispatch(getAllMatchs())
=======
<<<<<<< HEAD
    dispatch(getAllMatchs());
=======
    dispatch(getAllInfo());
>>>>>>> b4fc307ef7d98845f54da66d697f2d3af75f612a
>>>>>>> development
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen">
      <BrowserRouter>
        <NavBar />
<<<<<<< HEAD
        <div className="flex ">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/fixture/:group" element={<Fixture />} />
          </Routes>
        </div>
=======
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fixture" element={<Fixture />} />
        </Routes>
>>>>>>> development
      </BrowserRouter>
    </div>
  );
}

export default App;
