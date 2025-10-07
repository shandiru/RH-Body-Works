import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaChevronDown } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0c0c0c] text-white w-full">
      {/* Top Bar */}
      <div className="border-b border-gray-700 text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-2 bg-[#0c0c0c]">
        <div className="flex items-center gap-3 text-gray-300">
          <span>Follow our socials</span>
          <div className="flex gap-3 text-white">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-5 text-gray-300 mt-2 md:mt-0">
          <div className="flex items-center gap-1">
            <FiPhone className="text-yellow-500" /> <span>+123 456 789</span>
          </div>
          <div className="flex items-center gap-1">
            <FiMapPin className="text-yellow-500" /> <span>Prds RD 99 London UK</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-5 bg-[#0c0c0c]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-3 h-3 border-2 border-white rounded-full"></span>
          </div>
          <span className="text-xl font-bold tracking-wide">DRIVE</span>
        </div>

        {/* Menu Items */}
        <ul className="hidden lg:flex items-center space-x-10 text-gray-200 font-medium">
          <li className="text-yellow-500">Home</li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-yellow-500">
            Pages <FaChevronDown size={12} />
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">Services</li>
          <li className="hover:text-yellow-500 cursor-pointer">Repair</li>
          <li className="hover:text-yellow-500 cursor-pointer">Performance</li>
          <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#111] text-gray-200 flex flex-col items-start p-5 space-y-4 lg:hidden z-50 border-t border-gray-700">
            <a href="#" className="text-yellow-500">Home</a>
            <a href="#" className="hover:text-yellow-500">Pages</a>
            <a href="#" className="hover:text-yellow-500">Services</a>
            <a href="#" className="hover:text-yellow-500">Repair</a>
            <a href="#" className="hover:text-yellow-500">Performance</a>
            <a href="#" className="hover:text-yellow-500">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
