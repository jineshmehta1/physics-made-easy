"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Lightbulb,      // Big Ideas
  Layers,         // Step-by-step
  Globe,          // Real World
  BrainCircuit,   // Metacognitive
  UserCheck,      // Personalized
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function PhilosophySection() {
  
  const principles = [
    {
      title: "Focus on Big Ideas & Concepts",
      description: "We move beyond rote memorization to ensure deep conceptual mastery.",
      icon: Lightbulb,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Step-by-Step Worked Examples",
      description: "Breaking down complex physics problems into logical, manageable steps.",
      icon: Layers,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      title: "Real-World Applications",
      description: "Connecting abstract theories to daily life, making learning relevant.",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Metacognitive Strategies",
      description: "Teaching students 'how to think' and regulate their own learning process.",
      icon: BrainCircuit,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Personalized Coaching",
      description: "Tailoring our approach to fit individual learning speeds and styles.",
      icon: UserCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
  ];

  return (
    <section className="relative bg-white py-20 lg:py-28 font-sans overflow-hidden">
      
      {/* --- Background Decor --- */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-50/50 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT COLUMN: Header & CTA --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              Our Methodology
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Teaching for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                Understanding.
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe true education isn't about passing a test—it's about understanding the world. Our unique approach blends <strong>Physics rigor</strong> with <strong>Chess strategy</strong> to build thinkers, not just learners.
            </p>

            <div className="pt-4">
              <Link href="/methodology">
                <button className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-teal-700 transition-all duration-300">
                  Learn more about our philosophy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Principles List --- */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {principles.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(248, 250, 252, 0.8)" }} // hover:bg-slate-50
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  {/* Icon Box */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Arrow on Hover */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-5 h-5 text-slate-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}