"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Star 
} from "lucide-react";

export default function LeadInstructorSection() {
  
  const credentials = [
    "Ex-MOE, NIE-trained PSC Teaching Scholar",
    "UCLES A-Level Examiner",
    "H3 & Olympiad Trainer",
    "FIDE International Chess Instructor",
    "National Schools U16 Chess Champion"
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white font-sans overflow-hidden">
      
      {/* --- Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 skew-y-3 origin-top-left -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* --- LEFT: Image & Badge --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group w-full max-w-md lg:w-1/2"
          >
            {/* Image Frame */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white bg-white aspect-[3/4]">
              {/* REPLACE with actual photo of Mr. Chew */}
              <img 
                src="/image.png" 
                alt="Mr. Chew Kok Mun" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              {/* Name Tag on Image */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium opacity-90 uppercase tracking-widest mb-1">Lead Instructor</p>
                <h3 className="text-3xl font-black">Mr. Chew Kok Mun</h3>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
              <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                <Award size={28} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Experience</p>
                <p className="text-xl font-black text-slate-900">20+ Years</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: Content & Credentials --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} fill="currentColor" />
              Meet the Expert
            </div>
            
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Learn from a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                Master Educator.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mr. Chew combines decades of academic rigor with the strategic depth of a chess champion. His unique background allows him to explain complex physics concepts through logic, strategy, and real-world clarity.
            </p>

            {/* Credentials List */}
            <div className="space-y-4 mb-10">
              {credentials.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <p className="font-bold text-slate-800">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/about">
              <button className="group inline-flex items-center gap-3 text-lg font-bold text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-teal-600 hover:border-teal-600 transition-all">
                View Full Profile
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
}