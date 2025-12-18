"use client";

import React from 'react';
import { Award, Brain, BookOpen, HeartHandshake } from 'lucide-react';

export default function WhyChooseUsSection() {
  
  // Theme Colors: Amber & Slate for Academy Look
  const colors = {
    textDark: '#0f172a',          // slate-900
    textMuted: '#475569',         // slate-600
    cardBorder: '#fcd34d',        // amber-300 (Subtle border)
  };

  const benefits = [
    {
      title: 'Expert Faculty',
      description: 'Qualified CBSE educators & certified trainers for Robotics, Chess, and Abacus.',
      icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-amber-600" />, 
      bgClass: 'bg-amber-50', 
      accentClass: 'bg-amber-500', 
    },
    {
      title: 'Holistic Growth',
      description: 'We balance academic rigor with creative skill-building for 360° development.',
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />,
      bgClass: 'bg-yellow-50',
      accentClass: 'bg-yellow-500',
    },
    {
      title: 'Proven Track Record',
      description: 'Consistently producing school toppers and national-level competition winners.',
      icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />,
      bgClass: 'bg-orange-50',
      accentClass: 'bg-orange-500',
    },
    {
      title: 'Individual Focus',
      description: 'Small batch sizes ensure every student gets the personalized attention they need.',
      icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 text-amber-700" />,
      bgClass: 'bg-amber-100',
      accentClass: 'bg-amber-600',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white font-sans">
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Warm Abstract Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-amber-100/60 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-yellow-100/60 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Parents Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Aacharya</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            We don't just teach subjects; we build character, confidence, and cognitive skills for the future.
          </p>
        </div>

        {/* Flex container with wrapping */}
        <div className="flex flex-col xl:flex-row flex-wrap justify-center items-center gap-8 xl:gap-0 relative">
          
          {/* 
             LAYOUT LOGIC:
             - On Desktop (XL): Cards are positioned relative to the center image using flex-order or absolute mimicking.
             - Here we use a Grid-like Flex layout for easier responsiveness.
          */}

          {/* LEFT COLUMN CARDS */}
          <div className="flex flex-col gap-6 w-full xl:w-1/3 order-2 xl:order-1">
             <BenefitCard benefit={benefits[0]} colors={colors} align="right" />
             <BenefitCard benefit={benefits[1]} colors={colors} align="right" />
          </div>

          {/* CENTRAL IMAGE */}
          <div className="w-full xl:w-1/3 flex justify-center items-center order-1 xl:order-2 mb-8 xl:mb-0">
            <div className="relative group cursor-default">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-amber-200 rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Central Visual: You can replace '/central.png' with a composite image of Books + Chess Piece + Robot */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-b from-amber-50 to-white rounded-full border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                 {/* Placeholder for the central graphic */}
                 <img 
                   src="/table.jpg" 
                   alt="Aacharya Academy Holistic Learning" 
                   className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                 />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN CARDS */}
          <div className="flex flex-col gap-6 w-full xl:w-1/3 order-3 xl:order-3">
             <BenefitCard benefit={benefits[2]} colors={colors} align="left" />
             <BenefitCard benefit={benefits[3]} colors={colors} align="left" />
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function BenefitCard({ benefit, colors, align }: any) {
  // Mobile alignment is always center, Desktop depends on prop
  const alignmentClass = align === 'right' ? 'xl:text-right xl:items-end' : 'xl:text-left xl:items-start';
  const flexDirection = align === 'right' ? 'xl:flex-row-reverse' : 'xl:flex-row';

  return (
    <div
      className={`
        group relative bg-white p-6 rounded-2xl shadow-lg border border-slate-100
        flex flex-col items-center text-center gap-4
        ${alignmentClass} ${flexDirection}
        transition-all duration-300 hover:shadow-xl hover:border-amber-200 hover:-translate-y-1
      `}
    >
      {/* Icon Circle */}
      <div
        className={`shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow-inner ${benefit.bgClass} group-hover:scale-110 transition-transform duration-300`}
      >
        {benefit.icon}
      </div>

      <div>
        <h3
          className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-amber-600"
          style={{ color: colors.textDark }}
        >
          {benefit.title}
        </h3>
        
        <p 
          className="text-sm leading-relaxed font-medium" 
          style={{ color: colors.textMuted }}
        >
          {benefit.description}
        </p>
      </div>
    </div>
  );
}