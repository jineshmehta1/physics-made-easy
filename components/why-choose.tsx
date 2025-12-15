"use client";

import React from 'react';
import { Award, TrendingUp, BookOpen, Users } from 'lucide-react';

export default function WhyChooseUsSection() {
  // Theme Colors (Adapted to Hero Theme: Slate/Indigo/Violet)
  const colors = {
    primaryIndigo: '#4F46E5',     // indigo-600
    textDark: '#0F172A',          // slate-900
    textMuted: '#475569',         // slate-600
    cardBg: '#FFFFFF',            // white
    cardBorder: '#E0E7FF',        // indigo-100
  };

  const benefits = [
    {
      title: 'Experienced Coaches',
      description: 'Learn from FIDE-rated masters with years of teaching experience.',
      icon: <Users className="w-8 h-8 text-indigo-600" />, // Hero style icon size/color
      bgClass: 'bg-indigo-50', // Background for icon
      accentClass: 'bg-indigo-500', // Top border accent
    },
    {
      title: 'Proven Results',
      description: 'Students achieve higher ratings and win tournaments consistently.',
      icon: <Award className="w-8 h-8 text-violet-600" />,
      bgClass: 'bg-violet-50',
      accentClass: 'bg-violet-500',
    },
    {
      title: 'Structured Curriculum',
      description: 'Progressive lessons tailored from beginner to grandmaster levels.',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      bgClass: 'bg-blue-50',
      accentClass: 'bg-blue-500',
    },
    {
      title: 'Supportive Community',
      description: 'Join a vibrant network of passionate chess learners.',
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
      bgClass: 'bg-teal-50',
      accentClass: 'bg-teal-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 font-sans">
      
      {/* Background Pattern (Matching Hero) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Abstract Blobs (Matching Hero Theme) */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-3xl filter opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-3xl filter opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        
        {/* Headline (Matching Hero Typography) */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-slate-900 tracking-tight">
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Us?</span>
        </h2>

        {/* Flex container with wrapping (Original Structure Kept) */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 relative">
          
          {/* Central Knight Image */}
          <div className="w-full sm:w-auto flex justify-center items-center order-1 sm:order-2 group cursor-pointer">
            <div className="relative">
              {/* Glow Effect behind Knight (Changed from Yellow/Red to Indigo/Violet) */}
              <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-violet-500/30 transition-colors duration-500" />
              
              <img
                src="/central-knight (2).png" // Ensure this image exists
                alt="Chess Knight"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain z-10 relative transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Card 1: Experienced Coaches */}
          <div className="w-full sm:w-80 flex justify-center order-2 sm:order-1 sm:justify-end">
            <BenefitCard benefit={benefits[0]} colors={colors} />
          </div>

          {/* Card 2: Proven Results */}
          <div className="w-full sm:w-80 flex justify-center order-3 sm:order-3 sm:justify-start">
            <BenefitCard benefit={benefits[1]} colors={colors} />
          </div>

          {/* Card 3: Structured Curriculum */}
          <div className="w-full sm:w-80 flex justify-center order-4 sm:order-4 sm:justify-end">
            <BenefitCard benefit={benefits[2]} colors={colors} />
          </div>

          {/* Card 4: Supportive Community */}
          <div className="w-full sm:w-80 flex justify-center order-5 sm:order-5 sm:justify-start">
            <BenefitCard benefit={benefits[3]} colors={colors} />
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Card with Hover Animation (Styled to match Hero)
function BenefitCard({ benefit, colors }: any) {
  return (
    <div
      className="
        group p-8 rounded-[2rem] shadow-xl shadow-indigo-900/10 flex flex-col items-center text-center border
        w-full transition-all duration-300 ease-out relative overflow-hidden
        hover:scale-105 hover:shadow-2xl hover:shadow-indigo-900/20 hover:-translate-y-2 cursor-pointer bg-white
      "
      style={{
        borderColor: colors.cardBorder,
      }}
    >
      {/* Top Border Accent */}
      <div className={`absolute top-0 left-0 w-full h-1.5 ${benefit.accentClass}`} />

      {/* Icon Circle (Matches Hero Icon Style) */}
      <div
        className={`mb-6 flex items-center justify-center rounded-2xl w-16 h-16 shadow-sm transition-transform duration-300 group-hover:scale-110 ${benefit.bgClass}`}
      >
        {benefit.icon}
      </div>

      <h3
        className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300"
        style={{ color: colors.textDark }}
      >
        {benefit.title}
      </h3>
      
      <p 
        className="text-sm sm:text-base leading-relaxed font-medium" 
        style={{ color: colors.textMuted }}
      >
        {benefit.description}
      </p>
    </div>
  );
}