import React from "react";

function Pricing() {
  const data = [
    {
      title: "Starter",
      price: "$549",
      desc: "Perfect for small businesses and personal brands.",

      points: ["1–3 Pages", "Responsive Design", "Modern UI", "Basic SEO"],
    },

    {
      title: "Standard",
      price: "$999",
      desc: "Built for businesses looking to scale online.",

      points: [
        "Multi-Page Website",
        "SEO Optimization",
        "Performance Focused",
        "Custom UI/UX",
      ],
    },

    {
      title: "Custom",
      price: "Custom",
      desc: "Tailored solutions for advanced business needs.",

      points: [
        "Custom Features",
        "API Integrations",
        "Advanced Systems",
        "Ongoing Support",
      ],
    },
  ];

  return (
    <section className="w-full py-20" id="pricing">
      <div className="w-[90%] mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="uppercase text-2xl lg:text-4xl text-[#D4A017] mb-4 font-light tracking-wide">
            Pricing
          </h2>

          <p className="text-gray-500 leading-relaxed max-w-2xl">
            Final pricing depends on project scope and requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((el, i) => (
            <div
              key={i}
              className="
                border border-[#d4a01730]
                bg-[#ffffff05]
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#D4A017]
              "
            >
              {/* Plan */}
              <h3 className="text-3xl text-[#D4A017] mb-5">{el.title}</h3>

              {/* Price */}
              <div className="mb-8">
                <h2 className="text-5xl  font-light tracking-tight">
                  {el.price}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-500 mb-10 leading-relaxed">{el.desc}</p>

              {/* Deliverables */}
              <div className="flex flex-col gap-4 mb-12">
                {el.points.map((point, idx) => (
                  <span key={idx} className="text-gray-300">
                    • {point}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a href="#contact">
                <button
                className="
                  border border-[#D4A017]
                  px-6
                  py-3
                  rounded-full
                  text-[#D4A017]
                  hover:bg-[#D4A017]
                  hover:text-black
                  transition-all
                  duration-300
                "
              >
                Get Started
              </button>


              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
