"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Facebook, 
  Instagram, 
  Star, 
  BookOpen, 
  MessageCircle 
} from "lucide-react";

export default function HeroSection() {
  const features = [
    "Live Interactive Online Chess Coaching",
    "Flexible Class Timings – Perfect for Kids",
    "Proven Record – 100+ Champions Trained",
  ];

  const studentAvatars = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026302d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704a",
  ];

  return (
    <section className="relative min-h-screen  flex items-center bg-[#FDFBF7] overflow-hidden py-24 lg:py-34 font-sans">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="space-y-8 relative z-10">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] font-extrabold text-[#0F172A]">
              World’s{" "}
              <span className="relative inline-block mx-2">
                <span className="absolute inset-0 bg-[#FFC107] -skew-y-2 rounded-md transform rotate-[-3deg]"></span>
                <span className="relative z-10 px-2 text-[#0F172A]">#1</span>
              </span>{" "}
              Online <br />
              Chess Coaching For <br />
              Kids
            </h1>

            {/* Subhead with Emoji */}
            <p className="text-lg text-gray-700 font-medium flex items-center gap-2 flex-wrap">
              Learn From International 
              
              FIDE-Rated Trainers Here!
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFC107] flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-black stroke-[3]" />
                  </div>
                  <span className="text-gray-800 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-[#5C4EE5] hover:bg-[#4a3ec2] text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-2 shadow-lg shadow-indigo-200 transition-all hover:-translate-y-1">
                Book Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex gap-3">
                <Link 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-700"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-700"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Images & Floating Cards */}
          <div className="relative">
            {/* Dot Pattern Background (Abstract representation) */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 grid grid-cols-4 gap-4 opacity-30 z-0">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
               ))}
            </div>

            {/* Yellow Burst Lines (Top Left) */}
            <div className="absolute -top-8 -left-8 z-0">
               <svg width="60" height="60" viewBox="0 0 50 50">
                 <path d="M10 40 L0 30 M25 35 L25 15 M40 40 L50 30" stroke="#FFC107" strokeWidth="3" strokeLinecap="round" />
               </svg>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl bg-[#EFEFEF]">
              {/* This is a placeholder for the girl with trophy image */}
              <div className="relative h-[500px] w-full bg-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop" 
                  alt="Chess Champion"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-0 left-0 w-full flex justify-center pb-6 pt-12 bg-gradient-to-t from-black/80 to-transparent">
                <div className="bg-black text-white px-6 py-2 rounded-full font-bold text-lg border border-gray-700">
                  National Runner Up Mishika
                </div>
              </div>
            </div>

            {/* FLOATING CARD 1: Students (Left) */}
            <div className="absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 z-20">
              <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 relative">
                <div className="absolute inset-0 bg-gray-200 rounded-xl transform translate-x-1 translate-y-1 -z-10"></div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {studentAvatars.map((src, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                        <Image src={src} alt="student" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
                <p className="font-bold text-gray-900 mt-2 text-center">5000+ Students</p>
              </div>
            </div>

            {/* FLOATING CARD 2: Reviews (Top Right) */}
            <div className="absolute top-12 -right-4 lg:-right-12 z-20">
              <div className="bg-white p-3 pr-6 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 relative">
                 <div className="absolute inset-0 bg-gray-200 rounded-xl transform translate-x-1 translate-y-1 -z-10"></div>
                 <div className="bg-[#FFC107] w-12 h-12 rounded-lg flex items-center justify-center text-white">
                    <Star className="w-6 h-6 fill-white" />
                 </div>
                 <div>
                    <p className="font-extrabold text-xl text-gray-900">4.8/5</p>
                    <p className="text-sm text-gray-500 font-medium">2047+ Reviews</p>
                 </div>
              </div>
            </div>

            {/* FLOATING CARD 3: Champions (Bottom Right) */}
            <div className="absolute bottom-20 -right-4 lg:-right-8 z-20">
              <div className="bg-[#22C55E] p-4 pr-8 rounded-xl shadow-xl flex items-center gap-4 text-white">
                 <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <BookOpen className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="font-extrabold text-2xl">100+</p>
                    <p className="text-sm font-medium opacity-90">Champions</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Fixed Chat Button (Bottom Left) - Matches the crop in image */}
      {/* <div className="fixed bottom-6 left-6 z-50">
        <button className="bg-[#22C55E] hover:bg-[#1ea851] text-white px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 font-medium transition-transform hover:scale-105">
          <MessageCircle className="w-5 h-5 fill-white" />
          Chat with us
        </button>
      </div> */}
    </section>
  );
}