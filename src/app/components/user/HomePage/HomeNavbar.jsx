"use client";
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const HomeNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black py-2 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center bg-black p-2 pl-4 pr-4 rounded-xl">
            <img
              src="https://img.freepik.com/free-photo/view-graphic-3d-taxi_23-2150849103.jpg?ga=GA1.1.312602036.1720699493&semt=sph"
              alt="Cab service logo"
              className="h-10 w-10 rounded-full"
            />
            <h2 className="ml-2 text-lg font-bold text-white">Cab-S</h2>
          </div>
          <div className="sm:hidden">
            {menuOpen ? (
              <button onClick={toggleMenu} className="text-white focus:outline-none bg-black p-2 rounded-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            ) : (
              <button onClick={toggleMenu} className="text-white focus:outline-none bg-black p-2 rounded-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="hidden sm:flex items-center">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="bg-black p-2 rounded-xl text-white hover:text-blue-200" onClick={closeMenu}>
                  Cab-Service
                </a>
              </li>
              <li>
                <a href="#" className="bg-black p-2 rounded-xl text-white hover:text-blue-200" onClick={closeMenu}>
                  Cab-Electric
                </a>
              </li>
              <li>
                <a href="#" className="bg-black p-2 rounded-xl text-white hover:text-blue-200" onClick={closeMenu}>
                  Cab-Factory
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <button className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-2">
              Book a Cab
            </button>
            <button className="bg-white text-black hover:bg-gray-300 text-sm font-semibold px-4 py-2">
              Free Test Ride
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden mt-4 border-t-4 border-white pt-4">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <a href="#" className="bg-black p-1.5 rounded-xl text-white hover:text-blue-200" onClick={closeMenu}>
                  Cab-Service
                </a>
              </li>
              <li>
                <a href="#" className="bg-black p-1.5 rounded-xl text-white hover:text-blue-200" onClick={closeMenu}>
                  Cab-Electric
                </a>
              </li>
              <li>
                <a href="#" className="bg-black p-1.5 rounded-xl text-white hover:text-blue-200" onClick={closeMenu}>
                  Cab-Factory
                </a>
              </li>
              <li>
                <div className="mt-4 flex justify-center space-x-4">
                  <button className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-2">
                    Book a Cab
                  </button>
                  <button className="bg-white text-black hover:bg-gray-300 text-sm font-semibold px-4 py-2">
                    Free Test Ride
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HomeNavbar;
