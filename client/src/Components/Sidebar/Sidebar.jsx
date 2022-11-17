import React from "react";
import {
  RiHome4Line,
  RiGridFill,
  RiUserStarFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import './Sidebar.styles.css'

export default function Sidebar() {
  return (
    <div className="fixed z-50 top-0 w-60 h-full overflow-y border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414]">
      <div>
        <div className="rounded-full">
          <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10 ml-5">
            QATAR WORDCUP 2022
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
          <li className="cursor-pointer text-gray-300 flex flex-row hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors menu-horizontal">
            <div className="flex gap-4 items-center">
              <RiGridFill />
              Fixture
            </div>
            <ul className="menu-vertical">
              <li><Link to="/fixture/A">Grupo A</Link></li>
              <li><Link to="/fixture/B">Grupo B</Link></li>
              <li><Link to="/fixture/C">Grupo C</Link></li>
              <li><Link to="/fixture/D">Grupo D</Link></li>
              <li><Link to="/fixture/E">Grupo E</Link></li>
              <li><Link to="/fixture/F">Grupo F</Link></li>
              <li><Link to="/fixture/G">Grupo G</Link></li>
              <li><Link to="/fixture/H">Grupo H</Link></li>
            </ul>
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
