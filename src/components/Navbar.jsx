'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-blue-700">
          Carent
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#home" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
            About
          </a>
          <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
            Services
          </a>
         
          <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#get-started"
            className="inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden inline-flex items-center justify-center p-2 text-slate-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 px-4 pb-6">
          <div className="flex flex-col gap-4 mt-4">
            <a href="#home" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              About
            </a>
            <a href="#services" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              Services
            </a>
            
            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              Contact
            </a>
            <a
              href="#get-started"
              className="mt-2 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
