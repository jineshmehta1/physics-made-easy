"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Play, 
  Trophy, 
  Star, 
  Users, 
  CheckCircle2,
  Clock,
  ShieldCheck,
  Crown
} from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-50 flex items-center pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden font-sans">
      
      {/* BACKGROUND ELEMENTS */}
      
      {/* 1. Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* 2. Abstract Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-3xl filter opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-teal-200/40 rounded-full blur-3xl filter opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Copy & CTA (Span 6 columns) */}
          <div className={`lg:col-span-6 space-y-8 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-indigo-100 shadow-sm text-indigo-900 font-medium text-sm mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              New batch starting this weekend!
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-[4rem] leading-[1.1] font-display font-bold text-slate-900 tracking-tight">
              Turn your little <br/>
              thinker into a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 relative">
                Grandmaster
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400/80 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Value Props Grid */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Unlock your child's potential with world-class chess coaching. Boost concentration, strategy, and confidence in a fun, interactive online environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { icon: Trophy, text: "FIDE Rated Trainers" },
                 { icon: Clock, text: "Flexible Schedules" },
                 { icon: ShieldCheck, text: "Beginner Friendly" },
                 { icon: Users, text: "Small Batch Size" },
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                   <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <item.icon size={16} strokeWidth={2.5} />
                   </div>
                   {item.text}
                 </div>
               ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-900/20 hover:shadow-2xl hover:shadow-indigo-900/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Book Free Trial Class
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-indigo-200 hover:bg-indigo-50 transition-colors flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center pl-1 shadow-sm">
                   <Play size={14} fill="white" className="text-white" />
                 </div>
                 Watch Demo
              </button> */}
            </div>

            {/* Social Proof (Small) */}
            <div className="flex items-center gap-4 pt-2">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?u=chess${i}`} alt="user" className="w-10 h-10 rounded-full border-2 border-white" />
                 ))}
               </div>
               <div className="text-sm">
                 <div className="flex text-yellow-500 mb-0.5">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="text-slate-600 font-medium"><span className="text-slate-900 font-bold">4.9/5</span> from 2,000+ parents</p>
               </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Visual Composition (Span 6 columns) */}
          <div className={`lg:col-span-6 relative mt-12 lg:mt-0 transition-all duration-1000 delay-300 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* The Main "Card" - Simulating a Class Interface */}
            <div className="relative z-20 bg-white p-3 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 max-w-[550px] mx-auto rotate-1 hover:rotate-0 transition-transform duration-500">
               
               {/* Header of the fake interface */}
               {/* <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm py-2 px-6 rounded-full shadow-sm border border-slate-100 z-30 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-700 tracking-wide uppercase">Live Coaching • 05:23</span>
               </div> */}

               {/* Main Image */}
               <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden">
                  <img 
                    src="https://checkmatesensei.com/wp-content/uploads/2025/07/hero-chess-img.webp" 
                    alt="Happy kid playing chess"
                    className="object-cover w-full h-full"
                  />
                  
                  {/* Overlay Gradient at bottom */}
                  <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Student Name Tag */}
                  {/* <div className="absolute bottom-6 left-6 text-white">
                     <p className="text-sm font-medium opacity-90">Student</p>
                     <p className="text-xl font-bold">Alex (Age 9)</p>
                  </div> */}
               </div>



               {/* Floating Element 2: The Achievement (Bottom Left) */}
               <div className="absolute -right-6 top-6 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center gap-3 animate-float max-w-[220px]">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                     <Crown className="text-yellow-600 fill-yellow-600" size={24} />
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Achievement</p>
                     <p className="text-sm font-bold text-slate-900">Tournament Winner</p>
                  </div>
               </div>

            </div>

            {/* Decorative Piece behind the main card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] border-2 border-dashed border-indigo-200 rounded-[3rem] -rotate-2 -z-10"></div>
          
          </div>
        </div>
      </div>
    </section>
  );
}