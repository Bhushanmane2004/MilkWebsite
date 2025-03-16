import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import up arrow icon

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white border-4 border-yellow-500 
                     rounded-full shadow-xl p-3 flex flex-col items-center 
                     hover:scale-110 hover:shadow-2xl transition-transform duration-300 
                     animate-bounce"
        >
          {/* Shivamrut Logo */}
          <img 
            src="/cow.jpg" 
            alt="Shivamrut Logo" 
            className="h-12 w-12 rounded-full object-cover mb-1"
          />
          
          {/* Text + Arrow Icon */}
          <div className="flex items-center gap-1 text-yellow-600 text-sm font-bold">
            <span>Top</span>
            <FaArrowUp />
          </div>
        </button>
      )}
    </>
  );
};

export default BackToTop;
