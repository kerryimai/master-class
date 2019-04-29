import React, { Component } from "react";
import Cards from "../Cards";
import styles from "./index.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Cards />
      </div>
    );
  }
}

export default App;
