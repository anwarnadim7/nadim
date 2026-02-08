"use client";
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { 
  FaCloud, 
  FaCodeBranch, 
  FaDollarSign, 
  FaShieldAlt, 
  FaChartLine, 
  FaServer 
} from "react-icons/fa";

const capabilities = [
  {
    icon: <FaCloud className="text-3xl text-[#FF9900]" />,
    title: "Highly Available AWS Infrastructure",
    description: "Multi-AZ deployments with auto-scaling, load balancing, and disaster recovery",
  },
  {
    icon: <FaCodeBranch className="text-3xl text-[#FF9900]" />,
    title: "CI/CD Pipelines",
    description: "Automated deployment workflows with GitHub Actions, CodePipeline, and Jenkins",
  },
  {
    icon: <FaDollarSign className="text-3xl text-[#FF9900]" />,
    title: "Cost Optimization",
    description: "Right-sizing instances, Reserved Instances, Spot Instances, and resource tagging",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-[#FF9900]" />,
    title: "Secure IAM Policies & Compliance",
    description: "Least-privilege access, MFA enforcement, and security best practices",
  },
  {
    icon: <FaChartLine className="text-3xl text-[#FF9900]" />,
    title: "Monitoring & Logging",
    description: "CloudWatch dashboards, alarms, log aggregation, and performance metrics",
  },
  {
    icon: <FaServer className="text-3xl text-[#FF9900]" />,
    title: "Production-Ready Cloud Systems",
    description: "Scalable architectures handling millions of requests with 99.9%+ uptime",
  },
];

const WhatICanBuild = () => {
  return (
    <Section id="capabilities">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          What I Can <span className="text-[#FF9900]">Build</span> for Your Company
        </h2>
        <p className="text-gray-400">
          Production-grade cloud solutions that scale
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="aws-card p-6 flex flex-col items-start"
          >
            <div className="mb-4">{capability.icon}</div>
            
            <h3 className="text-lg font-semibold text-white mb-3">
              {capability.title}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              {capability.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 text-center aws-card p-8"
      >
        <p className="text-xl text-white mb-4">
          Ready to build <span className="text-[#FF9900] font-semibold">reliable, scalable cloud infrastructure</span>?
        </p>
        <a href="#contact" className="aws-btn-primary inline-block">
          Let's Talk
        </a>
      </motion.div>
    </Section>
  );
};

export default WhatICanBuild;
