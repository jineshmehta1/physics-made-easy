"use client"

import { useState } from "react"
import { Plus, Minus, MessageCircle, Phone, HelpCircle, ArrowRight } from "lucide-react"

export default function ColorfulFAQSection() {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState<number | null>(0)

const faqs = [
  {
    question: "Is this just another boring tuition center?",
    answer: "Negative. We don't do rote learning. We use Chess strategies to hack Physics problems. Think of it as learning the meta of the game before you play.",
    category: "Gameplay",
    theme: "blue"
  },
  {
    question: "Can I join online if I'm too lazy to travel?",
    answer: "Affirmative. We have a high-res discord-style online setup. Live streams, digital whiteboards, and recordings available 24/7.",
    category: "Logistics",
    theme: "amber"
  },
  {
    question: "What if I'm failing Physics right now?",
    answer: "Then you're our favorite kind of student. We specialize in 'respawning' grades. Our crash courses are designed to boost stats fast.",
    category: "Difficulty",
    theme: "green"
  },
];


  // Helper to get dynamic style classes based on theme
  const getThemeStyles = (theme: string, isOpen: boolean) => {
    const styles: Record<string, any> = {
      blue: {
        active: "bg-blue-50 border-blue-200 shadow-blue-100",
        icon: "bg-blue-500 text-white",
        text: "text-blue-800"
      },
      amber: {
        active: "bg-amber-50 border-amber-200 shadow-amber-100",
        icon: "bg-amber-500 text-white",
        text: "text-amber-800"
      },
      green: {
        active: "bg-green-50 border-green-200 shadow-green-100",
        icon: "bg-green-500 text-white",
        text: "text-green-800"
      },
      rose: {
        active: "bg-rose-50 border-rose-200 shadow-rose-100",
        icon: "bg-rose-500 text-white",
        text: "text-rose-800"
      },
    }
    
    const current = styles[theme] || styles.blue
    
    return {
      container: isOpen 
        ? `${current.active} shadow-lg scale-[1.02]` 
        : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50",
      icon: isOpen ? current.icon : "bg-slate-100 text-slate-400",
      answerText: current.text
    }
  }

  return (
    <section className="py-20 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* -----------------------------------------------------------------
             LEFT COLUMN: THE FAQS
             ----------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 font-bold text-xs uppercase tracking-wider">
                <HelpCircle size={14} /> 
                <span>Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Everything You Need <br />
                To <span className="text-amber-500 underline decoration-wavy decoration-amber-300 underline-offset-4">Know</span> 🤔
              </h2>
              <p className="text-slate-500 text-lg max-w-xl">
                We know choosing a school is a big decision. Here are answers to the most common questions parents ask us.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                const styles = getThemeStyles(faq.theme, isOpen)

                return (
                  <div
                    key={index}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`
                      group rounded-2xl border-2 p-1 transition-all duration-300 cursor-pointer
                      ${isOpen ? 'border-transparent' : 'border-transparent'}
                    `}
                  >
                    <div className={`
                      rounded-xl border p-5 transition-all duration-300
                      ${styles.container}
                    `}>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className={`font-bold text-lg leading-snug transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-700'}`}>
                          {faq.question}
                        </h3>
                        <span className={`
                          flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 shadow-sm
                          ${styles.icon}
                        `}>
                          {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                        </span>
                      </div>
                      
                      <div className={`
                        grid transition-all duration-300 ease-in-out
                        ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}
                      `}>
                        <div className="overflow-hidden">
                          <p className={`font-medium leading-relaxed pr-8 ${styles.answerText}`}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* -----------------------------------------------------------------
             RIGHT COLUMN: IMAGE & DECORATIONS
             ----------------------------------------------------------------- */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-12">
            <div className="relative group perspective-1000">
              
              {/* Abstract Blobs Background */}
              <div className="absolute top-10 -right-10 w-64 h-64 bg-amber-200 rounded-full blur-3xl opacity-40 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10"></div>

              {/* Main Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200 transform transition-transform duration-500 hover:rotate-1">
                <img
                  src="/teach1.webp"
                  alt="Student raising hand"
                  className="w-full h-[550px] object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 text-white">
                   <p className="font-bold text-2xl">Admissions Open</p>
                   <p className="text-white/90">Session 2024-25</p>
                </div>
              </div>

              {/* Floating Card 1: Contact Support */}
              <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-4 animate-bounce-slow max-w-[200px]">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Admission Desk</p>
                  <p className="text-sm font-black text-slate-800">+91 98765 43210</p>
                </div>
              </div>

              {/* Floating Card 2: Chat Bubble */}
              <div className="absolute top-12 -left-8 bg-white p-4 pr-6 rounded-2xl rounded-tr-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 animate-float hidden md:block">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      <MessageCircle size={20} />
                   </div>
                   <div>
                     <p className="font-bold text-slate-800 text-sm">Can't find answer?</p>
                     <div className="flex items-center gap-1 text-xs text-amber-600 font-bold cursor-pointer hover:underline">
                        <span>Chat with us</span>
                        <ArrowRight size={12} />
                     </div>
                   </div>
                </div>
              </div>

              {/* Decorative Star */}
              <div className="absolute -top-6 right-6 text-yellow-400 rotate-12 animate-pulse">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* Custom Keyframe Styles for Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: float 5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  )
}