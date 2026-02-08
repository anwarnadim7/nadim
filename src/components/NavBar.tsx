"use client";
import React, { useState, useEffect } from "react";
import { FaAws } from "react-icons/fa";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
      scrolled 
        ? 'border-white/20 bg-[#232F3E]/98 backdrop-blur-xl shadow-lg' 
        : 'border-white/10 bg-[#232F3E]/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        
        {/* Logo area */}
        <div className="flex items-center gap-2 text-white font-semibold text-base hover:text-[#FF9900] transition-colors cursor-pointer">
          <FaAws className="text-[#FF9900] text-2xl" />
          <span>NADIM<span className="text-gray-400 font-normal ml-1">Cloud Architect</span></span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Blog", href: "#blog" },
            { label: "Contact", href: "#contact" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9900] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

         {/* Status Indicator */}
         <div className="hidden md:flex items-center gap-2 aws-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></span>
            <span className="text-xs">Active</span>
         </div>
      </div>
    </nav>
  );
};

export default NavBar;
