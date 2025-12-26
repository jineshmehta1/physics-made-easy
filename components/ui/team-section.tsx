"use client";

import React from 'react';
import { 
  Lightbulb,      // Big Ideas
  Layers,         // Scaffolding/Worked Examples
  BrainCircuit,   // Metacognition
  Globe,          // Real World
  BookOpen, 
  Atom            // Central Icon
} from 'lucide-react';

export default function TeachingPhilosophySection() {
  
  const pillars = [
    {
      title: "Deep Conceptual Understanding",
      description: "We move beyond rote memorization of formulas. Our focus is on the 'Big Ideas'—ensuring students grasp the fundamental principles governing the physical universe.",
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
      bg: "bg-amber-50/50",
      border: "border-amber-100",
      glow: "group-hover:shadow-amber-500/10"
    },
    {
      title: "Step-by-Step Scaffolding",
      description: "Complex problems are broken down into manageable logical steps using worked examples. This builds confidence and models the expert thinking process.",
      icon: <Layers className="w-8 h-8 text-teal-600" />,
      bg: "bg-teal-50/50",
      border: "border-teal-100",
      glow: "group-hover:shadow-teal-500/10"
    },
    {
      title: "Metacognitive Strategies",
      description: "We teach students 'how to think'—monitoring their own understanding, identifying gaps, and regulating their learning process for long-term retention.",
      icon: <BrainCircuit className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-50/50",
      border: "border-indigo-100",
      glow: "group-hover:shadow-indigo-500/10"
    },
    {
      title: "Real-World Application",
      description: "Physics isn't just abstract theory. We connect concepts to daily life—from how a car brakes to the physics behind climate change.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50/50",
      border: "border-blue-100",
      glow: "group-hover:shadow-blue-500/10"
    }
  ];

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
            <BookOpen className="w-4 h-4 text-teal-700" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">Our Methodology</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            Teaching for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              True Understanding.
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            At Physics Made Easy, we bridge the gap between abstract theory and concrete reality. Our philosophy blends scientific rigor with strategic thinking.
          </p>
        </div>

        {/* --- The Pillars Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Central Connecting Icon (Desktop) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full border-4 border-slate-50 z-20 items-center justify-center shadow-2xl shadow-indigo-100">
             <Atom className="w-10 h-10 text-teal-600 animate-[spin_10s_linear_infinite]" />
          </div>

          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className={`
                group relative p-8 rounded-[2rem] border ${pillar.border} bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${pillar.glow}
                ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}
              `}
            >
              {/* Background Blob */}
              <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${pillar.bg}`}></div>
              
              <div className={`relative z-10 flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                {/* Icon Box */}
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 bg-white
                  ${idx % 2 === 0 ? 'md:order-last md:mt-6 md:mb-0' : ''}
                `}>
                  {pillar.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* --- Bottom Statement --- */}
        <div className="mt-20 text-center">
           <div className="inline-block relative p-10 bg-slate-900 rounded-[2.5rem] text-white max-w-4xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl md:text-3xl font-serif italic mb-4 relative z-10">
                "Understanding core ideas and the ability to transfer them to new situations should be the twin goals of education."
              </h3>
              <p className="text-teal-400 font-bold text-sm uppercase tracking-widest relative z-10">
                — Our Philosophy
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}