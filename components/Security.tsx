import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Server, Trash2, ChevronLeft, FileCheck } from 'lucide-react';

export const Security = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 bg-[#050505] text-white">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-16">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/50 hover:text-[#24E0E8] transition-colors mb-8"
        >
            <ChevronLeft size={20} /> Back to Nexus
        </button>
        
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#24E0E8]/10 border border-[#24E0E8]/20 mb-6">
             <Lock size={16} className="text-[#24E0E8]" />
             <span className="text-xs font-mono text-[#24E0E8]">AUDIT LEVEL: SOVEREIGN</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Trust through <span className="text-[#24E0E8]">Mathematics</span>,<br/>
            not Policy.
        </h1>
        <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Most AI companies ask you to trust their Terms of Service. 
            Nexus architecture is designed so that we literally cannot access your data 
            even if compelled by law.
        </p>
      </div>

      {/* PROTOCOLS GRID */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-20">
        
        {/* CARD 1 */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#24E0E8]/30 transition-colors">
            <Server className="text-[#24E0E8] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Local Ingestion Protocol</h3>
            <p className="text-white/60 text-sm leading-relaxed">
                Documents (PDF, DOCX, Code) are parsed, chunked, and embedded strictly on your device's CPU. 
                The raw vectors never leave your machine unencrypted.
            </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#24E0E8]/30 transition-colors">
            <Shield className="text-[#24E0E8] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Zero-Knowledge Cloud</h3>
            <p className="text-white/60 text-sm leading-relaxed">
                When sync is enabled, data is encrypted with AES-256-GCM using a key derived from your 
                Local Master PIN. Nexus servers store the binary blob but lack the key to read it.
            </p>
        </div>
        
        {/* CARD 3 */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#24E0E8]/30 transition-colors">
            <Trash2 className="text-red-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Protocol Omega</h3>
            <p className="text-white/60 text-sm leading-relaxed">
                Cryptographic Shredding capability. Triggering 'Omega' overwrites the local key slots 
                with high-entropy noise and purges remote buckets instantly, making recovery mathematically impossible.
            </p>
        </div>

        {/* CARD 4 */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#24E0E8]/30 transition-colors">
            <Lock className="text-[#24E0E8] mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Ephemeral Inference</h3>
            <p className="text-white/60 text-sm leading-relaxed">
                We act as a blind proxy. When querying GPT-4 or Claude, only the specific context fragments 
                are sent. Data is transient and discarded by providers immediately after generation via API guarantees.
            </p>
        </div>

      </div>

      {/* DOWNLOAD AUDIT */}
      <div className="max-w-4xl mx-auto p-10 bg-gradient-to-r from-[#24E0E8]/10 to-transparent rounded-2xl border border-[#24E0E8]/20 flex items-center justify-between">
         <div>
            <h3 className="text-white font-bold text-lg">Technical Whitepaper (v1.2)</h3>
            <p className="text-white/60 text-sm">Detailed SHA-256 implementation specs.</p>
         </div>
         <button className="flex items-center gap-2 px-6 py-3 bg-[#24E0E8] text-black font-bold rounded-full hover:scale-105 transition-transform">
            <FileCheck size={18} /> Download PDF
         </button>
      </div>

    </div>
  );
};
