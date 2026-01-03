"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  GraduationCap, 
  TrendingUp, 
  MapPin, 
  Star, 
  Award,
  ChevronRight,
  School,
  Quote
} from 'lucide-react';

export default function SuccessStories() {
  
  // SEO: Review & Recommendation Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationOrganization",
    "name": "Physics & Strategy Academy",
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "HCIS Student" },
        "reviewBody": "Achieved Grade 7 in IB Examinations through structured logic.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "ACSI Student" },
        "reviewBody": "Transformed from academic weakness to UCLA admission.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  const stories = [
    {
      student: "HCIS IB Science",
      goal: "Aspiring Architect",
      challenge: "Struggled with abstract IB Physics theories.",
      result: "IB Grade 7 Excellence",
      destination: "UNSW Australia",
      content: "Initially failing school tests, we bridged the gap between humanities-thinking and scientific logic. He achieved the highest possible IB score.",
      icon: <MapPin className="w-5 h-5" />,
      tag: "IB DP Physics"
    },
    {
      student: "NJC H2 Physics",
      goal: "A-Level Mastery",
      challenge: "Fragmented knowledge in H2 Physics.",
      result: "GCE A-Level Distinction",
      destination: "Top Tier Medical Track",
      content: "In just months, she learned to link diverse topics like Electromagnetism and Quantum Physics, turning confusion into a cohesive 'A' grade.",
      icon: <TrendingUp className="w-5 h-5" />,
      tag: "A-Level H2"
    },
    {
      student: "ACSI / IP Student",
      goal: "Ivy League Ambition",
      challenge: "Unable to cope with the fast IP/IB pace.",
      result: "Massive Grade Jump",
      destination: "UCLA, USA",
      content: "This 'laid-back' student transformed into a strategic learner. In half a year, he went from failing to enrolling in a top global university.",
      icon: <GraduationCap className="w-5 h-5" />,
      tag: "IP/IB Transformation"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-white overflow-hidden font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-50 to-transparent" />
        <div className="absolute -right-20 top-1/2 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-900 text-white"
            >
              <Star className="w-3 h-3 text-teal-400 fill-teal-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Results</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              Proven Track Record of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Academic Transformation.</span>
            </motion.h2>
          </div>
          <p className="text-slate-500 font-medium text-lg max-w-xs md:text-right">
            Real results from HCIS, NJC, and ACSI students who mastered the strategic mindset.
          </p>
        </div>

        {/* --- Responsive Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {stories.map((story, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col h-full relative group transition-all hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-500">
                  {story.icon}
                </div>
                <Quote className="w-8 h-8 text-slate-200 group-hover:text-teal-100 transition-colors" />
              </div>

              {/* Student Info */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase tracking-widest mb-2">
                  <School className="w-3.5 h-3.5" />
                  {story.student}
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight min-h-[3rem]">
                  {story.goal}
                </h3>
              </div>

              {/* Story Content */}
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow italic">
                "{story.content}"
              </p>

              {/* Result Meta */}
              <div className="pt-6 border-t border-slate-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-slate-900">{story.result}</div>
                    <div className="text-[10px] font-bold text-teal-600 uppercase tracking-tighter">{story.destination}</div>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors uppercase">
                  View Case Study <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* --- Contextual Bottom Link --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center py-8 border-t border-slate-100"
        >
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
            Join Singapore&apos;s Elite Physics Community. 
            <a href="/contact" className="ml-4 text-indigo-600 hover:text-teal-600 transition-colors underline decoration-2 underline-offset-8">
              Book a Strategy Session →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}