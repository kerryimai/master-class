import React from "react";
import styles from "./index.module.scss";
import Card from "../Card";

const CardList = ({ teachables }) => (
  <div className={styles.cardsWrapper}>
    <h3>list of cards</h3>
    <div className={styles.cardsContainer}>
      {teachables.map(item => (
        <Card {...item} />
      ))}
    </div>
  </div>
);

export default CardList;
