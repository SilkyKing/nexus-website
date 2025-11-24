import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

// THE REMOTE ASSET - UNBREAKABLE
const CUBE_URL = "https://i.postimg.cc/t4bZ9mQD/cube.png";

export const Hero = () => {
  const [os, setOs] = useState('Unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) setOs('Mac');
    else if (userAgent.includes('win')) setOs('Windows');
    else if (userAgent.includes('linux')) setOs('Linux');
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#24E0E8] opacity-10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* THE IMAGE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[500px] opacity-80 brightness-75">
        <motion.img 
            src={CUBE_URL}
            alt="Nexus Core"
            className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(36,224,232,0.3)]"
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* THE TEXT */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-[-50px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-[#24E0E8] animate-pulse" />
          <span className="text-xs font-mono text-[#24E0E8] tracking-wider">SYSTEM OPERATIONAL V1.0</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-white mb-6 drop-shadow-xl">
          Your Digital DNA.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24E0E8] to-[#0099ff]">
            Secured.
          </span>
        </h1>

        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-white/5">
          The operating system for your memory. Interact with GPT-4, Claude, and Llama 
          without sacrificing your privacy. Local-first. E2E Encrypted. Institutional Grade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-3 hover:bg-[#24E0E8] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(36,224,232,0.5)]">
            <Download size={20} />
            <span>Download for {os}</span>
          </button>
          
          <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2">
            View Documentation
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
