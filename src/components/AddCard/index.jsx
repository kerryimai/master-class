import React, { useState } from "react";
import styles from "./index.module.scss";
import closeBtn from "../../close.svg";

const AddCard = ({ showForm = false, toggleAddCard, handleSetTeachable }) => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [email, setEmail] = useState("");

  const handleFormClick = e => {
    e.stopPropagation();
  };

  const createTask = () => {
    handleSetTeachable({ name, skill, email });
    toggleAddCard();
  };

  return (
    showForm && (
      <div className={styles.addCardWrapper} onClick={toggleAddCard}>
        <div className={styles.overlay} />
        <div className={styles.addCardForm} onClick={handleFormClick}>
          <img className={styles.closeBtn} src={closeBtn} alt="close" />
          <h1>My name is</h1>
          {/* Inline functions in react hook does not impact performance
          https://reactjs.org/docs/hooks-faq.html#are-hooks-slow-because-of-creating-functions-in-render */}

          <input
            type="text"
            placeholder="Ryan"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <h1>I can teach you</h1>
          <input
            type="text"
            placeholder="ex: cooking"
            value={skill}
            onChange={e => setSkill(e.target.value)}
          />
          <h2>Contact me at:</h2>
          <input
            type="text"
            placeholder="ryan.example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className={styles.createBtn} onClick={createTask}>
            Create
          </div>
        </div>
      </div>
    )
  );
};

export default AddCard;
