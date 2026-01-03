"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Brain, 
  Calculator, 
  Eye, 
  Activity, 
  Music, 
  Users, 
  User, 
  Leaf, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Layers,
  Lightbulb,
  Globe,
  Microscope
} from "lucide-react";

// --- Data: Broadened Intelligences (Physics + STEM + Humanities) ---
const miData = [
  {
    title: "Logical-Mathematical",
    tag: "Logic & STEM",
    desc: "Mastering deductive reasoning and algorithmic thinking—essential for Physics, Chemistry, and Advanced Mathematics.",
    icon: Calculator,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Visual-Spatial",
    tag: "Design & Spatial",
    desc: "Visualizing 3D structures and field theories. Crucial for engineering, architecture, and complex geometry.",
    icon: Eye,
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    title: "Bodily-Kinesthetic",
    tag: "Tactile Mastery",
    desc: "Learning through movement and experiments. Connecting physical mechanics to engineering and sports science.",
    icon: Activity,
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    title: "Linguistic",
    tag: "Articulate Expert",
    desc: "The art of technical communication. Translating complex data into persuasive essays and clear presentations.",
    icon: BookOpen,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Interpersonal",
    tag: "Social IQ",
    desc: "Collaborative problem-solving and leadership skills developed through peer-to-peer learning and group projects.",
    icon: Users,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Intrapersonal",
    tag: "Self-Mastery",
    desc: "Metacognition and self-reflection. Building the discipline for independent research and long-term academic goals.",
    icon: User,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Naturalistic",
    tag: "Environmental",
    desc: "Connecting theoretical laws to biological systems, ecological cycles, and the physical world around us.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "Existential",
    tag: "Philosophy",
    desc: "Exploring the 'Big Questions.' Connecting physics to cosmology, ethics, and the origins of the universe.",
    icon: HelpCircle,
    color: "text-violet-600",
    bg: "bg-violet-50"
  },
];

// --- Data: Enhanced Study Tips (Broad Learning Strategies) ---
const studyTips = [
  {
    title: "Master First Principles",
    content: "Don't just memorize formulas. Whether in Physics or Business, understand the 'Why'. Breaking complex topics into their basic truths allows you to build solutions from the ground up."
  },
  {
    title: "Active Retrieval & Spaced Repetition",
    content: "Testing yourself is 3x more effective than re-reading notes. Use flashcards and periodic reviews to strengthen the neural pathways associated with complex STEM concepts."
  },
  {
    title: "Interdisciplinary Connections",
    content: "The best learners connect Physics to Math, and Math to Music. By finding 'hooks' between different domains, you increase your brain's ability to store and recall information."
  },
  {
    title: "The Feynman Technique",
    content: "To master a concept, try explaining it to a 10-year-old. If you can't explain it simply, you don't understand it fully. This exposes gaps in your Linguistic and Logical intelligence."
  },
  {
    title: "Embrace Productive Failure",
    content: "Mistakes are data. Analyze your errors without judgment. Tracing a logic error back to its source is where the most profound academic growth happens."
  }
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function MultipleIntelligencesPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(to right, #14b8a6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6"
          >
             <Brain size={14} />
             <span>The Science of Holistic Learning</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Unlocking Human Potential <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
              Through Multiple Intelligences
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed mb-8"
          >
            At <strong>Physics Made Easy</strong>, we transcend traditional tutoring. Our methodology integrates cognitive science to tailor learning across <strong>STEM, Logic, and Creative domains</strong>, ensuring every unique mind thrives.
          </motion.p>
          
          {/* Key Selling Points */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300"
          >
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-teal-400"/> Neurodiversity Support</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-teal-400"/> Interdisciplinary Mastery</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-teal-400"/> Specialized Physics Coaching</span>
          </motion.div>
        </div>
      </section>

      {/* --- THE 8 INTELLIGENCES GRID --- */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
          >
            Differentiated Instruction: <span className="text-teal-600">The 8 Intelligences</span>
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            We move beyond the "one-size-fits-all" lecture. Whether studying Physics or Philosophy, we leverage your natural strengths.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {miData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                <item.icon size={24} />
              </div>
              <div className="mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${item.bg} ${item.color}`}>
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- PEDAGOGY & METHODOLOGY --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
                  Transforming Passive Learners into <br/>
                  <span className="text-indigo-600">Critical Thinkers</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our pedagogical approach is designed to build cognitive flexibility across multiple domains, from theoretical science to effective communication.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Layers, color: "bg-indigo-50 text-indigo-600", title: "Guided Inquiry", desc: "Students use data and logic to construct their own conclusions—building confidence in their analytical abilities." },
                  { icon: Lightbulb, color: "bg-teal-50 text-teal-600", title: "Holistic STEM Projects", desc: "Building prototypes and simulations that allow 'Body Smart' and 'Visual' learners to excel in technical fields." },
                  { icon: Microscope, color: "bg-amber-50 text-amber-600", title: "Deep-Dive Mastery", desc: "We focus on the mastery of concepts that translate to Physics, Chemistry, and Logic-heavy disciplines." }
                ].map((item, i) => (
                  <motion.div variants={fadeIn} key={i} className="flex gap-4">
                    <div className={`mt-1 ${item.color} p-2 rounded-lg h-fit shrink-0`}><item.icon size={24} /></div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image/Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-[2rem] opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 aspect-[4/3]">
                 <img 
                   src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop" 
                   alt="Hands-on learning and scientific inquiry" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8">
                    <p className="text-white font-medium italic">"Active learning boosts knowledge retention by up to 70%."</p>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FAQ: HOW TO STUDY PHYSICS & BEYOND --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              The Art of <span className="text-teal-600">Effective Learning</span>
            </h2>
            <p className="text-slate-600">
              Proven strategies to master Physics, Math, and Logic, curated by Head Coach Cornelius Chew.
            </p>
          </div>

          <div className="space-y-4">
            {studyTips.map((tip, i) => (
              <motion.details 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:shadow-lg transition-all duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-800 text-lg group-hover:text-teal-700 transition-colors">
                  <span>{i+1}. {tip.title}</span>
                  <span className="bg-slate-100 text-slate-400 rounded-full p-1 group-open:rotate-180 transition-transform">
                    <ArrowRight size={16} className="rotate-90" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100">
                  <div className="pt-4">
                    {tip.content}
                  </div>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL BANNER --- */}
      <section className="bg-indigo-900 py-16 text-center text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Globe className="absolute -top-10 -right-10 w-64 h-64 text-white" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-indigo-200 font-bold uppercase tracking-widest text-xs mb-4">Trusted Excellence</p>
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-2xl md:text-3xl font-bold mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            "Proven results and exceptional feedback on Google Search for <br className="hidden md:block"/>
            <span className="text-teal-400 font-black">Physics Made Easy by Cornelius Chew</span>"
          </motion.h2>
          <Link href="https://www.google.com/search?q=Physics+made+easy+by+Cornelius+Chew" target="_blank">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold hover:bg-teal-400 hover:text-white transition-all transform hover:scale-105 shadow-xl">
              Verified Student Reviews
            </button>
          </Link>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-[3rem] p-10 md:p-16 border border-teal-100 shadow-xl relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 rounded-full blur-[80px] opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-[80px] opacity-40"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Start Your Journey to Mastery
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you are conquering <strong>O-Levels, A-Levels, or seeking to sharpen your logical mind</strong>, our specialized coaching is designed for your unique brain.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-teal-600 transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                  Secure Your Slot
                </button>
              </Link>
              <Link href="https://wa.me/6597277419" target="_blank">
                <button className="px-10 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:border-teal-600 hover:text-teal-600 transition-all hover:-translate-y-1 active:scale-95">
                  Inquire on WhatsApp
                </button>
              </Link>
            </div>
            
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mt-8 text-sm text-slate-500 font-semibold uppercase tracking-tighter"
            >
              * Limited intake for special needs students (at no extra cost).
            </motion.p>
          </div>
        </motion.div>
      </section>

    </main>
  );
}