import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Apple, Monitor } from 'lucide-react';
import { OS } from '../types';

export const Hero: React.FC = () => {
  const [os, setOs] = useState<OS>('Unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) setOs('Mac');
    else if (userAgent.includes('win')) setOs('Windows');
    else if (userAgent.includes('linux')) setOs('Linux');
  }, []);

  const getIcon = () => {
    if (os === 'Mac') return <Apple className="w-5 h-5 mr-2" />;
    return <Monitor className="w-5 h-5 mr-2" />; // Windows/Linux generic
  };

  const getButtonText = () => {
    if (os === 'Unknown') return 'Download Nexus Core';
    return `Download for ${os}`;
  };

  const handleDownload = () => {
    const filename = os === 'Mac' ? 'Nexus-Darwin.dmg' : 'Nexus-Setup.exe';
    alert(`Downloading ${filename} from Secure R2 Bucket...`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      
      {/* 
        Z-STACK ARCHITECTURE 
        Layer 0: Ambient Background (Glows)
        Layer 10: The Cube Asset (Centered, Dimmed, Animated)
        Layer 20: Typography & Interactive Elements (Text)
      */}

      {/* LAYER 10: The God Object (Cube) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full max-w-[800px] flex items-center justify-center pointer-events-none opacity-60">
         {/* Glow Effect */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#24E0E8] rounded-full blur-[150px] opacity-40 mix-blend-screen" />
         
         {/* The Asset */}
         <motion.div
            animate={{ 
               y: [-15, 15],
               rotate: [0, 2, -2, 0]
            }}
            transition={{ 
               repeat: Infinity, 
               repeatType: "mirror", 
               duration: 8, 
               ease: "easeInOut" 
            }}
            className="relative"
         >
           <img 
             src="/cube.png" 
             alt="Nexus Core" 
             className="w-[350px] md:w-[600px] object-contain brightness-75 drop-shadow-[0_0_30px_rgba(36,224,232,0.3)]"
           />
         </motion.div>
      </div>

      {/* LAYER 20: Content Overlay */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-nexus-900/90 border border-nexus-cyan/30 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_20px_rgba(36,224,232,0.2)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-nexus-cyan animate-pulse"></span>
            <span className="text-xs font-mono text-nexus-cyan uppercase tracking-wider">System Operational v1.0</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-tight drop-shadow-2xl">
            Your Digital DNA. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-cyan to-white">
              Secured.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md bg-black/30 p-2 rounded-lg backdrop-blur-sm">
            The operating system for your memory. Interact with GPT-4, Claude, and Llama without sacrificing your privacy. Local-first. E2E Encrypted.
          </p>
          
          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleDownload}
              className="w-full sm:w-auto group relative bg-white text-black font-bold px-8 py-4 rounded-lg flex items-center justify-center hover:bg-nexus-cyan transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              {getIcon()}
              <span>{getButtonText()}</span>
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a 
              href="#docs" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg text-white font-medium bg-black/60 border border-white/20 hover:bg-black/80 hover:border-nexus-cyan/50 transition-all flex items-center justify-center backdrop-blur-md"
            >
              View Documentation
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Tech Specs */}
          <div className="mt-12 flex items-center justify-center space-x-8 text-xs font-mono text-slate-400 bg-black/40 inline-block px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
             <span className="flex items-center"><div className="w-1.5 h-1.5 bg-nexus-cyan rounded-full mr-2"></div>SHA-256 Encrypted</span>
             <span className="flex items-center"><div className="w-1.5 h-1.5 bg-nexus-cyan rounded-full mr-2"></div>Local Storage</span>
          </div>

        </motion.div>
      </div>

    </section>
  );
};