import React from "react";
import { PetCards } from "./PetCards";
import "../styles/adoptMain.css";

export const AdoptMain = () => {
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

  return (
    <div className="adoptMain">
      <div className="paws_1">
        <img src="/Assets/images/paws.png" alt="" />
      </div>
      <div className="apdotmain__header">
        <img src="/Assets/icons/paws.svg" alt="paws" />
        <h2>Our Friends Up for Adoption</h2>
      </div>

      <div className="adoptmain___body">
        {PetData?.map((pet) => (
          <div className="" key={pet._id}>
            <PetCards
              id={pet._id}
              image={pet.image}
              location={pet.location}
              description={pet.description}
            />
          </div>
        ))}
        <div className="apdotmain__pawPrint">
          <img src="/Assets/icons/paws.svg" alt="paws" />
        </div>
      </div>

      <div className="paws_2">
        <img src="/Assets/images/paws.png" alt="" />
      </div>
    </div>
  );
};
