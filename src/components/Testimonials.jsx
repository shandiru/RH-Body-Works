'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TESTIMONIALS = [
  {
    quote:
      "I can't say enough good things. The selection is impressive, the staff is friendly, and the whole experience is hassle-free. I felt like a VIP. This is my go-to choice!",
    name: 'DAVID MARK',
    role: 'CEO Mark Ltd.',
    avatar: '/images/avatars/david.jpg',
    stars: 5,
  },
  {
    quote:
      'Professional, punctual, and transparent pricing. The delivery and handover were smooth. Highly recommended for anyone who values quality and service.',
    name: 'SARAH K.',
    role: 'Project Director',
    avatar: '/images/avatars/sarah.jpg',
    stars: 5,
  },
  {
    quote:
      'From enquiry to completion, everything was clear and well-managed. Communication was excellent and the team went the extra mile.',
    name: 'IMRAN F.',
    role: 'Operations Manager',
    avatar: '/images/avatars/imran.jpg',
    stars: 5,
  },
];

function Star({ filled = true }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${filled ? 'fill-[#185CFF]' : 'fill-[#D8E3FF]'}`}
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.69a1 1 0 0 0 .95.69h3.879c.967 0 1.371 1.24.588 1.81l-3.138 2.279a1 1 0 0 0-.364 1.118l1.2 3.69c.3.921-.755 1.688-1.54 1.118L10.5 14.347a1 1 0 0 0-1.176 0l-3.246 2.975c-.785.57-1.84-.197-1.54-1.118l1.2-3.69a1 1 0 0 0-.364-1.118L2.236 9.117c-.783-.57-.379-1.81.588-1.81h3.88a1 1 0 0 0 .949-.69l1.396-3.69Z" />
    </svg>
  );
}

export default function Testimonials({ brand = 'Carent', auto = true, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [auto, interval]);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true, // Replays when scrolling up
    });
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-[#0d1117] py-20 sm:py-24"
      style={{ fontFamily: '"Manrope", sans-serif' }}
      id="testimonials"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* Section Label */}
        <div
          className="mb-4 flex items-center justify-center gap-3"
          data-aos="fade-down"
        >
          <span className="h-px flex-1 max-w-[40px] bg-[#185CFF] opacity-50" />
          <h3 className="text-[#185CFF] font-semibold text-xs tracking-widest uppercase">
            Testimonials
          </h3>
          <span className="h-px flex-1 max-w-[40px] bg-[#185CFF] opacity-50" />
        </div>

        {/* Heading */}
        <h2
          className="text-center text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          What Customers Say <br />
          About <span className="text-[#185CFF]">{brand}</span>
        </h2>

        {/* Testimonial Card */}
        <div
          className="relative mx-auto mt-12 w-full max-w-4xl rounded-2xl bg-[#185CFF] dark:bg-[#185CFF] px-6 py-16 md:py-20 text-center text-white shadow-xl sm:px-10 flex items-center"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <p className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed text-white/95 italic">
            “{t.quote}”
          </p>

          {/* Avatar */}
          <div
            className="pointer-events-none absolute left-1/2 top-full -mt-12 md:-mt-14 -translate-x-1/2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-[0_0_25px_rgba(24,92,255,0.4)]"
            />
          </div>
        </div>

        {/* Stars, Name, Role */}
        <div
          className="mt-14 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="mb-3 flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} filled={i < t.stars} />
            ))}
          </div>
          <div className="text-sm font-extrabold tracking-wider text-gray-900 dark:text-gray-100">
            {t.name}
          </div>
          <div className="text-sm text-[#185CFF] font-semibold">{t.role}</div>
        </div>

        {/* Dots */}
        <div
          className="mt-8 flex items-center justify-center gap-2"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'bg-[#185CFF] scale-110 shadow-[0_0_10px_rgba(24,92,255,0.5)]'
                  : 'bg-gray-300 hover:bg-[#185CFF]/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="group absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-[#0d1117]/90 p-3 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg hover:text-[#185CFF] transition-all duration-500 ease-out active:scale-95"
        data-aos="fade-right"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            d="M12.5 4.5 7 10l5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="group absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-[#0d1117]/90 p-3 text-gray-800 dark:text-gray-100 shadow-md hover:shadow-lg hover:text-[#185CFF] transition-all duration-500 ease-out active:scale-95"
        data-aos="fade-left"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5">
          <path
            d="M7.5 4.5 13 10l-5.5 5.5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
