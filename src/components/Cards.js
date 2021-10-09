import React from "react";
import styles from "../styles/Card.module.css";

function Cards() {
  return (
    <div className={styles.frame}>
      <div className={styles.cards}>
        <div className={styles.rectangle} />
        <div className={styles.layout}>
          <div>
            <img
              src='https://raw.githubusercontent.com/arc-pune/arc-front-end/staging/src/components/images/dog.png'
              className={styles.imgs}
            />
          </div>
          <span className={styles.lorem_ipsum}>{`Lorem Ipsum `}</span>
          <img
            src='https://raw.githubusercontent.com/arc-pune/arc-front-end/staging/src/components/images/location.png'
            className={styles.location}
          />
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
