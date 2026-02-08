"use client";
import React, { useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Serverless Image Processing Pipeline",
    description: "Automated image resizing system using S3 triggers and AWS Lambda with cost-optimized architecture. Handles 10k+ images/day with secure IAM roles.",
    architecture: "User → S3 Upload → Lambda Trigger → Image Processing → Optimized S3 → CloudFront CDN",
    fullArchitecture: "The system uses S3 event notifications to trigger Lambda functions whenever a new image is uploaded. The Lambda function processes the image using Pillow library, applies optimizations, and stores multiple sizes (thumbnail, medium, large) back to S3. CloudFront CDN distributes the optimized images globally with edge caching for sub-50ms latency.",
    techStack: [
      "AWS Lambda (Python 3.11 runtime)",
      "Amazon S3 (source & destination buckets)",
      "CloudFront CDN (global distribution)",
      "CloudWatch (monitoring & logging)",
      "IAM Roles (least-privilege access)",
      "Pillow (image processing library)"
    ],
    deployment: [
      "Package Lambda function with dependencies using Docker",
      "Deploy Lambda via AWS SAM template",
      "Configure S3 event notifications for image uploads",
      "Set up CloudFront distribution with S3 origin",
      "Configure CloudWatch alarms for error monitoring"
    ],
    challenges: [
      {
        problem: "Lambda cold starts causing 2-3 second delays",
        solution: "Implemented provisioned concurrency for consistent sub-100ms response times"
      },
      {
        problem: "Large image files (>10MB) timing out Lambda",
        solution: "Added pre-processing step to reject oversized files and return user-friendly error"
      }
    ],
    stats: { latency: "45ms", cost: "$0.02/1k", uptime: "99.9%" },
    tags: ["AWS Lambda", "S3", "Python", "CloudWatch"],
    repoLink: "#",
    liveLink: "#",
  },
  {
    title: "Microservices E-Commerce Platform",
    description: "Distributed backend with independent scalable services orchestrated via Kubernetes. Multi-AZ deployment with auto-scaling and load balancing.",
    architecture: "API Gateway → Microservices (User/Product/Order) → K8s Pods → MongoDB Cluster",
    fullArchitecture: "The platform uses a microservices architecture with separate services for user management, product catalog, and order processing. Each service runs in its own Kubernetes deployment with horizontal pod autoscaling. An API Gateway handles routing, authentication, and rate limiting. MongoDB provides data persistence with replica sets for high availability.",
    techStack: [
      "Kubernetes (v1.28 cluster)",
      "Docker (containerization)",
      "Node.js + Express (service runtime)",
      "MongoDB (database with replica sets)",
      "NGINX Ingress Controller (API Gateway)",
      "Prometheus + Grafana (monitoring)"
    ],
    deployment: [
      "Build Docker images for each microservice",
      "Push images to container registry (Docker Hub)",
      "Apply Kubernetes manifests (deployments, services, ingress)",
      "Configure HPA (Horizontal Pod Autoscaler) rules",
      "Set up monitoring dashboards in Grafana"
    ],
    challenges: [
      {
        problem: "Inter-service communication latency causing slow responses",
        solution: "Implemented service mesh with Istio for optimized routing and circuit breaking"
      },
      {
        problem: "Database connection pool exhaustion under load",
        solution: "Configured connection pooling per service and added read replicas for scaling"
      }
    ],
    stats: { pods: "12", services: "5", cluster: "v1.28" },
    tags: ["Kubernetes", "Docker", "Node.js", "MongoDB"],
    repoLink: "#",
    liveLink: "#",
  },
  {
    title: "VPC Terraform Infrastructure Modules",
    description: "Reusable Terraform modules for provisioning secure multi-AZ VPC architectures with public/private subnets, NAT gateways, and security groups.",
    architecture: "Multi-AZ VPC → Public/Private Subnets → NAT Gateway → Internet Gateway → Route Tables",
    fullArchitecture: "The module creates a production-ready VPC spanning multiple availability zones for high availability. Public subnets host NAT gateways and load balancers, while private subnets contain application servers and databases. All traffic is routed through security groups with least-privilege rules. The module is parameterized for easy customization across environments.",
    techStack: [
      "Terraform (v1.5+ with HCL)",
      "AWS VPC (networking foundation)",
      "NAT Gateway (outbound internet for private subnets)",
      "Internet Gateway (public subnet connectivity)",
      "Route Tables (traffic routing rules)",
      "Security Groups (firewall rules)"
    ],
    deployment: [
      "Initialize Terraform workspace",
      "Configure backend for remote state (S3 + DynamoDB)",
      "Run terraform plan to preview changes",
      "Apply module with environment-specific variables",
      "Validate VPC connectivity and routing"
    ],
    challenges: [
      {
        problem: "Managing state across multiple environments causing conflicts",
        solution: "Implemented Terraform workspaces with remote state locking via DynamoDB"
      },
      {
        problem: "NAT Gateway costs adding up in dev environments",
        solution: "Created conditional logic to use NAT instances in non-prod for cost savings"
      }
    ],
    stats: { modules: "8", providers: "AWS", version: "1.5.0" },
    tags: ["Terraform", "HCL", "AWS VPC", "IaC"],
    repoLink: "#",
    liveLink: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
          Featured <span className="text-[#FF9900]">Projects</span>
        </h2>
        <p className="text-gray-400">
          Cloud infrastructure and automation solutions
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="aws-card p-6 flex flex-col h-full"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {project.architecture && (
              <div className="mb-4 p-3 bg-black/30 rounded border border-[#FF9900]/20">
                <p className="text-xs text-gray-400 mb-1 font-semibold">Architecture:</p>
                <p className="text-xs text-[#FF9900] font-mono leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-black/20 rounded border border-white/5">
              {Object.entries(project.stats).map(([key, value], i) => (
                <div key={i} className="text-center">
                  <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">{key}</span>
                  <span className="block text-xs text-[#FF9900] font-semibold">{value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-xs px-3 py-1 bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/20 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto space-y-3">
              {/* View Details Button */}
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold text-sm transition-all rounded"
              >
                <FaInfoCircle />
                View Full Details
              </button>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <a href={project.repoLink} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-xs text-gray-300 hover:text-white transition-all rounded">
                  <FaGithub /> Source
                </a>
                {project.liveLink && (
                  <a href={project.liveLink} className="flex-1 aws-btn-secondary text-xs py-2.5 text-center flex items-center justify-center gap-2">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
};

export default Projects;
