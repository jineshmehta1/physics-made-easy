"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ChevronRight, 
  MessageCircle, 
  ArrowUp, 
  ChevronDown 
} from "lucide-react";

// --- FAQ Data ---
const faqData = [
  {
    question: "Why online chess is better?",
    answer:
      "Online chess offers accessibility from anywhere, flexibility in scheduling, instant analysis tools, and the ability to play against opponents globally without travel costs.",
  },
  {
    question: "What is the right age to start chess training or is it good for my 5-year-old kid?",
    answer:
      "5 to 7 years old is considered the ideal age to start. Chess helps young children develop concentration, pattern recognition, and patience early in their development.",
  },
  {
    question: "Why  Checkmate Sensei  Academy is the best suit for my kid?",
    answer:
      "We offer FIDE-rated trainers, a structured curriculum, regular tournaments, and a fun, interactive learning environment tailored specifically for children.",
  },
  {
    question: "Are we going to get a completion certificate after my kid completes a course from  Checkmate Sensei ?",
    answer:
      "Yes, every student receives a certificate of completion upon finishing their specific level and passing the assessment.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-white py-16 lg:py-24 font-sans overflow-hidden">
      
      {/* --- Abstract Floating Dot (Top Center) --- */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#5C4EE5] rounded-full opacity-80" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN: FAQ Content --- */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-block px-5 py-1.5 rounded-full bg-[#F3F0FF] mb-6">
              <span className="text-[#5C4EE5] font-semibold text-sm">Faq&apos;s</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-10">
              Frequently Asked Questions
            </h2>

            {/* Accordion Items */}
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-[#F8F9FA] rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                  >
                    <span className="text-[#0F172A] font-bold text-base md:text-lg pr-4">
                      {item.question}
                    </span>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-90' : 'rotate-0'}`}>
                      <ChevronRight className="w-5 h-5 text-[#0F172A]" strokeWidth={3} />
                    </div>
                  </button>
                  
                  {/* Answer */}
                  <div 
                    className={`px-6 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: Image & Graphics --- */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              
              {/* SVG Graphic: Pink Sun (Top Left of image) */}
              <div className="absolute -top-6 -left-8 z-0">
                <svg width="60" height="60" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="25" r="10" stroke="#FF00CC" strokeWidth="2.5" />
                  <path d="M25 5L25 10M25 40L25 45M45 25L40 25M10 25L5 25M39.14 10.86L35.6 14.4M14.4 35.6L10.86 39.14M39.14 39.14L35.6 35.6M14.4 14.4L10.86 10.86" stroke="#FF00CC" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* SVG Graphic: Teal Squiggle (Top Right of image) */}
              <div className="absolute -top-12 -right-4 z-0">
                <svg width="80" height="40" viewBox="0 0 100 40" fill="none">
                  <path d="M5 25C15 5 25 35 35 25C45 15 55 35 65 25C75 15 85 35 95 20" stroke="#00CC99" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Main Image */}
              <div className="relative z-10">
                {/* 
                  Using an Unsplash image that closely resembles the "Woman reading on chair with plant" 
                  If you have the local asset, replace src with "/images/your-image.png"
                */}
                <Image 
                  src="knight-think.png" 
                  alt="Student Reading"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FIXED FLOATING BUTTONS --- */}

      {/* WhatsApp Chat Button (Bottom Left) */}
      {/* <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20b858] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold transition-transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>Chat with us</span>
        </a>
      </div> */}

      {/* Scroll to Top Button (Bottom Right) */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#5C4EE5] hover:bg-[#4a3ec2] rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
      >
        <ChevronDown className="w-6 h-6 text-white rotate-180" strokeWidth={2.5} />
      </button>

    </section>
  );
}