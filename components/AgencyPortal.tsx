import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Palette, Layout, Save, Search, MessageSquare, Settings, Shield, Hexagon } from 'lucide-react';

export const AgencyPortal: React.FC = () => {
  const [config, setConfig] = useState({
    appName: 'Nexus Enterprise',
    primaryColor: '#3b82f6', // Default blue
    logoUrl: '' as string | null,
  });
  
  const [isSaving, setIsSaving] = useState(false);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setConfig({ ...config, logoUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API Call to POST /api/agency/config
    setTimeout(() => {
      setIsSaving(false);
      alert(`Configuration Published:\n\nJSON: ${JSON.stringify({ theme_config: { primary: config.primaryColor, logo_url: 's3://...', name: config.appName } }, null, 2)}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-nexus-950">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-6">
          <div className="flex items-center space-x-2 text-nexus-cyan mb-2">
            <Hexagon className="w-5 h-5" />
            <span className="font-mono text-sm uppercase tracking-wider">Agency Console</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Whitelabel Theming Studio</h1>
          <p className="text-slate-400 mt-2">Customize the desktop experience for your organization. Changes propagate to installed clients on next launch.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Controls */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Branding Section */}
            <div className="glass-panel p-6 rounded-xl">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center">
                <Layout className="w-5 h-5 mr-2 text-slate-400" />
                Identity
              </h2>

              <div className="space-y-6">
                {/* App Name */}
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Application Name</label>
                  <input 
                    type="text" 
                    value={config.appName}
                    onChange={(e) => setConfig({...config, appName: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-nexus-cyan focus:outline-none transition-colors"
                    placeholder="e.g. Acme Corp AI"
                  />
                </div>

                {/* Logo Upload */}
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase mb-2">App Logo (SVG/PNG)</label>
                  <div className="relative group">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center group-hover:border-nexus-cyan/50 transition-colors">
                      {config.logoUrl ? (
                        <div className="flex flex-col items-center">
                           <img src={config.logoUrl} alt="Preview" className="w-12 h-12 object-contain mb-2" />
                           <span className="text-xs text-green-400">New logo selected</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center text-slate-500">
                          <Upload className="w-8 h-8 mb-2" />
                          <span className="text-xs">Click to upload or drag and drop</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme Section */}
            <div className="glass-panel p-6 rounded-xl">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center">
                <Palette className="w-5 h-5 mr-2 text-slate-400" />
                Theme Configuration
              </h2>

              <div>
                <label className="block text-xs font-mono text-slate-500 uppercase mb-2">Primary Accent Color</label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="color" 
                    value={config.primaryColor}
                    onChange={(e) => setConfig({...config, primaryColor: e.target.value})}
                    className="w-12 h-12 rounded bg-transparent border border-white/10 cursor-pointer"
                  />
                  <input 
                    type="text" 
                    value={config.primaryColor}
                    onChange={(e) => setConfig({...config, primaryColor: e.target.value})}
                    className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white font-mono uppercase"
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="w-full py-4 bg-white text-nexus-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center space-x-2"
            >
              {isSaving ? (
                <span className="animate-pulse">Publishing Config...</span>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Publish Branding</span>
                </>
              )}
            </button>

          </div>

          {/* Right Column: Live Preview */}
          <div className="lg:col-span-8">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-500 uppercase">Desktop Client Preview (macOS)</span>
                <div className="flex space-x-1">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
              </div>

              {/* Mock Window */}
              <div className="w-full h-[600px] bg-[#0f111a] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex">
                
                {/* Sidebar Preview */}
                <div className="w-64 bg-[#0a0b10] border-r border-white/5 flex flex-col">
                   {/* App Header */}
                   <div className="h-16 flex items-center px-4 border-b border-white/5">
                      {config.logoUrl ? (
                        <img src={config.logoUrl} alt="Logo" className="w-8 h-8 rounded mr-3 object-contain" />
                      ) : (
                        <div 
                          className="w-8 h-8 rounded flex items-center justify-center mr-3 text-white font-bold"
                          style={{ backgroundColor: config.primaryColor }}
                        >
                          {config.appName.charAt(0)}
                        </div>
                      )}
                      <span className="font-bold text-white truncate text-sm">{config.appName}</span>
                   </div>

                   {/* Nav Items */}
                   <div className="p-4 space-y-1">
                      <div 
                        className="flex items-center px-3 py-2 rounded-md text-white text-sm font-medium"
                        style={{ backgroundColor: `${config.primaryColor}20`, color: config.primaryColor }}
                      >
                         <MessageSquare className="w-4 h-4 mr-3" />
                         Chat
                      </div>
                      <div className="flex items-center px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors">
                         <Search className="w-4 h-4 mr-3" />
                         Memory Search
                      </div>
                      <div className="flex items-center px-3 py-2 rounded-md text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors">
                         <Shield className="w-4 h-4 mr-3" />
                         Vault Status
                      </div>
                   </div>

                   <div className="mt-auto p-4 border-t border-white/5">
                      <div className="flex items-center px-3 py-2 text-slate-500 text-sm">
                         <Settings className="w-4 h-4 mr-3" />
                         Settings
                      </div>
                   </div>
                </div>

                {/* Content Preview */}
                <div className="flex-1 bg-gradient-to-br from-[#0f111a] to-[#1a1d2d] p-8 flex flex-col items-center justify-center opacity-50">
                   <div className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center" style={{ backgroundColor: `${config.primaryColor}20` }}>
                      <Hexagon className="w-8 h-8" style={{ color: config.primaryColor }} />
                   </div>
                   <h3 className="text-white font-medium">Welcome to {config.appName}</h3>
                   <p className="text-slate-500 text-sm mt-2">Secure Environment Initialized</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
