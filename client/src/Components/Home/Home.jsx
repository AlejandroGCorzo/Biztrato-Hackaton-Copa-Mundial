import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { VoteInput } from "../Vote/VoteInput";

export default function Home() {
  return (
    <main className="lg:pl-[340px] p-8 pt-36">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="md:col-span-5 relative ">
          <img
            className="w-screen h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl "
            src="https://elperiodicodeportivo.com.co/wp-content/uploads/2022/11/Qatar-1.jpg"
            alt=""
          />
          <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
            Copa Mundial 2022
          </h1>
          <div className="absolute left-0 bottom-0 text-white p-8 max-w-w-xl">
            <p className="text-gray-200">--2022--</p>
            <h2 className="text-4xl font-extrabold mb-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              deleniti impedit.
            </h2>
            <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group-hover">
              Ver Ahora{" "}
              <RiArrowRightCircleLine className="hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
        <div className="col-span-1 h-[500px] w-full bg-[#440823] lg:rounded-tr-xl lg:rounded-br-xl">
          <ul className="p-5 lg-p-2 w-50  flex flex-col gap-9 h-full overflow-y rounded-tr-xl rounded-br-xl">
            < li >
              <a href="" className="flex items-center gap-4 text-white text-lm">
                <img src="https://as01.epimg.net/mexico/imagenes/2022/08/06/reportajes/1659755377_894842_1660291127_noticiareportajes_grande.jpg" className="w-40 h-20 object-cover  " />{" "}
              </a>
            </li >
            < li >
              <a href="" className="flex items-center gap-4 text-white text-lm">
                <img src="https://as01.epimg.net/mexico/imagenes/2022/08/06/reportajes/1659755377_894842_1660291127_noticiareportajes_grande.jpg" className="w-40 h-20 object-cover  " />{" "}
              </a>
            </li >
            < li >
              <a href="" className="flex items-center gap-4 text-white text-lm">
                <img src="https://as01.epimg.net/mexico/imagenes/2022/08/06/reportajes/1659755377_894842_1660291127_noticiareportajes_grande.jpg" className="w-40 h-20 object-cover  " />{" "}
              </a>
            </li >

            < li >
              <a href="" className="flex items-center gap-4 text-white text-lm">
                <img src="https://as01.epimg.net/mexico/imagenes/2022/08/06/reportajes/1659755377_894842_1660291127_noticiareportajes_grande.jpg" className="w-40 h-20 object-cover  " />{" "}
              </a>
            </li >

          </ul>
        </div>
      </div>
    </main>
  );
}
