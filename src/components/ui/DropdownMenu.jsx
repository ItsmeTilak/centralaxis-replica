'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center text-grayscale-100 hover:text-white font-medium transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-black/90 backdrop-blur-md border border-grayscale-800 overflow-hidden z-50"
          >
            <div className="py-2">
              {items.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="block px-4 py-2 text-sm text-grayscale-200 hover:bg-grayscale-900 hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;