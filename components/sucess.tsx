"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  TrendingUp, 
  MapPin, 
  Star, 
  Award,
  ChevronRight,
  School
} from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      student: "HCIS Science Student",
      goal: "Aspiring Architect",
      challenge: "Humanities-inclined, struggled with abstract Physics & Math.",
      result: "Achieved Grade 7 in IB Examinations",
      destination: "University of New South Wales, Australia",
      content: "Initially struggling to pass school assessments, this student underwent structured and rigorous instruction. By bridging the gap between humanities-thinking and scientific logic, he exceeded all expectations.",
      icon: <MapPin className="w-5 h-5" />,
      tag: "IB Excellence"
    },
    {
      student: "NJC Physics Student",
      goal: "A-Level Mastery",
      challenge: "Hardworking but struggled to pass H2 Physics tests.",
      result: "Aced GCE A-Level Examinations",
      destination: "Top Local/Global University Track",
      content: "After just a few months of intense instruction, she learned to identify subtle associations between diverse topics, turning fragmented knowledge into a cohesive understanding.",
      icon: <TrendingUp className="w-5 h-5" />,
      tag: "H2 Mastery"
    },
    {
      student: "ACSI Student",
      goal: "Academic Comeback",
      challenge: "Academically weak dropout, unable to cope with learning pace.",
      result: "Tremendous Physics & Math Improvement",
      destination: "University of Los Angeles (UCLA)",
      content: "In only half a year, this laid-back student transformed his academic trajectory, successfully enrolling into one of the world's most prestigious universities.",
      icon: <GraduationCap className="w-5 h-5" />,
      tag: "Global Success"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 md:py-32 bg-slate-50 overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* --- Section Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-teal-50 border border-teal-100"
          >
            <Star className="w-4 h-4 text-teal-600 fill-teal-600" />
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
              Proven Results
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Sucess Stories of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              Academic Transformation.
            </span>
          </motion.h2>
          <p className="text-slate-600 text-lg">
            We don't just teach Physics; we build the strategic mindset required to overcome academic hurdles and enter world-class institutions.
          </p>
        </div>

        {/* --- Stories Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative"
        >
          {/* Decorative Dot Pattern Background */}
          <div className="absolute -top-12 -left-12 w-64 h-64 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <pattern id="dots-stories" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="currentColor" className="text-slate-900" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots-stories)" />
            </svg>
          </div>

          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col h-full relative group"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-teal-50 rounded-2xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {story.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  {story.tag}
                </span>
              </div>

              {/* Student Info */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-indigo-600 mb-1">
                  <School className="w-4 h-4" />
                  <span className="text-sm font-bold tracking-wide uppercase">{story.student}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {story.goal}
                </h3>
              </div>

              {/* Story Content */}
              <div className="flex-grow">
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "{story.content}"
                </p>
              </div>

              {/* Result Badge */}
              <div className="mt-auto pt-6 border-t border-slate-50">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{story.result}</div>
                    <div className="text-xs font-medium text-teal-600">{story.destination}</div>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-teal-600 transition-colors">
                  VIEW CASE STUDY <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 font-medium">
            Join 500+ students who transformed their grades. 
            <a href="#" className="ml-2 text-teal-600 font-bold hover:underline underline-offset-4">
              Book a Trial Class →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;