import React from "react";
import {
  FaPlane,
  FaShip,
  FaTruck,
  FaWarehouse,
  FaTrain,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Air Transportation",
    desc: "Transport reconceptualize ubiquitous solution wherea market-driven expertise. Synergistically empower parallel processes with highly efficient infomediaries.",
    icon: FaPlane,
    href: "#",
  },
  {
    title: "Road Transportation",
    desc: "Reconceptualize energistically ubiquitous solution wherea market-driven expertise. Synergistically empower parallel processes with highly efficient infomediaries.",
    icon: FaTruck,
    href: "#",
  },
  {
    title: "Sea Transportation",
    desc: "Energistically reconceptualize ubiquitous solution wherea market-driven expertise. Synergistically empower parallel processes with highly efficient infomediaries.",
    icon: FaShip,
    href: "#",
  },
  {
    title: "Warehousing",
    desc: "Modern warehousing services with real-time inventory visibility, secure storage, and value-added distribution support.",
    icon: FaWarehouse,
    href: "#",
  },
  {
    title: "Rail Freight",
    desc: "Sustainable and efficient railway cargo services for bulk and long-haul goods transportation.",
    icon: FaTrain,
    href: "#",
  },
  {
    title: "Space Logistics",
    desc: "Cutting-edge logistics for satellite and space cargo missions—future-ready and reliable.",
    icon: FaRocket,
    href: "#",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-4" id="services">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-[2px] w-16 bg-blue-600/40" />
          <span className="text-xs font-extrabold tracking-[0.2em] text-blue-700">
            OUR SERVICES
          </span>
          <span className="h-[2px] w-16 bg-blue-600/40" />
        </div>

        {/* Heading */}
        <h2 className="mt-3 text-center text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Explore Our Services
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={i} className="h-full">
                <div className="relative min-h-[420px] max-w-[320px] mx-auto rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition hover:shadow-lg">
                  {/* Circle Icon */}
                  <div className="absolute left-6 -top-10 z-20">
                    <div className="grid h-28 w-28 place-items-center rounded-full bg-blue-600 text-white shadow-lg ring-4 ring-white">
                      <Icon className="h-12 w-12" />
                    </div>
                  </div>

                  {/* Watermark */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute right-6 top-10 text-blue-700/10">
                      <Icon className="h-40 w-40" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 px-7 pt-20 text-left">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-7">
                      {s.desc}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="relative z-10 mx-7 my-7 h-px bg-slate-200" />

                  {/* Read More */}
                  <div className="relative z-10 px-7 pb-7">
                    <a
                      href={s.href}
                      className="font-semibold uppercase tracking-wide text-slate-900 underline underline-offset-[6px] decoration-slate-400 hover:decoration-blue-600"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
