import React from 'react';
import { ChevronLeft, Terminal, Download, Key, FolderInput } from 'lucide-react';

export const Documentation = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen flex bg-[#050505] text-white font-sans">
      
      {/* SIDEBAR */}
      <div className="hidden md:block w-64 fixed h-full border-r border-white/5 p-6 bg-black">
         <div className="text-xs font-mono text-[#24E0E8] mb-8">NEXUS // DOCS v1.0</div>
         <ul className="space-y-4 text-sm text-white/60">
            <li className="text-white font-bold">Quick Start</li>
            <li className="hover:text-[#24E0E8] cursor-pointer">Installation</li>
            <li className="hover:text-[#24E0E8] cursor-pointer">The Master Key</li>
            <li className="hover:text-[#24E0E8] cursor-pointer">Ingestion</li>
            <li className="mt-8 text-white font-bold">API Nexus</li>
            <li className="hover:text-[#24E0E8] cursor-pointer">Connecting GPT-4</li>
            <li className="hover:text-[#24E0E8] cursor-pointer">Local Llama</li>
         </ul>
      </div>

      {/* CONTENT */}
      <div className="md:ml-64 w-full p-8 md:p-16 max-w-5xl">
        <button onClick={onBack} className="flex items-center gap-2 text-white/50 hover:text-[#24E0E8] transition-colors mb-10">
            <ChevronLeft size={20} /> Return Home
        </button>

        <h1 className="text-4xl font-bold mb-10">Quick Start Guide</h1>

        {/* STEP 1 */}
        <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#24E0E8]/20 text-[#24E0E8] flex items-center justify-center font-bold">1</div>
                <h2 className="text-2xl font-bold">Installation</h2>
            </div>
            <p className="text-white/60 mb-6 ml-14">
                Download the installer for your architecture. Nexus is unsigned to maintain code sovereignty.
                If you see a Windows SmartScreen warning, click <b>"Run Anyway"</b>.
            </p>
            <div className="ml-14 p-4 bg-[#111] rounded-lg border border-white/10 font-mono text-sm text-[#24E0E8]">
                $ Initializing Core Runtime...<br/>
                $ Verifying Checksums... [OK]
            </div>
        </div>

        {/* STEP 2 */}
        <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#24E0E8]/20 text-[#24E0E8] flex items-center justify-center font-bold">2</div>
                <h2 className="text-2xl font-bold">The Master PIN</h2>
            </div>
            <p className="text-white/60 mb-6 ml-14">
                On first launch, you will define a Vault PIN. This generates your local encryption keys.
                <br/>
                <span className="text-red-400">WARNING: If you lose this PIN, we cannot recover your data.</span>
            </p>
        </div>

        {/* STEP 3 */}
        <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#24E0E8]/20 text-[#24E0E8] flex items-center justify-center font-bold">3</div>
                <h2 className="text-2xl font-bold">Feeding the Brain</h2>
            </div>
            <p className="text-white/60 mb-6 ml-14">
                Drag and drop any project folder (PDFs, Code, Text) onto the application window. 
                Nexus will locally index and vectorize the context.
            </p>
        </div>

      </div>
    </div>
  );
};
