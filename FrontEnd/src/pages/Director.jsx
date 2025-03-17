import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import BackToTop from "../componets/BackToTop";

const directors = [
  {
    name: "Shri. Dhairyashil Rajsingh Mohite Patil",
    designation: "Chairman",
    image: "/director/chairman.png",
  },
  {
    name: "Shri. Dattatreya Ramchandra Bhilare",
    designation: "Vice Chairman",
    image: "/director/Dattatray Bhilare.jpg",
  },
  {
    name: "Shri. Hanmant Krushna Shinde",
    designation: "Director",
    image: "/director/Hanumant Shinde.jpg",
  },
  {
    name: "Shri. Vijay Mahadev Narute",
    designation: "Director",
    image: "/director/Vijay Narute.jpg",
  },
  {
    name: "Shri. Uddhavrao Shrimant Jadhav",
    designation: "Director",
    image: "/director/Uddhavarav Jadhav.jpg",
  },
  {
    name: "Shri. Balaso Sitaram Deshmukh",
    designation: "Director",
    image: "/director/Balaso-Deshmukh.png",
  },
  {
    name: "Shri Jagannatha Yashwant Jadhav",
    designation: "Director",
    image: "/director/Jagannath Jadhav.jpg",
  },
  {
    name: "Shri. Trimbak Dnyandev Ingale",
    designation: "Director",
    image: "/director/Trimbka Ingale.jpg",
  },
  {
    name: "Shri. Arun Bhagwan Thite",
    designation: "Director",
    image: "/director/Arun Thite.jpg",
  },
  {
    name: "Shri. Suresh Mahadev Pise",
    designation: "Director",
    image: "/director/Suresh Pise.jpg",
  },
  {
    name: "Shri. Subhash Maruti Shinde",
    designation: "Director",
    image: "/director/Subhash Shinde.jpg",
  },
  {
    name: "Shri. Narayan Dnyaneshwar Salgude Patil",
    designation: "Director",
    image: "/director/Narayan Salgude.jpg",
  },
  {
    name: "Shri. Bhaskar Laxman Tupe",
    designation: "Director",
    image: "/director/Baskar Tupe.jpg",
  },
  {
    name: "Shri. Balasaheb Ravsaheb Parade",
    designation: "Director",
    image: "/director/Balasaheb Parade.jpg",
  },
  {
    name: "Shri. Sachin Shamrao Waghmode",
    designation: "Director",
    image: "/director/Sachin Waghmode.jpg",
  },
  {
    name: "Shri. Sharad Bapu Salunkhe",
    designation: "Director",
    image: "/director/Sharad Salunkhe.jpg",
  },
  {
    name: "Shri. Arvind Anna Bhosale",
    designation: "Director",
    image: "/director/Arvind Bhosale.jpg",
  },
  {
    name: "Sow. Sharda Bhagwat Pise",
    designation: "Director",
    image: "/director/Sharada Pise.jpg",
  },
  {
    name: "Sow. Madhuri Ranjit Fadatare",
    designation: "Director",
    image: "/director/Madhuri Fadatare.jpg",
  },
  {
    name: "Shri. Sanjay Kondiba Gore",
    designation: "Director",
    image: "/director/Sanjay Gore.jpg",
  },
  {
    name: "Shri. Dadasaheb Kashinath singade",
    designation: "Director",
    image: "/director/Dadasaheb-Shingade.png",
  },
  {
    name: "Shri. Harishchandra Gorakh Magar",
    designation: "Technical Director",
    image: "/director/Harishandra Magar.jpg",
  },
  {
    name: "Shri. Sangramsingh Dattatreya Rannavre",
    designation: "Technical Director",
    image: "/director/Sangramsinh-Rananaware.png",
  },
  {
    name: "Raviraj Shankarrao Inamdar - Deshmukh",
    designation: "Managing Director",
    image: "/director/Raviraj-Indamadr-Deshmukh.png",
  },
];

const Director = () => {
  return (
    <div>
      {/* Banner Section (Unchanged) */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/home-1-slide-1.jpg"
          alt="Milk Producers"
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">DIRECTOR</h1>
          <p className="text-lg mt-2 opacity-90">Home / Director</p>
        </div>
      </div>

      {/* Board of Directors Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="py-12 text-center"
      >
        <h2 className="text-3xl font-bold text-green-600">
          Board of Directors
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 px-4 md:px-10">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: Math.floor(index / 4) * 0.5,
              }}
              className="relative group text-center"
            >
              {/* Image with Hover Effect */}
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Social Media Icons */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white text-xl hover:text-blue-500 transition"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-white text-xl hover:text-blue-700 transition"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#"
                      className="text-white text-xl hover:text-red-500 transition"
                    >
                      <FaGooglePlusG />
                    </a>
                  </div>
                </div>
              </div>
              {/* Director Info */}
              <h3 className="mt-4 text-xl font-semibold">{director.name}</h3>
              <p className="text-gray-600">{director.designation}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <BackToTop />
    </div>
  );
};

export default Director;
