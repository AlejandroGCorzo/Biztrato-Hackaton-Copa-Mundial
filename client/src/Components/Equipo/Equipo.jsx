import React from "react";
import styles from "./styles/index.module.css";
function Equipo(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.name}</h1>
      <img src={props.flag} alt="" />
      <span className={styles.group}>group: {props.group}</span>
      <button className={styles.button}>Votar</button>
    </div>
  );
}

export default Equipo;
