import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePage w-full h-auto bg-[#1d1a28] text-white">
      <nav className="flex justify-between items-center pl-5 pr-5 pt-2">
        <div className="logo">MarketBazaar</div>
        <div className="list-tab flex justify-around gap-10 p-2 items-center text-[1.3vw]">
          <Link to="/">Home</Link>
          <h3>About</h3>
          <h3>Contact</h3>
          <Link to="/register">SignUp</Link>
        </div>
      </nav>
      <h1>welcome</h1>
      <h1>welcome</h1>
    </div>
  );
};

export default Home;
