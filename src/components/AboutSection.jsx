'use client';
import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-white " id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT: single image + blue award badge */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-slate-100">
            <img
              src="hero.jpg"   /* <- replace with your image */
              alt="Our showroom"
              className="h-80 w-full object-cover sm:h-96"
              loading="lazy"
            />
          </div>

          {/* Blue award badge */}
          <div className="absolute -right-6 top-6 grid h-28 w-28 place-items-center rounded-full bg-white shadow-xl">
            <div className="grid h-24 w-24 place-items-center rounded-full border-[6px] border-blue-500">
              <div className="px-2 text-center leading-tight">
                <div className="text-2xl font-extrabold text-blue-600">1k+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700">
                  Best Car
                  <br />
                  Dealer Award
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              About Our Company
            </span>
            <span className="h-[2px] w-10 bg-blue-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Welcome to Our Company
          </h2>

          {/* Subcopy */}
          <p className="mt-4 max-w-xl text-slate-600">
            We deliver transparent service, consistent quality, and a smooth
            customer experience from enquiry to handover. Our team focuses on
            reliability, safety, and long-term value.
          </p>

          {/* Feature list (2 cols) */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'We’re Here When You Need Us',
              'Best Collection',
              'Service & Maintenance',
              'Famous Brands',
              'In-House Financing',
              'Trusted Dealer',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-blue-50 ring-1 ring-blue-200">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-6 h-px w-full bg-slate-200" />

          {/* CTA row (icons fixed to blue + match screenshot) */}
          <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
            >
              Learn More
            </a>

            <div className="flex items-center gap-3 text-sm">
              {/* Blue circular chat icon with three dots */}
              <span className="inline-grid h-10 w-10 place-items-center rounded-full bg-white ring-2 ring-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  {/* chat bubble */}
                  <path
                    d="M21 12a7 7 0 0 1-7 7H9l-4 3v-3H7a7 7 0 0 1-7-7V9a7 7 0 0 1 7-7h7a7 7 0 0 1 7 7v3Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* three dots */}
                  <circle cx="10" cy="12" r="1.2" className="fill-blue-600 stroke-none" />
                  <circle cx="14" cy="12" r="1.2" className="fill-blue-600 stroke-none" />
                  <circle cx="18" cy="12" r="1.2" className="fill-blue-600 stroke-none" />
                </svg>
              </span>

              <div>
                <div className="text-slate-700">Have queries? Click below link</div>
                <a
                  href="/faqs"
                  className="group inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-800"
                >
                  {/* Left pointing indicator (arrow), blue */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-blue-600 transition-transform group-hover:-translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M14 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  FAQ’s
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
