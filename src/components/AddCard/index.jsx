import React from "react";
import styles from "./index.module.scss";

const AddCard = ({ showForm = false, toggleAddCard }) => {
  const handleFormClick = e => {
    console.log("ASDF", e);
    e.stopPropagation();
  };
  return (
    showForm && (
      <div className={styles.addCardWrapper} onClick={toggleAddCard}>
        <div className={styles.addCardForm} onClick={handleFormClick}>
          <h1>My name is</h1>
          <input type="text" placeholder="Ryan" value="" />
          <h1>I can teach</h1>
          <input type="text" placeholder="ex: cooking" value="" />
          <h2>reach out to me at:</h2>
          <input type="text" placeholder="ryan.example.com" value="" />
        </div>
      </div>
    )
  );
};

export default AddCard;
