import React from "react";
import "../index.css";

export const TestimonialCard = (props) => {
    console.log(props);
  return (
    <div className="my-10 mx-auto">
      <div
        className="relative rounded-3xl w-full md:w-auto md:m-10"
        style={{
          backgroundColor: "#FAAF4F",
        }}
      >


        {/* image */}
        <div className="flex ">
          <img
            className="object-cover h-80 w-96 rounded-3xl mt-12 mx-auto"
            src={props.image}
            alt="dog"
          ></img>
        </div>

        {/* Heading and text */}
        <div className="flex flex-col mt-5">
          <h2 className="font-sans font-bold text-2xl px-12">{props.name}</h2>
          <img
          className="absolute"
          src="/Assets/icons/quote.svg"
          style={{
            width: "3rem",
          }}
          alt="Quote icon"
        ></img>
          <p className="font-sans font-medium text-black px-12 pt-5">
            {/* {props.text} */}
            {/* quote icon */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
            mollis ligula. Donec convallis lacinia suscipit. Morbi sit amet orci
            posuere, rhoncus odio egestas, gravida neque. Donec vel dui dui.
            Donec euismod blandit mauris nec pulvinar. Sed aliquam convallis
            ipsum sed cursus. Ut eleifend turpis a ex commodo egestas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
