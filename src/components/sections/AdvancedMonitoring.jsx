// src/components/sections/AdvancedMonitoring.jsx
'use client';

import { useRef, useEffect } from 'react';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Video } from "lucide-react";

const AdvancedMonitoring = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);
  return (
    <section id="advanced-monitoring" className="py-2 md:py-5 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-9xl">
        <div className="text-center mb-2">
            <div className="inline-block px-4 py-1 rounded-full bg-gray-900 text-sm font-medium text-grayscale-500">
              Built for AI 
            </div>
          </div>
        <h2 className="text-3xl font-inter md:text-3xl px-4 py-0.1 mb-2 items-center text-center">Modernizing the Digital Backbone</h2>
              <p className="text-grayscale-400 font-inter py-0.1 text-md mb-2 pb-10 items-center text-center">
                Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.
              </p>
        <div className="bg-grayscale-900 rounded-xl p-2 md:p-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-3xl pl-6 mb-8">Advanced Monitoring</h2>
              <p className="text-grayscale-400 text-md pl-6 mb-8">
                CentralAxis provides cutting-edge monitoring solutions for your data 
                center, offering real-time insights and comprehensive analytics to 
                optimize performance, reduce costs, and enhance reliability.
              </p>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 justify-self-end"
          >
            <div className="overflow-hidden shadow-lg">
              <Image 
                src="/images/monitoring-dashboard.png" 
                alt="Monitoring Dashboard" 
                width={500} 
                height={150}
                className="w-500 h-auto"
              />
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedMonitoring;