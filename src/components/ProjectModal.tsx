"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    architecture: string;
    fullArchitecture?: string;
    techStack?: string[];
    deployment?: string[];
    challenges?: { problem: string; solution: string }[];
    stats: Record<string, string>;
    tags: string[];
    repoLink: string;
    liveLink: string;
  } | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  React.useEffect(() => {
    if (!project) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1a2332] border border-[#FF9900]/30 rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-[#FF9900]/10 hover:bg-[#FF9900]/20 border border-[#FF9900]/30 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <FaTimes className="text-[#FF9900] text-xl" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <h2 className="text-3xl font-bold text-white mb-4 pr-12">
              {project.title}
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Architecture */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FF9900]">🏗️</span>
                System Architecture
              </h3>
              <div className="bg-black/40 border border-[#FF9900]/20 rounded-lg p-6">
                <p className="text-[#FF9900] font-mono text-sm mb-4 leading-relaxed">
                  {project.architecture}
                </p>
                {project.fullArchitecture && (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.fullArchitecture}
                  </p>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            {project.techStack && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-[#FF9900]">⚙️</span>
                  Tech Stack Breakdown
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-black/30 border border-white/10 rounded p-3"
                    >
                      <FaCheckCircle className="text-[#FF9900] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deployment Process */}
            {project.deployment && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-[#FF9900]">🚀</span>
                  Deployment Process
                </h3>
                <ol className="space-y-3">
                  {project.deployment.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-[#FF9900] text-black rounded-full flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-gray-300 text-sm pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-[#FF9900]">💡</span>
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((item, idx) => (
                    <div key={idx} className="bg-black/30 border border-white/10 rounded-lg p-4">
                      <p className="text-red-400 text-sm font-semibold mb-2">
                        ⚠️ Challenge: {item.problem}
                      </p>
                      <p className="text-green-400 text-sm">
                        ✅ Solution: {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-[#FF9900]">📊</span>
                Key Metrics
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(project.stats).map(([key, value], idx) => (
                  <div key={idx} className="text-center bg-black/30 border border-white/10 rounded-lg p-4">
                    <p className="text-2xl font-bold text-[#FF9900] mb-1">{value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">{key}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aws-btn-primary inline-flex items-center gap-2"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="aws-btn-secondary inline-flex items-center gap-2"
              >
                <FaGithub />
                View Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
