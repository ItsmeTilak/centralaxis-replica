'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import DynamicResourceManagement from '@/components/sections/DynamicResourceManagement';
import NetworkManagement from '@/components/sections/NetworkManagement';
import AssetManagement from '@/components/sections/AssetManagement';
import AdvancedMonitoring from '@/components/sections/AdvancedMonitoring';
import LogoSlider from '@/components/sections/LogoSlider';
import FAQ from '@/components/sections/FAQ';
import BookDemo from '@/components/sections/BookDemo';
import { initAnimations } from '@/lib/animations';

export default function Home() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <Hero />
      
      <LogoSlider />
      
      <section id="solutions" className="relative">
        <div className="absolute top-20 left-20 gradient-blob -z-10" style={{ background: 'linear-gradient(120deg, rgba(126, 58, 242, 0.2) 0%, rgba(173, 75, 255, 0.2) 100%)' }}></div>
        <div className="absolute bottom-40 right-10 gradient-blob -z-10" style={{ background: 'linear-gradient(220deg, rgba(126, 58, 242, 0.15) 0%, rgba(173, 75, 255, 0.15) 100%)' }}></div>
        
        <AdvancedMonitoring />
        <NetworkManagement />
        <AssetManagement />

        <DynamicResourceManagement />
      </section>
      
      <BookDemo />
      
      <FAQ />
      
      <Footer />
    </main>
  );
}