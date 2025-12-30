"use client";

import React from 'react';
import { Trophy, Award, Medal, Star, Target, Crown, CheckCircle2, TrendingUp, Atom } from 'lucide-react';

export default function AchievementsSection() {
  // --- Data based on Physics Made Easy context ---
  const stats = [
    { label: "O-Level A/B Grade", value: "95%", icon: <Target /> },
    { label: "IB HL Physics Gr. 7", value: "95%", icon: <Trophy /> },
    { label: "Years Experience", value: "20+", icon: <Award /> },
    { label: "FIDE Rated Coach", value: "Yes", icon: <Crown /> },
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Academic Excellence',
      subtitle: 'GCE O-Levels & IB',
      description: 'Maintained our streak of 95% A/B grades in O-Levels and 95% Grade 7 in IB HL Physics.',
      icon: <Star className="w-6 h-6 text-white" />,
      bg: "bg-slate-900",
      accent: "border-teal-500"
    },
    {
      year: '2023',
      title: 'FIDE Certification',
      subtitle: 'Strategic Pedagogy',
      description: 'Officially recognized as a FIDE Developmental Instructor, integrating chess strategy into physics tuition.',
      icon: <Crown className="w-6 h-6 text-slate-900" />,
      bg: "bg-teal-400",
      accent: "border-slate-900"
    },
    {
      year: '2015',
      title: 'Curriculum Innovation',
      subtitle: 'Multiple Intelligences',
      description: 'Pioneered the "MI Theory" approach in tuition, customizing lessons for Visual and Logical learners.',
      icon: <Atom className="w-6 h-6 text-white" />,
      bg: "bg-indigo-600",
      accent: "border-indigo-400"
    },
    {
      year: '2005',
      title: 'Foundation',
      subtitle: 'The Beginning',
      description: 'Established by Mr. Chew (PSC Scholar) with a mission to bridge the gap between rote learning and understanding.',
      icon: <Medal className="w-6 h-6 text-slate-900" />,
      bg: "bg-white",
      accent: "border-slate-200"
    },
  ];

  const certifications = [
    "Ex-MOE & NIE-Trained Teacher",
    "PSC Teaching Scholar (Physics)",
    "FIDE International Chess Instructor",
  ];

  return (
    <section className="relative py-20 bg-white font-sans overflow-hidden">
      
      {/* Background Texture (Scientific Grid) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* --- PART 1: HEADER & STATS BAR --- */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 items-end">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-100">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                Academic Mastery.
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed border-l-4 border-teal-500 pl-4">
              We don't just teach physics; we consistently produce top-tier results through our unique blend of scientific rigor and strategic thinking.
            </p>
          </div>

          {/* Floating Stats Card */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform group">
                  <div className="flex items-center gap-3 mb-2 text-teal-500 group-hover:text-indigo-600 transition-colors">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 24, strokeWidth: 2 })}
                  </div>
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- PART 2: MILESTONE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {milestones.map((item, index) => (
            <div 
              key={index} 
              className={`
                group relative p-1 rounded-2xl transition-all duration-300 hover:scale-105
                bg-gradient-to-b from-slate-100 to-white hover:from-teal-400 hover:to-indigo-500
              `}
            >
              <div className="h-full bg-white rounded-xl p-6 relative overflow-hidden border border-slate-100">
                
                {/* Year Tag */}
                <div className="absolute top-0 right-0 px-4 py-2 bg-slate-900 rounded-bl-xl text-white font-bold text-sm z-10">
                  {item.year}
                </div>

                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg ${item.bg}`}>
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">
                  {item.subtitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Bottom Bar */}
                <div className={`absolute bottom-0 left-0 w-full h-1 ${index % 2 === 0 ? 'bg-teal-500' : 'bg-indigo-500'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PART 3: CERTIFICATIONS STRIP --- */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Atom size={200} textAnchor="middle" fill="currentColor" className="text-teal-500" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Our Credentials</h3>
              <p className="text-slate-400 text-sm"> Recognized by Singapore's leading educational bodies.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 hover:bg-white/20 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}