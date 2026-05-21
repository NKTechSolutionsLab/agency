import React from "react";

function Pricing() {
  const data = [
    {
      title: "Starter",
      price: "$299",
      desc: "Perfect for small businesses and personal brands.",
      points: [
        "1-3 Pages",
        "Responsive Design",
        "Modern UI",
        "Basic SEO",
      ],
    },

    {
      title: "Growth",
      price: "$499",
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
    <section className="w-full py-20">
      <div className="w-[90%] mx-auto">

        {/* Heading */}
        <h2 className="uppercase text-2xl lg:text-4xl text-[#D4A017] mb-12 font-light tracking-wide">
          Pricing
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {data.map((el, i) => (
            <div
              key={i}
              className="
                border border-[#d4a01740]
                bg-[#ffffff05]
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#D4A017]
              "
            >

              <h3 className="text-3xl text-[#D4A017] mb-4">
                {el.title}
              </h3>

              <h2 className="text-5xl mb-6">
                {el.price}
              </h2>

              <p className="text-gray-400 mb-8 leading-relaxed">
                {el.desc}
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {el.points.map((point, idx) => (
                  <span
                    key={idx}
                    className="text-gray-300"
                  >
                    • {point}
                  </span>
                ))}
              </div>

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

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Pricing;