"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  MessageCircle,
  Phone,
  ChevronDown
} from "lucide-react";

// --- FAQ Data (Specific to Physics Made Easy) ---
const faqData = [
  {
    id: 1,
    question: "What makes 'Physics Made Easy' different from other tuition centers?",
    answer:
      "We use the Multiple Intelligences (MI) theory to teach. Led by Mr. Chew (Ex-MOE Scholar & FIDE Instructor), we combine academic rigor with Chess strategy. This helps students not just memorize formulas, but develop the critical thinking skills needed to solve complex exam problems.",
  },
  {
    id: 2,
    question: "Which levels and boards do you cover?",
    answer:
      "We specialize in Physics for GCE O-Levels, A-Levels (H1/H2), IB (HL/SL), IP, and IGCSE. We also offer lower secondary science coaching to build a strong foundation early on.",
  },
  {
    id: 3,
    question: "Where are classes held? Do you offer online lessons?",
    answer:
      "Physical classes are held at our center in Toa Payoh Central (Lobby H). Yes, we also offer high-quality online lessons for students who prefer learning from home or are based overseas.",
  },
  {
    id: 4,
    question: "How does Chess help with Physics?",
    answer:
      "Chess teaches pattern recognition, foresight, and disciplined calculation—skills directly transferable to Physics problem-solving. It trains the brain to think continuously and logically, which is crucial for tackling high-level exam questions.",
  },
  {
    id: 5,
    question: "What is your track record for student results?",
    answer:
      "We have a proven history of excellence: 95% of our O-Level students have scored A/B grades, and 95% of our IB HL Physics students achieved Grade 7. We focus on turning improvements into consistency.",
  },
  {
    id: 6,
    question: "Do you offer trial classes?",
    answer:
      "Yes! We believe in the right fit. You can book a paid trial lesson to experience our teaching style firsthand before committing to a term package. Contact us via WhatsApp to schedule.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-20 lg:py-28 font-sans overflow-hidden" id="faq">
      
      {/* --- Background Decor --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 mb-6 shadow-sm border border-teal-100"
          >
            <HelpCircle size={24} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-600 text-lg max-w-xl mx-auto"
          >
            Everything you need to know about our methodology, logistics, and results.
          </motion.p>
        </div>

        {/* --- FAQ Accordion --- */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                group rounded-2xl border transition-all duration-300 overflow-hidden bg-white
                ${openIndex === index 
                  ? 'border-teal-500/30 shadow-lg shadow-teal-900/5 ring-1 ring-teal-500/20' 
                  : 'border-slate-200 hover:border-teal-300'
                }
              `}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                   <span className={`text-sm font-bold w-6 h-6 rounded flex items-center justify-center transition-colors ${openIndex === index ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500'}`}>
                      {index + 1}
                   </span>
                   <span className={`font-bold text-lg md:text-xl pr-4 transition-colors ${openIndex === index ? 'text-teal-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                    {item.question}
                  </span>
                </div>
                
                {/* Icon Toggle */}
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                  ${openIndex === index ? 'bg-teal-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-600'}
                `}>
                  <ChevronDown size={18} />
                </div>
              </button>
              
              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pl-[4.5rem] pr-8">
                      <p className="text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Contact Box --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-3">
                Still have questions?
            </h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                Mr. Chew is available to answer your specific queries regarding your child's learning needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                    href="https://wa.me/6597277419" 
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/20"
                >
                    <MessageCircle size={18} />
                    WhatsApp Us
                </a>
                <a 
                    href="tel:+6597277419" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-800 text-white border border-slate-700 rounded-xl font-bold hover:bg-slate-700 transition-all"
                >
                    <Phone size={18} />
                    +65 9727 7419
                </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}