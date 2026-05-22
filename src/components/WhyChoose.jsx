import React from "react";
import {
  FiSmartphone,
  FiZap,
  FiSearch,
  FiLayout,
  FiCode,
  FiTool,
} from "react-icons/fi";

function WhyChoose() {
  const data = [
    {
      icon: <FiSmartphone />,
      title: "Mobile-First Design",
    },

    {
      icon: <FiZap />,
      title: "Fast Performance",
    },

    {
      icon: <FiSearch />,
      title: "SEO-Friendly Structure",
    },

    {
      icon: <FiLayout />,
      title: "Clean UI Systems",
    },

    {
      icon: <FiCode />,
      title: "Modern Development",
    },

    {
      icon: <FiTool />,
      title: "Ongoing Support",
    },
  ];

  return (
    <section className="w-full py-20" id="whyme">
      <div className="w-[90%] mx-auto">

        {/* Heading */}
        <h2 className="uppercase text-2xl lg:text-4xl text-[#D4A017] mb-12 font-light tracking-wide">
          Why Work With Me
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((el, i) => (
            <div
              key={i}
              className="
                border border-[#d4a01740]
                bg-[#ffffff05]
                rounded-3xl
                px-6
                py-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D4A017]
              "
            >

              <div className="text-[#D4A017] text-4xl mb-6">
                {el.icon}
              </div>

              <h3 className="text-xl lg:text-2xl">
                {el.title}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;