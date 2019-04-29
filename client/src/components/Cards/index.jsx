import React, { useState, useEffect } from "react";
import CardList from "../CardList";
import AddCard from "../AddCard";
import SearchBar from "../SearchBar";
import logo from "./masterclass.png";
import styles from "./index.module.scss";

const Cards = () => {
  const [teachables, setTeachable] = useState([]);
  useEffect(() => callAPI(), []);

  const [showForm, setShowFormState] = useState(false);
  const [isTeachable, toggleIsTeachable] = useState(true);

  const handleSetTeachable = skill => {
    createSkillApi(skill);
    setTeachable([...teachables, skill]);
  };

  const callAPI = () => {
    fetch("http://localhost:3001/api/getData")
      .then(res => res.json())
      .then(res => {
        return setTeachable([...res.data]);
      });
  };

  const createSkillApi = skill => {
    console.log("skillll", skill);
    fetch("http://localhost:3001/api/putData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(skill)
    })
      .then(res => res.json())
      .then(res => {
        return;
        // setTeachable([...res]);
      });
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
          <div className={styles.header}>
            <div
              className={styles.category}
              onClick={() => toggleIsTeachable(!isTeachable)}
            >
              {isTeachable ? "Teaching" : "Learning"}
            </div>
            <div className={styles.mainBanner}>
              <img src={logo} />
            </div>
            <SearchBar />
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
