import React from "react";
import styles from "./Card.module.css";

import dog from "./images/dog.png";
import location from "./images/location.png";

function Cards() {
  return (
    <div className={styles.frame}>
      <div className={styles.cards}>
        <div className={styles.rectangle} />
        <div className={styles.layout}>
          <div>
            <img src={dog} className={styles.imgs} />
          </div>
          <span className={styles.lorem_ipsum}>{`Lorem Ipsum `}</span>
          <img src={location} className={styles.location} />
          <span className={styles.text}>{`Lorem Ipsum is simply dummy text of 
the printing and typesetting industry.
Lorem Ipsum has been the industry's 
standard dummy text`}</span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
