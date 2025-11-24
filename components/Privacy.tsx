import React from 'react';
import { motion } from 'framer-motion';
import { Lock, EyeOff, FileCheck } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Zero-Knowledge Architecture</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We literally cannot see your data. Our business model is software licensing, not surveillance capitalism.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
           <div className="glass-panel p-8 rounded-2xl">
             <Lock className="w-10 h-10 text-nexus-cyan mb-6" />
             <h3 className="text-xl font-bold text-white mb-4">Local Vectorization</h3>
             <p className="text-slate-400">
               All document embedding happens on your CPU/GPU. When you upload a PDF, it is converted to vectors locally. The raw text is never sent to our servers.
             </p>
           </div>
           <div className="glass-panel p-8 rounded-2xl">
             <EyeOff className="w-10 h-10 text-nexus-accent mb-6" />
             <h3 className="text-xl font-bold text-white mb-4">Blind Sync</h3>
             <p className="text-slate-400">
               If you use Sovereign Cloud Sync, data is encrypted client-side before upload. We host the encrypted blob but hold no decryption keys.
             </p>
           </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-2xl font-bold text-white mb-4">Data Collection Policy</h3>
          <ul className="space-y-4 text-slate-400 list-disc pl-6 mb-8">
            <li>We collect email addresses for licensing and billing (Stripe).</li>
            <li>We collect app crash logs (telemetry) which can be disabled in Settings.</li>
            <li>We DO NOT collect prompts, conversation history, or file contents.</li>
            <li>We DO NOT sell data to third parties or model trainers.</li>
          </ul>
          
          <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center space-x-3 mb-2">
              <FileCheck className="text-green-400" />
              <span className="text-green-400 font-bold">GDPR & CCPA Compliant by Default</span>
            </div>
            <p className="text-sm text-green-200/70">
              Since we don't store your personal data, we have nothing to delete if you ask. It's all on your hard drive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};