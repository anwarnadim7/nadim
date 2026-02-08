"use client";
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { FaAws, FaCertificate, FaRoad, FaCheckCircle } from "react-icons/fa";

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    status: "In Progress",
    icon: <FaAws className="text-3xl text-[#FF9900]" />,
    progress: 75,
    target: "Q2 2026",
  },
  {
    name: "AWS Certified Developer - Associate",
    status: "Planned",
    icon: <FaAws className="text-3xl text-gray-400" />,
    progress: 0,
    target: "Q3 2026",
  },
  {
    name: "AWS Certified SysOps Administrator",
    status: "Planned",
    icon: <FaAws className="text-3xl text-gray-400" />,
    progress: 0,
    target: "Q4 2026",
  },
];

const Certifications = () => {
  return (
    <Section id="certifications">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          <FaCertificate className="inline-block mr-3 text-[#FF9900]" />
          AWS <span className="text-[#FF9900]">Certifications</span>
        </h2>
        <p className="text-gray-400">
          Building expertise through official AWS certification path
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="aws-card p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">{cert.icon}</div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              {cert.name}
            </h3>
            
            <div className="mb-4">
              {cert.status === "In Progress" ? (
                <span className="aws-badge">
                  <FaCheckCircle className="inline mr-1" />
                  {cert.status}
                </span>
              ) : (
                <span className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full border border-gray-600">
                  <FaRoad className="inline mr-1" />
                  {cert.status}
                </span>
              )}
            </div>

            {cert.progress > 0 && (
              <div className="w-full mb-3">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{cert.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-[#FF9900] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${cert.progress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <p className="text-sm text-gray-400">
              Target: <span className="text-[#FF9900]">{cert.target}</span>
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-gray-400 text-sm">
          🎯 Following the official AWS certification roadmap for Cloud Engineers
        </p>
      </motion.div>
    </Section>
  );
};

export default Certifications;
