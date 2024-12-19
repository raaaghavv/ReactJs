import React from "react";
import FeaturesSection from "./FeaturesSection";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-500 h-screen flex items-center justify-center px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl">
        {/* Left Section */}
        <div className="text-white text-center md:text-left w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Global Currency Converter
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Convert currencies instantly with real-time exchange rates. Make
            your international transactions easier than ever!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button
              className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
              onClick={() =>
                document
                  .getElementById("converterSection")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </button>
            {/* <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-white hover:text-blue-500 transition">
              Learn More
            </button> */}
          </div>
        </div>

        {/* Right Section: Features (Moved more to the right) */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 pl-12 md:pl-24">
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
