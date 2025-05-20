'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-10 overflow-hidden bg-zinc-950">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-accent-700/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl mb-6 text-grayscale-300 mb-0.5">
            We've Built the Future of
          </h1>
          <h1 className="text-4xl md:text-6xl mb-6 text-grayscale-300">
            Data Centers
          </h1>
          <p className="text-md md:text-md text-grayscale-500 mb-2">
            Increase uptime, reduce costs, automate operations, and stay compliant.
          </p>
          <p className="text-md md:text-md text-grayscale-500 mb-8">
            Contact our team for a demo
          </p>

          {/* <div className="absolute inset-y-0 left-[140px] w-px bg-white/10"></div>
          <div className="absolute inset-y-0 right-[140px] w-px bg-white/10"></div> */}
          <div className="absolute left-[140px] top-[-600px] bottom-[-400px] w-px bg-white/10"></div>
          <div className="absolute right-[140px] top-[-600px] bottom-[-400px] w-px bg-white/10"></div>

          {/* Horizontal lines */}
          <div className="absolute inset-x-0 top-5/6 h-px bg-white/10"></div>
        
          {/* <div className="flex flex-col sm:flex-row justify-center gap-4"> */}
          <div className="relative flex justify-center">
            <span className="relative-button-bg"></span>
            <Button variant="purple" size="wd" edge="none">Set Up a Time</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;