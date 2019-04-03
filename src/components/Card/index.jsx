import React from "react";
import styles from "./index.module.scss";

const Card = ({ name, email, title }) => (
  <div className={styles.card}>
    I can teach you
    <h1>{title}</h1>
    <div>{name}</div>
    <div>{email}</div>
  </div>
);

export default Card;
