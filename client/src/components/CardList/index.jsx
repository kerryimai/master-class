import React from "react";
import styles from "./index.module.scss";
import Card from "../Card";
import plus from "../../plus.svg";

const CardList = ({ teachables, handleAddFormClick }) => {
  return (
    <div className={styles.cardsWrapper}>
      <div className={styles.cardsContainer}>
        <div className={styles.addCard} onClick={handleAddFormClick}>
          <img src={plus} alt="plusSign" />
        </div>
        {teachables.map(item => (
          <Card {...item} key={item.createdAt} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
