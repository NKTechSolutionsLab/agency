import React from "react";
import web from "../img/webdesign_img.webp";
import ui from "../img/UI.webp";
import seo from "../img/seo.webp";
import maintain from "../img/maintain.webp";

function Services() {
  const data = [
    {
      number: "01",
      src: web,
      title: "Web Design & Dev",
      description:
        "High-performance websites that capture attention and covert visitors into customers.",
    },
    {
      number: "02",
      src: ui,
      title: "UI/UX",
      description:
        "Beautiful, intuitive designs that create seamless user experiences.",
    },
    {
      number: "03",
      src: seo,
      title: "SEO & Speed Optimization",
      description:
        "Optiized websites that rank higher and load faster for better results.",
    },
    {
      number: "04",
      src: maintain,
      title: "Maintain",
      description:
        "Reliable website maintenance that keeps your website secure, updated, and running smoothly.",
    },
  ];

  return (
    <>
    <section id="services">

      <h2 className="lg:text-3xl text-2xl text-[#D4A017]  ml-16 mt-28 font-thin">
        OUR SERVICES
      </h2>
      <div className="lg:flex m-2 mt-14 lg:mt-10">
        {data.map((el, i) => (
          <div
            key={i}
            className=" shadow-sm shadow-gray-600 my-10 mx-3 p-5 rounded-xl"
          >
            <div className="flex items-center justify-around">
              <h3 className="text-2xl mb-3">{el.number}</h3>{" "}
              <img
                src={el.src}
                alt="services"
                className="w-[80%] md:w-[60%] lg:w-[80%]"
                />{" "}
            </div>
            <h3 className="text-3xl m-2 text-[#D4A017]">{el.title}</h3>
            <p className="text-xl font-light m-2 mt-4 opacity-90 text-gray-400">
              {el.description}
            </p>
          </div>
        ))}
      </div>
                </section>
    </>
  );
}

export default Services;
