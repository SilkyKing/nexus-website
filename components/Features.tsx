import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCardProps } from '../types';
import { Cpu, Lock, History, Globe, ToggleRight, FileKey } from 'lucide-react';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, colSpan = "col-span-1", children, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`${colSpan} glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-nexus-accent/30 transition-colors`}
  >
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div className="mb-8">{children}</div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{subtitle}</p>
      </div>
    </div>
    
    {/* Hover Glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-nexus-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </motion.div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Infrastructure for your Mind.</h2>
          <p className="text-slate-400">Built for power users who demand sovereignty over their cognitive extensions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Model Agnostic (Large) */}
          <FeatureCard 
            title="Model Agnostic" 
            subtitle="Switch instantly between GPT-4o, Claude 3.5 Sonnet, and local Llama 3 models. No vendor lock-in."
            colSpan="md:col-span-2"
          >
            <div className="flex items-center space-x-4 bg-nexus-900/50 p-4 rounded-xl border border-white/5 w-fit">
              <div className="flex items-center space-x-2 opacity-50">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                <span className="font-mono text-xs text-slate-500">GPT-4o</span>
              </div>
              <ToggleRight className="text-nexus-accent w-8 h-8" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-nexus-cyan rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                <span className="font-mono text-xs text-white">Claude 3.5</span>
              </div>
            </div>
          </FeatureCard>

          {/* Card 2: Local Sovereignty */}
          <FeatureCard 
            title="Local Sovereignty" 
            subtitle="Your data never leaves your device unencrypted. We provide the pipes, you hold the water."
            delay={0.1}
          >
             <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center">
                <Lock className="text-slate-300 w-6 h-6" />
             </div>
          </FeatureCard>

          {/* Card 3: Zero Amnesia */}
          <FeatureCard 
            title="Zero Amnesia" 
            subtitle="Infinite context window retention. Search your entire conversation history instantly."
            delay={0.2}
          >
             <div className="relative h-16 w-full overflow-hidden mask-linear-fade">
               <div className="absolute left-0 top-2 flex space-x-2">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="h-12 w-1 bg-slate-700/50 rounded-full" style={{ height: Math.random() * 40 + 10 }} />
                 ))}
               </div>
               <History className="absolute right-0 top-0 text-slate-500 w-6 h-6" />
             </div>
          </FeatureCard>

          {/* Card 4: Enterprise Sync */}
          <FeatureCard 
            title="Enterprise Sync" 
            subtitle="R2 Cloud Mirroring for fail-safe redundancy across all your devices. End-to-end encrypted sync."
            colSpan="md:col-span-2"
            delay={0.3}
          >
            <div className="flex items-center space-x-8">
               <div className="flex flex-col items-center">
                  <Cpu className="text-nexus-cyan w-8 h-8 mb-2" />
                  <span className="text-[10px] font-mono text-slate-500">LOCAL</span>
               </div>
               <div className="flex-1 h-px bg-gradient-to-r from-nexus-cyan/50 to-nexus-accent/50 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-ping" />
               </div>
               <div className="flex flex-col items-center">
                  <Globe className="text-nexus-accent w-8 h-8 mb-2" />
                  <span className="text-[10px] font-mono text-slate-500">R2 MIRROR</span>
               </div>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
};