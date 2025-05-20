// src/components/layout/Footer.jsx
'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black py-6">        
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center pl-10 pb-0 md:pb-0">
            <Image
              src="/images/logo.webp"
              alt="CentralAxis Icon"
              width={60}
              height={60}
              className="h-9 w-9 mr-4"
            />
            <p className="text-grayscale-400 text-sm">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-grayscale-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-grayscale-400 hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-grayscale-400 hover:text-white text-sm pr-4">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
};

export default Footer;