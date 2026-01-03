"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Trophy, Target, Star, Award, 
  ChevronRight, Quote, School, CheckCircle2 
} from "lucide-react";

export default function ResultsAndProof() {
  
  const stats = [
    { label: "O-Level A1/A2", val: "95%", color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "IB Physics Gr. 7", val: "95%", color: "text-amber-500", bg: "bg-amber-50" },
    { label: "A-Level H2 A/B", val: "80%", color: "text-blue-500", bg: "bg-blue-50" },
  ];

  const stories = [
    { student: "HCIS IB", result: "Gr 7", text: "Humanities-inclined student mastered abstract Physics logic.", tag: "Architect Track" },
    { student: "NJC H2", result: "Distinction", text: "Turned fragmented knowledge into a cohesive 'A' grade.", tag: "Medical Track" },
    { student: "ACSI IP", result: "UCLA Bound", text: "From academic dropout to elite global university entry.", tag: "Global Success" },
  ];

  // SEO Schema
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "EducationOrganization",
    "name": "Physics & Strategy Academy",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "520" }
  };

  return (
    <section className="relative lg:h-screen flex items-center bg-white overflow-hidden py-12 lg:py-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }} />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: RESULTS (4 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                <Star size={12} className="text-amber-400 fill-amber-400" /> Proven Track Record
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tighter">
                The Data of <br/> <span className="text-teal-600">Distinction.</span>
              </h2>
            </motion.div>

            <div className="grid gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 rounded-3xl border border-slate-100 ${stat.bg} flex items-center justify-between group hover:scale-[1.02] transition-transform`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm text-slate-900 group-hover:rotate-12 transition-transform">
                      {i === 0 ? <Target size={20}/> : i === 1 ? <Trophy size={20}/> : <Award size={20}/>}
                    </div>
                    <span className="font-bold text-slate-700 text-sm uppercase tracking-tight">{stat.label}</span>
                  </div>
                  <span className={`text-3xl font-black ${stat.color}`}>{stat.val}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
              *Audited results from 2001-2025. Based on NIE-trained pedagogy & MI Theory alignment.
            </p>
          </div>

          {/* RIGHT: SUCCESS STORIES (7 Columns) */}
          <div className="lg:col-span-7 grid gap-4 relative">
             {/* Subtle Connector Line */}
             <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-slate-100 hidden lg:block" />

             {stories.map((story, i) => (
               <motion.article
                 key={i}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 + (i * 0.1) }}
                 className="relative bg-slate-50 p-6 lg:p-8 rounded-[2rem] border border-transparent hover:border-teal-100 hover:bg-white hover:shadow-xl transition-all group ml-0 lg:ml-6"
               >
                 <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-100 z-10">
                   <CheckCircle2 size={16} className="text-teal-500" />
                 </div>

                 <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <School size={18} className="text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 leading-none">{story.student}</h4>
                        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-tighter">{story.tag}</span>
                      </div>
                    </div>
                    <span className="bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase">
                      {story.result}
                    </span>
                 </div>

                 <p className="text-sm text-slate-600 leading-relaxed italic">
                   "{story.text}"
                 </p>

                 <div className="mt-4 flex items-center gap-1 text-[10px] font-black text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                   Verify Case Study <ChevronRight size={12} />
                 </div>
               </motion.article>
             ))}

             
          </div>

        </div>
      </div>

      {/* Background Physics Decoration */}
      <div className="absolute top-0 right-0 p-20 text-slate-50 -z-10 rotate-12">
        <Quote size={300} strokeWidth={1} />
      </div>
    </section>
  );
}