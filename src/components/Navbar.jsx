import React from "react";
import logo from "../img/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { BsArrowRight } from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex item-center justify-between m-1 ">
        <div className="flex">
          <img src={logo} className="w-20 lg:w-24" alt="LOGO" />
          <h1 className="my-5 font-poppins font-semibold text-[25px] lg:text-[30px] md:text-3xl lg:mt-7">
            NKtechsolutions
          </h1>
        </div>
        <div className="hidden lg:flex items-center gap-16 mx-[19%] text-xl ">
          <a
            href="#service"
            className="hover:text-[#D4A017] transition-all duration-300"
          >
            Service
          </a>
          <a
            href="#projects"
            className="hover:text-[#D4A017] transition-all duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hover:text-[#D4A017] transition-all duration-300"
          >
            Contact
          </a>
        </div>
        <a href="#contact">
          <button
          className="
  hidden lg:flex
  items-center
  justify-center
  gap-2
  w-[160px]
  h-[52px]
  mt-5
  ml-10
  mr-5
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
  lg:text-lg
  font-medium
  "
        >
          Let's Talk
          <BsArrowRight className="text-base" />
        </button>

        </a>
        <RxHamburgerMenu
          size={36}
          color="#D4A017"
          className="my-5 mx-3  lg:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default Navbar;
