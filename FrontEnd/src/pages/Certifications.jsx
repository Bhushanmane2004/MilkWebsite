import React from "react";
import BackToTop from "../componets/BackToTop";

const certificates = [
  "/certifications/award1.png",
  "/certifications/award1.png",
  "/certifications/award1.png",
  "/certifications/award1.png",
];

const Certifications = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/home-1-slide-1.jpg"
          alt="Milk Producers"
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            CERTIFICATIONS
          </h1>
          <p className="text-sm md:text-lg mt-2 opacity-90">
            Home / Certifications
          </p>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="container mx-auto px-4 py-8">
        {/* First Certificate */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="/certifications/award1.png"
            alt="Certificate"
            className="w-full md:w-1/3 max-w-xs h-auto rounded-md shadow-md"
          />
          <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>

        {/* Additional Certificates */}
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center mb-8"
          >
            <img
              src={cert}
              alt={`Certificate ${index + 2}`}
              className="w-full md:w-1/3 max-w-xs h-auto rounded-md shadow-md"
            />
            <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        ))}
      </div>

      <BackToTop />
    </div>
  );
};

export default Certifications;
