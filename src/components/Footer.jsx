'use client';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin, FiSun, FiMoon } from 'react-icons/fi';

const Footer = () => {
  const [theme, setTheme] = useState('light');

  // Load and apply theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(currentTheme);
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <footer
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-16 pb-8 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid gap-12 md:grid-cols-4 relative">
        {/* --- Theme Toggle Button --- */}
        <button
          onClick={toggleTheme}
          className="absolute right-0 top-0 mb-4 flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {theme === 'light' ? (
            <>
              <FiMoon /> Dark Mode
            </>
          ) : (
            <>
              <FiSun /> Light Mode
            </>
          )}
        </button>

        {/* --- Column 1: Logo & About --- */}
        <div>
          <div className="flex items-center space-x-2 mb-5">
            <div className="w-8 h-8 rounded-full border-2 border-[#185CFF] flex items-center justify-center">
              <span className="w-3 h-3 border-2 border-[#185CFF] rounded-full"></span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#185CFF]">DRIVE</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-xs">
            We deliver transparent service, consistent quality, and a smooth
            customer experience from enquiry to handover. Focused on reliability,
            safety, and long-term value.
          </p>

          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#185CFF] hover:text-white rounded-full transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#185CFF] uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['Home', 'About Us', 'Our Services', 'Why Choose Us', 'Testimonials'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-[#185CFF] transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Column 3: Our Services --- */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#185CFF] uppercase">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              'Full Body Resprays',
              'Accident Repair',
              'Alloy Wheel Repairs',
              'Classic Restoration',
              'MOT Repairs',
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-[#185CFF] transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Column 4: Contact Info --- */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#185CFF] uppercase">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <FiPhone className="text-[#185CFF]" /> +123 456 789
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-[#185CFF]" /> support@drive.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-[#185CFF]" /> Prds RD 99 London, UK
            </li>
          </ul>

          <a
            href="#"
            className="inline-block mt-5 px-6 py-2 text-sm font-semibold border border-[#185CFF] text-[#185CFF] rounded-md hover:bg-[#185CFF] hover:text-white transition"
          >
            FAQ’s
          </a>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold text-[#185CFF]">DRIVE</span>. All Rights Reserved.
        <br />
        <span>
          Powered by{" "}
          <a
            href="https://ansely.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#185CFF] hover:underline hover:text-[#1040B2] transition"
          >
            Ansely
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
