"use client";

import React from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { 
  ArrowRight, 
  Cpu,           
  Database,          
  Briefcase,         
  CheckCircle2,
  GraduationCap,
  Linkedin,
  Globe,
  TrendingUp,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PeterLohMentorProfile() {
  
  // SEO Structured Data for Mentor Profile
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Peter Loh",
    "jobTitle": "Creative Strategist & Industry Mentor",
    "description": "20+ years of experience across Hewlett-Packard, Motorola, and Shell. Specialized in IoT, Big Data, and Supply Chain Management.",
    "knowsAbout": ["IoT", "Big Data", "Industry 4.0", "Supply Chain Management", "Business Intelligence"],
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "Indiana University" },
      { "@type": "CollegeOrUniversity", "name": "Florida Institute of Technology" }
    ]
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const floatAnimation: TargetAndTransition = {
    y: [0, -12, 0],
    transition: { 
      duration: 5, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* SEO Script Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', 
            backgroundSize: '30px 30px' 
          }}
        />
        <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40vw] h-[40vw] bg-slate-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-[10px] sm:text-xs tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Available for Mentorship & Advisory
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl leading-[1.05] font-black text-slate-900 tracking-tight">
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Leadership.</span> <br className="hidden sm:block" />
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-slate-600">Innovation.</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 max-w-2xl mx-auto lg:mx-0">
                Bridging business strategy with <span className="text-blue-600 italic">Industry 4.0</span> mastery.
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A creative strategist with over 20 years of cross-functional experience at <strong>HP, Motorola, and Shell</strong>. Now empowering the next generation of leaders through expertise in <strong>IoT, Big Data, and Sustainability</strong>.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {[ 
                { icon: Cpu, label: "IoT Specialist", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Database, label: "Big Data Strategist", color: "text-indigo-600", bg: "bg-indigo-50" },
                { icon: BarChart3, label: "Supply Chain Expert", color: "text-slate-600", bg: "bg-slate-50" },
                { icon: GraduationCap, label: "MBA (Indiana Uni)", color: "text-teal-600", bg: "bg-teal-50" },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-1.5 px-3 py-1.5 ${item.bg} border border-black/5 rounded-lg text-xs md:text-sm font-bold text-slate-700 whitespace-nowrap transition-transform hover:scale-105`}>
                  <item.icon size={14} className={item.color} />
                  {item.label}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href="/contact" 
                target="_blank"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-[#0077b5] hover:shadow-blue-600/30 transition-all duration-300"
              >
                Connect with Us
                
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                Inquire for Mentorship
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Languages & Skills Social Proof */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
               <div className="flex items-center gap-1 text-slate-400">
                  <Globe size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Bilingual</span>
               </div>
               <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-slate-900">English & Mandarin Proficiency</p>
                  <p className="text-xs text-slate-500 font-medium">Experienced in Regional Cross-Cultural Leadership</p>
               </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Visual Elements */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center">
            
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 to-indigo-200/40 rounded-full blur-[80px] scale-110 animate-pulse" />

            {/* Main Image Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-slate-50"
            >
              <Image 
                src="/peter.png" // Ensure this image is in your public folder
                alt="Peter Loh - Industry Strategist and Mentor"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-xl sm:text-2xl">Peter Loh</p>
                <p className="text-sm opacity-90 font-medium">Creative Strategist & Disruptor</p>
              </div>
            </motion.div>

            {/* Floating Status Card 1: Experience */}
            <motion.div 
              animate={floatAnimation}
              className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur shadow-xl border border-white p-3 sm:p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                <Briefcase size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-black text-slate-400 leading-none mb-1">Experience</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">20+ Years Global MNC</p>
              </div>
            </motion.div>

            {/* Floating Status Card 2: Innovation */}
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur shadow-xl border border-white p-3 sm:p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="p-2 bg-teal-100 text-teal-700 rounded-lg">
                <TrendingUp size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-black text-slate-400 leading-none mb-1">Focus</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">Innovative Disruptor</p>
              </div>
            </motion.div>

            {/* Background Decoration: IoT Icon */}
            <div className="absolute -top-12 -right-12 text-blue-500/10 rotate-12 hidden xl:block">
               <Cpu size={200} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}