import React, { useState } from "react";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const navLinks = [
    { title: "HOME", href: "/" },
    {
      title: "ABOUT US",
      subMenu: [
        { name: "About Shivamrut", href: "/aboutshivamrut" },
        { name: "Chairman Desk", href: "/chairmanDesk" },
        { name: "Certification", href: "/certifications" },
        { name: "Awards & Recognitions", href: "/awardsandrecognition" },
        { name: "Director", href: "/director" },
        { name: "Managing Director Milk Union", href: "/mdmilkunion" },
      ],
    },
    { title: "MARKETING", href: "/marketing" },
    { title: "BLOG", href: "/blog" },
    {
      title: "SERVICES",
      subMenu: [
        { name: "Milk Producers", href: "/milkproducers" },
        { name: "Cattlefeed Plant", href: "/cattlefeedplant" },
        { name: "Milko Tester", href: "/milkotester" },
      ],
    },
    {
      title: "TENDER",
      subMenu: [
        { name: "Notice", href: "/notice" },
        { name: "Apply", href: "/apply" },
      ],
    },
    { title: "CONTACTS", href: "/contact" },
  ];

  return (
    <nav className="w-full z-50">
      {/* Top bar */}
      <div className="bg-zinc-900 text-white py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <span className="whitespace-nowrap">(800)-456-789</span>
            <span className="hidden sm:inline whitespace-nowrap">
              MON-FR: 8AM - 8PM, ST-SN: 8AM - 4PM
            </span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="#" className="hover:text-yellow-400">
              Twitter
            </a>
            <a href="#" className="hover:text-yellow-400">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-400 hidden sm:inline">
              Google+
            </a>
            <a href="#" className="hover:text-yellow-400 hidden sm:inline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Header with Logo */}
      <div className="relative bg-[url('./header_bg7.png')] bg-cover bg-center h-20 items-center justify-center p-4 hidden sm:flex">
        <a href="/" className="absolute left-4">
          <img src="./logo-dairy.png" alt="शिवामृत" className="h-20" />
        </a>
        <p className="text-black font-bold text-2xl md:text-3xl text-center">
          शिवामृत दूध उत्पादक सहकारी संघ मर्यादित, अकलूज
        </p>
      </div>

      {/* Navbar */}
      <div className="bg-white sm:bg-yellow-500 shadow-md pl-0 sm:pl-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Logo */}
            <div className="flex items-center sm:hidden">
              <a href="/" className="mr-3">
                <img src="./logo-dairy.png" alt="Shivamrut" className="h-12" />
              </a>
              <p className="text-black font-bold text-sm">
                शिवामृत दूध उत्पादक संघ
              </p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 z-50">
              {navLinks.map((link) => (
                <div
                  key={link.title}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href || "#"}
                    className="text-gray-700 hover:text-white font-medium flex items-center"
                  >
                    {link.title}
                    {link.subMenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>

                  {/* Dropdown */}
                  {link.subMenu && (
                    <div
                      className={`absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md transition-opacity duration-200 ${
                        openDropdown === link.title
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {link.subMenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-yellow-400"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Cart Icon */}
            <div className="flex items-center">
              <div className="relative flex items-center">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
                <span className="ml-2 text-gray-700">$0.00</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-yellow-500"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden transition-all duration-300">
              <div className="px-3 py-2 space-y-1 border-t border-gray-200">
                {navLinks.map((link) => (
                  <div key={link.title}>
                    <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-yellow-400 rounded-md">
                      <a href={link.href || "#"} className="font-medium">
                        {link.title}
                      </a>
                      {link.subMenu && (
                        <button onClick={() => toggleDropdown(link.title)}>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-700 transform ${
                              openDropdown === link.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {openDropdown === link.title && link.subMenu && (
                      <div className="pl-5">
                        {link.subMenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-yellow-400"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
