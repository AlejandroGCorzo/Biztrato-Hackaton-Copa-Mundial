import React from "react";
import {
  RiHome4Line,
  RiStore2Fill,
  RiGridFill,
  RiWirelessChargingFill,
  RiUserStarFill,
  RiFootballFill
} from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="z-50 fixed top-0 w-60 h-full overflow-y border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414]">
      <div>
        <div className="rounded-full">
          <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10 ml-5">
            QATAR WORLDCUP 2022
          </h1>{" "}
        </div>
        <ul>
          <li>
            <Link
              to="/"
              className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors"
            >
              <RiHome4Line />
              Home
            </Link>
          </li>
          {/* <li>
            <a
              href="#"
              className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors"
            >
              <RiStore2Fill />
              Fechas
            </a>
          </li> */}
          <li>
            <Link
              to="/fixture"
              className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors"
            >
              <RiGridFill />
              Fixture
            </Link>
          </li>
          <li>
            <Link
              to="/equipos"
              className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors"
            >
              <RiUserStarFill />
              Equipos
            </Link>
          </li>
          <li>
            <Link
              to="/partidos"
              className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors"
            >
              <RiFootballFill />
              Partidos
            </Link>
          </li>
          {/* <li>
            <a
              href="#"
              className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors"
            >
              <RiWirelessChargingFill />
              Ver en vivo
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
