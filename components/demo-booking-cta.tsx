"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Calendar
} from "lucide-react";

export default function CTASection() {
  
  const benefits = [
    "Free Skill Assessment Report",
    "1-on-1 Interaction with Expert Coach",
    "Personalized Learning Roadmap"
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-white font-sans overflow-hidden px-4 md:px-6">
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- Main Dark Card --- */}
        <div className="relative bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/30">
          
          {/* Background Effects inside Card */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
          
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 relative z-10">
            
            {/* --- LEFT: Content --- */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 font-bold text-xs uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Limited Slots Available</span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Unlock Your Child's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
                  True Potential.
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
                Take the first step towards holistic excellence. Whether it's Chess, Robotics, or Academics—experience the Aacharya difference today.
              </p>

              {/* Checkmarks */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bookdemo" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 text-slate-900 rounded-xl font-bold text-lg hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-1">
                    Book Free Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <Link href="tel:+919876543210" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-slate-700 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all hover:-translate-y-1">
                    <Phone className="w-5 h-5 text-amber-500" />
                    Call Us
                  </button>
                </Link>
              </div>

            </div>

            {/* --- RIGHT: Visual / Abstract Graphics --- */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-800/50 overflow-hidden">
              {/* Decorative Diagonal Stripes/Pattern */}
              <div className="absolute inset-0" 
                   style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 12px)' }}>
              </div>
              
              {/* Floating Card UI Mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[320px]">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-700">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                         <Calendar className="w-6 h-6 text-slate-900" />
                      </div>
                      <div>
                         <p className="text-white font-bold text-lg">Trial Session</p>
                         <p className="text-amber-400 text-sm">Free of Cost</p>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-white/20 rounded-full"></div>
                      <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                   </div>
                   <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                      <div className="flex -space-x-2">
                         {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-600"></div>)}
                      </div>
                      <span className="text-xs text-slate-300">Join 200+ today</span>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}