import React from "react";
import { useSelector } from "react-redux";
import Equipo from "../Equipo/Equipo";
import styles from "./styles/index.module.css";
function Equipos() {
  const allTeams = useSelector((state) => state.info.teams);
  console.log(allTeams);
  return (
    <div>
      <div className={styles.espacio}></div>
      <h1 className={styles.title}>Vota por tu ganador!</h1>
      <div className={styles.container}>
        {allTeams &&
          allTeams.map((team) => {
            return (
              <Equipo
                key={team._id}
                name={team.name_en}
                flag={team.flag}
                group={team.groups}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Equipos;
