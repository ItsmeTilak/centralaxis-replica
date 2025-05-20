'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const DropdownMenu = ({ title, items, titleClassName }) => {
  return (
    <div className="relative group">
      <button className={`text-xs flex items-center ${titleClassName}`}>
        {title}
        <span className="ml-1">&#9660;</span>
      </button>
      <div className="absolute top-full left-0 bg-[#000000] font-semibold border border-white rounded-md p-2 w-52 hidden group-hover:block">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="block text-xs text-white font-semibold hover:text-gray-300 transition-colors py-3"
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links with dropdown items
  const navLinks = [
    {
      title: 'Data Center Infrastructure Management',
      dropdown: [
        { title: 'Energy Efficiency' },
        { title: 'Stranded Energy Map' },
        { title: 'Environmental Product Declaration' },
        { title: 'Renewables Integration' },
        { title: 'Power Resource Management' },
      ]
    },
    {
      title: 'Intelligence Solutions',
      dropdown: [
        { title: 'Advanced Monitoring' },
        { title: 'Network Management' },
        { title: 'Asset Management' },
      ]
    },
    {
      title: 'Data Center Compliance',
      dropdown: [
        { title: 'Security' },
        { title: 'Regulations' },
      ]
    },
    {
      title: 'Sustainability Blog',
      href: '/blog',
      dropdown: [
        { title: "Latest Articles" },
        { title: "Case Studies" },
        { title: "Industry News" }
      ]
    },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all bg-[#000000] duration-300 ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        <Link href="/" className="relative z-50">
          <div className="flex items-center pl-5 pt-1">
            <Image
              src="/images/logo.webp"
              alt="CentralAxis Logo"
              width={36}
              height={36}
              className="mr-2"
            />
            <span className="text-white text-2xl font-semibold">CentralAxis</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-2">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              {link.dropdown && link.dropdown.length > 0 ? (
                <DropdownMenu title={link.title} items={link.dropdown} titleClassName="text-xs" />
              ) : (
                <Link 
                  href={link.href}
                  className="text-xs text-grayscale-100 hover:text-white font-small transition-colors duration-300"
                >
                  {link.title}
                </Link>
              )}
              {link.href && !link.dropdown && (
                <Link 
                  href={link.href}
                  className="text-xs text-grayscale-100 hover:text-white font-small transition-colors duration-300"
                >
                  {link.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className={`lg:hidden relative z-50 hamburger ${mobileMenuOpen ? 'menu-open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span className="my-1.5"></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : 'closed'}`}>
          <div className="container h-full flex flex-col justify-center items-center">
            <nav className="flex flex-col space-y-4 text-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.href ? (
                    <Link 
                      href={link.href}
                      className="text-lg text-white font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <span 
                      className="text-lg text-white font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </span>
                  )}
                </motion.div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;