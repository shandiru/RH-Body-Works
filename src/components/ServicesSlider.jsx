import React from "react";
import { FaPlane, FaShip, FaTruck, FaWarehouse, FaTrain, FaRocket } from "react-icons/fa";

const services = [
  {
    title: "Air Transportation",
    desc: "Efficient air freight services to move your goods across the globe with speed and security.",
    icon: FaPlane,
    href: "#",
  },
  {
    title: "Sea Transportation",
    desc: "Reliable ocean freight solutions ensuring cost-effective and secure international shipping.",
    icon: FaShip,
    href: "#",
  },
  {
    title: "Land Transportation",
    desc: "Trusted trucking and land transport for local and regional deliveries with full flexibility.",
    icon: FaTruck,
    href: "#",
  },
  {
    title: "Warehousing",
    desc: "Modern warehousing services with real-time inventory management and distribution support.",
    icon: FaWarehouse,
    href: "#",
  },
  {
    title: "Rail Freight",
    desc: "Sustainable and efficient railway cargo services for bulk goods transportation.",
    icon: FaTrain,
    href: "#",
  },
  {
    title: "Space Logistics",
    desc: "Cutting-edge rocket logistics for satellite and space cargo missions of the future.",
    icon: FaRocket,
    href: "#",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-y-10">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={i}
                className="w-full sm:w-1/2 lg:w-1/3 px-3"
              >
                <div className="relative h-full rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition hover:shadow-xl">

                  {/* Watermark Icon */}
                  <div className="absolute right-4 top-10 opacity-5 text-blue-600">
                    <Icon className="h-24 w-24" />
                  </div>

                  {/* Main Icon */}
                  <div className="flex justify-center px-6 pt-6 relative z-10">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-blue-600 text-white shadow">
                      <Icon className="h-9 w-9" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="px-6 pt-4 relative z-10 text-center">
                    <h3 className="text-xl font-extrabold text-slate-900">{s.title}</h3>
                    <p className="mt-3 text-slate-600">{s.desc}</p>
                  </div>

                  <div className="mx-6 my-6 h-px bg-slate-200 relative z-10" />

                  {/* Link */}
                  <div className="px-6 pb-6 relative z-10 text-center">
                    <a
                      href={s.href}
                      className="text-sm font-semibold text-slate-900 underline decoration-2 underline-offset-4 hover:text-blue-700"
                    >
                      READ MORE
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
