import { useState } from "react";
import { setVote } from "../../Services/Services";

export const VoteInput = () => {

  const [voto, setVoto] = useState({
    vote: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setVote(voto);
  }

  const handleChange = (e) => {
    setVoto({ vote: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="seleccionVotada"
        id="seleccionVotada"
        onChange={handleChange}
        value={voto.vote}
      >
        <option disabled value="">Votá tu selección favorita</option>
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
        <option value="colombia">Colombia</option>
        <option value="qatar">Qatar</option>
      </select>
      <button type="submit" value="Votar">Votar</button>
    </form>
  )
}
