import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-nexus-950 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-sans font-bold text-lg text-white">NEXUS</span>
          <p className="text-xs text-slate-500 mt-2">Nexus Bank Technology © 2024</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#security" className="text-sm text-slate-400 hover:text-white transition-colors">Security Whitepaper</a>
          <a href="https://twitter.com" className="text-sm text-slate-400 hover:text-white transition-colors">Twitter</a>
          <a href="#privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#docs" className="text-sm text-slate-400 hover:text-white transition-colors">Documentation</a>
        </div>
      </div>
    </footer>
  );
};