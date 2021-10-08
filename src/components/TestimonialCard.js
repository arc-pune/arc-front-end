import React from "react";
import "./testimonialCard.css";



export const TestimonialCard = (props) => {
    console.log(props);
  return (
    <div className="my-10 w-80 mobile-width mx-auto">
      <div
        className="relative rounded-3xl"
        style={{
          backgroundColor: "#FAAF4F",
        }}
      >

        {/* image */}
        <div className="flex ">
          <img
            className="object-cover h-40 w-40 mt-10 rounded-3xl mx-auto"
            src={props.image}
            alt="dog"
          ></img>
        </div>

        {/* Heading and text */}
        <div className="flex flex-col my-5">
          <h2 className="font-sans font-bold text-2xl px-16 mx-auto text-black">{props.name}</h2>
          <img
          className="absolute"
          src="/Assets/icons/quote.svg"
          style={{
            left: "2rem",
            top: "-1rem",
            width: "3rem",
          }}
          alt="Quote icon"
        ></img>
          <p className="font-sans font-medium text-black px-7 py-5 text-justify mx-auto text-base">
            {/* {props.text} */}
            {/* quote icon */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum minus adipisci ut perferendis? Magnam non odio quibusdam, exercitationem tenetur facilis, quis nesciunt odit recusandae, est optio? Rem, quaerat nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;


