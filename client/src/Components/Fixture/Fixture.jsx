import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { stadiums } from "../../json/stadiums.json";
import { Link } from "react-router-dom";
import "./loader.css";
import { setTimeFixture } from "../../helpers/setTimeFixture";
import Results from "../Results/Results";

export default function Fixture() {
  const [match, setMatch] = useState([]);
  const groupId = useParams().group;
  const matchs = useSelector((state) =>
    state.info.groups.filter((el) => el.group === groupId)
  );
  const time = useSelector((state) => state.info.timestamp);
  useEffect(() => {
    if (matchs.length > 0) {
      setMatch([...matchs[0].matches]);
    }
  }, [matchs.length > 0, groupId]);
  return (
    <div className="lg:pl-[340px] md: p-8 pt-36 container mx-auto">
      {match.length > 0 ? (
        <div className="flex flex-col items-center">
          <table>
            <thead className="bg-purple-100">
              <tr >
                <th className="border border-black">Fechas</th>
                <th className="border border-black">Horas</th>
                <th className="border border-black">Partidos</th>
                <th className="align-center border border-black">Estadios</th>
              </tr>
            </thead>
            <tbody className="bg-purple-200">
              {match.map((el) => {
                return (
                  <tr key={el.id}>
                    <td className="pr-2 pl-2 font-bold border-x border-black">
                      {el.local_date.slice(0, 5)}
                    </td>
                    <td className="pr-2 pl-2 font-bold border-x border-black">
                      {setTimeFixture(time, el.local_date)}
                    </td>
                    <td className="flex justify-between py-2 align-center pr-2 pl-2 border-r border-black">
                      <div className="flex w-40 items-center">
                        <img
                          className="h-10 w-10"
                          src={el.home_flag}
                          alt="Home flag"
                        />
                        <p className="text-sm pl-2 font-bold">
                          {el.home_team_en.toUpperCase()}
                        </p>
                      </div>
                      <div className="flex justify-between items-center font-bold">
                        <div className="h-8 w-20 bg-white flex items-center"><p className="m-auto">{el.home_score}</p></div>
                        <p className="p-2 ">-</p>
                        <div className="h-8 w-20 bg-white flex items-center"><p className="m-auto">{el.away_score}</p></div>
                      </div>
                      <div className="flex w-40 justify-end items-center">
                        <p className="text-sm pr-2 font-bold">
                          {el.away_team_en.toUpperCase()}
                        </p>
                        <img
                          className="h-10 w-10"
                          src={el.away_flag}
                          alt="away flag"
                        />
                      </div>
                    </td>
                    <td className="pl-3 pr-2 border-r border-black font-bold">{stadiums[el.id - 1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="text-white py-5">
            Los horarios se encuentran en el horario local.
            <Link to="/timestamp" className="underline">
              {" "}
              Presiona aqui para elegir tu zona horaria.
            </Link>
          </p>
          <Results />
        </div>
      ) : (
        <div className="loader" id="loader"></div>
      )}
    </div>
  );
}
