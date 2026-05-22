import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "efe0731d-42ad-472f-af85-33c16fbaa58f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Inquiry submitted successfully.");
      event.target.reset();
    } else {
      setResult("Something went wrong.");
    }
  };

  return (
    <section id="contact" className="w-full py-20">
      <div className="w-[90%] mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2
            className="
              uppercase
              text-2xl
              lg:text-4xl
              text-[#D4A017]
              font-light
              tracking-wide
              mb-4
            "
          >
            Let's Talk
          </h2>

          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Tell us about your project and goals.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="
            border
            border-[#d4a01730]
            bg-[#ffffff05]
            rounded-3xl
            p-6
            lg:p-10
            flex
            flex-col
            gap-6
          "
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="
              bg-transparent
              border
              border-[#ffffff10]
              rounded-2xl
              px-5
              py-4
              outline-none
              text-white
              placeholder:text-gray-500
              focus:border-[#D4A017]
              transition-all
            "
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="
              bg-transparent
              border
              border-[#ffffff10]
              rounded-2xl
              px-5
              py-4
              outline-none
              text-white
              placeholder:text-gray-500
              focus:border-[#D4A017]
              transition-all
            "
          />

          {/* Project Type */}
          <input
            type="text"
            name="project"
            placeholder="Project Type"
            className="
              bg-transparent
              border
              border-[#ffffff10]
              rounded-2xl
              px-5
              py-4
              outline-none
              text-white
              placeholder:text-gray-500
              focus:border-[#D4A017]
              transition-all
            "
          />

          {/* Budget */}
          <select
            name="budget"
            required
            className="
              bg-black
              border
              border-[#ffffff10]
              rounded-2xl
              px-5
              py-4
              outline-none
              text-gray-400
              focus:border-[#D4A017]
              transition-all
            "
          >
            <option value="">Select Budget Range</option>

            <option>$500 - $1000</option>

            <option>$1000 - $2500</option>

            <option>$2500+</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows="6"
            required
            className="
              bg-transparent
              border
              border-[#ffffff10]
              rounded-2xl
              px-5
              py-4
              outline-none
              text-white
              placeholder:text-gray-500
              focus:border-[#D4A017]
              transition-all
              resize-none
            "
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="
              border
              border-[#D4A017]
              px-8
              py-4
              rounded-full
              text-[#D4A017]
              hover:bg-[#D4A017]
              hover:text-black
              transition-all
              duration-300
              w-fit
            "
          >
            Send Inquiry
          </button>

          {/* Result */}
          <p
            className={`text-sm transition-all duration-300 ${
              result === "Sending..."
                ? "text-gray-400"
                : result === "Inquiry submitted successfully."
                  ? "text-green-500"
                  : "text-red-500"
            }`}
          >
            {result}
          </p>
        </form>
      </div>
    </section>
  );
}