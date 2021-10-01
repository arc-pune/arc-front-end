import React from "react";
import NavBar from "../components/NavBar";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.html}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
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
