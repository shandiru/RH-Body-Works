'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: '01',
      title: 'Professional Expertise',
      text: 'Our skilled detailers use top-quality products and techniques to ensure the best results for your vehicle.',
    },
    {
      id: '02',
      title: 'Premium Quality Products',
      text: 'We only use high-grade, eco-friendly detailing products that are safe for your car and the environment.',
    },
    {
      id: '03',
      title: 'Attention To Detail',
      text: 'We focus on every inch of your vehicle, delivering a flawless finish that exceeds expectations.',
    },
    {
      id: '04',
      title: 'Customer Satisfaction Guaranteed',
      text: 'We prioritize your satisfaction, offering personalized service and outstanding results every time.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true, // ✅ replays on scroll up
    });
  }, []);

  return (
    <section
      className="bg-white text-gray-900 py-28 px-6 md:px-16 lg:px-28 relative overflow-hidden"
      id="why-choose-us"
      style={{ fontFamily: '"Manrope", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_2fr] gap-20 items-center">
        {/* LEFT SIDE */}
        <div
          className="relative flex flex-col items-center md:items-start text-center md:text-left"
          data-aos="fade-right"
        >
          {/* Glow Background */}
          <div className="absolute -z-0 w-72 h-72 bg-[#185CFF]/10 rounded-full blur-3xl top-0 left-1/2 -translate-x-1/2 md:left-16 md:-translate-x-0"></div>

          <div className="relative z-10 space-y-8">
            {/* Heading */}
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-gray-500 uppercase text-sm tracking-wide mb-2">
                Why Choose Us?
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4">
                Unmatched Quality, Precision, And{' '}
                <span className="text-[#185CFF]">Care for Your Car</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-[360px] mx-auto md:mx-0">
                We deliver unmatched quality, precision, and care in every car
                detailing service we provide. From meticulous cleaning to expert
                polishing, every detail is handled with professionalism to ensure
                your vehicle looks its absolute best.
              </p>
            </div>

            {/* 90% Visual */}
            <div
              className="mt-8 relative flex flex-col items-center md:items-start"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <div className="relative">
                <h3 className="text-[#185CFF] text-[140px] md:text-[160px] font-extrabold leading-none animate-pulse drop-shadow-[0_0_30px_rgba(24,92,255,0.5)]">
                  90%
                </h3>
                <div className="absolute -inset-6 rounded-full border border-[#185CFF]/30 blur-sm"></div>
              </div>

              <p
                className="text-gray-700 text-lg leading-relaxed max-w-[330px] mt-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="font-semibold text-gray-900">
                  Many have felt the pleasure
                </span>{' '}
                of our service and many have entrusted their vehicles to us.
              </p>

              <div className="mt-6 w-28 h-[3px] bg-gradient-to-r from-[#185CFF] to-transparent md:ml-0 mx-auto"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Feature Cards */}
        <div
          className="grid sm:grid-cols-2 gap-8 relative z-10"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-gray-50 border border-gray-200 rounded-xl p-8 transition-all duration-500 ease-out
                hover:-translate-y-2 hover:border-[#185CFF] hover:shadow-[0_0_30px_rgba(24,92,255,0.25)]
                active:scale-[0.98] active:shadow-[0_0_20px_rgba(24,92,255,0.35)]"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 150}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#185CFF] font-bold text-lg">
                  {feature.id}
                </span>
                <span className="w-10 h-[2px] bg-gray-300 group-hover:bg-[#185CFF] transition-all duration-500 ease-out"></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#185CFF] transition-colors duration-300 ease-out">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
