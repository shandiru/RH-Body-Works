import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: "01",
      title: "Professional Expertise",
      text: "Our skilled detailers use top-quality products and techniques to ensure the best results for your vehicle.",
    },
    {
      id: "02",
      title: "Premium Quality Products",
      text: "We only use high-grade, eco-friendly detailing products that are safe for your car and the environment.",
    },
    {
      id: "03",
      title: "Attention To Detail",
      text: "We focus on every inch of your vehicle, delivering a flawless finish that exceeds expectations.",
    },
    {
      id: "04",
      title: "Customer Satisfaction Guaranteed",
      text: "We prioritize your satisfaction, offering personalized service and outstanding results every time.",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-28 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-center">
        {/* LEFT SIDE - 90% Centered */}
        <div className="flex flex-col items-center justify-center h-full text-center md:text-left">
          <div>
            <h3 className="text-yellow-400 text-7xl font-extrabold mb-3">90%</h3>
            <p className="text-gray-300 text-base leading-relaxed max-w-[250px]">
              <span className="font-semibold text-white">
                Many have felt the pleasure
              </span>{" "}
              of our service and many have entrusted their vehicles to us.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="md:col-span-2">
          {/* Section Heading */}
          <div className="mb-10">
            <p className="text-gray-400 uppercase text-sm tracking-wide mb-2">
              Why Choose Us?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6">
              Unmatched Quality, Precision, And{" "}
              <span className="text-yellow-400">Care for Your Car</span>
            </h2>
            <h3 className="text-lg font-semibold mb-3">
              Excellence in Every Detail
            </h3>
            <p className="text-gray-300 leading-relaxed text-base">
              We deliver unmatched quality, precision, and care in every car
              detailing service we provide. From meticulous cleaning to expert
              polishing, every detail is handled with professionalism to ensure
              your vehicle looks its absolute best.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-400 font-bold text-lg">
                    {feature.id}
                  </span>
                  <span className="w-10 h-[2px] bg-gray-700 group-hover:bg-yellow-400 transition"></span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
