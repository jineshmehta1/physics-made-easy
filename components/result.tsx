"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target,         // For O Levels
  Trophy,         // For IB
  TrendingUp,     // For A Levels
  History,        // For Experience
  Star,
  CheckCircle2
} from "lucide-react";

export default function ResultsSection() {
  
  const stats = [
    {
      value: "95%",
      label: "GCE O Levels A/B",
      subtext: "Consistent Distinction",
      icon: Target,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    },
    {
      value: "95%",
      label: "IB HL Physics Grade 7",
      subtext: "Perfect Score Record",
      icon: Trophy,
      color: "text-amber-400",
      bg: "bg-amber-400/10"
    },
    {
      value: "80%",
      label: "A Levels H2 A/B",
      subtext: "High Distinction Rate",
      icon: TrendingUp,
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      value: "20+",
      label: "Years Experience",
      subtext: "Ex-MOE & NIE Trained",
      icon: History,
      color: "text-teal-400",
      bg: "bg-teal-400/10"
    },
  ];

  return (
    <section className="relative bg-slate-900 py-20 lg:py-24 overflow-hidden font-sans text-white">
      
      {/* --- Background Effects --- */}
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
      
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Star size={12} fill="currentColor" />
            Proven Excellence
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-4"
          >
            Outstanding Student Results
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Numbers don't lie. Our track record reflects the effectiveness of our unique teaching methodology combining Physics rigor with critical thinking.
          </motion.p>
        </div>

        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 hover:border-teal-500/50 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${stat.bg} ${stat.color}`}>
                <stat.icon size={28} />
              </div>

              {/* Number */}
              <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </div>

              {/* Label */}
              <h3 className={`text-lg font-bold mb-1 ${stat.color}`}>
                {stat.label}
              </h3>

              {/* Subtext */}
              <p className="text-slate-400 text-sm">
                {stat.subtext}
              </p>

              {/* Success Checkmark Decoration */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <CheckCircle2 size={18} className="text-slate-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}