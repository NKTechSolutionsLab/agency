import React from "react";
import hero from "../img/hero_img.webp";
import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div className="m-5 lg:flex justify-between items-center gap-4 lg:mt-6">
      <div className="lg:w-[85%] lg:mx-10">
        <h1 className="text-[#D4A017] tracking-wide my-5 md:my-8 lg:text-2xl">
          YOUR INNOVATION PARTNER
        </h1>
        <h2 className="text-2xl text-[#D4A017] font-bold lg:font-semibold md:text-4xl  lg:text-6xl lg:tracking-normal">
          We Turn Your Brand Into a Website People Remember
        </h2>
        <p className="text-lg font-extralight my-5 md:my-8 text-gray-300 lg:text-xl md:text-xl">
          Strategic web design and development built to represent who you are
          and grow what you do
        </p>
        <a href="#contact">
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
            text-sm
            lg:text-xl
            font-medium
            lg:my-8
        "
          >
            Let's Talk
            <BsArrowRight className="text-base " />
          </button>
        </a>
      </div>
      <div>
        <img
          src={hero}
          alt=""
          className="lg:w-[95%] md:w-[70%] md:mx-36 lg:ml-10"
        />
      </div>
    </div>
  );
}

export default Hero;
