"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Cpu, 
  Leaf, 
  LineChart, 
  Rocket, 
  GraduationCap, 
  Calendar,
  CheckCircle2,
  ArrowRight,
  Download,
  MessageCircle,
  Zap,
  Star,
  ExternalLink
} from 'lucide-react';

const CareerGuidance = () => {
  // SEO Structured Data for Job/Career Guidance
  const careerSchema = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "name": "Physics Career Roadmap Singapore",
    "description": "Expert career guidance for Physics students in Singapore covering Quantum, FinTech, and Green Energy.",
    "publisher": {
      "@type": "Organization",
      "name": "Physics & Strategy Academy"
    }
  };

  const stats = [
    { label: "High-Growth Roles", value: "725+", sub: "SG Tech Sector" },
    { label: "Quant Salaries", value: "$6.5k+", sub: "Starting Average" },
    { label: "Future Potential", value: "100%", sub: "STEM Demand" },
    { label: "Global Median", value: "$130k", sub: "Annual Specialist" },
  ];

  const paths = [
    {
      id: "quantum",
      title: "Quantum Tech",
      icon: <Cpu className="w-5 h-5" />,
      growth: "SG Quantum Strategy 2034",
      salary: "$131k avg",
      color: "purple",
      roles: ["Quantum Dev", "Crypto Specialist"]
    },
    {
      id: "green",
      title: "Green Energy",
      icon: <Leaf className="w-5 h-5" />,
      growth: "SG Green Plan 2030",
      salary: "$5k - $8k/mo",
      color: "emerald",
      roles: ["Solar Engineer", "Grid Analyst"]
    },
    {
      id: "fintech",
      title: "Quant FinTech",
      icon: <LineChart className="w-5 h-5" />,
      growth: "Algo-Trading Demand",
      salary: "$120k+ Base",
      color: "blue",
      roles: ["Risk Quant", "HFT Developer"]
    },
    {
      id: "aero",
      title: "Space & Aero",
      icon: <Rocket className="w-5 h-5" />,
      growth: "$20B Industry Gov Spend",
      salary: "Lead Engineer",
      color: "slate",
      roles: ["Satellite Tech", "Avionics"]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#F8FAFC] font-sans overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careerSchema) }} />
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-50/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER & LIVE STATS --- */}
        <div className="flex flex-col xl:flex-row items-end justify-between gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Zap size={14} className="text-teal-400 fill-teal-400" /> Professional Future-Proofing
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Physics is the Language of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">The Future Economy.</span>
            </h2>
            <p className="mt-6 text-slate-500 text-lg max-w-2xl leading-relaxed">
              We don't just teach for exams; we prepare students for high-stakes careers in <strong>Singapore's Quantum, Space, and FinTech</strong> sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 w-full xl:w-auto">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200/60 text-center hover:border-teal-300 transition-colors"
              >
                <div className="text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight mb-2">{stat.label}</div>
                <div className="text-[9px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full inline-block">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- DOMAIN GRID (4 PATHS) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {paths.map((path) => (
            <motion.div
              key={path.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-${path.color}-500/10 transition-all group`}
            >
              <div className={`mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-${path.color}-50 text-${path.color}-600 group-hover:bg-${path.color}-600 group-hover:text-white transition-all`}>
                {path.icon}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-2">{path.title}</h4>
              <p className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-tight">{path.growth}</p>
              
              <div className="space-y-3 mb-8">
                {path.roles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <CheckCircle2 size={14} className="text-teal-500" /> {role}
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-sm font-black text-slate-900">{path.salary}</span>
                <ExternalLink size={14} className="text-slate-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- ROADMAP & SPOTLIGHT --- */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Roadmap (Left 7) */}
          <div className="lg:col-span-7">
            <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
              <Calendar className="text-teal-600" /> 5-Year Success Blueprint
            </h3>
            <div className="relative space-y-10 pl-8 border-l-2 border-slate-200">
              {[
                { year: "Phase 1: Foundation", goal: "Target: Grade A/7", desc: "Master IB/O-Level Physics while developing strategic logic through competitive Chess.", color: "teal" },
                { year: "Phase 2: Specialization", goal: "STEM Portfolio Build", desc: "University selection & mastering Computational Physics (Python/MATLAB).", color: "indigo" },
                { year: "Phase 3: Career Entry", goal: "$4,000+ Starting Pay", desc: "Securing internships at A*STAR, Dyson, or Fintech hubs in Singapore.", color: "purple" }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white shadow-md transition-colors bg-${step.color}-500 group-hover:scale-125`} />
                  <span className={`text-${step.color}-600 font-bold text-xs uppercase tracking-[0.2em]`}>{step.year}</span>
                  <h4 className="text-2xl font-black text-slate-900 mt-1">{step.goal}</h4>
                  <p className="text-slate-500 mt-2 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Success Stories (Right 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6 text-teal-400">
                  <Star size={16} fill="currentColor" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Alumni Spotlight</span>
                </div>
                
                <div className="space-y-8">
                  <div className="border-l-2 border-teal-500/30 pl-4">
                    <p className="font-bold text-lg mb-1">Sarah Chen</p>
                    <p className="text-xs text-slate-400 font-medium mb-2 uppercase">Quantum Dev @ A*STAR</p>
                    <p className="text-sm text-slate-300 italic">"The logic skills I learned from Physics and Chess were the foundation of my career."</p>
                  </div>
                  <div className="border-l-2 border-indigo-500/30 pl-4">
                    <p className="font-bold text-lg mb-1">Marcus Lim</p>
                    <p className="text-xs text-slate-400 font-medium mb-2 uppercase">Quant @ Goldman Sachs</p>
                    <p className="text-sm text-slate-300 italic">"Mastering MI Theory allowed me to simplify complex data into actionable strategies."</p>
                  </div>
                </div>

                <div className="mt-12 flex flex-col gap-3">
                  <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-teal-500/20 active:scale-95">
                    <MessageCircle size={18} /> Consulting with Mr. Chew
                  </button>
                </div>
              </div>

              {/* Decorative Mesh */}
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerGuidance;