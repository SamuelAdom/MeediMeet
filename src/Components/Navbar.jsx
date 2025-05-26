import { useState } from "react";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { NavLink,Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <nav className=" bg-white shadow-lg ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/"><p className="text-sm md:text-lg cusrsor-pointer">
          Medi
          <span className="text-[#28A745] text-lg font-bold md:text-3xl">
            Meet
          </span>
        </p></Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user ? (
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-medium md:text-lg md:font-sans">
                {user.firstName + " " + user.lastName}
              </p>
              <p>|</p>
              <UserButton />
            </div>
          ) : (
            <button
              onClick={() => openSignIn()}
              type="button"
              className=" text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Login
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 md:p-0 mt-4 md:mt-0 font-medium bg-gray-50 md:bg-transparent border border-gray-200 md:border-none rounded-lg dark:bg-gray-800 md:dark:bg-transparent">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenu("Home")}
                className={
                  menu === "Home"
                    ? "block px-4 py-2 rounded-md text-gray-900 md:text-black dark:text-white md:dark:text-black hover:bg-blue-400 md:hover:bg-transparent transition-colors border-b-2 border-blue-500"
                    : "block px-4 py-2 rounded-md text-gray-900 md:text-black dark:text-white md:dark:text-black hover:bg-blue-400 md:hover:bg-transparent transition-colors"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-doctors"
                onClick={() => setMenu("All Doctors")}
                className={
                  menu === "All Doctors"
                    ? "block px-4 py-2 rounded-md text-gray-900 md:text-black dark:text-white md:dark:text-black hover:bg-blue-400 md:hover:bg-transparent transition-colors border-b-2 border-blue-500"
                    : "block px-4 py-2 rounded-md text-gray-900 md:text-black dark:text-white md:dark:text-black hover:bg-blue-400 md:hover:bg-transparent transition-colors"
                }
              >
                All Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                onClick={() => setMenu("About")}
                className={
                  menu === "About"
                    ? "block px-4 py-2 rounded-md text-gray-900 md:text-black dark:text-white md:dark:text-black hover:bg-blue-400 md:hover:bg-transparent transition-colors border-b-2 border-blue-500"
                    : "block px-4 py-2 rounded-md text-gray-900 md:text-black dark:text-white md:dark:text-black hover:bg-blue-400 md:hover:bg-transparent transition-colors"
                }
              >
                About
              </NavLink>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
