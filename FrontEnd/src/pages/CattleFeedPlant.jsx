import React from "react";
import BackToTop from "../componets/BackToTop";

const CattleFeedPlant = () => {
  return (
    <div>
      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/home-1-slide-1.jpg"
          alt="Milk Producers"
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            CATTLEFEED PLANT
          </h1>
          <p className="text-lg mt-2 opacity-90">Home / CattleFeed Plant</p>
        </div>
      </div>

      {/* Reduced space here */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Services Section - Positioned at the top */}
          <div className="self-start">
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg w-full max-h-48">
              <h2 className="text-2xl font-bold mb-2">Services</h2>
              <ul className="space-y-1">
                <li>• Milk Producers</li>
                <li>• Cattlefeed Plant</li>
                <li>• Milko Tester</li>
              </ul>
            </div>
          </div>

          {/* Content Section */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">Cattle Feed Plant</h1>
            <img
              src="/cattlefeedplant/cattlefeed1.png"
              alt="Cattle Feed Plant"
              className="rounded-lg shadow-md w-full mb-2"
            />
            <p className="text-gray-700">
              Cattle feed is an essential input requirement of the Dairy
              Farmers. Production and Supply of quality feed at minimum costs
              results in bringing down the cost of milk production and
              simultaneously enhances net gains. An 80 M.T. per day, feed plant
              with pallet facility is installed by the Milk Union. The pelleted
              form increases the rate of conversion of feed into milk
              production. Price of SHIVAMRUT FEED is always less than
              contemporary products available in the market. Besides this,
              profit generated out of this activity is passed proportionately to
              the milk producer in the form of rebate.
            </p>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default CattleFeedPlant;
