import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/petDetailMain.css";
const PetDetailMain = () => {
  let { id } = useParams();
  const PetData = [
    {
      _id: "0000",
      image:
        "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      _id: "0002",
      image:
        "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      _id: "0003",
      image:
        "https://images.pexels.com/photos/2820134/pexels-photo-2820134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      _id: "0004",
      image:
        "https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      _id: "0005",
      image:
        "https://images.pexels.com/photos/6568501/pexels-photo-6568501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      _id: "0006",
      image:
        "https://images.pexels.com/photos/4492139/pexels-photo-4492139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      _id: "0007",
      image:
        "https://images.pexels.com/photos/8985189/pexels-photo-8985189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      _id: "0008",
      image:
        "https://images.pexels.com/photos/7210704/pexels-photo-7210704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      _id: "0009",
      image:
        "https://images.pexels.com/photos/4411430/pexels-photo-4411430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      location: "TWTR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
  ];

  const petD = PetData.filter((pet) => pet._id === id);

  return (
    <div h-full>
      <div className="petDetail__background">
        <button className="petailDetail__cross">
          <Link to="/adopt">
            <img src="/Assets/icons/cross.svg" alt="cross" />
          </Link>
        </button>
      </div>
      <div className="petDetail__main">
        <div className="petDetail___petImage">
          <img src={petD[0]?.image} alt="petImage" />
        </div>
        <div className="petDetail__info">
          <div className="petDetail__infoHeader">
            <h2>Location</h2>
            <p>{petD[0]?.location}</p>
          </div>
          <div className="petDetail__infoBody">
            <h2>Description</h2>
            <p>{petD[0]?.description}</p>
          </div>
          <button className="petDetail___adoptMe">Adopt me</button>
        </div>
      </div>
    </div>
  );
};

export default PetDetailMain;
