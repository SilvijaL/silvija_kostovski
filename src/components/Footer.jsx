import React from "react";
import { FaArrowCircleUp, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { whitelogo } from '../assets';



const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-5" >
        {/* Logo and Contact Info (Left Side) */}
        <div className="flex flex-col mb-4 md:mb-0">
          <img src={whitelogo} alt="Silvija Logo" className="w-30 h-10 md:w-36 md:h-12 object-contain" />
          <p className="mb-0 text-[12px] md:text-[14px] ps-0 md:ps-2">silvijakostovski@gmail.com</p>
        </div>

        
        {/* Social Media Icons (Right Side) */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/designinnovatehub/" className="text-white hover:text-gray-300" target="_blank">
            <FaFacebook size={20} md:size={24} />
          </a>
          <span href="#" className="text-white hover:text-gray-300 cursor-none">
            <FaInstagram size={20} md:size={24} /> 
          </span>
          <a href="https://www.linkedin.com/in/silvija-kostovski" className="text-white hover:text-gray-300" target="_blank">
            <FaLinkedin size={20} md:size={24} />
          </a>
          <a href="https://github.com/" className="text-white hover:text-gray-300" target="_blank">
            <FaGithub size={20} md:size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll to Top Button (Right Corner) */}
      <button 
        onClick={scrollToTop} 
        className="text-white hover:text-gray-300 focus:outline-none absolute bottom-4 right-4"
      >
        <FaArrowCircleUp size={32} />
      </button>
      
      {/* Copyright Banner */}
      <div className="text-center py-2 bg-gray-700 text-[10px] md:text-[13px]" >
        <p>&copy; 2024 Silvija Kostovski. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
