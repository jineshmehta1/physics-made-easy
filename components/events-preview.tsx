"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Atom,           // Physics Icon
  Crown,          // Chess Icon
  BookOpen,       // General Study
  Clock,          // Duration
  Users,          // Group/Individual
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from "lucide-react";

// --- Program Data based on your inputs ---
const programs = [
  {
    id: "o-level",
    title: "GCE O Levels Physics",
    price: "SG$90",
    duration: "2 hrs",
    mode: "Small Group Tutoring",
    description: "Comprehensive coverage of Pure Physics concepts, answering techniques, and TYS analysis.",
    features: ["Pure Physics", "Exam Drills", "Detailed Notes"],
    icon: Atom,
    theme: "teal", // Academic
    popular: true,
  },
  {
    id: "combined",
    title: "Combined Physics",
    price: "SG$90",
    duration: "2 hrs",
    mode: "Small Group Tutoring",
    description: "Targeted coaching for GCE O Level Combined Science (Physics) to maximize grade potential.",
    features: ["Key Concepts", "Formula Mastery", "Practical Theory"],
    icon: BookOpen,
    theme: "teal",
    popular: false,
  },
  {
    id: "ib-physics",
    title: "IB HL / SL Physics",
    price: "SG$120",
    duration: "2 hrs",
    mode: "Small Group Tutoring",
    description: "Specialized coaching for International Baccalaureate. Focus on Internal Assessments (IA) and core theory.",
    features: ["HL & SL Covered", "IA Guidance", "Data Analysis"],
    icon: Atom,
    theme: "indigo", // Premium Academic
    popular: false,
  },
  {
    id: "a-level",
    title: "GCE A Levels H2 Physics",
    price: "SG$110",
    duration: "2 hrs",
    mode: "Small Group Tutoring",
    description: " rigorous preparation for A-Levels. Deep dive into Quantum Physics, Mechanics, and Fields.",
    features: ["H2 Syllabus", "Complex Solving", "Critical Thinking"],
    icon: Atom,
    theme: "blue",
    popular: false,
  },
  {
    id: "igcse",
    title: "IGCSE Physics",
    price: "SG$100",
    duration: "2 hrs",
    mode: "Small Group Coaching",
    description: "Cambridge & Edexcel curriculum support. Building a strong foundation for future A-Level success.",
    features: ["Cambridge/Edexcel", "Past Papers", "Foundational Logic"],
    icon: BookOpen,
    theme: "cyan",
    popular: false,
  },
  {
    id: "chess",
    title: "Chess Coaching",
    price: "Enquire",
    duration: "Various",
    mode: "FIDE Certified",
    description: "Train with a FIDE Developmental Instructor. Enhance concentration, strategy, and problem-solving skills.",
    features: ["FIDE Certified", "Tactical Training", "Tournament Prep"],
    icon: Crown,
    theme: "amber", // Distinct for Chess
    popular: false,
    isChess: true
  },
];

export default function ProgramsSection() {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 font-sans overflow-hidden" id="classes">
      
      {/* --- Background Pattern --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Ambient Orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles size={14} className="text-teal-500" />
            Academic Excellence
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
          >
            Our Physics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Chess Programs</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg"
          >
            Structured learning paths designed by Ex-MOE teachers to maximize grades and cognitive potential.
          </motion.p>
        </div>

        {/* --- Cards Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program) => (
            <motion.div 
              key={program.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`
                group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm 
                hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col
              `}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-8 right-8 h-1.5 rounded-b-lg ${
                program.isChess ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-teal-400 to-indigo-500'
              }`}></div>

              {/* Popular Badge */}
              {program.popular && (
                <div className="absolute top-6 right-6 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6 mt-2">
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110
                  ${program.isChess ? 'bg-amber-50 text-amber-600' : 'bg-teal-50 text-teal-600'}
                `}>
                  <program.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {program.title}
                </h3>
              </div>

              {/* Pricing & Mode */}
              <div className="flex items-end gap-1 mb-2">
                <span className={`text-4xl font-black ${program.isChess ? 'text-amber-600' : 'text-slate-900'}`}>
                  {program.price}
                </span>
                {program.price !== "Enquire" && (
                    <span className="text-slate-400 font-medium mb-1.5">/ {program.duration}</span>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
                <Users size={16} />
                {program.mode}
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-100 w-full mb-6"></div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-1">
                {program.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={18} className={`flex-shrink-0 ${program.isChess ? 'text-amber-500' : 'text-teal-500'}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              {/* Linking to WhatsApp with pre-filled message */}
              <Link 
                href={`https://wa.me/6597277419?text=Hi, I am interested in the ${program.title} class.`} 
                target="_blank"
                className="mt-auto"
              >
                <button className={`
                  w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all duration-300
                  ${program.isChess 
                    ? 'bg-amber-50 text-amber-700 hover:bg-amber-500 hover:text-white' 
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white'
                  }
                `}>
                  Book Now
                  <ArrowRight size={18} />
                </button>
              </Link>

            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Note */}
        <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
                * One-to-one coaching and online lessons are also available upon request. 
                <Link href="/contact" className="text-teal-600 font-bold hover:underline ml-1">Contact us for custom rates.</Link>
            </p>
        </div>

      </div>
    </section>
  );
}