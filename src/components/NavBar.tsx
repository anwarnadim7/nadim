"use client";
import React, { useState, useEffect } from "react";
import { FaAws, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
      scrolled 
        ? 'border-white/20 bg-[#232F3E]/98 backdrop-blur-xl shadow-lg' 
        : 'border-white/10 bg-[#232F3E]/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        
        {/* Logo area */}
        <div className="flex items-center gap-2 text-white font-semibold text-sm md:text-base hover:text-[#FF9900] transition-colors cursor-pointer">
          <FaAws className="text-[#FF9900] text-xl md:text-2xl" />
          <span>NADIM<span className="hidden sm:inline text-gray-400 font-normal ml-1">Cloud Architect</span></span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
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

        {/* Status Indicator (Desktop) */}
        <div className="hidden md:flex items-center gap-2 aws-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]"></span>
          <span className="text-xs">Active</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl p-2 hover:text-[#FF9900] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#232F3E] border-t border-white/10">
          <ul className="flex flex-col py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
