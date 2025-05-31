'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const LogoSlider = () => {
  const sliderRef = useRef(null);

  const logos = [
    { name: 'AMD', src: '/images/hardware/amd.svg', alt: 'AMD Logo' },
    { name: 'Cisco', src: '/images/hardware/cisco.svg', alt: 'Cisco Logo' },
    { name: 'Dell Technologies', src: '/images/hardware/dell.svg', alt: 'Dell Technologies Logo' },
    { name: 'HP Enterprise', src: '/images/hardware/hpe.svg', alt: 'HP Enterprise Logo' },
    { name: 'Intel', src: '/images/hardware/intel.svg', alt: 'Intel Logo' },
    { name: 'Lenovo', src: '/images/hardware/lenovo.svg', alt: 'Lenovo Logo' },
    { name: 'Schneider Electric', src: '/images/hardware/schneider.svg', alt: 'Schneider Electric Logo' },
    { name: 'Supermicro', src: '/images/hardware/supermicro.svg', alt: 'Supermicro Logo' },
    { name: 'NVIDIA', src: '/images/hardware/nvidia.svg', alt: 'NVIDIA Logo' },
  ];

  useEffect(() => {
    // Ensure animation starts playing on component mount
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = "running";
    }
  }, []);

  return (
    <div className="w-full bg-[#0a0a10] py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm">Seamless integrations with any data center hardware</p>
        </div>
        
        <div 
          className="overflow-hidden relative"
          style={{ height: '120px' }}
{/*           onMouseEnter={() => {
            if (sliderRef.current) {
              sliderRef.current.style.animationPlayState = "paused";
            }
          }}
          onMouseLeave={() => {
            if (sliderRef.current) {
              sliderRef.current.style.animationPlayState = "running";
            }
          }} */}
        >
          {/* First row of logos */}
          <div 
            ref={sliderRef}
            className="flex logos-slide"
            style={{
              animationName: "slide",
              animationDuration: "20s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: "running"
            }}
          >
            {/* Duplicate the logos to ensure seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={`logo-${index}`} 
                className="logo-item mx-6"
                style={{
                  minWidth: "150px",
                  opacity: 0.7,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                }}
              >
                <div className="relative h-10 w-32">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={128}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .logo-item:hover {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
