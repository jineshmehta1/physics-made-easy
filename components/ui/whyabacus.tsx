"use client";

import React from 'react';
import { Zap, Brain, Target, Puzzle, Sparkles } from 'lucide-react';

export default function WhyChooseAbacusSection() {
  
  // Theme Colors: Amber & Slate (Math/Brain Theme)
  const colors = {
    primaryAmber: '#d97706',      // amber-600
    textDark: '#0F172A',          // slate-900
    textMuted: '#475569',         // slate-600
    cardBg: '#FFFFFF',            // white
    cardBorder: '#fbbf24',        // amber-400
  };

  const benefits = [
    {
      title: 'Lightning Speed',
      description: 'Students learn to calculate math problems faster than a calculator with 100% accuracy.',
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />, 
      bgClass: 'bg-amber-50', 
      accentClass: 'bg-amber-500', 
    },
    {
      title: 'Whole Brain Dev',
      description: 'Activates both left (logical) and right (creative) hemispheres of the brain simultaneously.',
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8 text-rose-600" />,
      bgClass: 'bg-rose-50',
      accentClass: 'bg-rose-500',
    },
    {
      title: 'Laser Concentration',
      description: 'Improves listening skills and focus span, helping children excel in all academic subjects.',
      icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
      bgClass: 'bg-blue-50',
      accentClass: 'bg-blue-500',
    },
    {
      title: 'Photographic Memory',
      description: 'Enhances visualization skills, allowing kids to "see" numbers and retain information longer.',
      icon: <Puzzle className="w-6 h-6 md:w-8 md:h-8 text-emerald-600" />,
      bgClass: 'bg-emerald-50',
      accentClass: 'bg-emerald-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 font-sans">
      
      {/* Background: Math/Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Abstract Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-200/40 rounded-full blur-3xl filter opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-rose-200/40 rounded-full blur-3xl filter opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 md:mb-16 text-slate-900 tracking-tight">
          Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Abacus Program?</span>
        </h2>

        {/* Flex container with wrapping */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 relative">
          
          {/* Central Image (Abacus Theme) */}
          {/* Mobile: Order 1 (Top), Desktop: Order 2 (Center) */}
          <div className="w-full md:w-auto flex justify-center items-center order-1 md:order-2 group cursor-default mb-4 md:mb-0">
            <div className="relative">
              {/* Spinning Ring */}
              <div className="absolute inset-[-10px] border-2 border-dashed border-amber-300 rounded-full animate-[spin_10s_linear_infinite]" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl group-hover:bg-rose-400/30 transition-colors duration-500" />
              
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white">
                <img
                  src="/kidabacus.jpg" 
                  alt="Kid doing mental math"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 right-0 bg-white px-4 py-2 rounded-xl shadow-lg border border-amber-100 animate-bounce-slow flex items-center gap-2">
                 <Sparkles size={18} className="text-amber-500 fill-amber-500" />
                 <span className="font-bold text-slate-800 text-xs uppercase tracking-wide">Genius Mode</span>
              </div>
            </div>
          </div>

          {/* Card 1: Speed */}
          <div className="w-full md:w-80 flex justify-center order-2 md:order-1 md:justify-end">
            <BenefitCard benefit={benefits[0]} colors={colors} />
          </div>

          {/* Card 2: Brain Dev */}
          <div className="w-full md:w-80 flex justify-center order-3 md:order-3 md:justify-start">
            <BenefitCard benefit={benefits[1]} colors={colors} />
          </div>

          {/* Card 3: Focus */}
          <div className="w-full md:w-80 flex justify-center order-4 md:order-4 md:justify-end">
            <BenefitCard benefit={benefits[2]} colors={colors} />
          </div>

          {/* Card 4: Memory */}
          <div className="w-full md:w-80 flex justify-center order-5 md:order-5 md:justify-start">
            <BenefitCard benefit={benefits[3]} colors={colors} />
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Card with Hover Animation
function BenefitCard({ benefit, colors }: any) {
  return (
    <div
      className="
        group p-6 md:p-8 rounded-[2rem] shadow-lg shadow-amber-900/5 flex flex-col items-center text-center border
        w-full max-w-sm md:max-w-none transition-all duration-300 ease-out relative overflow-hidden
        hover:scale-105 hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-2 cursor-pointer bg-white
      "
      style={{
        borderColor: '#f1f5f9', // Subtler border initially
      }}
    >
      {/* Top Border Accent */}
      <div className={`absolute top-0 left-0 w-full h-1.5 ${benefit.accentClass}`} />

      {/* Icon Circle */}
      <div
        className={`mb-4 md:mb-6 flex items-center justify-center rounded-2xl w-14 h-14 md:w-16 md:h-16 shadow-sm transition-transform duration-300 group-hover:scale-110 ${benefit.bgClass}`}
      >
        {benefit.icon}
      </div>

      <h3
        className="text-lg md:text-xl font-black mb-2 md:mb-3 transition-colors duration-300"
        style={{ color: colors.textDark }}
      >
        {benefit.title}
      </h3>
      
      <p 
        className="text-sm md:text-sm leading-relaxed font-medium" 
        style={{ color: colors.textMuted }}
      >
        {benefit.description}
      </p>
    </div>
  );
}