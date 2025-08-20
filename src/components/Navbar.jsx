import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close mobile menu on resize to md+
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/earwego-logo.png"
              alt="Ear We Go Logo"
              className="w-16 h-16"
              loading="lazy"
              decoding="async"
            />
            <h1 className="text-2xl font-serif font-bold text-[#2563eb]">
              Ear We Go
            </h1>
          </div>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-[#1e293b] hover:text-[#2563eb] transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-[#1e293b] hover:text-[#2563eb] transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-[#1e293b] hover:text-[#2563eb] transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#reviews"
              className="text-[#1e293b] hover:text-[#2563eb] transition-colors font-medium"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-[#1e293b] hover:text-[#2563eb] transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Right: Call button (desktop) */}
          <a
            href="tel:+447989668752"
            className="hidden md:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium shadow-xs h-9 px-4 py-2
                       bg-[#059669] hover:bg-[#047857] text-white transition-all"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden border-t border-gray-200 py-3">
            <nav className="flex flex-col space-y-1">
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#1e293b] hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#1e293b] hover:bg-gray-50"
              >
                Services
              </a>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#1e293b] hover:bg-gray-50"
              >
                Pricing
              </a>
              <a
                href="#reviews"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#1e293b] hover:bg-gray-50"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#1e293b] hover:bg-gray-50"
              >
                Contact
              </a>
            </nav>
            <a
              href="tel:+447989668752"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md text-sm font-medium h-10 px-4 py-2
                         bg-[#059669] hover:bg-[#047857] text-white transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
