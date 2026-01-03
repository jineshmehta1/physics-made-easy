"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Lightbulb,      
  Layers,         
  Globe,          
  BrainCircuit,   
  UserCheck,      
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";

export default function PhilosophySection() {
  
  // SEO JSON-LD: Defining the Education Methodology for Search Engines
  const methodologySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Metacognitive Physics & Strategy Coaching",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Physics & Strategy Academy"
    },
    "description": "A unique educational philosophy blending Physics rigor with Chess strategy to enhance conceptual mastery and metacognition.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Teaching Principles",
      "itemListElement": [
        { "@type": "DefinedTerm", "name": "Conceptual Mastery", "description": "Moving beyond rote memorization to deep theoretical understanding." },
        { "@type": "DefinedTerm", "name": "Metacognition", "description": "Teaching students to monitor and regulate their own cognitive processes." }
      ]
    }
  };

  const principles = [
    {
      title: "Conceptual Mastery",
      description: "We bypass rote memorization to instill deep-rooted theoretical understanding.",
      icon: Lightbulb,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Logical Deconstruction",
      description: "Breaking complex exam problems into manageable, repeatable logical steps.",
      icon: Layers,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Applied Context",
      description: "Connecting abstract physics to real-world engineering and global scenarios.",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Metacognitive Strategy",
      description: "Empowering students with 'Thinking about Thinking' skills borrowed from Chess.",
      icon: BrainCircuit,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Adaptive Coaching",
      description: "Hyper-personalized feedback loops tailored to individual cognitive speeds.",
      icon: UserCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative bg-white py-16 lg:py-24 font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologySchema) }} />
      
      {/* --- Physics-Themed Background Decor --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-teal-50 rounded-full blur-[100px]" 
        />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Header & Value Prop --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
              <Zap size={14} className="text-teal-400 fill-teal-400" />
              Scientific Pedagogy
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Teaching for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600">
                Cognitive Depth.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              Education isn&apos;t just content delivery—it&apos;s about building a robust mental architecture. Our methodology bridges <strong>Physics rigor</strong> with <strong>Chess foresight</strong> to develop world-class problem solvers.
            </p>

            <div className="pt-2">
              <Link href="/multiple">
                <button className="group relative flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 active:scale-95 shadow-lg shadow-slate-200">
                  The Full Philosophy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Principles (High-Density List) --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-3"
          >
            {principles.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 12 }}
                className="group flex items-center gap-5 p-4 md:p-5 rounded-[1.5rem] bg-white border border-slate-100 hover:border-teal-500/30 hover:shadow-[0_10px_30px_-10px_rgba(20,184,166,0.1)] transition-all duration-300"
              >
                {/* Icon Box with Physics "Nucleus" Effect */}
                <div className={`relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.bg} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/50 to-transparent transition-opacity duration-500" />
                  <item.icon className={`w-6 h-6 md:w-7 md:h-7 ${item.color} relative z-10 transition-transform duration-500 group-hover:scale-110`} />
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 group-hover:text-teal-700 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm font-medium mt-1 leading-snug max-w-md">
                    {item.description}
                  </p>
                </div>

                {/* Micro-interaction Indicator */}
                <div className="hidden sm:block ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  <Sparkles className="w-5 h-5 text-teal-500/40" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}