import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Docs } from './components/Docs';
import { Privacy } from './components/Privacy';
import { Security } from './components/Security';
import { Dashboard } from './components/Dashboard';
import { AgencyPortal } from './components/AgencyPortal';

const App: React.FC = () => {
  const [route, setRoute] = useState('');

  useEffect(() => {
    const handleHash = () => {
        const hash = window.location.hash;
        setRoute(hash);
        
        // Pages that are distinct views and should start at the top
        const pageRoutes = ['#docs', '#privacy', '#security', '#dashboard', '#agency'];
        
        if (pageRoutes.includes(hash)) {
            window.scrollTo(0,0);
        } else if (hash) {
            // It's an anchor on the landing page (e.g., #pricing, #features)
            // We need a small timeout to allow React to render the Landing Page 
            // if the user is navigating from a subpage (like #docs)
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            // Root path
            window.scrollTo(0,0);
        }
    };
    
    // Set initial
    handleHash();

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderContent = () => {
      switch(route) {
          case '#docs': return <Docs />;
          case '#privacy': return <Privacy />;
          case '#security': return <Security />;
          case '#dashboard': return <Dashboard />;
          case '#agency': return <AgencyPortal />;
          default: 
            return (
                <main>
                    <Hero />
                    <SocialProof />
                    <Features />
                    <Pricing />
                </main>
            );
      }
  }

  return (
    <div className="min-h-screen bg-nexus-950 text-slate-200 selection:bg-nexus-cyan/30 selection:text-nexus-cyan flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-nexus-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-nexus-cyan/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {renderContent()}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;