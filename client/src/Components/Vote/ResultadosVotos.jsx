import { useState } from "react";
import { useEffect } from "react";
import { getTotalVotes } from "../../Services/Services"

export const ResultadosVotos = ({ render }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    getTotalVotes()
      .then(data => setData(data))
      .catch(error => console.log("Error al conectar con Firebase: ", error))
  }, [render, data])

  return (
    <div className="flex flex-col items-end mt-4">
      <h3 className="text-white font-bold text-3xl">¡Estos son los paises con mas votos!</h3>
      <ul>
        {
          data.map(({ pais, votos }) => {
            if (votos > 0) {
              return <li key={pais} className="text-white ">{pais}: {votos} votos</li>
            }
          }
          )
        }
      </ul>
    </div>
  )
}
