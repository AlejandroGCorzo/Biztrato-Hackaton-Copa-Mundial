import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllInfo } from "./redux/info/infoActions";
import "./Index.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Fixture from "./Components/Fixture/Fixture";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
<<<<<<< HEAD
    dispatch(getAllMatchs());
=======
    dispatch(getAllInfo());
>>>>>>> b4fc307ef7d98845f54da66d697f2d3af75f612a
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen">
      <BrowserRouter>
        <Sidebar />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fixture" element={<Fixture />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
