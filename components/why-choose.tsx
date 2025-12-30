"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Award, 
  BrainCircuit, 
  BookOpenCheck, 
  Microscope, 
  CheckCircle2 
} from "lucide-react";

export default function WhyChooseUsSection() {
  
  const benefits = [
    {
      title: "Expert Pedagogy",
      description: "Led by Mr. Chew: Ex-MOE Scholar, NIE-Trained teacher, and FIDE Instructor with decades of experience.",
      icon: <BookOpenCheck className="w-6 h-6 text-teal-600" />,
      color: "teal",
    },
    {
      title: "Multiple Intelligences",
      description: "We don't just lecture. We use MI Theory to teach Physics & Chess through logic, visualization, and strategy.",
      icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
      color: "indigo",
    },
    {
      title: "Proven Track Record",
      description: "95% of our students scored Grade 7 in IB HL Physics and A/B in O-Levels. Results speak for themselves.",
      icon: <Award className="w-6 h-6 text-amber-500" />,
      color: "amber",
    },
    {
      title: "Holistic Development",
      description: "From academic rigor to critical thinking via Chess. We shape complete, future-ready personalities.",
      icon: <Microscope className="w-6 h-6 text-blue-600" />,
      color: "blue",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 font-sans">
      
      {/* --- Background Decor --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <CheckCircle2 size={14} className="text-teal-500" />
            The Competitive Edge
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Physics Made Easy?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
            We bridge the gap between rote memorization and true understanding, equipping students with the skills to conquer exams and real-world challenges.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-0">
          
          {/* LEFT COLUMN CARDS */}
          <div className="w-full xl:w-1/3 flex flex-col gap-6 order-2 xl:order-1">
             <BenefitCard benefit={benefits[0]} align="right" delay={0.1} />
             <BenefitCard benefit={benefits[1]} align="right" delay={0.2} />
          </div>

          {/* CENTRAL IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full xl:w-1/3 flex justify-center order-1 xl:order-2"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Spinning Orbit Rings */}
              <div className="absolute inset-0 border border-teal-200/60 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-indigo-200/60 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-indigo-100 rounded-full blur-3xl opacity-50" />

              {/* Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
                 <img 
                   src="/sir3.webp" 
                   alt="Holistic Learning" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                 />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                Since 2001
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN CARDS */}
          <div className="w-full xl:w-1/3 flex flex-col gap-6 order-3">
             <BenefitCard benefit={benefits[2]} align="left" delay={0.3} />
             <BenefitCard benefit={benefits[3]} align="left" delay={0.4} />
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Card Component
function BenefitCard({ benefit, align, delay }: { benefit: any, align: 'left' | 'right', delay: number }) {
  // Styles based on alignment
  const isRight = align === 'right';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`
        group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-100
        flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:border-teal-200 hover:-translate-y-1
        ${isRight ? 'xl:items-end xl:text-right items-center text-center' : 'xl:items-start xl:text-left items-center text-center'}
      `}
    >
      {/* Icon */}
      <div
        className={`
          w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110
          ${benefit.color === 'teal' ? 'bg-teal-50' : ''}
          ${benefit.color === 'indigo' ? 'bg-indigo-50' : ''}
          ${benefit.color === 'amber' ? 'bg-amber-50' : ''}
          ${benefit.color === 'blue' ? 'bg-blue-50' : ''}
        `}
      >
        {benefit.icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
          {benefit.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}