import React, { useState } from "react";
import styles from "./index.module.scss";
import Card from "../Card";
import plus from "../../plus.svg";
import AddCard from "../AddCard";
const CardList = ({ teachables }) => {
  const [showForm, setShowFormState] = useState(false);
  const handleAddFormClick = () => setShowFormState(!showForm);
  return (
    <div className={styles.cardsWrapper}>
      <AddCard showForm={showForm} toggleAddCard={handleAddFormClick} />
      <h3>list of cards</h3>
      <div className={styles.cardsContainer}>
        <div className={styles.addCard} onClick={handleAddFormClick}>
          <img src={plus} alt="plusSign" />
        </div>
        {teachables.map(item => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
