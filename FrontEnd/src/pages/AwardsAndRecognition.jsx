import React from "react";
import BackToTop from "../componets/BackToTop";

const awards = [
  {
    year: 2005,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris.",
  },
  {
    year: 2009,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris.",
  },
  {
    year: 2011,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris.",
  },
  {
    year: 2014,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris.",
  },
  {
    year: 2019,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris.",
  },
];

const AwardsAndRecognition = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/home-1-slide-1.jpg"
          alt="Milk Producers"
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            AWARDS & RECOGNITION
          </h1>
          <p className="text-sm sm:text-lg mt-2 opacity-90">
            Home / Awards & Recognition
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="relative border-l-4 border-blue-500 md:border-l-0 md:border-l-4 md:left-1/2">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`mb-10 relative w-full md:w-1/2 ${
                index % 2 === 0 ? "md:-left-[50%] md:pr-8" : "md:pl-8"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-4 md:-left-3 top-2 w-5 h-5 md:w-6 md:h-6 bg-yellow-500 border-4 border-black rounded-full shadow-md"></div>

              {/* Award Card */}
              <div className="bg-pink-500 text-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold">
                  Awards {award.year}
                </h3>
                <p className="text-white mt-2 text-sm sm:text-base">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default AwardsAndRecognition;
