import React from "react";
import logo from "../img/logo.webp";

import {
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10" id="footer">
      <div
        className="
          w-[95%]
          mx-auto
          border
          border-[#d4a01720]
          bg-[#ffffff03]
          rounded-[50px]
          px-5
          sm:px-6
          lg:px-16
          py-14
        "
      >
        {/* TOP */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-14
            border-b
            border-[#ffffff10]
            pb-14
          "
        >
          {/* LEFT */}
          <div className="w-full lg:max-w-[420px]">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="logo"
                className="w-12 sm:w-14 flex-shrink-0"
              />

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-semibold
                  break-words
                "
              >
                NKtechsolutions
              </h2>
            </div>

            {/* Description */}
            <p
              className="
                text-gray-500
                leading-relaxed
                text-base
                sm:text-lg
              "
            >
              Creating modern websites and digital experiences focused on clean
              design, performance, and meaningful user interaction.
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-12
            "
          >
            {/* Navigation */}
            <div>
              <h3 className="text-[#D4A017] text-lg mb-5">Navigation</h3>

              <div className="flex flex-col gap-4 text-gray-500">
                

                <a
                  href="#services"
                  className="hover:text-white transition-all duration-300"
                >
                  Services
                </a>

                <a
                  href="#projects"
                  className="hover:text-white transition-all duration-300"
                >
                  Projects
                </a>

                <a
                  href="#process"
                  className="hover:text-white transition-all duration-300"
                >
                  Process
                </a>
                <a
                  href="#pricing"
                  className="hover:text-white transition-all duration-300"
                >
                  Pricing
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[#D4A017] text-lg mb-5">Services</h3>

              <div className="flex flex-col gap-4 text-gray-500">
                <p>Web Design</p>
                <p>UI/UX Design</p>
                <p>SEO Optimization</p>
                <p>Website Support</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#D4A017] text-lg mb-5">Contact</h3>

              <div className="flex flex-col gap-4 text-gray-500">
                <a
                  href="mailto:nktechsolutions824@gmail.com"
                  className="
                    hover:text-white
                    transition-all
                    duration-300
                    break-all
                  "
                >
                  nktechsolutions824@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/nk-techsolutions-a5379739a/"
                  target="_blank"
                  className="hover:text-white transition-all duration-300"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/nktechsolutions24/"
                  target="_blank"
                  className="hover:text-white transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
            pt-10
          "
        >
          {/* Copyright */}
          <p
            className="
              text-gray-600
              text-sm
              text-center
            "
          >
            &copy; {new Date().getFullYear()} NKtechsolutions. All rights
            reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/nktechsolutions24/"
              target="_blank"
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#d4a01730]
                flex
                items-center
                justify-center
                text-[#D4A017]
                hover:bg-[#D4A017]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FiInstagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/nk-techsolutions-a5379739a/"
              target="_blank"
              className="
                w-11
                h-11
                rounded-full
                border
                border-[#d4a01730]
                flex
                items-center
                justify-center
                text-[#D4A017]
                hover:bg-[#D4A017]
                hover:text-black
                transition-all
                duration-300
              "
            >
              <FiLinkedin size={18} />
            </a>
          </div>

          {/* Back To Top */}
          <a
            href="#top"
            className="
              flex
              items-center
              gap-2
              text-[#D4A017]
              hover:translate-x-1
              transition-all
              duration-300
            "
          >
            Back To Top
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
