"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FileText,       // Notes
  Calculator,     // Worked Examples
  FileQuestion,   // Practice Papers
  Crown,          // Chess
  Download,       // Action Icon
  ArrowRight,
  Database,
  Unlock
} from "lucide-react";

export default function ResourcesSection() {
  
  const resources = [
    {
      id: "notes",
      title: "Physics Notes (PDFs)",
      description: "Concise summaries for GCE O/A Levels & IB. Perfect for last-minute revision.",
      icon: FileText,
      color: "text-teal-600",
      bg: "bg-teal-50",
      count: "15+ Files"
    },
    {
      id: "examples",
      title: "Worked Examples",
      description: "Step-by-step solutions to complex kinematics and dynamics problems.",
      icon: Calculator,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      count: "50+ Solutions"
    },
    {
      id: "papers",
      title: "Practice Papers",
      description: "Curated exam drills and past year questions to test your understanding.",
      icon: FileQuestion,
      color: "text-blue-600",
      bg: "bg-blue-50",
      count: "20+ Papers"
    },
    {
      id: "chess",
      title: "Chess Materials",
      description: "FIDE-approved strategy guides, tactical puzzles, and opening repertoires.",
      icon: Crown,
      color: "text-amber-600",
      bg: "bg-amber-50",
      count: "10+ Guides"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white font-sans overflow-hidden" id="resources">
      
      {/* --- Background Decor --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Unlock size={12} className="text-teal-500" />
              Open Access
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Free Learning <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                Resources
              </span>
            </h2>
            <p className="text-slate-600 text-lg max-w-xl">
              Supplement your learning with our library of curated study materials. 
              Designed to help you revise smarter, not harder.
            </p>
          </div>

          {/* Database Visual Decoration (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4 opacity-50">
             <div className="flex flex-col gap-2">
                <div className="w-16 h-2 bg-slate-200 rounded-full animate-pulse"></div>
                <div className="w-12 h-2 bg-slate-200 rounded-full"></div>
             </div>
             <Database size={48} className="text-slate-300" />
          </div>
        </div>

        {/* --- Resource Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {resources.map((res) => (
            <motion.div
              key={res.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200/50 hover:border-teal-200 transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              
              {/* Icon & Count */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${res.bg} ${res.color} group-hover:scale-110 transition-transform duration-300`}>
                  <res.icon size={24} />
                </div>
                <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md">
                  {res.count}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                {res.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">
                {res.description}
              </p>

              {/* Bottom Action Area */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-teal-600 transition-colors">
                  Download PDF
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  <Download size={14} />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom CTA --- */}
        <div className="mt-16 text-center">
          <Link href="/resources">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl shadow-slate-900/10 hover:bg-teal-600 hover:shadow-teal-600/20 transition-all duration-300">
              Access Full Library
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <p className="mt-4 text-xs text-slate-400">
            * No sign-up required for basic notes.
          </p>
        </div>

      </div>
    </section>
  );
}