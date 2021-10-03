import React from "react";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-11/12 flex justify-around">
        <div className="w-280px h-360px rounded-sm p-6 bg-white relative flex items-end transition ease-out duration-700 shadow hover:translate-x-20">
          <img
            src="https://png.pngtree.com/png-vector/20190521/ourmid/pngtree-vector-animal-illustration-dog-vector-illustration-illustration-of-dog-png-image_1055369.jpg"
            alt="dog imgs"
          />
          <div className={styles.info}>
            <h1>Bruno</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
            <button>read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
