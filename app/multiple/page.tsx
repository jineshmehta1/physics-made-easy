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
  Lightbulb
} from "lucide-react";

// --- Data: The 8 Intelligences ---
const miData = [
  {
    title: "Logical-Mathematical",
    tag: "Number Smart",
    desc: "Analyzing data, deriving formulas, and logical problem-solving.",
    icon: Calculator,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Visual-Spatial",
    tag: "Picture Smart",
    desc: "Visualizing abstract fields/waves, creating diagrams, and simulation models.",
    icon: Eye,
    color: "text-teal-600",
    bg: "bg-teal-50"
  },
  {
    title: "Bodily-Kinesthetic",
    tag: "Body Smart",
    desc: "Hands-on experiments, physical modeling of forces, and 'acting out' concepts.",
    icon: Activity,
    color: "text-rose-600",
    bg: "bg-rose-50"
  },
  {
    title: "Linguistic",
    tag: "Word Smart",
    desc: "Writing lab reports, articulating concepts verbally, and storytelling.",
    icon: BookOpen,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Interpersonal",
    tag: "People Smart",
    desc: "Peer Learning, group discussions, and collaborative problem-solving.",
    icon: Users,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Intrapersonal",
    tag: "Self Smart",
    desc: "Self-reflection journals, independent study, and connecting physics to personal goals.",
    icon: User,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Naturalistic",
    tag: "Nature Smart",
    desc: "Connecting physics to real-world phenomena like rainbows, gravity, and thermodynamics.",
    icon: Leaf,
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    title: "Existential",
    tag: "Wondering Smart",
    desc: "Exploring the 'Big Questions': Origins of the universe, cosmology, and philosophy.",
    icon: HelpCircle,
    color: "text-violet-600",
    bg: "bg-violet-50"
  },
];

// --- Data: Study Tips (FAQ Format) ---
const studyTips = [
  {
    title: "Understand the Fundamentals",
    content: "Physics is hierarchical. Ensure you grasp the basics of Algebra and Trigonometry. Don't just memorize definitions; understand the 'why' behind Newton's laws and Conservation of Energy."
  },
  {
    title: "Develop a Study Routine",
    content: "Prioritize problem-solving (70% of your time). Create specific goals for each session. Regularly review notes and reflect on what you've learned to identify weak areas."
  },
  {
    title: "Active Learning Techniques",
    content: "Use visual aids like free-body diagrams. Create concept maps to link ideas. Teach someone else (a friend or even a pet) to test your own understanding."
  },
  {
    title: "Effective Resource Utilization",
    content: "Supplement textbooks with Khan Academy, PhET simulations, and video lectures. Use past year papers to get used to exam formatting."
  },
  {
    title: "Learn from Mistakes",
    content: "Analyze your errors—don't just check the answer key. Trace your steps back to find the logic error. Self-assess regularly with flashcards."
  }
];

export default function MultipleIntelligencesPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(to right, #14b8a6 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-widest mb-6">
             <Brain size={14} />
             <span>The Science of Learning</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Unlocking Potential Through <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
              Multiple Intelligences
            </span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            At <strong>Physics Made Easy</strong>, we don't just teach formulas. We tailor lessons to how <em>your</em> brain works. From Visual to Kinesthetic learning, we ensure every student excels.
          </p>
          
          {/* Key Selling Points */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-300">
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-teal-400"/> Special Needs Welcome (No Extra Cost)</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-teal-400"/> Peer Learning Environment</span>
            <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-teal-400"/> Bundle Discounts Available</span>
          </div>
        </div>
      </section>

      {/* --- THE 8 INTELLIGENCES GRID --- */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            How We Teach: <span className="text-teal-600">The 8 Intelligences</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We move beyond the "one-size-fits-all" lecture. Here is how we translate Howard Gardner's theory into our Physics classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {miData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
        </div>
      </section>

      {/* --- PEDAGOGY & METHODOLOGY --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">
                  From Passive Listening to <br/>
                  <span className="text-indigo-600">Active Construction</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We employ specific pedagogical strategies to ensure every student connects with the material, regardless of their dominant intelligence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-indigo-50 p-2 rounded-lg h-fit text-indigo-600"><Layers size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Guided Inquiry</h4>
                    <p className="text-slate-500">Students interact with data and technology to construct their own conclusions rather than just listening to a lecture.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-teal-50 p-2 rounded-lg h-fit text-teal-600"><Lightbulb size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Project-Based Learning (PBL)</h4>
                    <p className="text-slate-500">Students build functional catapults, design circuits, or research black holes. This allows "Body Smart" and "Picture Smart" students to shine.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-amber-50 p-2 rounded-lg h-fit text-amber-600"><Sparkles size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Authentic Assessment</h4>
                    <p className="text-slate-500">We grade based on portfolios, demonstrations, and journal reflections—not just written exams.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-[2rem] opacity-20 blur-2xl"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 aspect-[4/3]">
                 <img 
                   src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop" 
                   alt="Students doing experiment" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-8">
                    <p className="text-white font-medium">"Laboratory work boosts retention for kinesthetic learners."</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ: HOW TO STUDY PHYSICS --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              How to Study Physics <span className="text-teal-600">Efficiently</span>
            </h2>
            <p className="text-slate-600">
              A strategic approach to mastering the subject, directly from our Head Coach.
            </p>
          </div>

          <div className="space-y-4">
            {studyTips.map((tip, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden open:shadow-lg transition-all duration-300">
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
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL BANNER --- */}
      <section className="bg-indigo-900 py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <p className="text-indigo-200 font-bold uppercase tracking-widest text-xs mb-4">Real Results</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl mx-auto">
            "Really good reviews when you google search <span className="text-teal-400">Physics made easy by Cornelius Chew</span>"
          </h2>
          <Link href="https://www.google.com/search?q=Physics+made+easy+by+Cornelius+Chew" target="_blank">
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors">
              Read Reviews on Google
            </button>
          </Link>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <div className="bg-gradient-to-br from-teal-50 to-indigo-50 rounded-[3rem] p-10 md:p-16 border border-teal-100 shadow-xl relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-200 rounded-full blur-[80px] opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              Ready to Master Physics?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join a community where <strong>Positive Learning</strong> meets <strong>Academic Excellence</strong>. 
              Special needs students welcome at no extra cost.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-teal-600 transition-all shadow-lg hover:-translate-y-1">
                  Book Your Slot Today
                </button>
              </Link>
              <Link href="https://wa.me/6597277419" target="_blank">
                <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:border-teal-600 hover:text-teal-600 transition-all hover:-translate-y-1">
                  WhatsApp Us
                </button>
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-slate-500 font-medium">
              * Discounts available when you sign up for multiple subjects.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}