import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getAllTeams } from "./redux/info/infoActions";
import { RiHome4Line ,RiStore2Fill,RiGridFill, RiWirelessChargingFill, RiUserStarFill, RiSearch2Fill, RiNotification3Line, RiArrowRightCircleLine} from "react-icons/ri";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeams());
  }, []);

  return (

    // SIDEBAR//

    <div className="bg-[#141414] min-h-screen">
      <sidebar className="z-50 fixed top-0 w-60 h-full overflow-y border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414]" >
      <div>
        <div className="rounded-full">
<h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10 ml-5">QATAR WORDCUP 2022</h1>        </div>
        <ul>
          < li >
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiHome4Line/>Home</a></li>
              < li >
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiStore2Fill/>Fechas</a></li>
              < li >
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiGridFill/>Fixture</a></li>
              < li >
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiUserStarFill/>Equipos</a></li>
              < li >
            <a href="#"className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-2 px-4 rounded-xl transition-colors">
              <RiWirelessChargingFill/>Ver en vivo</a></li>
              
            </ul>
            </div>            
                  </sidebar>  

                  {/* NAVARRRRR Y HEADER DE BUSQUEDA */}

                  <header className="fixed lg:pl-80 w-full flex flex-col md:flex-row items-center gap-4 justify-between gap-4 p-8 bg-[#141414] z-40 "  >
                    <nav className="flex items-center gap-4 xs:order-1 lg-order-none">
                    <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full ">EN VIVO</a>    
                    <a href="#" className="text-gray-500 py-2 px-4 rounded-full ">Noticias</a>       
                    <a href="#" className="text-gray-500 py-2 px-4 rounded-full ">Copa Femenina 2022</a>       

                     </nav>
                    <div>
                      <ul className="flex items-center gap-4">
                      < li >
                        <a href="" className="text-gray-500 text-lg"><RiNotification3Line/>{" "} </a></li>
                        < li >
                          <form className="relative">
                          <RiSearch2Fill className="text-gray-500 absolute top-3 left-2"/>
                            <input type="text" className="bg-[#232323] outline-none text-gray-300 rounded-full py-2 pl-8 pr-4 w-full" placeholder="Search"/></form></li></ul> </div></header>

                            {/* TERMINA HEADER */}

                            <main className="lg:pl-[340px] p-8 pt-36 ">
                              <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                              <div className="md:col-span-5 relative ">
                                <img  className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl " src="https://digitalhub.fifa.com/transform/8ee6c039-d966-4fb8-b5aa-6a64edfef317/FIFAPLS_SE_WhoToWatchEight_Main_Hero_01_V1?io=transform:fill,height:434,width:959&quality=75 " alt="" />
                             <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">Copa Mundial 2022</h1>
                             <div className="absolute left-0 bottom-0 text-white p-8 max-w-w-xl">
                              <p className="text-gray-200">2022</p>
                              <h2 className="text-4xl font-extrabold mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At deleniti impedit.</h2>
                              <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group-hover">Ver Ahora <RiArrowRightCircleLine className="hover:translate-x-1 transition-all"/></button>
                             </div></div>
                              </div></main>
                            
                                 

            </div>            
                  
                              
                              



                            


    
  );
}

export default App;
