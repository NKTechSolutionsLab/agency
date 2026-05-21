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
    <div className="mx-14">
      <h2 className="uppercase lg:text-3xl text-2xl text-[#D4A017] mb-12 ml-1 font-thin">
        process
      </h2>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 ml-[6.5%]">
        {data.map((el, i) => (
          <div
            key={i}
            className="flex items-center justify-around border lg:justify-normal gap-[10%] border-[#D4A017] bg-[#ffffff05] rounded-3xl transition-all duration-300 hover:-translate-y-1 p-2 lg:p-4 w-[92%] lg:w-[45%] lg:mb-5 lg:ml-4"
          >
            <img
              src={el.src}
              alt={el.title}
              className="w-[30%] lg:w-[40%] lg:ml-5"
            />

            <div>
              <h3 className="text-2xl md:text-3xl text-[#D4A017] ml-3 mb-2">
                {el.title}
              </h3>

              <p className="text-sm md:text-xl ml-3 w-52 opacity-90 text-gray-400">
                {el.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
