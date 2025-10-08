'use client';
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Why Choose Us", link: "#why-choose-us" },
  ];

  return (
    <header className="bg-white text-gray-900 w-full shadow-md">
      {/* === Top Bar === */}
      <div className="border-b border-gray-200 text-sm flex flex-col md:flex-row justify-between items-center px-6 md:px-14 py-2 bg-white">
        <div className="flex items-center gap-3 text-gray-600">
          <span>Follow us</span>
          <div className="flex gap-3 text-gray-800">
            <FaFacebookF className="hover:text-[#185CFF] cursor-pointer transition-colors duration-200" />
            <FaTwitter className="hover:text-[#185CFF] cursor-pointer transition-colors duration-200" />
            <FaYoutube className="hover:text-[#185CFF] cursor-pointer transition-colors duration-200" />
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-600 mt-2 md:mt-0">
          <div className="flex items-center gap-1">
            <FiPhone className="text-[#185CFF]" />
            <span>+123 456 789</span>
          </div>
          <div className="flex items-center gap-1">
            <FiMapPin className="text-[#185CFF]" />
            <span>Prds RD 99 London, UK</span>
          </div>
        </div>
      </div>

      {/* === Main Navbar === */}
      <nav className="flex justify-between items-center px-6 md:px-14 py-5 bg-white relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-[#185CFF] flex items-center justify-center">
            <span className="w-3 h-3 border-2 border-[#185CFF] rounded-full"></span>
          </div>
          <span className="text-2xl font-bold tracking-wide text-[#185CFF]">
            DRIVE
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-10 font-medium text-gray-800">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer group transition-all duration-300"
            >
              <a
                href={item.link}
                className="flex items-center gap-1 group-hover:text-[#185CFF] transition-colors duration-200"
              >
                {item.name}
              </a>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#185CFF] rounded-full group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-gray-900"></span>
          <span className="w-6 h-[2px] bg-gray-900"></span>
          <span className="w-6 h-[2px] bg-gray-900"></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white text-gray-800 flex flex-col items-start p-6 space-y-4 lg:hidden z-50 border-t border-gray-200 shadow-lg">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="relative font-medium group transition-all duration-300"
              >
                <span className="group-hover:text-[#185CFF] transition-colors">
                  {item.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#185CFF] rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
