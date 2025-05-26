import React from "react";
import {assets} from '../assets/assets.js'
import { FaArrowRight} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="flex justify-center md:p-8 text-white  ">
      <div className= "flex flex-col w-full  md:flex md:flex-row bg-blue-500  md:w-5xl h-fit rounded-md">
        <div className="flex flex-col py-10 px-10 md:py-20 md:px-13">
          <h1 className="text-2xl text-center md:text-5xl md:text-center lg:text-left">Book your appointment with Certified Doctors</h1>
          <div className="flex flex-col lg:flex-row items-center gap-3.5 mt-3">
             <img className="w-35 md:w-35 lg:w-20" src={assets.group_profiles} alt="profile" /> 
             <p className="text-md font-medium text-center md:text-left">Easily browse our wide selection of trusted doctors <br/> and schedule your appointment with no hassle</p>
              
          </div>
          <div className=" flex mt-2.5 justify-center lg:justify-start md:mt-5">
           <a href="#speciality"> <button className="bg-white text-black py-3 px-8 rounded-full cursor-pointer">Book appointment  <FaArrowRight className="inline"/></button></a>
          
          </div>
        </div>
        <div>
            <img className="lg:w-full md:hidden lg:relative top-16
            5 left-0 lg:block" src={assets.header_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
