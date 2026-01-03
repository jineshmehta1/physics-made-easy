"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookA, 
  BrainCircuit, 
  Scale, 
  Download, 
  FileText, 
  AlertTriangle, 
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Languages,
  Microscope
} from "lucide-react";

// --- Pedagogy Strategies Data ---
const strategies = [
  {
    title: "Semantic Training",
    description: "Science is a foreign language. We explicitly teach the difference between everyday words and their precise scientific meanings.",
    icon: Languages,
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    title: "Model-Based Thinking",
    description: "We teach students how to simplify reality into 'working models'—and crucially, to understand the limitations of those models.",
    icon: BrainCircuit,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Multiple Representations",
    description: "We don't just use equations. We teach concepts through diagrams, graphs, verbal descriptions, and physical demos simultaneously.",
    icon: Scale,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Qualitative Interpretation",
    description: "Before solving the math, students must describe the phenomenon in words. This ensures deep conceptual understanding, not just rote calculation.",
    icon: Microscope,
    color: "text-rose-600",
    bg: "bg-rose-50"
  }
];

// --- Misconception Data ---
const misconceptions = [
  {
    topic: "Force & Motion",
    myth: "Constant force maintains constant velocity.",
    truth: "Constant force causes acceleration (changing velocity).",
    fix: "We use frictionless trolley demos and F=ma logic."
  },
  {
    topic: "Falling Objects",
    myth: "Heavier objects fall faster than lighter ones.",
    truth: "Gravity acts equally; only air resistance changes the rate.",
    fix: "Vacuum tube demonstrations and Galileo's historical experiments."
  },
  {
    topic: "Action-Reaction",
    myth: "Weight and Normal Force are an action-reaction pair.",
    truth: "They act on the same body. Action-reaction pairs act on different bodies.",
    fix: "Free-body diagrams showing forces on separate objects."
  }
];

// --- Downloads Data ---
const downloads = [
  {
    title: "The Translation Cheat Sheet",
    desc: "A 1-page guide distinguishing 20 dangerous words (Work, Heat, Power) in everyday vs. Physics contexts.",
    size: "PDF • 1.2 MB"
  },
  {
    title: "Polysemy Table Template",
    desc: "A blank template for students to build their own glossary of terms with everyday vs. scientific definitions.",
    size: "PDF • 0.5 MB"
  },
  {
    title: "Misconception Buster Guide",
    desc: "Top 10 Physics myths debunked with diagrams and simple explanations.",
    size: "PDF • 2.4 MB"
  }
];

export default function ScienceUnderstandingPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(to right, #14b8a6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
             <BookA size={14} />
             <span>Decoding Science</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Science is a <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
              Foreign Language.
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            Why do smart students struggle? Often, it's not the math—it's the vocabulary. 
            Everyday words like <em>"Work"</em> and <em>"Heat"</em> are false friends in Physics. 
            We teach you how to translate them.
          </p>
        </div>
      </section>

      {/* --- THE VOCABULARY PROBLEM --- */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="w-full md:w-1/2 p-10 bg-slate-50 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-slate-900 mb-4">The "False Friend" Trap</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In real life, if you try hard but fail, you did "work". In Physics, if you don't move the object, 
              <strong> Work = 0</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We give every technical term a 15-second <strong>"Birth Certificate"</strong> when introduced, strictly defining its operational meaning versus its everyday usage. This simple habit prevents years of confusion.
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-slate-900 p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px]"></div>
            
            {/* Visual Comparison Card */}
            <div className="relative z-10 space-y-6">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Everyday English</p>
                <p className="text-white text-lg font-serif italic">"I went to <span className="text-red-400 font-bold">work</span> today."</p>
                <p className="text-slate-400 text-sm mt-1">= A place, or mental effort.</p>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="text-teal-500 rotate-90 md:rotate-0" />
              </div>

              <div className="bg-teal-900/40 backdrop-blur-md p-4 rounded-xl border border-teal-500/50">
                <p className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">Physics Meaning</p>
                <p className="text-white text-lg font-mono">W = ∫F·dr</p>
                <p className="text-teal-200 text-sm mt-1">= Energy transferred by force over displacement.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- OUR METHODOLOGY GRID --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              How We Bridge the Gap
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our "Science Understanding" pedagogy focuses on semantics, modeling, and visualization to clear the fog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISCONCEPTION BUSTER --- */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-widest mb-4 border border-red-500/30">
               <AlertTriangle size={14} />
               <span>Common Traps</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Busting Common Misconceptions
            </h2>
            <p className="text-slate-400">
              We proactively identify pre-existing incorrect ideas using "Think-Aloud" protocols before formal instruction begins.
            </p>
          </div>

          <div className="space-y-4">
            {misconceptions.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{item.topic}</h4>
                    <p className="text-red-300 text-sm mb-1 flex items-center gap-2">
                      <span className="font-bold border border-red-500/50 px-2 rounded text-[10px] uppercase">Myth</span> 
                      "{item.myth}"
                    </p>
                    <p className="text-teal-300 text-sm flex items-center gap-2">
                      <span className="font-bold border border-teal-500/50 px-2 rounded text-[10px] uppercase">Fact</span> 
                      {item.truth}
                    </p>
                  </div>
                  <div className="md:w-1/3 bg-black/20 p-4 rounded-xl text-xs text-slate-300 border-l-2 border-indigo-500">
                    <strong className="text-white block mb-1">Our Classroom Fix:</strong>
                    {item.fix}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLASSROOM TACTICS (Grid) --- */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Inside Our Classroom</h2>
          <p className="text-slate-600">Field-tested, low-friction tactics we use to ensure clarity.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-4xl font-black text-slate-200 mb-4">01</div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">The Polysemy Table</h4>
            <p className="text-slate-600 text-sm">
              A running 3-column list on our wall: <br/> 
              <strong>Word | Everyday Sense | Physics Sense</strong>. <br/>
              Visual repetition prevents ambiguity.
            </p>
          </div>
          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-4xl font-black text-slate-200 mb-4">02</div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Symbol Colour-Coding</h4>
            <p className="text-slate-600 text-sm">
              We explicitly differentiate symbols. <br/>
              e.g., <strong>I (Current)</strong> vs <strong>I (Moment of Inertia)</strong>. <br/>
              Students report far fewer "symbol shock" errors.
            </p>
          </div>
          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="text-4xl font-black text-slate-200 mb-4">03</div>
            <h4 className="font-bold text-slate-900 text-lg mb-2">Exit Ticket Reflection</h4>
            <p className="text-slate-600 text-sm">
              End of class question: <br/>
              <em>"Which word still feels fuzzy?"</em> <br/>
              Five minutes of responsiveness saves hours of remediation.
            </p>
          </div>
        </div>
      </section>

      {/* --- DOWNLOADS SECTION --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="downloads">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">Student Resources</h2>
              <p className="text-slate-600">Download our curated guides to help you bridge the language gap at home.</p>
            </div>
            <button className="text-teal-600 font-bold hover:text-teal-700 flex items-center gap-2">
              View All Resources <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {downloads.map((file, i) => (
              <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-lg group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <Download size={20} className="text-slate-300 group-hover:text-teal-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700">{file.title}</h4>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{file.desc}</p>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 inline-block px-2 py-1 rounded">
                  {file.size}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-slate-900 text-center">
        <div className="container mx-auto px-4">
          <Sparkles size={32} className="text-teal-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Start Speaking the Language of Physics.
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Don't let vocabulary hold you back from an 'A'. Join Mr. Chew's classes and master the concepts, not just the math.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1">
              Book a Trial Class
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}