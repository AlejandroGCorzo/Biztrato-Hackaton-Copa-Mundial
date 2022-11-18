import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Results() {
  const groupId = useParams().group;
  const group = useSelector((state) =>
    state.info.groups.filter((el) => el.group === groupId)
  );
  const teams = group[0].teams;
  console.log(group);
  console.log(teams);
  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-white align-center pr-2 pl-2 font-extrabold bg-[#440823] rounded-sm">
        Posiciones
      </h2>
      <table>
        <thead>
          <tr>
            <th className="text-white">Equipo</th>
            <th className="text-white pr-2 pl-2">Pts</th>
            <th className="text-white pr-2 pl-2">Gan</th>
            <th className="text-white pr-2 pl-2">Emp</th>
            <th className="text-white pr-2 pl-2">Per</th>
            <th className="text-white pr-2 pl-2">GF</th>
            <th className="text-white pr-2 pl-2">GC</th>
            <th className="text-white pr-2 pl-2">Dif</th>
          </tr>
        </thead>
        <tbody>
          {teams &&
            teams.map((el, i) => {
              return (
                <tr key={i}>
                  <td className="text-white pr-2 pl-2">{el.name_en}</td>
                  <td className="text-white pr-2 pl-2">{el.pts}</td>
                  <td className="text-white pr-2 pl-2">{el.w}</td>
                  <td className="text-white pr-2 pl-2">{el.d}</td>
                  <td className="text-white pr-2 pl-2">{el.l}</td>
                  <td className="text-white pr-2 pl-2">{el.gf}</td>
                  <td className="text-white pr-2 pl-2">{el.ga}</td>
                  <td className="text-white pr-2 pl-2">{el.gd}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
