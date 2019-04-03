import React, { Component } from "react";
import CardList from "../CardList";
import styles from "./index.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <CardList teachables={teachables} />
        Learn React
      </div>
    );
  }
}

export default App;

const teachables = [
  { title: "boxing", name: "Kerry", email: "kimai@inrhythm.com" },
  { title: "painting", name: "ayaz", email: "audin@inrhythm.com" },
  { title: "Makeup", name: "Megan", email: "megan@inrhythm.com" },
  { title: "coding", name: "Dave", email: "Dmai@inrhythm.com" },
  { title: "Ride a mountain bike", name: "Kerry", email: "Limai@inrhythm.com" },
  { title: "financial investment", name: "Ryan", email: "Rsmith@inrhythm.com" }
];
