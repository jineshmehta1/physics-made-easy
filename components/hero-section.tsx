"use client";

import React from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion";
import { 
  ArrowRight, 
  Atom,           
  Brain,          
  Trophy,         
  CheckCircle2,
  GraduationCap,
  Phone,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  
  // SEO Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "name": "Physics Tuition & Chess Coaching by Mr. Chew",
    "description": "Specialized Physics tuition for O-Level, A-Level, IB, and IGCSE combined with FIDE-certified Chess coaching.",
    "performer": {
      "@type": "Person",
      "name": "Mr. Chew Kok Mun"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": "Singapore"
    }
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
    <section className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden selection:bg-teal-100 selection:text-teal-900">
      {/* SEO Script Tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Decor - Optimized for performance (no heavy paints) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', 
            backgroundSize: '30px 30px' 
          }}
        />
        <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-teal-100/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40vw] h-[40vw] bg-indigo-100/50 rounded-full blur-[120px]" />
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
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-[10px] sm:text-xs tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              Singapore&apos;s Premier MI-Based Academy
            </motion.div>

            {/* Main Headline - SEO Optimized with Keywords */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl leading-[1.05] font-black text-slate-900 tracking-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Physics.</span> <br className="hidden sm:block" />
                Conquer <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Chess.</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 max-w-2xl mx-auto lg:mx-0">
                Unlock potential through <span className="text-indigo-600 italic">Multiple Intelligences</span> Theory.
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Led by <strong>Mr. Chew</strong> (Ex-MOE Scholar, NIE-Trained). 
                Empowering students to excel in <strong>O/A Levels, IB, & IGCSE</strong> through strategic thinking and scientific mastery.
              </p>
            </motion.div>

            {/* Feature Pills - Better Mobile Wrapping */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {[ 
                { icon: Atom, label: "Physics Tuition", color: "text-teal-600", bg: "bg-teal-50" },
                { icon: Trophy, label: "FIDE Chess Coaching", color: "text-purple-600", bg: "bg-purple-50" },
                { icon: Brain, label: "MI Pedagogy", color: "text-indigo-600", bg: "bg-indigo-50" },
                { icon: GraduationCap, label: "IP/IB Specialist", color: "text-blue-600", bg: "bg-blue-50" },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-1.5 px-3 py-1.5 ${item.bg} border border-black/5 rounded-lg text-xs md:text-sm font-bold text-slate-700 whitespace-nowrap transition-transform hover:scale-105`}>
                  <item.icon size={14} className={item.color} />
                  {item.label}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Responsive Stack */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href="/contact" 
                aria-label="Book a Physics or Chess Trial Class"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-teal-600 hover:shadow-teal-600/30 transition-all duration-300"
              >
                Book a Trial Class
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="tel:+6597277419" 
                aria-label="Call Mr. Chew for inquiries"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-teal-500 hover:text-teal-700 transition-all duration-300"
              >
                <Phone size={18} />
                +65 9727 7419
              </Link>
            </motion.div>

            {/* Trust Indicator - Enhanced Social Proof */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
               <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
               </div>
               <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">Proven Excellence</p>
                  <p className="text-xs text-slate-500 font-medium">95% Grade A/B for O-Level Physics • 100% IB HL Success</p>
               </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Visual Elements */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center">
            
            {/* Background Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200/40 to-indigo-200/40 rounded-full blur-[80px] scale-110 animate-pulse" />

            {/* Main Image Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] sm:border-[10px] border-white bg-slate-50"
            >
              {/* Using Next/Image for SEO & Performance */}
              <Image 
                src="/student.webp" 
                alt="Mr Chew - MOE Scholar providing Physics Tuition and Chess Coaching in Singapore"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-bold text-xl sm:text-2xl">Mr. Chew Kok Mun</p>
                <p className="text-sm sm:text-base opacity-90 font-medium">Founder & Ex-MOE Scholar</p>
              </div>
            </motion.div>

            {/* Floating Status Card 1 */}
            <motion.div 
              animate={floatAnimation}
              className="absolute -top-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur shadow-xl border border-white p-3 sm:p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                <CheckCircle2 size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-black text-slate-400 leading-none mb-1">Results</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">100% Pass Rate</p>
              </div>
            </motion.div>

            {/* Floating Status Card 2 */}
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur shadow-xl border border-white p-3 sm:p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                <Trophy size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[9px] uppercase font-black text-slate-400 leading-none mb-1">Certification</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">FIDE Instructor</p>
              </div>
            </motion.div>

            {/* Decoration */}
            <div className="absolute -top-12 -right-12 text-teal-500/10 rotate-12 hidden xl:block">
               <Atom size={200} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}