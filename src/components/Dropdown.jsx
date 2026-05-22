import React from "react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import logo from "../img/logo.png";
import { BsArrowRight } from "react-icons/bs";

function Dropdown({ isOpen, setIsOpen }) {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <div className="absolute bg-gray-950 w-full font-light lg:hidden">
      {isOpen ? (
        <>
          <div className="flex item-center justify-between m-1">
            <div className="flex">
              <img src={logo} className="w-20 " alt="LOGO" />
              <h1 className="my-5 font-poppins font-semibold text-[25px] ">
                NKtechsolutions
              </h1>
            </div>
            <RxCross1
              size={30}
              color="gray"
              className="my-5 mx-3 lg:hidden cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <div className="w-full ">
            {navLinks.map((links, id) => (
              <div>
                <div
                  className="navlinks bg-gray-950 w-full pl-20 my-10 text-2xl hover:text-[#D4A017] transition-all duration-300"
                  key={id}
                >
                  <a href={links.href}>{links.name}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="w-80 h-[1.2px] ml-8 bg-gray-800 rounded-xl "></div>
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
                      text-lg
                      lg:text-xl
                      font-medium
                      lg:my-8
                       py-3  ml-20 my-5
                  "
            >
              Let's Talk
              <BsArrowRight className="text-lg " />
            </button>
          </a>{" "}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dropdown;
