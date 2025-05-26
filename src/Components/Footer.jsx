import React from "react";
import { Link, NavLink } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="bg-black text-white p-8 mt-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-x-10 gap-y-6 items-start">
        
        {/* MediMeet Info Section */}
        <div className="flex flex-col">
          <Link to="/">
            <p className="text-sm md:text-lg cursor-pointer">
              Medi
              <span className="text-[#28A745] text-lg font-bold md:text-3xl">
                Meet
              </span>
            </p>
          </Link>
          <p className="w-full md:w-2/3 mt-3 text-md leading-relaxed">
            MediMeet is a trusted platform that helps you connect with certified
            and experienced doctors across various specialties. From general
            consultations to specialized care, we make it easy to schedule
            appointments anytime, anywhere.
          </p>
          <div className="flex  mt-6">
            <Socials />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className="font-semibold mb-3 text-white text-md">COMPANY</p>
          <ul className="space-y-2 text-md">
            <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
            <li><NavLink to="/all-doctors" className="hover:underline">All Doctors</NavLink></li>
            <li><NavLink to="/about-us" className="hover:underline">About</NavLink></li>
          
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div className="max-w-xs">
          <p className="font-semibold mb-3 text-white">GET IN TOUCH</p>
          <p className="text-md leading-relaxed">
            For inquiries, partnerships, or support, reach out to our team at:
            <br />
            <span className="text-[#28A745] font-medium">support@medimeet.com</span>
          </p>
        </div>

      </div>
      <hr className="mt-2" />
      <div className="mt-8 text-center text-sm text-gray-400 md:text-lg">
  &copy; {new Date().getFullYear()} MediMeet. All rights reserved.
</div>
    </div>
  );
};

export default Footer;
