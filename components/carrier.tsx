"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Cpu, 
  Leaf, 
  LineChart, 
  Rocket, 
  Building2, 
  GraduationCap, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Download,
  MessageCircle,
  Briefcase,
  Zap
} from 'lucide-react';

const CareerGuidance = () => {
  const stats = [
    { label: "Available Jobs in SG", value: "725+", sub: "Physics-related" },
    { label: "Starting Salary", value: "$4k-$6.5k", sub: "Monthly average" },
    { label: "Employment Rate", value: "100%", sub: "Within 6 months" },
    { label: "Global Median", value: "$50k-$100k", sub: "Annual starting" },
  ];

  const paths = [
    {
      id: "quantum",
      title: "Quantum Computing",
      icon: <Cpu className="w-6 h-6" />,
      growth: "1.44B to 16.22B by 2034",
      salary: "$131,000 avg",
      color: "bg-purple-50 text-purple-600 border-purple-100",
      roles: ["Quantum Software Engineer", "Algorithm Developer"]
    },
    {
      id: "green",
      title: "Renewable Energy",
      icon: <Leaf className="w-6 h-6" />,
      growth: "SG Green Plan 2030",
      salary: "$4,500 - $6,500/mo",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      roles: ["Solar Systems Design", "Carbon Analyst"]
    },
    {
      id: "fintech",
      title: "FinTech & Quants",
      icon: <LineChart className="w-6 h-6" />,
      growth: "High-frequency Trading",
      salary: "$80k - $150k avg",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      roles: ["Quantitative Analyst", "Risk Specialist"]
    },
    {
      id: "aero",
      title: "Aerospace & Space",
      icon: <Rocket className="w-6 h-6" />,
      growth: "$20B+ Gov Investment",
      salary: "High Growth Sector",
      color: "bg-slate-50 text-slate-600 border-slate-100",
      roles: ["Satellite Tech", "Defense Systems"]
    }
  ];

  const roadmap = [
    { year: "Years 1-2", title: "Foundation", goal: "Target: Grade A/A1/7", desc: "Master IB/A-Level concepts & Chess strategy logic." },
    { year: "Years 3-4", title: "Specialization", goal: "GPA 3.5+ Target", desc: "University major selection & Python/MATLAB skills." },
    { year: "Year 5+", title: "Career Launch", goal: "$4,000+ Starting", desc: "Entry-level roles & Professional certifications." }
  ];

  return (
    <section className="py-24 bg-slate-50 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Phase 1: Header & Stats --- */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-widest mb-4"
            >
              <Zap size={14} fill="currentColor" /> Career Guidance
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Your Physics Journey <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Starts Here.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center"
              >
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Phase 2: High Growth Paths Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {paths.map((path, i) => (
            <motion.div
              key={path.id}
              whileHover={{ y: -8 }}
              className={`p-6 rounded-[2rem] border-2 ${path.color} flex flex-col h-full bg-white transition-all`}
            >
              <div className="mb-4 p-3 rounded-2xl bg-white w-fit shadow-sm">
                {path.icon}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">{path.title}</h4>
              <p className="text-sm font-bold text-slate-500 mb-4">{path.growth}</p>
              <div className="mt-auto space-y-2">
                {path.roles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                    <CheckCircle2 size={12} className="text-teal-500" /> {role}
                  </div>
                ))}
                <div className="pt-4 text-sm font-black text-slate-900">{path.salary}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Phase 3: The Roadmap & Success Stories --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Roadmap (Left 7 Columns) */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <Calendar className="text-teal-600" /> 5-Year Career Roadmap
            </h3>
            <div className="space-y-6">
              {roadmap.map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  key={i} 
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    {i !== 2 && <div className="w-1 h-full bg-slate-200 my-2 rounded-full" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-teal-600 font-bold text-xs uppercase tracking-widest">{step.year}</span>
                    <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 text-sm mb-2">{step.desc}</p>
                    <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-black text-slate-700">
                      {step.goal}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Mini-Cards (Right 5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <GraduationCap className="text-indigo-600" /> Alumni Spotlight
            </h3>
            {[
              { name: "Sarah Chen", role: "Quantum Scientist @ ASTAR", salary: "$6,200/mo", path: "IB Grade 7 → NUS Physics" },
              { name: "Marcus Lim", role: "Data Scientist @ Grab", salary: "$5,800/mo", path: "O-Level A1 → SMU Info Sys" }
            ].map((alumni, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-black text-slate-900">{alumni.name}</h5>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-md">{alumni.salary}</span>
                </div>
                <p className="text-sm font-bold text-indigo-600 mb-1">{alumni.role}</p>
                <p className="text-xs text-slate-400 font-medium">{alumni.path}</p>
              </div>
            ))}

            {/* CTA Box */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Ready to plan your future?</h4>
                <p className="text-slate-400 text-sm mb-6">Book a FREE 1-on-1 career consultation with Mr. Chew.</p>
                <div className="flex flex-col gap-3">
                  <button className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                    <MessageCircle size={18} /> WhatsApp Mr. Chew
                  </button>
                  <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                    <Download size={18} /> Career Bundle
                  </button>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all"></div>
            </motion.div>
          </div>
        </div>

        {/* --- Companies Marquee (Simplified) --- */}
        <div className="mt-24 pt-12 border-t border-slate-200">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Where Physics Graduates Work</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale contrast-125">
             <span className="text-xl font-black italic">Dyson</span>
             <span className="text-xl font-black italic">Google</span>
             <span className="text-xl font-black italic">Goldman Sachs</span>
             <span className="text-xl font-black italic">A*STAR</span>
             <span className="text-xl font-black italic">Siemens</span>
             <span className="text-xl font-black italic">J.P. Morgan</span>
          </div>
        </div>

        {/* --- Quote --- */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-slate-500 italic text-lg leading-relaxed">
            "Physics doesn't just open doors—it creates opportunities that don't even exist yet. The skills you develop today will prepare you for careers we can't even imagine tomorrow."
          </p>
          <p className="mt-4 font-bold text-slate-900">— Mr. Chew, Founder</p>
        </div>

      </div>
    </section>
  );
};

export default CareerGuidance;