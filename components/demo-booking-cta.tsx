"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  Atom
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-12 px-4 md:px-6 font-sans">
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* --- Main Compact Card --- */}
        <div className="relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/20 px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>

          {/* --- Left: Text Content --- */}
          <div className="relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={12} className="text-teal-400" />
              <span>Limited Slots for 2025</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
              Ready to Master <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                Physics & Chess?
              </span>
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto md:mx-0">
              Join Mr. Chew's classes today. Experience the Multiple Intelligences approach that guarantees results.
            </p>
          </div>

          {/* --- Right: Buttons --- */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            
            {/* WhatsApp / Book Button */}
            <Link href="https://wa.me/6597277419" target="_blank" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-all shadow-lg shadow-teal-900/20 hover:-translate-y-0.5">
                <MessageCircle size={18} />
                Book Trial Class
              </button>
            </Link>
            
            {/* View Courses Button */}
            <Link href="/courses" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-all hover:-translate-y-0.5">
                Explore Courses
                <ArrowRight size={18} className="text-slate-400 group-hover:text-white" />
              </button>
            </Link>
          </div>

          {/* Floating Atom Decor */}
          <div className="absolute -bottom-6 right-[20%] text-slate-800 opacity-30 animate-[spin_10s_linear_infinite] pointer-events-none hidden md:block">
            <Atom size={120} />
          </div>

        </div>
      </div>
    </section>
  );
}