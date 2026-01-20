import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll
  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] lg:px-[20vw] 
      ${isScrolled ? "bg-[#050414]/60 backdrop-blur-xl shadow-lg" : "bg-transparent"}`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer hover:opacity-80 transition">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Mohit</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Rawat</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-all hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec] font-semibold" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-6">
          <a
            href="https://github.com/rawatmohit1234"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec] transition transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-rawat-02a6a230a/?trk=opento_sprofile_details"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8245ec] transition transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer animate-pulse"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-16 left-0 w-full px-6 md:hidden 
          bg-[#050414]/70 backdrop-blur-xl rounded-b-2xl shadow-xl 
          transform animate-slideDown"
        >
          <ul className="flex flex-col items-center space-y-5 py-5 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-lg hover:text-white transition-all ${
                  activeSection === item.id ? "text-[#8245ec] font-semibold" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}

            {/* Mobile Social */}
            <div className="flex space-x-6 pt-2">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
