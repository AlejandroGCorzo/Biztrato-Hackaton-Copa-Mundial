import React from "react";

export default function Noticias() {
  return (  
  <div className="col-span-1 h-[500px] w-full bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl">
  <ul className="p-5 lg-p-2 w-20  flex flex-col gap-6 h-full overflow-y rounded-tr-xl rounded-br-xl">
    < li >
      <a href="" className="flex items-center gap-4 text-white text-lm">
        <img src="https://cdn2.unrealengine.com/en-egs-genshin-impact-3-2-carousel-thumb-1200x1600-f12004b2e08b.jpg?h=480&resize=1&w=360" className="w-30 h-20 object-cover  " />{" "} <span className="md:hidden lg:block">Genshin Impact</span> 
      </a>
    </li >
    < li >
      <a href="" className="flex items-center gap-4 text-white text-lm">
        <img src="https://cdn2.unrealengine.com/egs-mount-and-blade-2-carousel-mobile-thumb-1200x1600-7955e274fab8.jpg?h=480&resize=1&w=360" className="w-20 h-20 object-cover  " />{" "} <span className="md:hidden lg:block">Mount & Blade II</span> 
      </a>
    </li >
    < li >
      <a href="" className="flex items-center gap-4 text-white text-lm">
        <img src="https://cdn2.unrealengine.com/egs-honkai-carousel-thumb-1200x1600-d4632fd43325.jpg?h=480&resize=1&w=360" className="w-20 h-20 object-cover  " />{" "} <span className="md:hidden lg:block">Honkai Impact 3</span> 
      </a>
    </li >
   
      < li >
      <a href="" className="flex items-center gap-4 text-white text-lm">
        <img src="https://cdn2.unrealengine.com/egs-sins-solar-empire-2-carousel-thumb-1200x1600-5c0b8ea2800d.jpg?h=480&resize=1&w=360" className="w-20 h-20 object-cover  " />{" "} <span className="md:hidden lg:block"> Sins of a Solar</span> 
      </a>
    </li >
    
  </ul>
</div>
  
  );
}
