import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className="lg:pl-[340px] p-8 pt-36">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="md:col-span-5 relative ">
          <img
            className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl "
            src="https://digitalhub.fifa.com/transform/8ee6c039-d966-4fb8-b5aa-6a64edfef317/FIFAPLS_SE_WhoToWatchEight_Main_Hero_01_V1?io=transform:fill,height:434,width:959&quality=75 "
            alt=""
          />
          <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
            Copa Mundial 2022
          </h1>
          <div className="absolute left-0 bottom-0 text-white p-8 max-w-w-xl">
            <p className="text-gray-200">2022</p>
            <h2 className="text-4xl font-extrabold mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              deleniti impedit.
            </h2>
            <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group-hover">
              Ver Ahora{" "}
              <RiArrowRightCircleLine className="hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
