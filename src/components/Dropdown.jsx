import React from "react";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import logo from "../img/logo.png";
import { BsArrowRight } from "react-icons/bs";

function Dropdown({ isOpen, setIsOpen }) {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
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
          <button className="flex items-center justify-between gap-5 bg-[#D4A017] text-black  pl-5 pr-12 py-3  ml-20 my-5 text-2xl rounded-xl">
            Lets Talk
            <BsArrowRight />
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dropdown;
