import React, { useState } from "react";
import CardList from "../CardList";
import AddCard from "../AddCard";
import logo from "./masterclass.png";
import styles from "./index.module.scss";

const skills = [
  { skill: "boxing", name: "Kerry", email: "kimai@inrhythm.com" },
  { skill: "painting", name: "ayaz", email: "audin@inrhythm.com" },
  { skill: "Makeup", name: "Megan", email: "megan@inrhythm.com" },
  { skill: "coding", name: "Dave", email: "Dmai@inrhythm.com" },
  { skill: "Ride a mountain bike", name: "Kerry", email: "Limai@inrhythm.com" },
  { skill: "financial investment", name: "Ryan", email: "Rsmith@inrhythm.com" }
];

const Cards = () => {
  const [teachables, setTeachable] = useState(skills);
  const [showForm, setShowFormState] = useState(false);

  const handleSetTeachable = skill => {
    setTeachable([...teachables, skill]);
  };

  const handleAddFormClick = () => setShowFormState(!showForm);

  return (
    <div className={styles.mainContainer}>
      {showForm ? (
        <AddCard
          showForm={showForm}
          toggleAddCard={handleAddFormClick}
          handleSetTeachable={handleSetTeachable}
        />
      ) : (
        <>
          <div className={styles.mainBanner}>
            <img src={logo} />
          </div>

          <CardList
            teachables={teachables}
            handleAddFormClick={handleAddFormClick}
          />
        </>
      )}
    </div>
  );
};

export default Cards;
