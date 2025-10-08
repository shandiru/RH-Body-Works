'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsPlayFill } from 'react-icons/bs';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true, // Re-animate when scrolling up
    });
  }, []);

  return (
    <section
      className="relative bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-20 sm:py-28 md:py-36"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-90 opacity-30"
        style={{
          backgroundImage: "url('/bg-image.png')",
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-white dark:from-[#161b22] via-white/95 dark:via-[#161b22]/95 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* LEFT: Text */}
        <div
          className="max-w-2xl space-y-6 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white tracking-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            BOOST YOUR CAR’S <br />
            <span className="text-[#185CFF] dark:text-[#185CFF]">PERFORMANCE</span>
          </h1>

          <p
            className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg max-w-[600px] mx-auto md:mx-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Experience the difference of professional detailing and maintenance.
            Our expert team enhances every aspect of your vehicle’s appearance
            and performance — bringing out its true potential.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-5 pt-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button className="bg-[#185CFF] hover:bg-[#0f4be6] text-white font-semibold uppercase px-8 sm:px-10 py-3 sm:py-4 rounded-md tracking-wide shadow-[0_8px_25px_rgba(24,92,255,0.35)] transition-all duration-300 ease-out">
              Our Services
            </button>

            <div className="flex items-center gap-2 cursor-pointer hover:text-[#185CFF] dark:hover:text-[#4ab8e9] transition duration-300 ease-out">
              <FaRegCommentDots size={22} />
              <span className="font-medium text-base">Send Message</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Play Button */}
        <div
          className="relative flex justify-center md:justify-end w-full md:w-auto"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#185CFF] dark:bg-[#4ab8e9] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(24,92,255,0.5)] cursor-pointer hover:scale-110 transition-transform duration-300 ease-out">
            <BsPlayFill className="text-white text-3xl sm:text-4xl ml-1" />
          </div>
          <div className="absolute inset-0 rounded-full border border-[#185CFF]/40 dark:border-[#4ab8e9]/40 blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
