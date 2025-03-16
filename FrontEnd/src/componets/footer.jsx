import React from "react";
import {
  Twitter,
  Facebook,
  Linkedin,
  Globe,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-yellow-500 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Store Locator Section */}
        <div className="bg-gray-900 rounded-lg p-6 mb-10 shadow-lg border-l-4 border-yellow-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center">
                <MapPin className="mr-2 text-yellow-400" /> Store Locator
              </h2>
              <p className="text-gray-300 mt-2">
                Find our fresh dairy products at a location near you
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Enter your ZIP code"
                  className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-2 rounded-md transition duration-300">
                  Find Stores
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">Where to Buy</h2>
        <p className="text-gray-300 text-sm mb-8">
          Our Products are currently available at select retailers in
          Connecticut and New York.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-3">
              On the Farm
            </h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Meet Our Farmers
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Meet the Cows
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Famous Dairy Facts
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                From the Farm to the Fridge
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Dairy Farm Map
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Farm Practices
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-3">
              In the Kitchen
            </h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Recipes
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Lactose Intolerance
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Milk Imitators
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Organic Milk
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Flavored Milk
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Ask Our Dietitian
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-3">
              In the News
            </h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Local Milk Blog
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Contests/Sweepstakes
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Videos
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                News Releases
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Newsletters
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-3">
              About Us
            </h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-yellow-400 cursor-pointer transition">
                FAQ
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Our Board
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Our Staff
              </li>
              <li className="hover:text-yellow-400 cursor-pointer transition">
                Contact Us
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-6 md:mb-0">
            <p className="flex items-center mb-2">
              <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
              888 Broadway, New York, NY, 18813
            </p>
            <p className="flex items-center mb-2">
              <Phone className="w-4 h-4 mr-2 text-yellow-400" />
              Phone: <span className="text-yellow-400 ml-1">123-456-7890</span>
            </p>
            <p className="flex items-center mb-2">
              <Mail className="w-4 h-4 mr-2 text-yellow-400" />
              Email: info@yoursite.com
            </p>
            <p className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-yellow-400" />
              Mon-Fri: 8AM - 8PM, Sat-Sun: 8AM - 4PM
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-2 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              © 2025 Shivamrit Dairy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
