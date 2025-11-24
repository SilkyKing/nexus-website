import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Key, Database } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="border-b border-white/10 pb-8 mb-12">
          <span className="font-mono text-xs text-nexus-accent uppercase tracking-widest">Technical Whitepaper</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Trust through Mathematics, not Policies.</h1>
          <p className="text-xl text-slate-400">
            Most AI companies ask you to trust their "Privacy Policy." At Nexus, we engineered a system where we do not need your trust.
          </p>
        </div>

        <div className="space-y-16">
          
          {/* Section 1: Local Ingestion */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-nexus-800 rounded-lg border border-white/10">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Local Ingestion</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Your documents are parsed, chunked, and embedded strictly on your local CPU. They never touch our servers in raw format. 
              We use a local instance of <strong>bge-m3</strong> for vector embedding, running entirely within the application sandbox.
            </p>
          </motion.div>

          {/* Section 2: Zero-Knowledge Cloud */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-nexus-800 rounded-lg border border-white/10">
                <Key className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Zero-Knowledge Cloud</h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              When you sync, we store a binary blob encrypted with your Master PIN. We (Nexus Bank Technology) hold the encrypted data, but we do not have the key.
            </p>
            <blockquote className="border-l-4 border-nexus-cyan pl-4 text-nexus-cyan italic my-6">
              "We literally cannot see your memories if we tried."
            </blockquote>
            <p className="text-slate-400 leading-relaxed">
               Syncing utilizes <strong>AES-256-GCM</strong> encryption performed client-side before upload to our R2 storage buckets.
            </p>
          </motion.div>

           {/* Section 3: Ephemeral Inference */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-nexus-800 rounded-lg border border-white/10">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Ephemeral Inference</h2>
            </div>
            <p className="text-slate-400 leading-relaxed">
              When interacting with GPT-4 or Claude, only the specifically relevant context fragments are sent. They are transiently processed and immediately discarded by the model providers via our zero-retention API agreements.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};