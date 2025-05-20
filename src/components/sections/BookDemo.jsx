// src/components/sections/BookDemo.jsx
'use client';

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const BookDemo = () => {
  return (
    <section id="book-demo" className="py-10 md:py-18 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-9xl">
        <div 
          className="rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: "url(/images/datacenter-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          <div className="relative z-10 py-8 md:py-12 px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Book a Demo
              </h2>
              <p className="text-grayscale-300 text-md md:pt-1 pb-1 mb-2 max-w-2xl mx-auto">
                See how CentralAxis can revolutionize your data center operations.
              </p>
              <Button variant="white" size="sm" edge="rounded">Schedule Now</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;