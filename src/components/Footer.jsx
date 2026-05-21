import React from "react";
import logo from "../img/logo.png";
import {
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="w-full pt-24 pb-10">
      
      <div
        className="
          w-[90%]
          mx-auto
          border border-[#d4a01725]
          bg-[#ffffff03]
          rounded-[40px]
          px-8
          lg:px-16
          py-16
        "
      >

        {/* Top Section */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-16
            border-b
            border-[#ffffff10]
            pb-14
          "
        >

          {/* Left */}
          <div className="max-w-[420px]">

            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="logo"
                className="w-16"
              />

              <h2 className="text-3xl font-semibold">
                NKtechsolutions
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg">
              Creating modern websites and digital experiences
              focused on clean design, performance, and
              meaningful user interaction.
            </p>

          </div>

          {/* Right */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-12
            "
          >

            {/* Navigation */}
            <div>
              <h3 className="text-[#D4A017] text-xl mb-6">
                Navigation
              </h3>

              <div className="flex flex-col gap-4 text-gray-400">

                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Services
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Process
                </a>

              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-[#D4A017] text-xl mb-6">
                Services
              </h3>

              <div className="flex flex-col gap-4 text-gray-400">

                <p>Web Design</p>
                <p>UI/UX Design</p>
                <p>SEO Optimization</p>
                <p>Website Support</p>

              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[#D4A017] text-xl mb-6">
                Contact
              </h3>

              <div className="flex flex-col gap-4 text-gray-400">

                <a
                  href="mailto:nktechsolutions@gmail.com"
                  className="hover:text-white transition-all duration-300"
                >
                  nktechsolutions@gmail.com
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all duration-300"
                >
                  Instagram
                </a>

              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
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
          <p className="text-gray-500 text-sm">
            © 2026 NKtechsolutions. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-5">

            <a
              href="#"
              className="
                w-12
                h-12
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
              <FiInstagram size={20} />
            </a>

            <a
              href="#"
              className="
                w-12
                h-12
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
              <FiLinkedin size={20} />
            </a>

            <a
              href="#"
              className="
                w-12
                h-12
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
              <FiGithub size={20} />
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