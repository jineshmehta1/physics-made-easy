"use client"

import { useState } from "react"
import { Plus, Minus, MessageCircle, Phone, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ColorfulFAQSection() {
  // State to track which FAQ is open (optional, for smoother single-open behavior)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is the minimum age for admission?",
      answer: "For Grade 1, the child must be 6 years old by March 31st of the academic year. For Kindergarten (KG), the minimum age is 3+ years.",
      theme: "blue", // Used for dynamic coloring
    },
    {
      question: "Do you provide school transport?",
      answer: "Yes! We have a fleet of GPS-enabled, air-conditioned buses covering a 15km radius. Every bus has a female attendant for safety.",
      theme: "amber",
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain a strict 20:1 ratio in Primary classes to ensure every child gets personalized attention and care.",
      theme: "green",
    },
    {
      question: "Are meals provided at school?",
      answer: "We offer an optional nutritious meal plan prepared by our in-house nutritionists. We focus on healthy, balanced vegetarian meals.",
      theme: "rose",
    },
  ]

  // Helper function for dynamic color classes
  const getColors = (theme: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-50 border-blue-100 text-blue-700 hover:border-blue-300",
      amber: "bg-amber-50 border-amber-100 text-amber-700 hover:border-amber-300",
      green: "bg-green-50 border-green-100 text-green-700 hover:border-green-300",
      rose: "bg-rose-50 border-rose-100 text-rose-700 hover:border-rose-300",
      purple: "bg-purple-50 border-purple-100 text-purple-700 hover:border-purple-300",
    }
    return colors[theme] || colors.blue
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* -----------------------------------------------------------------
             LEFT COLUMN: THE FAQS
             ----------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-left space-y-4">
              <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2">
                <HelpCircle size={16} /> Got Questions?
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Everything You Need <br />
                To <span className="text-amber-500">Know</span> 🤔
              </h2>
              <p className="text-slate-600 text-lg">
                Can't find the answer you're looking for? Reach out to our admissions team directly!
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                const colorClasses = getColors(faq.theme)

                return (
                  <div
                    key={index}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`
                      cursor-pointer rounded-2xl border-2 p-1 transition-all duration-300
                      ${isOpen ? 'bg-white shadow-lg scale-[1.02]' : 'bg-transparent border-transparent'}
                    `}
                  >
                    <div className={`
                      flex flex-col rounded-xl border-2 p-5 transition-all duration-300
                      ${colorClasses}
                      ${isOpen ? 'border-transparent bg-opacity-100' : 'bg-opacity-50'}
                    `}>
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-bold text-lg md:text-xl leading-snug">
                          {faq.question}
                        </h3>
                        <span className={`
                          flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/60 text-current transition-transform duration-300
                          ${isOpen ? 'rotate-180 bg-white' : ''}
                        `}>
                          {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                        </span>
                      </div>
                      
                      <div className={`
                        overflow-hidden transition-all duration-300 ease-in-out
                        ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}
                      `}>
                        <p className="text-slate-700 font-medium leading-relaxed pr-8">
                          {faq.answer}
                        </p>
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
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative group perspective-1000">
              
              {/* Abstract Blobs Background */}
              <div className="absolute top-10 -right-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>

              {/* Main Image Container */}
              <div className="relative rounded-[3rem] overflow-hidden ">
                <img
                  src="/kid.jpg"
                  alt="Thinking Student"
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
              </div>

              {/* Floating Card 1: Contact Support */}
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-lg font-black text-slate-800">+91 98765 43210</p>
                </div>
              </div>

              {/* Floating Card 2: Chat Bubble */}
              <div className="absolute top-12 -right-6 bg-white p-4 pr-6 rounded-2xl rounded-tr-none shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 animate-float">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      <MessageCircle size={20} />
                   </div>
                   <div>
                     <p className="font-bold text-slate-800 text-sm">Still confused?</p>
                     <p className="text-xs text-amber-600 font-bold cursor-pointer hover:underline">Chat with us!</p>
                   </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 text-amber-400 rotate-12">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
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