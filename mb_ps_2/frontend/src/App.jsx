import React from "react";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <Home />
      <Register /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
