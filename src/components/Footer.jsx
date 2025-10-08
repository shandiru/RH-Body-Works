'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer
      className="bg-white text-gray-900 pt-16 pb-8 border-t border-gray-200"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid gap-12 md:grid-cols-4">

        {/* --- Column 1: Logo & About --- */}
        <div>
          <div className="flex items-center space-x-2 mb-5">
            <div className="w-8 h-8 rounded-full border-2 border-[#185CFF] flex items-center justify-center">
              <span className="w-3 h-3 border-2 border-[#185CFF] rounded-full"></span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#185CFF]">DRIVE</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            We deliver transparent service, consistent quality, and a smooth
            customer experience from enquiry to handover. Focused on reliability,
            safety, and long-term value.
          </p>

          <div className="flex gap-3 mt-5">
            <a href="#" className="p-2 bg-gray-100 hover:bg-[#185CFF] hover:text-white rounded-full transition">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="p-2 bg-gray-100 hover:bg-[#185CFF] hover:text-white rounded-full transition">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="p-2 bg-gray-100 hover:bg-[#185CFF] hover:text-white rounded-full transition">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="p-2 bg-gray-100 hover:bg-[#185CFF] hover:text-white rounded-full transition">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#185CFF] uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#185CFF] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#185CFF] transition">About Us</a></li>
            <li><a href="#" className="hover:text-[#185CFF] transition">Our Services</a></li>
            <li><a href="#" className="hover:text-[#185CFF] transition">Why Choose Us</a></li>
            <li><a href="#" className="hover:text-[#185CFF] transition">Contact</a></li>
          </ul>
        </div>

        {/* --- Column 3: Our Services --- */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#185CFF] uppercase">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#185CFF] transition">Full Body Resprays</a></li>
            <li><a href="#" className="hover:text-[#185CFF] transition">Accident Repair</a></li>
            <li><a href="#" className="hover:text-[#185CFF] transition">Alloy Wheel Repairs</a></li>
            <li><a href="#" className="hover:text-[#185CFF] transition">Classic Restoration</a></li>
            <li><a href="#" className="hover:text-[#185CFF] transition">MOT Repairs</a></li>
          </ul>
        </div>

        {/* --- Column 4: Contact Info --- */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-[#185CFF] uppercase">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-gray-700">
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
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} <span className="font-semibold text-[#185CFF]">DRIVE</span>. All Rights Reserved.
        <br />
        <span className="text-gray-500">
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
