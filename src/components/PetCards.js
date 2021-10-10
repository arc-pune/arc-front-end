import "../styles/petCard.css";
import React from "react";
import { Link } from "react-router-dom";

export const PetCards = (props) => {
  return (
    <Link to={`/petdetail/${props.id}`}>
      <div className="petcard">
        <div className="petcard__petImg">
          <img src={props.image} alt="pet" />
        </div>
        <div className="petcard__main">
          <div className="petcard__header">
            <img src="/Assets/icons/arrow.svg" alt="arrow" />
            <h2>{props.location}</h2>
          </div>
          <div className="petcard__Body">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
