import React, { useState } from 'react';
import { VaultCapacityRing } from './VaultCapacityRing';
import { Shield, HardDrive, FileText, Settings, LogOut, Plus, AlertOctagon, Database, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Dashboard: React.FC = () => {
  // System Constants
  const BASE_QUOTA = 50 * 1024 * 1024 * 1024; // 50GB
  const ADDON_UNIT_SIZE = 100 * 1024 * 1024 * 1024; // 100GB
  
  // State Simulation
  const [usedBytes, setUsedBytes] = useState(42 * 1024 * 1024 * 1024); // Start at 42GB
  const [addonBlocks, setAddonBlocks] = useState(0);
  const [simulateReadOnly, setSimulateReadOnly] = useState(false);
  const [isAgencyAdmin, setIsAgencyAdmin] = useState(false);

  const handleAddBlock = () => {
    // Simulate Stripe Checkout Success
    setAddonBlocks(prev => prev + 1);
    setSimulateReadOnly(false);
    alert("Transaction Successful: Storage Block Added.");
  };

  const handleSimulateUpload = () => {
    // Add 5GB
    setUsedBytes(prev => prev + (5 * 1024 * 1024 * 1024));
  };

  const handleReset = () => {
    setUsedBytes(42 * 1024 * 1024 * 1024);
    setAddonBlocks(0);
    setSimulateReadOnly(false);
    setIsAgencyAdmin(false);
  };

  // Logic for Read-Only Mode enforcement
  // If user has cancelled addon (simulated by toggle) but usage > base
  const totalCapacity = BASE_QUOTA + (addonBlocks * ADDON_UNIT_SIZE);
  const effectiveReadOnly = simulateReadOnly || (usedBytes > totalCapacity);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center">
              <Shield className="w-6 h-6 mr-3 text-nexus-cyan" />
              Sovereign Vault
            </h1>
            <p className="text-slate-400 text-sm mt-1 font-mono">ID: NXS-8821-ALPHA // ENCRYPTED</p>
          </div>
          <div className="flex items-center space-x-4">
             {isAgencyAdmin && (
               <a 
                href="#agency"
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors text-sm"
               >
                 <Briefcase className="w-4 h-4 text-nexus-accent" />
                 <span>Agency Portal</span>
               </a>
             )}
             <button onClick={handleReset} className="text-xs text-slate-500 hover:text-white underline">Reset Simulation</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Column 1: Capacity & Quota Management */}
          <div className="lg:col-span-1">
            <motion.div 
              layout
              className="glass-panel rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
                <span className="text-sm font-bold text-white">Storage Controller</span>
                <div className="flex items-center space-x-2">
                   <div className={`w-2 h-2 rounded-full ${effectiveReadOnly ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`} />
                   <span className="text-[10px] font-mono text-slate-400">{effectiveReadOnly ? 'LOCKED' : 'ONLINE'}</span>
                </div>
              </div>
              
              <VaultCapacityRing 
                usedBytes={usedBytes}
                baseQuota={BASE_QUOTA}
                addonBlocks={addonBlocks}
                addonUnitSize={ADDON_UNIT_SIZE}
                onAddBlock={handleAddBlock}
                isReadOnly={effectiveReadOnly}
              />

              {/* Simulation Controls (Debug Panel) */}
              <div className="p-6 bg-black/20 border-t border-white/5 space-y-4">
                 <p className="text-xs font-mono text-slate-500 uppercase mb-2">Simulation Controls</p>
                 
                 <button 
                   onClick={handleSimulateUpload}
                   disabled={effectiveReadOnly}
                   className="w-full py-2 px-3 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-xs text-slate-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   <HardDrive className="w-3 h-3 mr-2" />
                   Simulate 5GB Ingestion
                 </button>

                 <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-slate-400">Force Cancel Add-ons</span>
                    <button 
                      onClick={() => setSimulateReadOnly(!simulateReadOnly)}
                      className={`w-10 h-5 rounded-full relative transition-colors ${simulateReadOnly ? 'bg-red-500' : 'bg-slate-700'}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${simulateReadOnly ? 'left-6' : 'left-1'}`} />
                    </button>
                 </div>
                 {simulateReadOnly && (
                   <p className="text-[10px] text-red-400 mt-1">
                     *Simulates user cancelling sub while over base quota.
                   </p>
                 )}

                 <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-2">
                    <span className="text-xs text-slate-400">Agency Admin Role</span>
                    <button 
                      onClick={() => setIsAgencyAdmin(!isAgencyAdmin)}
                      className={`w-10 h-5 rounded-full relative transition-colors ${isAgencyAdmin ? 'bg-nexus-accent' : 'bg-slate-700'}`}
                    >
                      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${isAgencyAdmin ? 'left-6' : 'left-1'}`} />
                    </button>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2 & 3: File System Placeholder */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Context Stats */}
            <div className="grid grid-cols-3 gap-4">
               {[
                 { label: 'Vectors', val: '14.2M', icon: Database },
                 { label: 'Documents', val: '8,420', icon: FileText },
                 { label: 'Memories', val: '1,024', icon: HardDrive }
               ].map((stat, i) => (
                 <div key={i} className="glass-panel p-4 rounded-xl flex items-center space-x-4">
                    <div className="p-2 bg-nexus-900 rounded-lg">
                      <stat.icon className="w-5 h-5 text-nexus-cyan" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{stat.val}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                 </div>
               ))}
            </div>

            {/* Read Only Warning Banner */}
            <AnimatePresence>
              {effectiveReadOnly && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start space-x-4"
                >
                  <AlertOctagon className="w-6 h-6 text-red-500 shrink-0" />
                  <div>
                    <h3 className="text-red-500 font-bold text-sm">Vault Locked: Read-Only Mode</h3>
                    <p className="text-red-400/80 text-sm mt-1">
                      Your storage exceeds your licensed quota. You cannot upload new documents or generate new memories until you add storage blocks or delete existing data.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Recent Files List */}
            <div className="glass-panel rounded-xl overflow-hidden min-h-[400px]">
               <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
                 <h3 className="font-bold text-white">Recent Ingestion</h3>
                 <button className="text-nexus-cyan text-xs font-mono hover:text-nexus-accent transition-colors">VIEW ALL</button>
               </div>
               <div className="p-2">
                 {[1,2,3,4,5].map((i) => (
                   <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-4 h-4 text-slate-500 group-hover:text-nexus-cyan transition-colors" />
                        <div>
                           <div className="text-sm text-slate-300 group-hover:text-white">Financial_Report_Q3_{2024+i}.pdf</div>
                           <div className="text-[10px] text-slate-600 font-mono">AES-256 • 12MB • Synced</div>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-600 font-mono">
                        {10 + i}m ago
                      </div>
                   </div>
                 ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
