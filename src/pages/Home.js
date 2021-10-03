import React from "react";
import NavBar from "../components/NavBar";
import HomeMain from "../components/HomeMain";
import { Footer } from './../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HomeMain/>
      <Footer />
    </div>
 
  );
};

export default Home;
