import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
             {/* Logo Asset via Static Path */}
             <img 
               src="/cube.png" 
               alt="Nexus Cube" 
               className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(36,224,232,0.5)] group-hover:scale-105 transition-transform duration-500"
             />
          </div>
          <span className="font-sans font-bold text-xl text-white tracking-[0.05em]">NEXUS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Features</a>
          <a href="#security" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Security</a>
          <a href="/#pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Pricing</a>
          <a 
            href="#dashboard"
            className="text-sm font-mono bg-black hover:bg-nexus-cyan/10 border border-nexus-cyan/30 text-white px-5 py-2 rounded-md transition-all shadow-[0_0_0_0_rgba(36,224,232,0)] hover:shadow-[0_0_15px_rgba(36,224,232,0.3)] flex items-center space-x-2"
          >
            <span>Login</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
               <a href="/#features" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Features</a>
               <a href="#security" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Security</a>
               <a href="/#pricing" className="text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
               <a href="#dashboard" className="text-left font-mono text-nexus-cyan" onClick={() => setMobileMenuOpen(false)}>Login / Access Vault</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};