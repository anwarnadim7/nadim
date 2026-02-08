"use client";
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-start"
      >
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-[#FF9900]">Me</span>
          </h2>
          
          <div className="aws-card p-6">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm an <span className="text-[#FF9900] font-semibold">MCA (Cloud Computing)</span> student focused on building <span className="text-white font-semibold">real-world cloud infrastructure on AWS</span>.
              </p>
              <p>
                I specialize in designing <span className="text-white font-semibold">highly available systems</span>, automating infrastructure with <span className="text-[#FF9900] font-semibold">Terraform</span>, and deploying containerized workloads using <span className="text-[#FF9900] font-semibold">Docker & Kubernetes</span>.
              </p>
              <p>
                My goal is to work as an <span className="text-white font-semibold">AWS Cloud Engineer / DevOps Engineer</span> and build reliable systems that scale to millions of users.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="aws-card p-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-[#FF9900]">{"{"}</span>
            Core Focus
            <span className="text-[#FF9900]">{"}"}</span>
          </h3>
          
          <div className="space-y-3 font-mono text-sm">
            <div className="flex gap-2">
              <span className="text-[#FF9900]">"primary_focus":</span>
              <span className="text-gray-300">"Production-grade AWS Infrastructure"</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#FF9900]">"core_skills":</span>
              <span className="text-blue-400">["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"]</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#FF9900]">"specialization":</span>
              <span className="text-gray-300">"Serverless & Container Orchestration"</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#FF9900]">"target_role":</span>
              <span className="text-green-400">"AWS Cloud Engineer"</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;
