import React from "react";
import { RiSearch2Fill, RiNotification3Line } from "react-icons/ri";

export default function NavBar() {
  return (
    <nav className="fixed lg:pl-80 w-full flex flex-col md:flex-row items-center gap-4 justify-between gap-4 p-8 bg-[#141414] z-40 ">
      <nav className="flex items-center gap-4 xs:order-1 lg-order-none">
        <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full ">
          EN VIVO
        </a>
        <a href="#" className="text-gray-500 py-2 px-4 rounded-full ">
          Noticias
        </a>
        <a href="#" className="text-gray-500 py-2 px-4 rounded-full ">
          Copa Femenina 2022
        </a>
      </nav>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <a href="" className="text-gray-500 text-lg">
              <RiNotification3Line />{" "}
            </a>
          </li>
          <li>
            <form className="relative">
              <RiSearch2Fill className="text-gray-500 absolute top-3 left-2" />
              <input
                type="text"
                className="bg-[#232323] outline-none text-gray-300 rounded-full py-2 pl-8 pr-4 w-full"
                placeholder="Search"
              />
            </form>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
}
