"use client";
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { FaAws, FaDocker, FaPython, FaNodeJs, FaServer, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiGooglecloud, SiMongodb } from "react-icons/si";

const skills = [
  {
    category: "Cloud Infrastructure",
    items: [
      { name: "AWS", level: "Advanced", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Google Cloud", level: "Intermediate", icon: <SiGooglecloud className="text-blue-500" /> },
      { name: "Azure", level: "Intermediate", icon: <FaServer className="text-blue-400" /> },
    ],
  },
  {
    category: "DevOps Toolchain",
    items: [
      { name: "Docker", level: "Pro", icon: <FaDocker className="text-blue-500" /> },
      { name: "Kubernetes", level: "Advanced", icon: <SiKubernetes className="text-blue-600" /> },
      { name: "Terraform", level: "Intermediate", icon: <SiTerraform className="text-purple-500" /> },
      { name: "Linux Administration", level: "Advanced", icon: <FaLinux className="text-yellow-500" /> },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Python", level: "Advanced", icon: <FaPython className="text-yellow-300" /> },
      { name: "Node.js", level: "Intermediate", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="text-green-500" /> },
      { name: "Git/Github", level: "Pro", icon: <FaGitAlt className="text-red-500" /> },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Technical <span className="text-[#FF9900]">Stack</span>
        </h2>
        <p className="text-gray-400">
          Core technologies and expertise
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="aws-card p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-white/10">
              {category.category}
            </h3>
            
            <div className="space-y-4">
              {category.items.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between group/item">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs text-[#FF9900] font-semibold">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
