import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="relative bg-[#0c0c0c] text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618661641663-3b62a76f4b4d?q=80&w=1920&auto=format&fit=crop')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 md:py-36">
        {/* Left Side Text */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            BOOST YOUR CAR'S <br /> PERFORMANCE
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            consectetur adipiscing elit.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold uppercase px-8 py-4 rounded-sm tracking-wider">
              Our Services
            </button>
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-500 transition">
              <FaRegCommentDots size={20} />
              <span className="font-medium">Send Message</span>
            </div>
          </div>
        </div>

        {/* Right Side Play Button */}
        <div className="relative mt-12 md:mt-0">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform">
            <BsPlayFill className="text-yellow-500 text-4xl ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
