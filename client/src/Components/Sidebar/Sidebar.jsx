import  { useState }  from "react";
import {
  RiHome4Line,
  RiStore2Fill,
  RiGridFill,
  RiWirelessChargingFill,
  RiUserStarFill,
  RiCloseFill,
  RiMenuFill,
  RiRadioButtonLine,
  RiSettings3Fill,
  RiDownloadFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [showMenu ,setShowMenu] = useState (false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <div>
    <sidebar className={`z-50 fixed top-0 w-60 h-full overflow-y border-r border-gray-800 p-8 flex flex-col justify-between bg-[#440823] transition-all duration-500 lg:left-0 ${showMenu ? "left-0" : "-left-full"}`}>
    <div>
        <div className="rounded-full">
          <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10 ml-5">
            WORDCUP QATAR 2022
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
      <div>
              <ul>
                < li >
                <a href="#"className="text-gray-300 flex  gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiDownloadFill/>Info
              </a>
              < li >
                <a href="#"className="text-gray-300 flex  gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiSettings3Fill/>Setting
              </a>
                  </ li >
                  < li >
                <a href=""className="relative text-gray-300 flex  gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <img src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=740&t=st=1667343045~exp=1667343645~hmac=4ce99f4f7ac69d2ca1311f481276e825f708576aa81afe3fa3458399fe897dfd" className="w-6 h-6 object-cover rounded-full"/>
              <RiRadioButtonLine className="absolute text-green-700 bottom-3 left-8 text-[8px]"/>Andrés 
              </a>
                  </ li >
                  </ li >
                  </ul>      
                  </div>           
                  <button onClick={toggleMenu} className="z-50 lg:hidden bg-blue-600 text-white fixed bottom-4 right-1 p-2 text-lg rounded-full">
                  {showMenu ? <RiCloseFill/> : <RiMenuFill/> }
</button>                  
</sidebar>
</div>

  );
}
