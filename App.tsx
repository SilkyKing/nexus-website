import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PricingSection } from './components/PricingSection';
import { Comparison } from './components/Comparison';
import { Security } from './components/Security';
import { Documentation } from './components/Documentation';

function App() {
  // 'home', 'security', 'docs'
  const [currentView, setCurrentView] = useState('home');

  // Pass this function to Navbar and Hero
  const handleNav = (view: string) => {
    window.scrollTo(0, 0);
    setCurrentView(view);
  };

  // VIEW: SECURITY
  if (currentView === 'security') {
    return <Security onBack={() => handleNav('home')} />;
  }

  // VIEW: DOCS
  if (currentView === 'docs') {
    return <Documentation onBack={() => handleNav('home')} />;
  }

  // VIEW: HOME LANDING
  return (
    <div className="bg-[#050505] min-h-screen">
      {/* We modify Navbar to accept the view switcher */}
      <Navbar onViewChange={handleNav} />
      <Hero onViewChange={handleNav} />
      <Features />
      <Comparison />
      <PricingSection />
      
      <footer className="py-10 border-t border-white/10 text-center text-white/30 text-sm">
        <div className="flex justify-center gap-6 mb-4">
            <button onClick={() => handleNav('security')} className="hover:text-[#24E0E8]">Security Whitepaper</button>
            <button onClick={() => handleNav('docs')} className="hover:text-[#24E0E8]">Documentation</button>
            <span>Privacy</span>
        </div>
        <p>Nexus Bank Technology © 2024</p>
      </footer>
    </div>
  );
}

export default App;
