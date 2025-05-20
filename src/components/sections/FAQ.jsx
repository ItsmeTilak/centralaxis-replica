// src/components/sections/FAQ.jsx
'use client';

import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "Are these solutions applicable to me if I am operating a co-location?",
      answer: "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively."
    },
    {
      question: "Do you provide ongoing support and maintenance for your solutions?",
      answer: "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information."
    },
    {
      question: "How do I get started?",
      answer: "Set up a demo and we'll guide you through our offerings and start a trial!"
    },
    {
      question: "How does pricing work?",
      answer: "Depending on your requirements, we offer flexible pricing models."
    }
  ];

  return (
    <section id="faq" className="py-10 md:py-18 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-grayscale-900 text-sm font-medium text-grayscale-500 mb-2">
            FAQs
          </div>
          <h2 className="text-3xl md:text-3xl py-0.1 font-semibold mb-2">
            Frequently asked questions
          </h2>
          <p className="text-grayscale-400 text-md py-0.1 mb-2 max-w-2xl mx-auto">
            Find answers to common questions about our solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              // className="bg-grayscale-900 rounded-xl p-6"
            >
              <h3 className="text-sm font-semibold mb-2">{faq.question}</h3>
              <p className="text-sm text-grayscale-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;