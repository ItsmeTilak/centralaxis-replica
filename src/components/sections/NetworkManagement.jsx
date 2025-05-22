// src/components/sections/NetworkManagement.jsx
'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const NetworkManagement = () => {
  const features = [
    "Real-time network performance monitoring and bandwidth optimization",
    "Automated network security and threat detection",
    "Advanced network diagnostics and troubleshooting tools"
  ];

  return (
    <section id="network-management" className="py-0.2 md:py-0.5 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="bg-grayscale-900 rounded-xl p-2 md:p-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="overflow-hidden shadow-lg">
                <Image 
                  src="/images/network-dashboard.png" 
                  alt="Network Management Dashboard" 
                  width={500} 
                  height={150}
                  className="w-500 h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-3xl mb-6">
                Network Management and Monitoring
              </h2>
              <p className="text-grayscale-400 text-md mb-8">
                Comprehensive network monitoring and management that ensures 
                optimal performance, security, and reliability across your entire data 
                center infrastructure.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-gray-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-grayscale-400 text-md">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkManagement;
