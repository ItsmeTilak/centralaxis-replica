// src/components/layout/Navigation.jsx
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import DropdownMenu from "../ui/DropdownMenu";

const Navigation = ({ isOpen, toggleMobileMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: "Data Center Infrastructure Management",
      hasDropdown: true,
      dropdownItems: [
        { name: "Energy Efficiency" },
        { name: "Stranded Energy Map", href: "/stranded-energy-map" },
        { name: "Environmental Product Declaration", href: "/environmental-declaration" },
        { name: "Renewables Integration", href: "/renewables-integration" },
        { name: "Power Resource Management", href: "/power-resource-management" }
      ]
    },
    {
      name: "Intelligence Solutions",
      hasDropdown: true,
      dropdownItems: [
        { name: "AI Solutions", href: "/ai-solutions" },
        { name: "Data Analytics", href: "/data-analytics" },
        { name: "Predictive Maintenance", href: "/predictive-maintenance" }
      ]
    },
    {
      name: "Data Center Compliance",
      hasDropdown: true,
      dropdownItems: [
        { name: "Regulatory Compliance", href: "/regulatory-compliance" },
        { name: "Security Standards", href: "/security-standards" },
        { name: "Audit Support", href: "/audit-support" }
      ]
    },
    {
      name: "Sustainability Blog",
      hasDropdown: true,
      dropdownItems: [
        { name: "Latest Articles", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Industry News", href: "/industry-news" }
      ]
    }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden sm:flex space-x-2">
        {navItems.map((item, index) => (
          <div key={index} className="relative flex justify-left items-center">
            <button
              className="flex items-center !text-[10px] text-white hover:text-accent-300 transition-colors" // Decreased text size
              onClick={(e) => toggleDropdown(index, e)}
            >
              {item.name} 
              <ChevronDown className="ml-1 h-2 w-2" /> // Decreased icon size
            </button>
            {item.hasDropdown && activeDropdown === index && (
              <div className="absolute top-0 right-full">
              <DropdownMenu items={item.dropdownItems} />
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        <div className="container mx-auto px-4 h-full flex flex-col">
          <div className="flex flex-col space-y-2 mt-8"> // Decreased top margin and space between items
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-grayscale-800 pb-1"> // Decreased padding bottom
                <div
                  className="flex justify-between items-center text-base text-white mb-1 cursor-pointer" // Decreased text size
                  onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                >
                  <span>{item.name}</span>
                  <ChevronDown 
                    className={`h-3 w-3 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} // Decreased icon size
                  />
                </div>
                <div className={`space-y-1 ml-4 ${activeDropdown === index ? 'block' : 'hidden'}`}>
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link 
                      key={dropdownIndex} 
                      href={dropdownItem.href}
                      className="block text-sm text-grayscale-300 hover:text-white transition-colors py-1" // Decreased text size
                      onClick={toggleMobileMenu}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;