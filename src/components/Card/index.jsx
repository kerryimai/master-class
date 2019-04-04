import React from "react";
import styles from "./index.module.scss";

const randomHSL = () => {
  return "hsl(" + parseInt(360 * Math.random()) + "," + "70%," + "85%,1)";
};

const Card = ({ name, email, title }) => {
  const color = randomHSL();
  const color2 = randomHSL();
  return (
    <div
      className={styles.card}
      style={{ background: `linear-gradient(${color}, ${color2})` }}
    >
      I can teach you
      <h1>{title}</h1>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};

export default Card;
