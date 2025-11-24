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
    // Simulate direct download
    const link = document.createElement('a');
    link.href = `https://r2.nexusbank.ai/builds/latest/${filename}`;
    link.setAttribute('download', filename); 
    document.body.appendChild(link);
    // link.click(); // Commented out to prevent actual 404 on demo
    document.body.removeChild(link);
    alert(`Downloading ${filename} from Secure R2 Bucket...`);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <div className="inline-flex items-center space-x-2 bg-nexus-900/80 border border-nexus-cyan/30 rounded-full px-4 py-1.5 mb-8 shadow-[0_0_20px_rgba(36,224,232,0.1)]">
            <span className="w-2 h-2 rounded-full bg-nexus-cyan animate-pulse"></span>
            <span className="text-xs font-mono text-nexus-cyan uppercase tracking-wider">System Operational v1.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Your Digital DNA. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-cyan to-white">
              Secured.
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            The operating system for your memory. Interact with GPT-4, Claude, and Llama without sacrificing your privacy. Local-first. E2E Encrypted. Institutional Grade.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={handleDownload}
              className="w-full sm:w-auto group relative bg-black text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center border border-nexus-cyan/30 shadow-[0_0_0_0_rgba(36,224,232,0)] hover:shadow-[0_0_30px_rgba(36,224,232,0.3)] hover:bg-nexus-cyan/10 transition-all duration-300"
            >
              {getIcon()}
              <span>{getButtonText()}</span>
              <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a 
              href="#docs" 
              className="w-full sm:w-auto px-8 py-4 rounded-lg text-slate-300 font-medium hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center justify-center group"
            >
              View Documentation
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="mt-8 flex items-center space-x-6 text-xs font-mono text-slate-500">
             <span className="flex items-center"><div className="w-1 h-1 bg-nexus-cyan rounded-full mr-2"></div>SHA-256 Encrypted</span>
             <span className="flex items-center"><div className="w-1 h-1 bg-nexus-cyan rounded-full mr-2"></div>Local Storage</span>
          </div>
        </motion.div>

        {/* Right Column: 3D Visualization */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          {/* Glow Portal - Updated to #00F0FF with 200px blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00F0FF] rounded-full blur-[200px] opacity-30 pointer-events-none" />

          {/* Floating Cube Totem - Breathe (Scale) + Float (Y) Animation */}
          <motion.div
             animate={{ 
               y: [-10, 10],
               scale: [1, 1.02] 
             }}
             transition={{ 
               repeat: Infinity, 
               repeatType: "mirror", 
               duration: 6, 
               ease: "easeInOut" 
             }}
             className="relative z-10 w-full h-full flex items-center justify-center"
          >
             <img 
               src="/cube.png" 
               alt="Nexus Obsidian Cube" 
               className="w-80 h-80 md:w-[450px] md:h-[450px] object-contain drop-shadow-[0_0_60px_rgba(36,224,232,0.6)]"
               onError={(e) => {
                  // Fallback for demo
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="relative w-64 h-64 preserve-3d animate-[spin_10s_linear_infinite]">
                      <div class="absolute inset-0 bg-gradient-to-br from-black to-nexus-cyan/20 border border-nexus-cyan/50 backdrop-blur-md"></div>
                      <div class="absolute inset-0 flex items-center justify-center text-nexus-cyan font-mono text-xs">ASSET: CUBE.PNG</div>
                    </div>
                  `;
               }}
             />
          </motion.div>

           {/* Floating Data Points */}
           <motion.div 
             animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }} 
             transition={{ repeat: Infinity, duration: 4 }}
             className="absolute top-20 right-10 glass-panel px-4 py-2 rounded-md border border-nexus-cyan/30 shadow-[0_0_15px_rgba(36,224,232,0.1)]"
           >
             <div className="text-[10px] font-mono text-nexus-cyan">VAULT: LOCKED</div>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }} 
             transition={{ repeat: Infinity, duration: 5, delay: 1 }}
             className="absolute bottom-20 left-0 glass-panel px-4 py-2 rounded-md border border-nexus-cyan/30 shadow-[0_0_15px_rgba(36,224,232,0.1)]"
           >
             <div className="text-[10px] font-mono text-nexus-cyan">KEYS: LOCAL</div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};