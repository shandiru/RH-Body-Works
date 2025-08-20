'use client';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white py-20 px-4" id="home">
      <div className="mx-auto max-w-7xl text-center">
        {/* Eyebrow */}
        <div className="mb-4 flex justify-center items-center gap-3">
          <span className="h-[2px] w-12 bg-blue-600/40" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
            Welcome to Carent
          </span>
          <span className="h-[2px] w-12 bg-blue-600/40" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Drive Your Dream <br className="hidden sm:block" />
          With Confidence
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-xl mx-auto text-lg text-slate-600">
          Discover our award-winning selection of premium vehicles, unmatched service, and stress-free ownership experience.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <a
            href="/vehicles"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            Browse Vehicles
          </a>
        </div>
      </div>
    </section>
  );
}
