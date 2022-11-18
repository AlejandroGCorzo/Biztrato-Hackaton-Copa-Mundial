import { useState } from "react";
import { setVote } from "../../Services/Services";
import { teams } from "../../json/teams.json";

export const VoteInput = ({ render, setRender }) => {
  const [voto, setVoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setVote(voto)
    setRender(!render)
  }

  const handleChange = (e) => {
    setVoto(e.target.value);
  }




  return (
    <div>
      <form onSubmit={handleSubmit} className="flex">
        <select
          name="seleccionVotada"
          id="seleccionVotada"
          onChange={handleChange}
          value={voto}
          className="mt-5 bg-blue-600 text-black py-1 px-2 rounded-xl flex items-center gap-2 text-lg group-hover pointer-events-auto"
        >
          <option disabled value="" className="font-bold bg-slate-500">Votá tu selección favorita</option>
          {
            teams.map(team => (
              <option key={team} value={team} className="bg-slate-500">{team}</option>
            ))
          }
        </select>
        <button type="submit" value="Votar" className="text-xl bg-slate-600 ml-1 py-1 px-2 mt-5 rounded-xl">Votar</button>
      </form>
    </div>
  )
}
