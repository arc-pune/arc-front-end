import React from "react";
import NavBar from "../components/NavBar";
import HomeMain from "../components/HomeMain";
import { Footer } from "./../components/Footer";
import Gallery from "../components/Gallery";
import { TestimonialsMain } from "../components/TestimonialsMain";
import FounderWord from "../components/FounderWord";




const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeMain />
      <Gallery />
      <TestimonialsMain/>
      <FounderWord/>
      <Footer />
    </div>
  );
};

export default Home;
