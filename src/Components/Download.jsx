import React from "react";
import { assets } from "../assets/assets";

const Download = () => {
  return (
    <div className="flex justify-center mt-5 overflow-x-hidden">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-5xl text-center">Enhance Your Experience <br /> Medi<span className="text-[#28A745]  font-bold text-2xl md:text-5xl">Meet</span>  App</h1>
        <div className="flex gap-2.5 mt-3">
          <img className="w-40 cursor-pointer md:w-fit" src={assets.app_store} />
          <img className="w-40 cursor-pointer md:w-fit" src={assets.play_store} />
        </div>
      </div>
    </div>
  );
};

export default Download;
