"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  MessageSquare, 
  Globe,
  Calculator,
  ChevronRight
} from "lucide-react";

export default function LeadInstructorSection() {
  
  const credentials = [
    "Ex-MOE & NIE-trained Scholar",
    "NUS Math & English Minors",
    "Edinburgh Business School Cert",
    "FIDE International Chess Instructor"
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-white font-sans overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* --- LEFT: Compact Image Composition --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[400px] lg:w-5/12"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img 
                src="/image.png" 
                alt="Mr. Chew Kok Mun" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-black">Mr. Chew Kok Mun</h3>
                <p className="text-xs font-bold text-teal-400 uppercase tracking-widest">Lead Instructor</p>
              </div>
            </div>

            {/* Experience Badge (Tighter) */}
            <div className="absolute -top-4 -right-4 bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <Award className="text-teal-400 w-6 h-6" />
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Experience</p>
                <p className="text-lg font-black leading-none">20+ Yrs</p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: Scannable Content --- */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Academic Rigor Meets <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                  Strategic Clarity.
                </span>
              </h2>

              <p className="text-slate-600 text-lg mb-8 max-w-2xl">
                A <span className="text-slate-900 font-bold">PSC Teaching Scholar</span> with a unique multi-disciplinary background designed to help students master both logic and expression.
              </p>

              {/* --- The "Edge" Grid: This condenses your text significantly --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-2xl bg-teal-50 border border-teal-100 group hover:bg-teal-600 transition-colors duration-300">
                  <MessageSquare className="w-6 h-6 text-teal-600 mb-3 group-hover:text-white" />
                  <h4 className="font-bold text-slate-900 mb-1 group-hover:text-white">Communication Edge</h4>
                  <p className="text-sm text-slate-600 group-hover:text-teal-50 leading-snug">
                    Minors in <span className="font-bold">Math & English (NUS)</span> ensure complex physics is explained with absolute clarity.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-100 group hover:bg-indigo-600 transition-colors duration-300">
                  <Calculator className="w-6 h-6 text-indigo-600 mb-3 group-hover:text-white" />
                  <h4 className="font-bold text-slate-900 mb-1 group-hover:text-white">Practical Edge</h4>
                  <p className="text-sm text-slate-600 group-hover:text-indigo-50 leading-snug">
                    Post-Grad Cert from <span className="font-bold">Edinburgh (UK)</span> bridges classroom theory with real-world application.
                  </p>
                </div>
              </div>

              {/* Quick Credentials Chips */}
              <div className="flex flex-wrap gap-2 mb-10">
                {credentials.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                    <CheckCircle2 size={14} className="text-teal-600" />
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA and Links */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link href="/about" className="w-full sm:w-auto">
                  <button className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-600 transition-all shadow-lg shadow-slate-200">
                    View Full Profile <ArrowRight size={18} />
                  </button>
                </Link>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
                  <Globe size={16} />
                  <span>MOE & NIE TRAINED</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}