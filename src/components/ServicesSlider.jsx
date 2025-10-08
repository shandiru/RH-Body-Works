'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaSprayCan,
  FaTools,
  FaCog,
  FaWrench,
  FaCarSide,
  FaPrint,
  FaFireExtinguisher,
  FaTruckPickup,
  FaHammer,
  FaCogs,
} from "react-icons/fa";

const services = [
  {
    title: "Full Body Resprays",
    desc: "Transform your vehicle’s appearance with high-quality paint finishes. Our expert technicians ensure a flawless, showroom-quality respray that restores brilliance and protection.",
    icon: FaSprayCan,
  },
  {
    title: "Accident Repair",
    desc: "From minor dents to major collision damage, we provide complete accident repair solutions using modern techniques to bring your vehicle back to life safely and beautifully.",
    icon: FaTools,
  },
  {
    title: "Alloy Wheel Repairs",
    desc: "Restore scratched, cracked, or corroded alloy wheels with precision. We deliver factory-finish results and ensure your wheels look and perform like new.",
    icon: FaCog,
  },
  {
    title: "3D Printing Service",
    desc: "Our advanced 3D printing allows fast, accurate fabrication of rare or custom car parts — ensuring perfect fits and cost-efficient solutions for restorations and modifications.",
    icon: FaPrint,
  },
  {
    title: "Classic Restoration",
    desc: "Preserve the heritage and beauty of your vintage vehicle. We specialize in meticulous restorations, combining craftsmanship with modern technology for lasting quality.",
    icon: FaCarSide,
  },
  {
    title: "Welding Repairs",
    desc: "Structural integrity restored. Our certified welders perform body and frame repairs with precision and durability to keep your car strong and road-ready.",
    icon: FaHammer,
  },
  {
    title: "Camper Van Repairs",
    desc: "From mechanical fixes to interior refurbishments, our camper van repair experts keep your adventures rolling with dependable, high-quality service.",
    icon: FaTruckPickup,
  },
  {
    title: "Motorhome Repairs",
    desc: "Specialized care for motorhomes of all sizes — covering exterior panels, plumbing, electrical, and mechanical systems for long-lasting travel comfort.",
    icon: FaCogs,
  },
  {
    title: "MOT Repairs",
    desc: "Quick, compliant MOT repairs that get your vehicle back on the road fast. We handle diagnostics, emissions, and safety checks with precision and transparency.",
    icon: FaWrench,
  },
  {
    title: "Shot Blasting",
    desc: "Prepare metal surfaces for painting or restoration with professional shot blasting. Remove rust, paint, and grime for a clean, even foundation.",
    icon: FaFireExtinguisher,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      className="bg-white dark:bg-[#0d1117] py-20 px-6"
      id="services"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Label */}
        <div
          className="flex items-center justify-center gap-3"
          data-aos="fade-down"
        >
          <span className="h-[2px] w-16 bg-[#185CFF]/40 dark:bg-[#185CFF]/60" />
          <span className="text-xs font-extrabold tracking-[0.2em] text-[#185CFF] dark:text-[#185CFF] uppercase">
            Our Services
          </span>
          <span className="h-[2px] w-16 bg-[#185CFF]/40 dark:bg-[#185CFF]/60" />
        </div>

        {/* Heading */}
        <h2
          className="mt-3 text-center text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Explore Our Services
        </h2>
        <p
          className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We provide a full range of automotive repair and restoration services —
          blending craftsmanship, technology, and care to keep your vehicle in
          its best condition.
        </p>

        {/* Service Cards */}
        <div
          className="mt-16 grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="relative max-w-[350px] mx-auto bg-white dark:bg-[#181818] rounded-2xl shadow-md ring-1 ring-gray-200 dark:ring-gray-700
                  transition-all duration-500 ease-out 
                  hover:shadow-[0_10px_30px_rgba(24,92,255,0.25)] hover:-translate-y-2
                  active:scale-[0.98] active:shadow-[0_6px_20px_rgba(24,92,255,0.35)]"
                data-aos="zoom-in-up"
                data-aos-delay={i * 100}
              >
                {/* Main Icon */}
                <div className="absolute left-6 -top-10">
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-[#185CFF] text-white shadow-lg ring-4 ring-white dark:ring-[#185CFF] transition-all duration-500 ease-out group-hover:shadow-[0_0_25px_rgba(24,92,255,0.5)]">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>

                {/* Watermark Icon */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute right-6 top-10 text-[#185CFF]/10 dark:text-[#185CFF]/20">
                    <Icon className="h-36 w-36" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-7 pt-20 pb-10 text-left">
                  <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3 transition-colors duration-300 ease-out hover:text-[#185CFF]">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {s.desc}
                  </p>
                </div>

                {/* Divider */}
                <div className="relative z-10 mx-7 h-px bg-gray-200 dark:bg-gray-700" />

                {/* Read More */}
                <div className="relative z-10 px-7 py-5">
                  <a
                    href="#"
                    className="font-semibold uppercase text-sm tracking-wide text-gray-900 dark:text-white underline underline-offset-[6px] decoration-gray-300 dark:decoration-gray-500 
                      hover:text-[#185CFF] hover:decoration-[#185CFF] transition-colors duration-300 ease-out"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
