import React from "react";
import { Link } from "react-router-dom";

import "../styles/petDetailMain.css";
const PetDetailMain = () => {
  return (
    <div h-full>
      <div className="petDetail__background">
        <button className="petailDetail__cross">
          <Link to="/">
            <img src="/Assets/icons/cross.svg" alt="cross" />
          </Link>
        </button>
      </div>
      <div className="petDetail__main">
        <div className="petDetail___petImage">
          <img
            src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="petDetail__info">
          <div className="petDetail__infoHeader">
            <h2>Location</h2>
            <p>Near City Mall, Meera Road,</p>
            <p> Delhi - 123456</p>
          </div>
          <div className="petDetail__infoBody">
            <h2>Description</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <button className="petDetail___adoptMe">Adopt me</button>
        </div>
      </div>
    </div>
  );
};

export default PetDetailMain;
