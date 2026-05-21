import React from "react";

function Highlights() {
  const data = [
    {
      title: "Praveen Salon",
      category: "Salon Website",
      focus:
        "Focused on creating a clean mobile experience with modern branding and smooth navigation.",
      stack: "React • Tailwind CSS",
    },

    {
      title: "Anand Fashions",
      category: "Fashion E-Commerce",
      focus:
        "Designed to improve product presentation through clean layouts and engaging visuals.",
      stack: "React • UI/UX • Responsive Design",
    },

    {
      title: "Shopping Ex",
      category: "API-Driven Platform",
      focus:
        "Built to create seamless interactions with dynamic content and efficient state management.",
      stack: "Redux • API Integration • React",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="w-[90%] mx-auto">

        {/* Heading */}
        <h2 className="uppercase text-2xl lg:text-3xl text-[#D4A017] mb-12 font-light tracking-wide">
          Project Highlights
        </h2>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-8">

          {data.map((el, i) => (
            <div
              key={i}
              className="
                flex-1
                border border-[#d4a01740]
                bg-[#ffffff05]
                rounded-[28px]
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#D4A017]
              "
            >

              {/* Category */}
              <p className="text-[#D4A017] text-sm uppercase tracking-[3px] mb-5">
                {el.category}
              </p>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl mb-6">
                {el.title}
              </h3>

              {/* Focus */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {el.focus}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-3">

                {el.stack.split(" • ").map((item, idx) => (
                  <span
                    key={idx}
                    className="
                      border border-[#ffffff15]
                      bg-[#ffffff05]
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      text-gray-300
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Highlights;