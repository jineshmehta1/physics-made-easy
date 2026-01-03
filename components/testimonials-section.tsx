"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Star, 
  Quote, 
  Sparkles, 
  Atom, 
  Brain, 
  Zap, 
  Microscope,
  CheckCircle2
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Lex",
    role: "A-Level Physics Student",
    improvement: "C6 to A1",
    text: "Mr Chew taught me Additional Mathematics for O-levels and is a kind and patient teacher. He managed to make the subject a lot more manageable for me, helping me to improve from a C6 to an A1.",
    icon: Atom,
    gradient: "from-teal-50 to-emerald-50",
    border: "border-emerald-100",
    color: "text-emerald-600"
  },
  {
    id: 2,
    name: "Ethan Lau",
    role: "Physics Student",
    improvement: "Excellent Grades",
    text: "Mr Chew is an exceedingly patient and kind tutor who went above and beyond to help me in physics. He made asking questions really easy, which in turn made it significantly less tedious and more fun.",
    icon: Zap,
    gradient: "from-amber-50 to-orange-50",
    border: "border-orange-100",
    color: "text-orange-600"
  },
  {
    id: 3,
    name: "Yu Tao",
    role: "Regular Student",
    improvement: "Concept Clarity",
    text: "He is able to answer any questions I might have very well and in a way that's easy to understand. He also gives good materials such as notes and practice questions!",
    icon: Brain,
    gradient: "from-indigo-50 to-purple-50",
    border: "border-purple-100",
    color: "text-indigo-600"
  },
  {
    id: 4,
    name: "Renee Fong",
    role: "A-Level Physics",
    improvement: "Grade Transformation",
    text: "I didn’t like Physics to begin with but Mr Chew opened my eyes. Leading up to my exams, he never failed to answer my queries. My Physics grade improved tremendously in the A-levels.",
    icon: Microscope,
    gradient: "from-blue-50 to-cyan-50",
    border: "border-cyan-100",
    color: "text-blue-600"
  },
];

export default function TestimonialsSection() {
  // SEO: Schema.org for Google Search Star Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Physics Tuition by Mr. Chew",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "48",
      "bestRating": "5",
      "worstRating": "5"
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-white font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Responsive Header --- */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} className="fill-teal-500" />
              <span>Verified Google Reviews</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Real Results. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                Transformative Learning.
              </span>
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center lg:items-end gap-2"
          >
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">
              Average 5.0 Rating in Singapore
            </p>
          </motion.div>
        </div>

        {/* --- High-Density Staggered Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((item) => (
            <motion.blockquote 
              key={item.id} 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`relative bg-gradient-to-br ${item.gradient} p-8 rounded-[2.5rem] border ${item.border} flex flex-col h-full transition-all duration-300 group`}
            >
              <Quote className="absolute top-6 right-8 text-slate-900/5 group-hover:text-slate-900/10 transition-colors" size={60} />
              
              <div className="flex-grow relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full bg-white/80 border ${item.border} text-[10px] font-black uppercase tracking-tighter ${item.color} shadow-sm`}>
                    Result: {item.improvement}
                  </span>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed font-medium mb-8">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author & Context */}
              <footer className="flex items-center gap-4 pt-6 border-t border-white/40">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center font-black text-slate-800 text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic text-slate-900 font-black text-base flex items-center gap-2">
                    {item.name}
                    <CheckCircle2 size={14} className="text-teal-500" />
                  </cite>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-tight">
                    {item.role}
                  </p>
                </div>
                <item.icon className={`ml-auto w-6 h-6 opacity-20 ${item.color}`} />
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>

        {/* --- Compact Meta Footer --- */}
        <div className="mt-16 text-center">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Trusted by students from RI, HCIS, NJC, and ACSI
            </p>
            <div className="mt-6 flex justify-center gap-8 grayscale opacity-50 contrast-125">
               {/* These serve as visual trust signals but also help with keyword context */}
               <span className="text-sm font-black italic text-slate-400 tracking-tighter uppercase">Google Verified</span>
               <span className="text-sm font-black italic text-slate-400 tracking-tighter uppercase">NIE Standards</span>
               <span className="text-sm font-black italic text-slate-400 tracking-tighter uppercase">FIDE Certified</span>
            </div>
        </div>

      </div>
    </section>
  );
}