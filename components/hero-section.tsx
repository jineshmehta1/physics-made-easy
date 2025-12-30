"use client";

import React from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion"; // Added TargetAndTransition
import { 
  ArrowRight, 
  Atom,           
  Brain,          
  Trophy,         
  CheckCircle2,
  GraduationCap,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  
  // 1. Variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeInOut" } 
    }
  };

  // 2. Explicitly type as TargetAndTransition (removes the need for 'as const')
  const floatAnimation: TargetAndTransition = {
    y: [-10, 10, -10],
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  };

  const rotateAnimation: TargetAndTransition = {
    rotate: 360,
    transition: { 
      duration: 20, 
      repeat: Infinity, 
      ease: "linear" 
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-white flex items-center overflow-hidden font-sans pt-10 pb-20 lg:py-4">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-xs tracking-wide uppercase">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
              </span>
              Admissions Open: 2025 Intake
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-black text-slate-900 tracking-tight mb-4">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Physics.</span> <br />
                Conquer <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Chess.</span>
              </h1>
              <p className="text-xl font-semibold text-slate-700">
                With Multiple Intelligences (MI) Theory
              </p>
            </motion.div>

            {/* Subtext */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Led by <strong>Mr. Chew</strong> (Ex-MOE Scholar, NIE-Trained, FIDE Instructor). 
                We blend academic rigor with strategic thinking to help students ace <strong>O/A Levels, IB, & IGCSE</strong> exams.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {[ 
                { icon: Atom, label: "Pure/Combined Physics", color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-100" },
                { icon: Trophy, label: "FIDE Chess Coaching", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
                { icon: Brain, label: "Multiple Intelligences", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
                { icon: GraduationCap, label: "Career Skills", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-2 px-3 py-2 ${item.bg} ${item.border} border rounded-lg text-sm font-bold text-slate-700`}>
                  <item.icon size={16} className={item.color} />
                  {item.label}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-teal-600 hover:shadow-teal-600/20 transition-all duration-300">
                Book a Trial Class
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="tel:+6597277419" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-xl font-bold text-lg hover:border-teal-500 hover:text-teal-700 transition-all duration-300">
                <Phone size={18} />
                +65 9727 7419
              </Link>
            </motion.div>

            {/* Trust Indicator */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-2 border-t border-slate-100 mt-4 max-w-md">
               <div className="flex -space-x-3">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                       <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-500">S{i}</div>
                    </div>
                  ))}
               </div>
               <div className="text-sm">
                  <p className="font-bold text-slate-900">Proven Track Record</p>
                  <p className="text-slate-500">95% Grade A/B in O-Levels</p>
               </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex items-center justify-center">
            
            {/* Animated Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-100 to-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>

            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border-[8px] border-white bg-slate-100"
            >
              <img src="/student.webp" alt="Physics and Strategy" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="font-bold text-lg">Mr. Chew Kok Mun</p>
                  <p className="text-sm opacity-90">Founder & Ex-MOE Scholar</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={floatAnimation}
              className="absolute top-8 -left-4 bg-white/95 backdrop-blur shadow-xl border border-white p-4 rounded-2xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="p-2.5 bg-green-100 text-green-700 rounded-lg">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Success Rate</p>
                <p className="text-sm font-bold text-slate-900">100% Gr. 7 IB HL</p>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={floatAnimation}
              className="absolute bottom-20 -right-6 bg-white/95 backdrop-blur shadow-xl border border-white p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="p-2.5 bg-purple-100 text-purple-700 rounded-lg">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Certification</p>
                <p className="text-sm font-bold text-slate-900">FIDE Instructor</p>
              </div>
            </motion.div>

            {/* Floating Atom Decoration */}
            <motion.div 
               animate={rotateAnimation}
               className="absolute -top-10 -right-10 text-teal-500 opacity-20"
            >
               <Atom size={120} strokeWidth={1} />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}