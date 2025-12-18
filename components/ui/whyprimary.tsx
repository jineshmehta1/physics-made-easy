"use client";

import React from 'react';
import { Heart, Brain, ShieldCheck, GraduationCap } from 'lucide-react';

export default function WhyChooseUsSection() {
  // Theme Colors: Amber & Slate
  const colors = {
    primaryAmber: '#d97706',      // amber-600
    textDark: '#0F172A',          // slate-900
    textMuted: '#475569',         // slate-600
    cardBg: '#FFFFFF',            // white
    cardBorder: '#fcd34d',        // amber-300
  };

  const benefits = [
    {
      title: 'Caring Teachers',
      description: 'Our educators are mentors who nurture every child with patience and love.',
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-500" />, 
      bgClass: 'bg-rose-50', 
      accentClass: 'bg-rose-500', 
    },
    {
      title: 'Creative Learning',
      description: 'We move beyond textbooks with play-based and inquiry-driven methods.',
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />,
      bgClass: 'bg-amber-50',
      accentClass: 'bg-amber-500',
    },
    {
      title: 'Safe Campus',
      description: '24/7 CCTV, gated entry, and background-verified staff for complete safety.',
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-green-600" />,
      bgClass: 'bg-green-50',
      accentClass: 'bg-green-500',
    },
    {
      title: 'Holistic Growth',
      description: 'Focusing on confidence, public speaking, and emotional intelligence.',
      icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
      bgClass: 'bg-blue-50',
      accentClass: 'bg-blue-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-amber-50/30 font-sans">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Abstract Blobs (Warm Colors) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-200/40 rounded-full blur-3xl filter opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-orange-200/40 rounded-full blur-3xl filter opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 md:mb-16 text-slate-900 tracking-tight">
          Why Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Trust Us?</span>
        </h2>

        {/* Flex container with wrapping */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 relative">
          
          {/* Central Image (Kid/School Theme) */}
          {/* Mobile: Order 1 (Top), Desktop: Order 2 (Center) */}
          <div className="w-full md:w-auto flex justify-center items-center order-1 md:order-2 group cursor-default mb-4 md:mb-0">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl group-hover:bg-orange-400/30 transition-colors duration-500" />
              
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white">
                <img
                  src="/centerprimary.jpg" 
                  alt="Happy Student"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-2 right-2 bg-white px-4 py-2 rounded-xl shadow-lg border border-amber-100 animate-bounce-slow">
                 <span className="text-2xl">🌟</span>
              </div>
            </div>
          </div>

          {/* Card 1: Caring Teachers */}
          {/* Mobile: Order 2, Desktop: Order 1 (Left Top) */}
          <div className="w-full md:w-80 flex justify-center order-2 md:order-1 md:justify-end">
            <BenefitCard benefit={benefits[0]} colors={colors} />
          </div>

          {/* Card 2: Creative Learning */}
          {/* Mobile: Order 3, Desktop: Order 3 (Left Bottom) */}
          <div className="w-full md:w-80 flex justify-center order-3 md:order-3 md:justify-start">
            <BenefitCard benefit={benefits[1]} colors={colors} />
          </div>

          {/* Card 3: Safe Campus */}
          {/* Mobile: Order 4, Desktop: Order 4 (Right Top) */}
          <div className="w-full md:w-80 flex justify-center order-4 md:order-4 md:justify-end">
            <BenefitCard benefit={benefits[2]} colors={colors} />
          </div>

          {/* Card 4: Holistic Growth */}
          {/* Mobile: Order 5, Desktop: Order 5 (Right Bottom) */}
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
        borderColor: colors.cardBorder,
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