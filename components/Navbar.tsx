import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = "https://i.postimg.cc/t4bZ9mQD/cube.png";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

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

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* BRANDING */}
        <div className="flex items-center gap-3 cursor-pointer">
           <img src={LOGO_URL} alt="Nexus" className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(36,224,232,0.5)]" />
           <span className="text-xl font-bold tracking-[0.2em] text-white">NEXUS</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href.replace('#', ''))}
              className="text-sm font-medium text-white/70 hover:text-[#24E0E8] transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          <button className="px-5 py-2 bg-white/10 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all">
            Login
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* MOBILE DROPDOWN (Simplified) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-lg text-white/80">
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
