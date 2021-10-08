import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import "./testimonialCard.css";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay:true,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            dots: true,
            arrows:false,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            dots: true,
            arrows:false,
            infinite: true,

          }
        }
        
      ]
    };
    return (

      <div className="mx-auto my-2 container">
        <Slider {...settings}>
        <TestimonialCard
          name= "Ayush Kejariwal"
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />
        <TestimonialCard
          name= "Ayush Kejariwal"
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />
        <TestimonialCard
          name= "Ayush Kejariwal"
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />
        <TestimonialCard
          name= "Ayush Kejariwal"
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />
        <TestimonialCard
          name= "Ayush Kejariwal"
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />
        <TestimonialCard
          name= "Ayush Kejariwal"
          image={
            "https://images.unsplash.com/photo-1603570112520-fdc514048979?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          }
        />

      </Slider>
    </div>

    );
  }
}