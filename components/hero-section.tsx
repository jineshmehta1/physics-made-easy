"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  BookOpen,      // For Academics
  BrainCircuit,  // For Abacus/Mental Math
  Bot,           // For Robotics
  Gamepad2,      // For Chess/Games
  Star, 
  CheckCircle2,
  GraduationCap
} from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex items-center pt-12 pb-16 lg:pt-6 lg:pb-32 overflow-hidden font-sans">
      
      {/* --- BACKGROUND DECORATION --- */}
      {/* 1. Warm Gradient Mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      {/* 2. Geometric Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: Content --- */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-bold text-xs tracking-wide uppercase mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              Admissions Open for 2024-25
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-extrabold text-slate-900 tracking-tight">
              Where <span className="text-amber-600">Academic Excellence</span> <br className="hidden md:block" />
              Meets Future Skills.
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Aacharya Academy bridges the gap between traditional schooling and modern skill mastery. From <strong>CBSE Curriculum</strong> to <strong>Robotics, Abacus, & Chess</strong> — we shape complete personalities.
            </p>

            {/* Feature Pills (Replacing the old grid) */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: BookOpen, label: "Primary Schooling" },
                { icon: BrainCircuit, label: "Abacus & Vedic Math" },
                { icon: Bot, label: "Robotics & AI" },
                { icon: Gamepad2, label: "Professional Chess" },
                { icon: BookOpen, label: "CBSE Coaching" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-lg text-sm font-semibold text-slate-700 hover:border-amber-300 transition-colors cursor-default">
                  <item.icon size={18} className="text-amber-500" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-amber-500/20 hover:bg-amber-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-xl font-bold text-lg hover:border-amber-500 hover:text-amber-600 transition-all duration-300">
                Explore Courses
              </button>
            </div>

            {/* Stat / Social Proof */}
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 pt-2">
              <div className="flex text-amber-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span>Trusted by 500+ Parents for holistic development.</span>
            </div>

          </div>

          {/* --- RIGHT COLUMN: Image & Floating Cards --- */}
          <div className={`lg:col-span-5 relative mt-12 lg:mt-0 lg:h-[600px] flex items-center justify-center transition-all duration-1000 delay-300 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Background Blob for Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-yellow-50 rounded-[3rem] -rotate-6 scale-90 -z-10 border border-amber-100/50"></div>

            {/* Main Image Container */}
            <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-4 border-white">
              <img 
                src="/hero.jpg" // Use a photo showing a kid studying or with a robot if available, otherwise general happy student
                alt="Student learning at Aacharya Academy"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card 1: Academics */}
            <div className="absolute top-10 -left-4 md:-left-12 bg-white p-4 rounded-xl shadow-lg border border-slate-50 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Program</p>
                <p className="text-sm font-bold text-slate-800">Primary School</p>
              </div>
            </div>

            {/* Floating Card 2: Skills */}
            <div className="absolute bottom-20 -right-4 md:-right-8 bg-white p-4 rounded-xl shadow-lg border border-slate-50 flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_1s]">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">Skill</p>
                <p className="text-sm font-bold text-slate-800">Robotics & AI</p>
              </div>
            </div>

             {/* Floating Card 3: Success */}
             <div className="absolute bottom-6 left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />
                <span className="text-xs font-bold text-slate-700">100% Student Focus</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}