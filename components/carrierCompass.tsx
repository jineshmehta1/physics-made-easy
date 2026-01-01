"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Rocket, Target, 
  Brain, MessageCircle, RefreshCcw, 
  Award, Star, Zap
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';

// --- Types ---
type Question = {
  id: number;
  section: string;
  text: string;
  type: 'choice' | 'scale';
  options?: { label: string; weights: Record<string, number> }[];
  scales?: string[];
};

// --- Assessment Data ---
const QUESTIONS: Question[] = [
  {
    id: 1,
    section: "Problem Solving",
    text: "When faced with a complex physics problem, what’s your first instinct?",
    type: 'choice',
    options: [
      { label: "Break it down into manageable parts", weights: { quantum: 3, finance: 2, analytical: 5 } },
      { label: "Visualize the scenario first", weights: { engineering: 3, education: 2, innovation: 4 } },
      { label: "Look for similar problems solved before", weights: { engineering: 4, digital: 2 } },
      { label: "Check necessary formulas immediately", weights: { education: 3, analytical: 2 } }
    ]
  },
  {
    id: 2,
    section: "Problem Solving",
    text: "How confident are you in creating mathematical models for real-world scenarios?",
    type: 'scale',
    scales: ["analytical", "finance", "quantum"]
  },
  {
    id: 3,
    section: "Technology",
    text: "How comfortable are you with programming (Python/MATLAB)?",
    type: 'scale',
    scales: ["digital", "quantum", "engineering"]
  },
  {
    id: 4,
    section: "Work Style",
    text: "In group projects, you naturally:",
    type: 'choice',
    options: [
      { label: "Take charge and delegate tasks", weights: { leadership: 5, entrepreneur: 4 } },
      { label: "Work independently on my part", weights: { finance: 4, quantum: 3, analytical: 2 } },
      { label: "Help wherever needed", weights: { education: 4, communication: 3 } },
      { label: "Analyze data and draw conclusions", weights: { analytical: 5, finance: 3 } }
    ]
  },
  {
    id: 5,
    section: "Communication",
    text: "Rate your confidence in explaining physics concepts to non-science students:",
    type: 'scale',
    scales: ["communication", "education"]
  },
  {
    id: 6,
    section: "Innovation",
    text: "How interested are you in emerging tech like AI and Renewable Energy?",
    type: 'scale',
    scales: ["innovation", "digital", "entrepreneur"]
  }
];

const TRACKS = [
  { id: 'quantum', name: 'Quantum & Research', color: '#6366f1' },
  { id: 'engineering', name: 'Engineering & Tech', color: '#10b981' },
  { id: 'finance', name: 'Finance & Data', color: '#f59e0b' },
  { id: 'education', name: 'Education & Comm', color: '#ec4899' },
  { id: 'entrepreneur', name: 'Innovation & Startups', color: '#8b5cf6' }
];

export default function CareerCompass() {
  const [step, setStep] = useState(0); 
  const [currentIdx, setCurrentIdx] = useState(0);
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
    nextQuestion();
  };

  const handleScale = (val: number, scales: string[]) => {
    const newScores = { ...scores };
    scales.forEach(s => {
      newScores[s] = (newScores[s] || 0) + val;
    });
    setScores(newScores);
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStep(99); 
    }
  };

  const getTopTracks = () => {
    return TRACKS.map(t => ({
      ...t,
      score: scores[t.id] || 0
    })).sort((a, b) => b.score - a.score).slice(0, 3);
  };

  // --- New: WhatsApp Handler ---
  const contactMrChew = () => {
    const topMatch = getTopTracks()[0];
    const message = `Hi Mr. Chew! I just finished the Your Career Compass assessment. 
    
My Top Match: ${topMatch.name}
    
My Skill Scores:
- Analytical: ${scores.analytical}
- Digital: ${scores.digital}
- Communication: ${scores.communication}
- Innovation: ${scores.innovation}
- Leadership: ${scores.leadership}

I would like to book a consultation to discuss my career roadmap!`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/6597277419?text=${encodedMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        <AnimatePresence mode="wait">
          {/* --- LANDING --- */}
          {step === 0 && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 text-center"
            >
              <div className="w-20 h-20 bg-teal-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-lg">
                <Target size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-6">Your Career <span className="text-teal-600">Compass</span></h1>
              <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">Discover your ideal career path based on the WEF 2025 Skills Framework.</p>
              <button onClick={() => setStep(1)} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-teal-600 transition-all shadow-xl flex items-center gap-3 mx-auto">
                Start Assessment <ChevronRight />
              </button>
            </motion.div>
          )}

          {/* --- QUESTIONS --- */}
          {step === 1 && (
            <motion.div 
              key="question"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 min-h-[500px] flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{QUESTIONS[currentIdx].section}</span>
                <span className="text-xs font-black text-teal-600">{currentIdx + 1} / {QUESTIONS.length}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black mb-10">{QUESTIONS[currentIdx].text}</h2>

              <div className="space-y-4 mt-auto">
                {QUESTIONS[currentIdx].type === 'choice' && QUESTIONS[currentIdx].options?.map((opt, i) => (
                  <button key={i} onClick={() => handleChoice(opt.weights)} className="w-full text-left p-6 rounded-2xl border-2 border-slate-50 hover:border-teal-500 hover:bg-teal-50 transition-all font-bold text-slate-700 flex justify-between items-center group">
                    {opt.label} <ChevronRight size={18} className="text-slate-300 group-hover:text-teal-500" />
                  </button>
                ))}

                {QUESTIONS[currentIdx].type === 'scale' && (
                  <div className="flex flex-col gap-6">
                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-tighter">
                      <span>Low Confidence</span>
                      <span>High Confidence</span>
                    </div>
                    <div className="flex justify-between items-center gap-2 md:gap-4">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button key={val} onClick={() => handleScale(val * 2, QUESTIONS[currentIdx].scales || [])} className="w-full h-16 md:h-20 rounded-2xl border-2 border-slate-50 hover:border-teal-500 hover:bg-teal-50 flex items-center justify-center text-xl font-black text-slate-400 hover:text-teal-600 transition-all">
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* --- RESULTS --- */}
          {step === 99 && (
            <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
                  <Award size={16} /> Analysis Complete
                </div>
                <h1 className="text-4xl font-black mb-4 text-slate-900">Your Physics Roadmap</h1>
                <p className="text-slate-500 max-w-lg mx-auto">We've analyzed your responses. Here is your unique career profile and recommended next steps.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Radar Chart */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-slate-900">
                    <Brain className="text-teal-600" /> Skills Signature
                  </h3>
                  <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={[
                        { subject: 'Digital', A: scores.digital },
                        { subject: 'Analytical', A: scores.analytical },
                        { subject: 'Comm', A: scores.communication },
                        { subject: 'Innovation', A: scores.innovation },
                        { subject: 'Lead', A: scores.leadership },
                      ]}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 700 }} />
                        <Radar name="You" dataKey="A" stroke="#0d9488" fill="#0d9488" fillOpacity={0.5} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Matches & WhatsApp */}
                <div className="bg-slate-900 rounded-[2.5rem] p-8 shadow-lg text-white flex flex-col">
                  <h3 className="text-xl font-black mb-8 flex items-center gap-2">
                    <Rocket className="text-teal-400" /> Top Path Matches
                  </h3>
                  <div className="space-y-6 flex-grow">
                    {getTopTracks().map((track, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-teal-400">{i + 1}</div>
                        <div className="flex-grow">
                          <div className="flex justify-between mb-1">
                            <span className="font-bold">{track.name}</span>
                            <span className="text-teal-400 font-black">{70 + track.score}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: `${70 + track.score}%` }} className="h-full bg-teal-500" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Updated Button: WhatsApp Mr Chew */}
                  <button 
                    onClick={contactMrChew}
                    className="w-full mt-10 py-5 bg-teal-500 hover:bg-teal-400 text-white rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-lg shadow-teal-500/20"
                  >
                    <MessageCircle size={22} /> WhatsApp Mr. Chew for Counseling
                  </button>
                  <p className="text-[10px] text-center mt-4 text-slate-400 uppercase tracking-widest font-bold">Free 15-Min Discovery Call Included</p>
                </div>
              </div>

              {/* Action Roadmap */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-black mb-8">Personalized Action Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
                    <Zap className="text-teal-600 mb-3" size={24} />
                    <h4 className="font-bold mb-2 text-slate-900">Immediate Step</h4>
                    <p className="text-sm text-slate-600">Review university prerequisites for {getTopTracks()[0].name}.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-100">
                    <Star className="text-indigo-600 mb-3" size={24} />
                    <h4 className="font-bold mb-2 text-slate-900">Skill Focus</h4>
                    <p className="text-sm text-slate-600">Strengthen your {scores.analytical > scores.digital ? 'Digital Literacy' : 'Analytical Thinking'} score.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                    <RefreshCcw className="text-slate-600 mb-3" size={24} />
                    <h4 className="font-bold mb-2 text-slate-900">Next Semester</h4>
                    <p className="text-sm text-slate-600">Apply for a physics-related internship or research project.</p>
                  </div>
                </div>
              </div>

              <div className="text-center pb-12">
                <button onClick={() => {setStep(0); setCurrentIdx(0);}} className="text-slate-400 font-bold hover:text-teal-600 transition-all flex items-center gap-2 mx-auto">
                  <RefreshCcw size={16} /> Retake Assessment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}