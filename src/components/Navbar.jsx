import React, { useState } from "react";
import { FaCarCrash } from "react-icons/fa";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo as Home Button */}
          <div className="flex items-center text-lg font-bold text-gray-800">
            {/* car Icon */}
            <FaCarCrash />

            {/* Website Name */}
            <a
              href="#hero"
              className="hover:text-blue-500 transition-colors pl-2"
              onClick={handleCloseMenu}
            >
              Be įlenkimu
            </a>
          </div>
  
          {/* Hamburger Icon for Mobile */}
          <button
            className="text-gray-800 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
  
          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-16 right-0 w-full bg-white sm:static sm:block sm:w-auto`}
          >
            <ul className="flex flex-col sm:flex-row items-end sm:items-center gap-2 sm:gap-6 p-4 sm:p-0">
              <li>
                <a
                  href="#services"
                  onClick={handleCloseMenu}
                  className="hover:text-blue-500 transition-colors block"
                >
                  Privalumai
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={handleCloseMenu}
                  className="hover:text-blue-500 transition-colors block"
                >
                  Galerija
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={handleCloseMenu}
                  className="hover:text-blue-500 transition-colors block"
                >
                  Procesas
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={handleCloseMenu}
                  className="hover:text-blue-500 transition-colors block"
                >
                  Kontaktai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
  
}
