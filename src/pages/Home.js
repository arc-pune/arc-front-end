import React from "react";
import NavBar from "../components/NavBar";
import HomeMain from "../components/HomeMain";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <NavBar></NavBar>
      <HomeMain />
    </div>
  );
};

export default Home;
