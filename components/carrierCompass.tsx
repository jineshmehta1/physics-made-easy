"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { 
  ChevronRight, Rocket, Target, 
  Brain, MessageCircle, RefreshCcw, 
  Award, Star, Zap, Info
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

// --- SEO & Content Data ---
const SEO_METADATA = {
  title: "Physics Career Compass | Strategic Aptitude Assessment",
  description: "Discover your ideal STEM career path in Singapore using the WEF 2026 Skills Framework. Specialized for Physics and Mathematics students.",
  keywords: "Physics Career Test, STEM Aptitude Singapore, Mr Chew Physics, IB Physics Careers"
};

type Question = {
  id: number;
  section: string;
  text: string;
  type: 'choice' | 'scale';
  options?: { label: string; weights: Record<string, number> }[];
  scales?: string[];
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    section: "Cognitive Strategy",
    text: "When faced with a complex physics problem, what’s your first instinct?",
    type: 'choice',
    options: [
      { label: "Deconstruct into fundamental mathematical laws", weights: { quantum: 3, finance: 2, analytical: 5 } },
      { label: "Visualize the spatial/physical mechanism first", weights: { engineering: 3, education: 2, innovation: 4 } },
      { label: "Pattern match with previously solved high-level cases", weights: { engineering: 4, digital: 2 } },
      { label: "Audit the data constraints and required formulas", weights: { education: 3, analytical: 2 } }
    ]
  },
  {
    id: 2,
    section: "Mathematical Modeling",
    text: "How confident are you in converting real-world chaos into structured mathematical models?",
    type: 'scale',
    scales: ["analytical", "finance", "quantum"]
  },
  {
    id: 3,
    section: "Digital Literacy",
    text: "How comfortable are you with computational logic (Python, MATLAB, or Algo-thinking)?",
    type: 'scale',
    scales: ["digital", "quantum", "engineering"]
  },
  {
    id: 4,
    section: "Interpersonal Dynamics",
    text: "In a strategic group setting, you naturally:",
    type: 'choice',
    options: [
      { label: "Orchestrate resources and delegate high-level tasks", weights: { leadership: 5, entrepreneur: 4 } },
      { label: "Deep-dive into independent technical execution", weights: { finance: 4, quantum: 3, analytical: 2 } },
      { label: "Translate complex technicals for team understanding", weights: { education: 4, communication: 3 } },
      { label: "Identify logical fallacies in the team's data approach", weights: { analytical: 5, finance: 3 } }
    ]
  },
  {
    id: 5,
    section: "Knowledge Transfer",
    text: "Rate your ability to explain Entropy or Quantum Mechanics to a non-scientist:",
    type: 'scale',
    scales: ["communication", "education"]
  },
  {
    id: 6,
    section: "Future Horizons",
    text: "How motivated are you by disrupting existing systems (AI, Green Energy, Web3)?",
    type: 'scale',
    scales: ["innovation", "digital", "entrepreneur"]
  }
];

const TRACKS = [
  { id: 'quantum', name: 'Quantum & Deep Research', color: '#6366f1' },
  { id: 'engineering', name: 'Applied Engineering & Robotics', color: '#10b981' },
  { id: 'finance', name: 'Quantitative Finance & Data', color: '#f59e0b' },
  { id: 'education', name: 'Strategic Comm & Education', color: '#ec4899' },
  { id: 'entrepreneur', name: 'Venture Innovation', color: '#8b5cf6' }
];

export default function CareerCompass() {
  const [step, setStep] = useState(0); 
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1); // For slide animations
  const [scores, setScores] = useState<Record<string, number>>({
    quantum: 0, engineering: 0, finance: 0, education: 0, entrepreneur: 0,
    digital: 0, analytical: 0, communication: 0, innovation: 0, leadership: 0
  });

  const handleChoice = (weights: Record<string, number>) => {
    const newScores = { ...scores };
    Object.keys(weights).forEach(key => {
      newScores[key] = (newScores[key] || 0) + weights[key];
    });
    setScores(newScores);
    proceed();
  };

  const handleScale = (val: number, scales: string[]) => {
    const newScores = { ...scores };
    scales.forEach(s => {
      newScores[s] = (newScores[s] || 0) + val;
    });
    setScores(newScores);
    proceed();
  };

  const proceed = () => {
    setDirection(1);
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setStep(99); 
    }
  };

  const getTopTracks = () => {
    return TRACKS.map(t => ({
      ...t,
      score: Math.min(95, 65 + (scores[t.id] || 0) * 2) 
    })).sort((a, b) => b.score - a.score).slice(0, 3);
  };

  const contactMrChew = () => {
    const topMatch = getTopTracks()[0];
    const message = `*Career Assessment Results - ${new Date().toLocaleDateString()}*

My Top Match: *${topMatch.name}* (${topMatch.score}%)

*Core Skillset Profile:*
- Analytical Thinking: ${scores.analytical}
- Computational Logic: ${scores.digital}
- Strategic Comm: ${scores.communication}
- Innovation Drive: ${scores.innovation}
- Leadership: ${scores.leadership}

Hi Mr. Chew, I'd like to discuss my personalized career roadmap based on these results!`;

    window.open(`https://wa.me/6597277419?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#F8FAFC] py-12 px-4 overflow-hidden selection:bg-teal-100">
      
      {/* --- Hidden SEO Content for Bots --- */}
      <div className="sr-only">
        <h1>{SEO_METADATA.title}</h1>
        <p>{SEO_METADATA.description}</p>
        <h2>Advanced STEM Career Mapping for Singapore Students</h2>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          
          {/* --- LANDING STAGE --- */}
          {step === 0 && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="bg-white rounded-[3.5rem] p-10 md:p-20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500" />
              <motion.div 
                animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-10"
              >
                <Target size={48} strokeWidth={1.5} />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Your Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Compass.</span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                Strategic career mapping for the 2026 STEM landscape. Analyze your cognitive strengths across 10 professional domains.
              </p>
              <button 
                onClick={() => setStep(1)} 
                className="group relative bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-teal-600 transition-all shadow-2xl active:scale-95"
              >
                <span className="flex items-center gap-3">
                  Begin Assessment <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <div className="mt-8 flex items-center justify-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <span>WEF Framework</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>MI Theory</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>STEM 2026</span>
              </div>
            </motion.div>
          )}

          {/* --- ASSESSMENT STAGE --- */}
          {step === 1 && (
            <motion.div 
              key="question"
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
            >
              {/* Progress Bar */}
              <div className="h-2 w-full bg-slate-100">
                <motion.div 
                  className="h-full bg-teal-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              <div className="p-8 md:p-14">
                <header className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-xs">
                      {currentIdx + 1}
                    </div>
                    <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{QUESTIONS[currentIdx].section}</span>
                  </div>
                  <span className="text-xs font-black text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase">Step {currentIdx + 1} of {QUESTIONS.length}</span>
                </header>

                <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-12 leading-tight">
                  {QUESTIONS[currentIdx].text}
                </h2>

                <div className="space-y-4">
                  {QUESTIONS[currentIdx].type === 'choice' && QUESTIONS[currentIdx].options?.map((opt, i) => (
                    <motion.button 
                      key={i} 
                      whileHover={{ x: 10 }}
                      onClick={() => handleChoice(opt.weights)} 
                      className="w-full text-left p-6 rounded-2xl border-2 border-slate-50 hover:border-teal-500 hover:bg-teal-50/50 transition-all font-bold text-slate-700 flex justify-between items-center group shadow-sm hover:shadow-md"
                    >
                      <span className="text-lg">{opt.label}</span>
                      <ChevronRight size={20} className="text-slate-300 group-hover:text-teal-500 transition-colors" />
                    </motion.button>
                  ))}

                  {QUESTIONS[currentIdx].type === 'scale' && (
                    <div className="space-y-8 py-6">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Emerging Talent</span>
                        <span className="text-xs font-black text-teal-600 uppercase tracking-widest">Mastery Level</span>
                      </div>
                      <div className="flex justify-between gap-3">
                        {[1, 2, 3, 4, 5].map((val) => (
                          <button 
                            key={val} 
                            onClick={() => handleScale(val * 2, QUESTIONS[currentIdx].scales || [])} 
                            className="flex-1 h-20 rounded-2xl border-2 border-slate-100 hover:border-teal-500 hover:bg-teal-50 flex flex-col items-center justify-center gap-1 transition-all group"
                          >
                            <span className="text-2xl font-black text-slate-300 group-hover:text-teal-600">{val}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-teal-500 transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* --- RESULTS STAGE --- */}
          {step === 99 && (
            <motion.div 
              key="results" 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Profile Card */}
              <div className="lg:col-span-12 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-teal-100 pointer-events-none">
                  <Award size={120} strokeWidth={1} />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-black uppercase tracking-widest mb-6">
                  <Zap size={14} className="fill-teal-700" /> Strategy Profile Generated
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-4">Your STEM Intelligence Profile</h2>
                <p className="text-slate-500 text-lg max-w-xl mx-auto">Based on your strategic instincts and technical confidence scores.</p>
              </div>

              {/* Skill Chart */}
              <div className="lg:col-span-5 bg-white rounded-[3rem] p-8 shadow-xl border border-slate-100 flex flex-col">
                <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                  <Brain className="text-indigo-600" /> Cognitive Signature
                </h3>
                <div className="flex-grow min-h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                      { subject: 'Digital', A: scores.digital + 5 },
                      { subject: 'Analytical', A: scores.analytical + 5 },
                      { subject: 'Strategic Comm', A: scores.communication + 5 },
                      { subject: 'Innovation', A: scores.innovation + 5 },
                      { subject: 'Leadership', A: scores.leadership + 5 },
                    ]}>
                      <PolarGrid stroke="#f1f5f9" strokeWidth={2} />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 800 }} />
                      <Radar name="You" dataKey="A" stroke="#0d9488" fill="#0d9488" fillOpacity={0.4} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Match Details */}
              <div className="lg:col-span-7 bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-black mb-10 flex items-center gap-3 text-teal-400">
                    <Rocket /> Professional Alignment
                  </h3>
                  
                  <div className="space-y-8 flex-grow">
                    {getTopTracks().map((track, i) => (
                      <div key={i} className="group">
                        <div className="flex justify-between items-end mb-3">
                          <span className="text-lg font-bold group-hover:text-teal-400 transition-colors">{track.name}</span>
                          <span className="text-sm font-black text-teal-500">{track.score}% Match</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: `${track.score}%` }} 
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className="h-full bg-gradient-to-r from-teal-500 to-indigo-500" 
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={contactMrChew}
                      className="flex-grow py-5 bg-teal-500 hover:bg-teal-400 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-teal-500/20 active:scale-95"
                    >
                      <MessageCircle size={24} /> WhatsApp Consultation
                    </button>
                    <button 
                      onClick={() => {setStep(0); setCurrentIdx(0); setScores({quantum: 0, engineering: 0, finance: 0, education: 0, entrepreneur: 0, digital: 0, analytical: 0, communication: 0, innovation: 0, leadership: 0});}}
                      className="p-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all"
                      title="Reset Assessment"
                    >
                      <RefreshCcw size={24} />
                    </button>
                  </div>
                  <p className="text-[10px] text-center mt-6 text-slate-500 font-bold uppercase tracking-widest">
                    Expert Analysis Included • No Strings Attached
                  </p>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-teal-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}