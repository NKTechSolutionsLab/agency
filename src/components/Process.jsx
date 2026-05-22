import React from "react";
import dis from "../img/discover.png";
import plan from "../img/plan_design.png";
import dev from "../img/develop.png";
import deliver from "../img/deliver.png";

function Process() {
  const data = [
    {
      src: dis,
      title: "Discover",
      des: "Researching your goals, audience, and brand direction.",
    },

    {
      src: plan,
      title: "Plan & Design",
      des: "Designing clean layouts and smooth user experiences.",
    },

    {
      src: dev,
      title: "Develop",
      des: "Building fast, scalable, and responsive websites.",
    },

    {
      src: deliver,
      title: "Deliver & Support",
      des: "Launching and maintaining high-performing websites.",
    },
  ];

  return (
    <section className="w-full py-20" id="process">

      <div className="w-[90%] mx-auto">

        {/* Heading */}
        <h2 className="uppercase lg:text-3xl text-2xl text-[#D4A017] mb-12 ml-10 font-thin">
          Process
        </h2>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6">

          {data.map((el, i) => (
            <div
              key={i}
              className="
                w-full
                lg:w-[48%]
                border
                border-[#d4a01730]
                bg-[#ffffff05]
                rounded-3xl
                p-6
                flex
                items-center
                gap-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#D4A017]
              "
            >

              {/* Image */}
              <img
                src={el.src}
                alt={el.title}
                className="
                  w-[90px]
                  md:w-[120px]
                  lg:w-[140px]
                  object-contain
                  flex-shrink-0
                "
              />

              {/* Content */}
              <div>

                <h3 className="text-2xl lg:text-3xl text-white font-semibold mb-3">
                  {el.title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {el.des}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;