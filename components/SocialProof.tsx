import React from 'react';

export const SocialProof: React.FC = () => {
  const models = [
    "OPENAI", "ANTHROPIC", "GOOGLE DEEPMIND", "META AI", "MISTRAL"
  ];

  return (
    <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <p className="text-center text-xs font-mono text-slate-500 mb-6 tracking-[0.2em] uppercase">
          Unified Intelligence Layer
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {models.map((model) => (
            <span key={model} className="text-sm md:text-base font-bold text-slate-300 font-sans tracking-tight">
              {model}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};