import { useState } from "react";
import { setVote } from "../../Services/Services";
import { teams } from "../../json/teams.json";

export const VoteInput = () => {

  const [voto, setVoto] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setVote(voto)
  }

  const handleChange = (e) => {
    setVoto(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="seleccionVotada"
        id="seleccionVotada"
        onChange={handleChange}
        value={voto}
      >
        <option disabled value="">Votá tu selección favorita</option>
        {
          teams.map(team => (
            <option key={team} value={team}>{team}</option>
          ))
        }
      </select>
      <button type="submit" value="Votar">Votar</button>
    </form>
  )
}
