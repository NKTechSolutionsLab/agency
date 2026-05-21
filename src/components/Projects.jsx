import React from "react";
import brewty from "../img/brewtiful2.png";
import fashion from "../img/fashion2.png";
import shopex from "../img/shopping2.png";
import coach from "../img/coach.png";
import { BsArrowRight } from "react-icons/bs";
function Projects() {
  const details = [
    {
      title: "Anand Fashion",
      src: fashion,
      desc: "A modern fashion store website designed to showcase collections through elegant visuals, clean layouts, and a seamless shopping experience.",
      link: "https://anandfashions.netlify.app/",
    },
    {
      title: "Brewtiful cafe",
      src: brewty,
      desc: "A premium café Landing page crafted to create a warm brand experience with modern visuals and elegant storytelling.",
      link: "https://brewtifulcoffee.netlify.app/",
    },

    {
      title: "Shopping Ex",
      src: shopex,
      desc: "An interactive web experience designed to provide fast, seamless, and responsive user interactions with dynamic API-powered content.",
      link: "https://shoppingex.netlify.app/",
    },
    {
      title: "Coach Branding Platform",
      src: coach,
      desc: "A coaching website focused on seamless interactions, clean design, and building stronger audience connection.",
    },
  ];
  return (
    <div>
      <h2 className="lg:text-3xl text-2xl text-[#D4A017]  ml-16 mt-20 mb-10 font-thin">
        PROJECTS
      </h2>
      <div>
        <div className=" p-3 mt-3">
          {details.map((d, i) => (
            <>
              <div
                className="border border-[#ffffff0f] bg-[#ffffff05] rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A017]/30 mb-20 p-2  md:flex items-center"
              >
                <div className="md:w-[60%] hidden md:block">
                  <img
                    src={d.src}
                    alt="brewtiful cafe"
                    className="w-[90%] rounded-xl lg:rounded-2xl lg:my-8 my-5 p-3 "
                  />
                </div>

                <div className="md:w-[40%]">
                  <h3 className="text-2xl lg:text-3xl text-[#D4A017] ml-3 my-5">
                    {d.title}
                  </h3>
                  <img
                    src={d.src}
                    alt="brewtiful cafe"
                    className="w-96 rounded-xl  my-5 p-3 md:hidden"
                  />
                  <p className="text-xl lg:text-2xl font-light m-2 mt-4 opacity-90 text-gray-400 ml-3 my-5">
                    {d.desc}
                  </p>
                  <a href={d.link} target="_blank" rel="noopener noreferrer">
                    <button
                      className="
                     flex
                     items-center
                     justify-center
                     gap-2
                     w-[160px]
                     h-[52px]
                     mt-5
                     border border-[#D4A017]
                     bg-[#0A0A0A]
                     text-[#D4A017]
                     hover:bg-[#D4A017]
                     hover:text-black
                     hover:-translate-y-[2px]
                     transition-all
                     duration-300
                     rounded-lg
                     text-md
                     lg:text-xl
                     font-medium
                     mx-3
                     my-2
                     lg:my-8"
                    >
                      {d.title == "Coach Branding Platform"
                        ? "In Process..."
                        : "Have a look"}
                      {d.title == "Coach Branding Platform" ? (
                        ""
                      ) : (
                        <BsArrowRight className="text-base " />
                      )}
                    </button>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
