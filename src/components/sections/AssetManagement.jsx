// src/components/sections/AssetManagement.jsx
'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AssetManagement = () => {
  return (
    <section id="asset-management" className="py-2 md:py-5 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-9xl">
        <div className="bg-grayscale-900 rounded-xl p-2 md:p-18 mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 lg:order-1 justify-self-center"
            >
              <h2 className="text-3xl pl-6 md:text-3xl mb-8">
                Asset Management
              </h2>
              <p className="text-grayscale-400 pl-6 text-md mb-8">
                Streamline your data center operations with our comprehensive asset 
                management system. Track, maintain, and optimize your infrastructure 
                with precision and ease.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 justify-self-end"
            >
              <div className=" overflow-hidden shadow-lg">
                <Image 
                  src="/images/asset-management.png" 
                  alt="Asset Management Dashboard" 
                  width={500} 
                  height={400}
                  className="w-500 h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
         <div className="bg-[#150e22] py-8 rounded-xl p-2 md:p-18 flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-4 pl-6">Get Started with Asset Management</h3>
            <p className="text-md mb-6 pl-6">
              Experience the benefits of our asset management solutions. 
              Contact us today to schedule a demo or learn more about our offerings.
            </p>
          </div>
          <div className="flex flex-col space-y-4 mr-6 items-center">
          <button className="bg-[#a366ff] text-white text-xs py-2 px-4 rounded-full hover:bg-purple-600 hover:text-white mr-6">
            Book a Demo
          </button>
          <button className="bg-gray-800 text-white text-xs py-2 px-4 rounded-full hover:bg-grayscale-300 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
                  
      </div>
    </section>

  );
};

export default AssetManagement;