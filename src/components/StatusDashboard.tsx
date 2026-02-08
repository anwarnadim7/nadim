"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaServer, FaCheckCircle, FaClock, FaChartLine } from "react-icons/fa";

const StatusDashboard = () => {
  const [uptime, setUptime] = useState(0);
  const [metrics, setMetrics] = useState({
    cpu: 23,
    memory: 45,
    requests: 1247,
  });

  // Uptime counter
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setUptime(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simulate metric fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * 15) + 20, // 20-35%
        memory: Math.floor(Math.random() * 10) + 40, // 40-50%
        requests: Math.floor(Math.random() * 100) + 1200, // 1200-1300
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (days > 0) return `${days}d ${hours}h ${mins}m`;
    if (hours > 0) return `${hours}h ${mins}m ${secs}s`;
    if (mins > 0) return `${mins}m ${secs}s`;
    return `${secs}s`;
  };

  const services = [
    { name: "API Gateway", status: "operational", region: "us-east-1" },
    { name: "Lambda Functions", status: "operational", region: "us-east-1" },
    { name: "S3 Storage", status: "operational", region: "us-east-1" },
    { name: "CloudFront CDN", status: "operational", region: "global" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="aws-card p-4 md:p-6"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <FaServer className="text-[#FF9900] text-xl md:text-2xl" />
            <h3 className="text-lg md:text-xl font-bold text-white">System Status</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs md:text-sm text-green-400 font-semibold">All Systems Operational</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
          {/* CPU Usage */}
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-wide">CPU Usage</span>
              <span className="text-sm font-bold text-[#FF9900]">{metrics.cpu}%</span>
            </div>
            <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FF9900] to-yellow-500"
                initial={{ width: 0 }}
                animate={{ width: `${metrics.cpu}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Memory Usage */}
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-wide">Memory</span>
              <span className="text-sm font-bold text-blue-400">{metrics.memory}%</span>
            </div>
            <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${metrics.memory}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Requests */}
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-wide">Requests/min</span>
              <FaChartLine className="text-green-400" />
            </div>
            <div className="text-2xl font-bold text-green-400">
              {metrics.requests.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Uptime & Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Uptime */}
          <div className="bg-black/20 border border-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <FaClock className="text-[#FF9900]" />
              <span className="text-xs md:text-sm text-gray-400 font-semibold">System Uptime</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white font-mono">
              {formatUptime(uptime)}
            </div>
            <p className="text-xs text-gray-500 mt-2">99.9% uptime this month</p>
          </div>

          {/* Service Health */}
          <div className="bg-black/20 border border-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green-400" />
              <span className="text-xs md:text-sm text-gray-400 font-semibold">Service Health</span>
            </div>
            <div className="space-y-2">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-gray-300">{service.name}</span>
                  </div>
                  <span className="text-gray-500 text-[10px] md:text-xs">{service.region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            Monitoring powered by CloudWatch • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default StatusDashboard;
