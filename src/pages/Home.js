import React from "react";
import NavBar from "../components/NavBar";
import HomeMain from "../components/HomeMain";
import { Footer } from "./../components/Footer";
import Gallery from "../components/Gallery";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HomeMain />
      <Gallery />
      <div className="flex">
        <TestimonialCard
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />
        <TestimonialCard
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />
        <TestimonialCard
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
