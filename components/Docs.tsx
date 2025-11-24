import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle } from 'lucide-react';

export const Docs: React.FC = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center space-x-2 text-nexus-cyan mb-4">
            <Terminal className="w-5 h-5" />
            <span className="font-mono text-sm uppercase tracking-wider">Documentation v1.0</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Getting Started</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Initialize your secure cognitive environment in three steps. Nexus is designed to be drop-in ready for macOS and Windows 11.
          </p>
        </motion.div>

        <div className="space-y-8">
          {[
            {
              step: "01",
              title: "Install Core Binary",
              content: "Download the executable from the home page. Drag into Applications. On first launch, allow MacOS security privileges (Apple Silicon Optimized)."
            },
            {
              step: "02",
              title: "Create Master PIN",
              content: "Your Master PIN encrypts the local SQLite vector database. If you lose this PIN, your data is unrecoverable. We do not store a backup."
            },
            {
              step: "03",
              title: "Connect Intelligence",
              content: "Navigate to Settings > Switchboard. Enter your OpenAI or Anthropic API key, or enable 'Local Llama' to run completely offline."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="glass-panel p-8 rounded-xl border-l-4 border-l-nexus-accent"
            >
              <div className="flex items-start">
                <div className="text-4xl font-mono font-bold text-white/10 mr-6">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-nexus-900/50 p-6 rounded-lg border border-yellow-500/20 flex items-start space-x-4">
           <CheckCircle className="text-yellow-500 w-6 h-6 shrink-0" />
           <div>
             <h4 className="text-yellow-500 font-bold mb-1">Security Note</h4>
             <p className="text-sm text-slate-400">Nexus creates a sandboxed environment. Files dragged into the Nexus Vault are duplicated and encrypted. Deleting the source file does not delete the Vault copy.</p>
           </div>
        </div>
      </div>
    </section>
  );
};