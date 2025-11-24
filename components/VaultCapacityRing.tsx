import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Database, AlertTriangle, Cloud } from 'lucide-react';

interface VaultCapacityRingProps {
  usedBytes: number;
  baseQuota: number;
  addonBlocks: number;
  addonUnitSize: number;
  onAddBlock: () => void;
  isReadOnly: boolean;
}

export const VaultCapacityRing: React.FC<VaultCapacityRingProps> = ({
  usedBytes,
  baseQuota,
  addonBlocks,
  addonUnitSize,
  onAddBlock,
  isReadOnly
}) => {
  const totalCapacity = baseQuota + (addonBlocks * addonUnitSize);
  const usagePercent = Math.min((usedBytes / totalCapacity) * 100, 100);
  const isCritical = usagePercent > 90;
  const isOverLimit = usedBytes > totalCapacity;

  // Format bytes to GB/TB
  const formatSize = (bytes: number) => {
    const gb = bytes / (1024 * 1024 * 1024);
    if (gb >= 1000) return `${(gb / 1024).toFixed(1)}TB`;
    return `${gb.toFixed(1)}GB`;
  };

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (usagePercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-8 relative">
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Background Ring */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="160"
            cy="160"
            r={radius}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="12"
            fill="transparent"
          />
          {/* Progress Ring */}
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
            cx="160"
            cy="160"
            r={radius}
            stroke={isCritical || isOverLimit ? "#ef4444" : "#06b6d4"}
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeLinecap="round"
            className="drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-4xl font-mono font-bold text-white mb-1">
            {Math.round(usagePercent)}%
          </div>
          <div className="text-sm text-slate-400 font-mono">
            {formatSize(usedBytes)} / {formatSize(totalCapacity)}
          </div>
          
          {isReadOnly && (
             <div className="mt-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full flex items-center">
                <AlertTriangle className="w-3 h-3 text-red-500 mr-2" />
                <span className="text-[10px] text-red-400 uppercase tracking-wider font-bold">Read Only</span>
             </div>
          )}
        </div>
      </div>

      {/* Dynamic Actions */}
      <div className="w-full max-w-xs mt-4 space-y-4">
        <AnimatePresence>
          {(isCritical || isOverLimit) && !isReadOnly && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={onAddBlock}
              className="w-full group relative overflow-hidden bg-nexus-800 hover:bg-nexus-700 border border-nexus-accent/30 text-white py-3 rounded-lg flex items-center justify-center transition-all shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nexus-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Cloud className="w-4 h-4 mr-2 text-nexus-cyan" />
              <span className="font-medium text-sm">+ Add 100GB / $3</span>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                <Plus className="w-4 h-4 text-nexus-cyan" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {addonBlocks > 0 && (
           <div className="flex items-center justify-between text-xs text-slate-500 font-mono border-t border-white/5 pt-4 w-full">
              <span>ACTIVE ADD-ONS</span>
              <span className="text-nexus-cyan">{addonBlocks} x 100GB</span>
           </div>
        )}
      </div>
    </div>
  );
};