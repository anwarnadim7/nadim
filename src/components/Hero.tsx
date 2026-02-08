"use client";
import React, { useState, useEffect } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import Terminal from "./Terminal";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Cloud Infrastructure & Architecture";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home" className="pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* AWS-Style Status Badge */}
        <div className="flex items-center gap-2 mb-8 w-fit mx-auto">
          <div className="aws-badge flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF9900]"></div>
            <span>System Online</span>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-sm text-gray-400 mb-6 tracking-wider uppercase">
            {text}<span className="animate-blink">_</span>
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Cloud Engineer (AWS) building <span className="text-[#FF9900]">scalable, secure & cost-optimized</span> cloud systems
        </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          I design production-grade AWS architectures using <span className="text-[#FF9900] font-semibold">Terraform, Docker, Kubernetes & Serverless</span> to deliver high-performance systems.
        </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#projects" className="aws-btn-primary">
            🚀 View Projects
          </a>
          <a href="/resume.pdf" download className="aws-btn-secondary">
            📄 Download Resume
          </a>
          <a href="#contact" className="aws-btn-secondary">
            💬 Hire Me
          </a>
        </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <Terminal />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Hero;
