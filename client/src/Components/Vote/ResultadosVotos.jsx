import { useState } from "react";
import { useEffect } from "react";
import { getTotalVotes } from "../../Services/Services"

export const ResultadosVotos = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getTotalVotes()
      .then(data => setData(data))
      .catch(error => console.log("Error al conectar con Firebase: ", error))
  }, [])

  return (
    <>
      <ul>
        {
          data.map(({ pais, votos }) => (
            <li key={pais}>{pais}: {votos} votos</li>
          ))
        }
      </ul>
    </>
  )
}
