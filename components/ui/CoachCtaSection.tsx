"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, Star, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';

const CoachCtaSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 bg-slate-50 font-sans overflow-hidden">
      
      {/* --- Background Texture (Scientific) --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-100/40 -skew-x-12 translate-x-32 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-white/50 overflow-hidden flex flex-col lg:flex-row">
          
          {/* --- LEFT: Content Area --- */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 font-bold text-xs uppercase tracking-widest mb-6">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Ex-MOE Expert Guidance</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.15]">
              Learn from the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                Master Educator.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-lg">
              Learning accelerates when you have the right mentor. Mr. Chew combines decades of <strong>Physics rigor</strong> with <strong>Chess strategy</strong> to tailor every session to your child's learning style.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-10">
              {[
                "Ex-MOE & NIE-Trained Specialist",
                "FIDE Certified Chess Instructor",
                "Customized MI-Based Learning Roadmap"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full group bg-slate-900 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1">
                  Book Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <button className="w-full bg-white border-2 border-slate-200 text-slate-700 font-bold py-4 px-8 rounded-xl hover:border-teal-500 hover:text-teal-700 transition-all">
                  View Profile
                </button>
              </Link>
            </div>
          </div>

          {/* --- RIGHT: Image / Visual Area --- */}
          <div className="w-full lg:w-2/5 relative min-h-[400px] lg:min-h-full bg-slate-100">
            {/* Main Image */}
            <img 
              src="/certificate.jpg" 
              alt="Mr. Chew Teaching" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay Gradient (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

            {/* Floating 'Top Rated' Badge */}
            <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-[float_4s_ease-in-out_infinite]">
               <div className="flex items-center gap-1 mb-1 justify-center">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
               </div>
               <p className="text-[10px] font-bold text-slate-800 uppercase tracking-wide text-center">Top Rated Tutor</p>
            </div>

            {/* Floating 'Result' Badge */}
            <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_1s]">
               <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                  <Trophy className="w-5 h-5" />
               </div>
               <div>
                  <p className="text-sm font-black text-slate-900">Proven Results</p>
                  <p className="text-xs text-slate-500 font-bold">95% Distinction</p>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CoachCtaSection;