"use client";

import React from 'react';
import { Heart, Brain, ShieldCheck, GraduationCap, Sun, Cloud, Star } from 'lucide-react';

export default function WhyChooseUsSection() {
  
  const benefits = [
    {
      title: 'Caring Teachers',
      description: 'Educators who double as mentors, nurturing every child with patience.',
      icon: <Heart className="w-8 h-8 text-rose-500" />, 
      bg: 'bg-rose-50', 
      border: 'border-rose-100',
      hoverBorder: 'group-hover:border-rose-300',
      shadow: 'group-hover:shadow-rose-100',
    },
    {
      title: 'Creative Learning',
      description: 'Moving beyond textbooks with play-based and inquiry-driven methods.',
      icon: <Brain className="w-8 h-8 text-amber-600" />,
      bg: 'bg-amber-50', 
      border: 'border-amber-100',
      hoverBorder: 'group-hover:border-amber-300',
      shadow: 'group-hover:shadow-amber-100',
    },
    {
      title: 'Safe Campus',
      description: '24/7 CCTV, gated entry, and background-verified staff for 100% safety.',
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      bg: 'bg-green-50', 
      border: 'border-green-100',
      hoverBorder: 'group-hover:border-green-300',
      shadow: 'group-hover:shadow-green-100',
    },
    {
      title: 'Holistic Growth',
      description: 'Focusing on confidence, public speaking, and emotional intelligence.',
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      bg: 'bg-blue-50', 
      border: 'border-blue-100',
      hoverBorder: 'group-hover:border-blue-300',
      shadow: 'group-hover:shadow-blue-100',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white font-sans">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-10 left-10 text-amber-200 animate-bounce-slow opacity-60"><Sun size={64} /></div>
      <div className="absolute bottom-20 right-10 text-blue-100 opacity-60"><Cloud size={80} fill="currentColor" /></div>
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        
        {/* Headline */}
        <div className="mb-16 md:mb-20">
            <span className="px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
               The Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-4">
            Why Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Trust Us?</span>
            </h2>
        </div>

        {/* Flex container with wrapping */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 lg:gap-12 relative">
          
          {/* Central Image (Kid/School Theme) */}
          {/* Mobile: Order 1 (Top), Desktop: Order 2 (Center) */}
          <div className="w-full md:w-auto flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative group w-64 h-64 lg:w-80 lg:h-80">
              
              {/* Animated Ring */}
              <div className="absolute inset-[-20px] border-2 border-dashed border-amber-300 rounded-full animate-[spin_12s_linear_infinite]" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl group-hover:bg-orange-400/30 transition-colors duration-500" />
              
              <div className="relative w-full h-full rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-white z-10">
                <img
                  src="/kidchess.jpg" 
                  alt="Happy Student"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 right-0 bg-white px-4 py-2 rounded-xl shadow-lg border border-amber-100 animate-bounce-slow z-20 flex items-center gap-2">
                 <Star size={18} className="text-amber-500 fill-amber-500" />
                 <span className="font-bold text-slate-800 text-sm">#1 Choice</span>
              </div>
            </div>
          </div>

          {/* Card 1: Caring Teachers */}
          <div className="w-full md:w-80 flex justify-center order-2 md:order-1 md:justify-end">
            <BenefitCard benefit={benefits[0]} />
          </div>

          {/* Card 2: Creative Learning */}
          <div className="w-full md:w-80 flex justify-center order-3 md:order-3 md:justify-start">
            <BenefitCard benefit={benefits[1]} />
          </div>

          {/* Card 3: Safe Campus */}
          <div className="w-full md:w-80 flex justify-center order-4 md:order-4 md:justify-end">
            <BenefitCard benefit={benefits[2]} />
          </div>

          {/* Card 4: Holistic Growth */}
          <div className="w-full md:w-80 flex justify-center order-5 md:order-5 md:justify-start">
            <BenefitCard benefit={benefits[3]} />
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Card with Hover Animation
function BenefitCard({ benefit }: { benefit: any }) {
  return (
    <div
      className={`
        group p-8 rounded-[2rem] bg-white text-center border-2
        w-full max-w-sm md:max-w-none transition-all duration-300 ease-out relative overflow-hidden
        hover:scale-105 hover:-translate-y-2 cursor-default shadow-sm hover:shadow-xl
        ${benefit.border} ${benefit.hoverBorder} ${benefit.shadow}
      `}
    >
      {/* Icon Circle */}
      <div
        className={`
          mb-6 mx-auto flex items-center justify-center rounded-2xl w-16 h-16 
          transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 
          ${benefit.bg}
        `}
      >
        {benefit.icon}
      </div>

      <h3 className="text-xl font-black mb-3 text-slate-900">
        {benefit.title}
      </h3>
      
      <p className="text-sm leading-relaxed font-medium text-slate-500">
        {benefit.description}
      </p>
    </div>
  );
}