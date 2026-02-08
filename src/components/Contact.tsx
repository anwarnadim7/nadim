"use client";
import React, { useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto aws-card p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            Get in <span className="text-[#FF9900]">Touch</span>
          </h2>
          <p className="text-gray-400 mb-10 text-center">
            Let's discuss your cloud infrastructure needs
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#FF9900] focus:outline-none focus:ring-2 focus:ring-[#FF9900]/20 transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#FF9900] focus:outline-none focus:ring-2 focus:ring-[#FF9900]/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#FF9900] focus:outline-none focus:ring-2 focus:ring-[#FF9900]/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="aws-btn-primary inline-flex items-center gap-3 px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-2"
                >
                  <FaCheckCircle />
                  <span className="text-sm font-semibold">Message sent successfully!</span>
                </motion.div>
              )}
            </div>
          </form>

          {/* Social Links */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-center text-gray-400 mb-6 text-sm">Or connect with me on:</p>
            <div className="flex justify-center gap-8 text-2xl text-gray-400">
              <a href="mailto:contact@nadim.in" className="hover:text-[#FF9900] transition-colors" title="Email">
                <FaEnvelope />
              </a>
              <a href="#" className="hover:text-[#FF9900] transition-colors" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-[#FF9900] transition-colors" title="GitHub">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-[#FF9900] transition-colors" title="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className="mt-20 text-center flex flex-col items-center gap-4">
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/30 to-transparent"></div>
        
        {/* AWS Hosting Badge */}
        <div className="aws-card px-6 py-3 inline-block">
          <p className="text-sm text-gray-300">
            <span className="text-[#FF9900] font-semibold">☁️ Hosted on AWS</span> using S3 + CloudFront with global CDN & HTTPS
          </p>
        </div>

        {/* Tech Stack */}
        <div className="text-xs text-gray-500">
          <p className="mb-1">Built with Next.js 15 • Tailwind CSS • Framer Motion • Deployed on AWS</p>
          <p>
            <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="text-[#FF9900] hover:underline">
              View Source Code →
            </a>
          </p>
        </div>

        <p className="text-gray-600 text-[10px]">
          © {new Date().getFullYear()} Nadim. All rights reserved.
        </p>
      </footer>
    </Section>
  );
};

export default Contact;
