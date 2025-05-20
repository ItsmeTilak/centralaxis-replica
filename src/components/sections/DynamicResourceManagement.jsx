// src/components/sections/DynamicResourceManagement.jsx
'use client';

import React from "react";
import { motion } from "framer-motion";
import { Mail, Zap, Network, Clock, Layers } from "lucide-react";

const DynamicResourceManagement = () => {
  const features = [
    {
      icon: <Mail className="text-white w-6 h-6" />,
      title: "Resource Management",
      description: "See all of your resources in one place, update issues, and dynamically plan your resources."
    },
    {
      icon: <Zap className="text-white w-6 h-6" />,
      title: "Deployment Automation",
      description: "From design, sourcing, supply, manufacturing, and deployment - our system automates the entire process."
    },
    {
      icon: <Network className="text-white w-6 h-6" />,
      title: "Networking",
      description: "Ensure that your networking infrastructure is always in place and ready to scale with your deployments."
    },
    {
      icon: <Clock className="text-white w-6 h-6" />,
      title: "Firmware Versioning",
      description: "Ensure that your firmware is always up to date and secure with our automated versioning system."
    },
    {
      icon: <Layers className="text-white w-6 h-6" />,
      title: "Digital Twins",
      description: "Plan capacity intelligently with our digital twin technology."
    }
  ];

  return (
    <section id="dynamic-resource-management" className="py-14 md:py-20 bg-black mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex justify-between">
            <div className="w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-gray-900 text-sm font-medium text-grayscale-500 mb-6">
                  Built for Scale
                </div>
                <h2 className="text-3xl md:text-3xl font-semibold mb-6">
                  Dynamic Resource Management
                </h2>
                <p className="text-grayscale-500 text-0.8md">
                  Seamlessly expand from racks to data centers. Our system 
                </p>
                <p className="text-grayscale-500 text-0.8md">
                  grows with you, automatically managing resources across
                </p>
                <p className="text-grayscale-500 text-0.8md">
                  your entire infrastructure.
                </p>
              </motion.div>
            </div>
            <div className="w-1/2 flex flex-col">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                  className="bg-grayscale-900 rounded-xl p-6 flex items-center mb-9"
                >
                  <div className="bg-grayscale-800 py-3 px-4 rounded-full p-3 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-grayscale-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default DynamicResourceManagement;