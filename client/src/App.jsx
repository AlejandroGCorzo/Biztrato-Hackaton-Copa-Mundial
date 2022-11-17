import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllInfo } from "./redux/info/infoActions";
import "./Index.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Fixture from "./Components/Fixture/Fixture";
import Timestamp from "./Components/Timestamp/Timestamp";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllInfo());
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen">
      <BrowserRouter>
        <Sidebar />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fixture/:group" element={<Fixture />} />
          <Route path="/timestamp" element={<Timestamp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
