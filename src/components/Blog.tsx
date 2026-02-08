"use client";
import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { FaBook, FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    title: "Building a Serverless Image Pipeline on AWS",
    excerpt: "Learn how to create a cost-effective, scalable image processing system using AWS Lambda, S3, and CloudFront. Complete with architecture diagrams and code examples.",
    date: "2026-02-01",
    readTime: "8 min read",
    tags: ["AWS Lambda", "S3", "Serverless", "Python"],
    slug: "serverless-image-pipeline",
  },
  {
    title: "Deploying Next.js on AWS with CloudFront",
    excerpt: "Step-by-step guide to deploying a Next.js application on AWS using S3 for static hosting and CloudFront for global CDN distribution with HTTPS.",
    date: "2026-01-25",
    readTime: "10 min read",
    tags: ["Next.js", "AWS", "CloudFront", "S3"],
    slug: "nextjs-aws-deployment",
  },
];

const Blog = () => {
  return (
    <Section id="blog">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          <FaBook className="inline-block mr-3 text-[#FF9900]" />
          Technical <span className="text-[#FF9900]">Blog</span>
        </h2>
        <p className="text-gray-400">
          Sharing knowledge about cloud architecture and DevOps
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="aws-card p-6 flex flex-col h-full group cursor-pointer"
          >
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <FaCalendar className="text-[#FF9900]" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="text-[#FF9900]" />
                {post.readTime}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FF9900] transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs px-3 py-1 bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-sm text-[#FF9900] font-semibold group-hover:gap-2 transition-all inline-flex items-center gap-1">
                Read Article
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-400 text-sm">
          More articles coming soon! Follow my journey in cloud engineering.
        </p>
      </motion.div>
    </Section>
  );
};

export default Blog;
