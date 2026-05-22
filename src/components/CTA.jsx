import React from "react";

function CTA() {
  return (
    <section className="w-full py-24">
      <div
        className="
          w-[90%]
          mx-auto
          border border-[#d4a01740]
          bg-[#ffffff05]
          rounded-[40px]
          py-20
          px-8
          text-center
        "
      >
        <h2 className="text-4xl lg:text-6xl leading-tight max-w-4xl mx-auto mb-8">
          Ready to Build a Website That Represents Your Brand?
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let’s create a modern digital experience designed for clarity,
          performance, and meaningful user engagement.
        </p>

        <a href="#contact">
          <button
            className="
            border border-[#D4A017]
            px-8
            py-4
            rounded-full
            text-[#D4A017]
            text-lg
            hover:bg-[#D4A017]
            hover:text-black
            transition-all
            duration-300
          "
          >
            Let’s Talk
          </button>
        </a>
      </div>
    </section>
  );
}

export default CTA;
