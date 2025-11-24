import React, { useState, useEffect } from 'react';
import { PricingTier, OS } from '../types';
import { Check, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers: PricingTier[] = [
  {
    name: "Core",
    price: "$0",
    description: "For local experimentation.",
    features: ["Local Vector Engine", "500MB Capacity", "BYO API Keys", "Community Support"],
    highlight: false,
    cta: "Download Nexus v1.0",
    ctaLink: "#download-installer"
  },
  {
    name: "Sovereign",
    price: "$20",
    description: "The complete power user suite.",
    features: ["Unlimited AI Switchboard", "50GB Encrypted Cloud Sync", "3x Device Limit", "Priority Support", "R2 Mirror Redundancy"],
    highlight: true,
    cta: "Start 14-Day Trial",
    ctaLink: "https://checkout.stripe.com/nexus-sovereign"
  },
  {
    name: "Institution",
    price: "Custom Intelligence",
    description: "For teams and compliance.",
    features: ["Shared Team Knowledge Base", "SSO / SCIM Enforcement", "Private Instance Deployment", "Audit Logs & Export"],
    highlight: false,
    cta: "Book Security Briefing",
    ctaLink: "https://calendly.com/nexus-security"
  }
];

export const Pricing: React.FC = () => {
  const [os, setOs] = useState<OS>('Unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) setOs('Mac');
    else if (userAgent.includes('win')) setOs('Windows');
    else if (userAgent.includes('linux')) setOs('Linux');
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const filename = os === 'Mac' ? 'Nexus-Darwin.dmg' : 'Nexus-Setup.exe';
    // Trigger download logic
    const link = document.createElement('a');
    link.href = `https://r2.nexusbank.ai/builds/latest/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    // link.click(); // Commented out for demo, would normally trigger
    document.body.removeChild(link);
    alert(`Downloading ${filename}...`);
  };

  return (
    <section id="pricing" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Invest in your Intelligence.</h2>
          <p className="text-slate-400">Simple pricing for personal and institutional use.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {tiers.map((tier, index) => {
            const isCustom = tier.price === "Custom Intelligence";
            const isFree = tier.price === "$0";
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 border h-full flex flex-col transition-all duration-300 ${
                  tier.highlight 
                    ? 'bg-nexus-900/60 border-nexus-cyan/50 shadow-[0_0_40px_rgba(36,224,232,0.1)] scale-105 z-10' 
                    : 'bg-nexus-950/50 border-white/10'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nexus-cyan text-nexus-950 text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase shadow-[0_0_15px_rgba(36,224,232,0.6)]">
                    Recommended
                  </div>
                )}
                
                <h3 className="text-lg font-medium text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-1">
                  <span className={`font-bold text-white ${isCustom ? 'text-2xl' : 'text-4xl'}`}>{tier.price}</span>
                  {!isCustom && !isFree && <span className="text-slate-500 ml-2">/mo</span>}
                </div>
                
                <div className="h-6 mb-4">
                  {!isCustom && !isFree && (
                      <p className="text-xs text-nexus-cyan">Billed yearly</p>
                  )}
                </div>

                <p className="text-sm text-slate-400 mb-6">{tier.description}</p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-300">
                      <Check className={`w-4 h-4 mr-3 shrink-0 ${tier.highlight ? 'text-nexus-cyan' : 'text-slate-500'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {tier.ctaLink === "#download-installer" ? (
                  <button 
                    onClick={handleDownload}
                    className={`block w-full py-3 rounded-lg font-medium transition-all text-center flex items-center justify-center ${
                      tier.highlight 
                        ? 'bg-black text-white border border-nexus-cyan/30 shadow-[0_0_0_0_rgba(36,224,232,0)] hover:shadow-[0_0_20px_rgba(36,224,232,0.3)] hover:bg-nexus-cyan/10' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {tier.cta}
                  </button>
                ) : (
                  <a 
                    href={tier.ctaLink}
                    target={tier.ctaLink.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-lg font-medium transition-all text-center ${
                      tier.highlight 
                        ? 'bg-black text-white border border-nexus-cyan/30 shadow-[0_0_0_0_rgba(36,224,232,0)] hover:shadow-[0_0_20px_rgba(36,224,232,0.3)] hover:bg-nexus-cyan/10' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {tier.cta}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};