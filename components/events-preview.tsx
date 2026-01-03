"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Atom,           
  Crown,          
  BookOpen,       
  Users,          
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Zap
} from "lucide-react";

// --- SEO Structured Data ---
const programsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Course",
      "position": 1,
      "name": "O-Level Physics Tuition Singapore",
      "description": "Pure and Combined Physics coaching for GCE O-Level students by Ex-MOE Scholar Mr. Chew.",
      "provider": { "@type": "Organization", "name": "Physics & Strategy Academy" }
    },
    {
      "@type": "Course",
      "position": 2,
      "name": "IB Physics Specialist HL/SL",
      "description": "Specialized IB Physics tuition in Singapore focusing on IA and paper strategies.",
      "provider": { "@type": "Organization", "name": "Physics & Strategy Academy" }
    }
  ]
};

const programs = [
  {
    id: "o-level",
    title: "GCE O-Level Physics",
    subject: "Pure/Combined",
    price: "SG$90",
    duration: "2 hrs",
    mode: "Small Group",
    features: ["Pure/Combined Syllabus", "TYS & Exam Drills", "Mr. Chew's Master Notes"],
    icon: Atom,
    theme: "teal",
    popular: true,
  },
  {
    id: "ib-physics",
    title: "IB HL / SL Physics",
    subject: "Int. Baccalaureate",
    price: "SG$120",
    duration: "2 hrs",
    mode: "Specialist Coaching",
    features: ["IA/EE Mentorship", "Paper 1, 2, 3 Strategy", "Data Analysis Mastery"],
    icon: Zap,
    theme: "indigo",
    popular: false,
  },
  {
    id: "a-level",
    title: "H2 Physics A-Level",
    subject: "Junior College",
    price: "SG$110",
    duration: "2 hrs",
    mode: "Advanced Group",
    features: ["Quantum & Field Theory", "Complex Problem Solving", "JC1 & JC2 Intensive"],
    icon: Atom,
    theme: "blue",
    popular: false,
  },
  {
    id: "igcse",
    title: "IGCSE / IP Physics",
    subject: "Int. Curriculum",
    price: "SG$100",
    duration: "2 hrs",
    mode: "Foundation Focus",
    features: ["Cambridge & Edexcel", "Foundational Logic", "IP Integrated Prep"],
    icon: BookOpen,
    theme: "cyan",
    popular: false,
  },
  {
    id: "chess",
    title: "Chess Strategy",
    subject: "Cognitive Training",
    price: "Enquire",
    duration: "Flexible",
    mode: "FIDE Certified",
    features: ["Tactical Foresight", "Tournament Preparation", "MI Logic Development"],
    icon: Crown,
    theme: "amber",
    popular: false,
    isChess: true
  },
];

export default function ProgramsSection() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative bg-white py-16 lg:py-24 font-sans overflow-hidden" id="programs">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programsSchema) }} />
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-teal-50 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles size={14} className="text-teal-400 fill-teal-400" />
              Academic Mastery Programs
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Learning Tracks.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-sm md:text-right font-medium">
            Tailored curricula for O/A-Levels, IB, and Chess Strategy designed to deliver Grade 7/A results.
          </p>
        </div>

        {/* --- Program Cards Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {programs.map((program) => (
            <motion.article 
              key={program.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Theme Indicator */}
              <div className={`absolute top-0 left-12 right-12 h-1.5 rounded-b-xl opacity-20 group-hover:opacity-100 transition-opacity
                ${program.theme === 'teal' ? 'bg-teal-500' : ''}
                ${program.theme === 'indigo' ? 'bg-indigo-500' : ''}
                ${program.theme === 'blue' ? 'bg-blue-500' : ''}
                ${program.theme === 'cyan' ? 'bg-cyan-500' : ''}
                ${program.theme === 'amber' ? 'bg-amber-500' : ''}
              `} />

              {/* Popularity Badge */}
              {program.popular && (
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-teal-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-teal-500/20">
                  Top Result
                </div>
              )}

              {/* Icon & Title */}
              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm
                  ${program.isChess ? 'bg-amber-50 text-amber-600' : 'bg-slate-50 text-slate-900'}
                `}>
                  <program.icon size={28} strokeWidth={1.5} />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{program.subject}</p>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">
                  {program.title}
                </h3>
              </div>

              {/* Pricing & Logic */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900 tracking-tighter">{program.price}</span>
                  {program.price !== "Enquire" && (
                    <span className="text-slate-400 font-bold text-sm">/{program.duration}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-3 text-slate-500 font-bold text-xs uppercase tracking-tighter">
                  <Users size={14} className="text-indigo-500" />
                  {program.mode}
                </div>
              </div>

              <div className="h-px bg-slate-100 w-full mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow">
                {program.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-600">
                    <CheckCircle2 size={18} className={`shrink-0 ${program.isChess ? 'text-amber-500' : 'text-teal-500'}`} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* WhatsApp Conversion CTA */}
              <Link 
                href={`https://wa.me/6597277419?text=Hi Mr. Chew, I'm interested in the ${program.title} class. Could you share more details?`} 
                target="_blank"
                className="group/btn relative"
              >
                <button className={`
                  w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 active:scale-95
                  ${program.isChess 
                    ? 'bg-amber-50 text-amber-700 hover:bg-amber-500 hover:text-white' 
                    : 'bg-slate-900 text-white hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/20'
                  }
                `}>
                  Secure Your Slot
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.article>
          ))}
        </motion.div>
        
        {/* --- Footer Context --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 text-center"
        >
          <p className="text-slate-500 text-sm font-semibold max-w-2xl mx-auto leading-relaxed">
            * Custom 1-on-1 intensive tracks and Online Synchronous lessons are available upon request. 
            <Link href="/contact" className="text-indigo-600 hover:text-teal-600 transition-colors ml-2 underline decoration-2 underline-offset-4">
              Speak with Mr. Chew for a free placement talk.
            </Link>
          </p>
        </motion.div>

      </div>
    </section>
  );
}