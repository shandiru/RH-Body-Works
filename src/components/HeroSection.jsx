import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="relative bg-white text-gray-900 overflow-hidden px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-24 md:py-36">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618661641663-3b62a76f4b4d?q=80&w=1920&auto=format&fit=crop')",
        }}
      ></div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* LEFT SIDE - TEXT */}
        <div className="max-w-2xl space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            BOOST YOUR CAR'S <br /> PERFORMANCE
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg max-w-[600px] mx-auto md:mx-0">
            Experience the difference of professional detailing and maintenance.
            Our expert team enhances every aspect of your vehicle’s appearance
            and performance — bringing out its true potential.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
            <button className="bg-[#185CFF] hover:bg-[#0f4be6] text-white font-bold uppercase px-10 py-4 rounded-md tracking-wider shadow-[0_8px_20px_rgba(24,92,255,0.3)] transition-all">
              Our Services
            </button>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#185CFF] transition">
              <FaRegCommentDots size={20} />
              <span className="font-medium">Send Message</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - PLAY BUTTON */}
        <div className="relative flex justify-center md:justify-end w-full md:w-auto">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-[#185CFF] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(24,92,255,0.4)] cursor-pointer hover:scale-110 transition-transform duration-300">
            <BsPlayFill className="text-white text-4xl ml-1" />
          </div>
          <div className="absolute inset-0 rounded-full border border-[#185CFF]/30 blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
