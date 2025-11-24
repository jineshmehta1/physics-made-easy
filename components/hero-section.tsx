"use client";

import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Star, Sparkles, Award, Video, Bell, ChevronRight, Crown, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const meetingLinks = [
    { href: "https://meet.google.com/vjj-cfpx-dav?pli=1", icon: Video, label: "G-Meet", color: "#2B6CB0", bg: "from-blue-500 to-blue-600" },
    { href: "https://meet.jit.si/TelanganaChessAcademy", icon: Play, label: "Start Call", color: "#2B6CB0", bg: "from-cyan-500 to-blue-500" },
    { href: "https://meet.google.com/wuk-nfie-mgx", icon: Play, label: "Call Naresh", color: "#2B6CB0", bg: "from-blue-600 to-indigo-600" },
    { href: "https://meet.google.com/atu-ziid-ojg", icon: Sparkles, label: "TCS Meeting", color: "#06402B", bg: "from-emerald-600 to-teal-700" },
    { href: "https://meet.google.com/uux-vyxa-pgq", icon: Bell, label: "BCA Meeting", color: "#06402B", bg: "from-green-600 to-emerald-700" },
    { href: "https://meet.google.com/mxj-uwyj-vzp", icon: Bell, label: "Call Rohith", color: "#06402B", bg: "from-teal-600 to-green-700" },
  ];

  const stats = [
    { icon: Trophy, value: "120+", label: "Tournaments", gradient: "from-yellow-400 to-orange-500" },
    { icon: Users, value: "600+", label: "Students", gradient: "from-blue-400 to-purple-500" },
    { icon: Award, value: "60+", label: "Champions", gradient: "from-purple-400 to-pink-500" },
  ];

  const carouselImages = [
    "/gallery-1.jpg",
    "/gallery-3.jpg",
    "/chess-tournament.png"
  ];

  const placeholderImages = [
    "/gallery-1.jpg",
    "/gallery-3.jpg",
    "/chess-tournament.png"
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 md:pt-28 pt-30">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 bg-white px-3 py-2 rounded-full shadow-lg border-2 border-purple-100 animate-bounce-slow">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">Certified FIDE Coaches</span>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>

            {/* Dual CTA Buttons - Side by Side */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="https://coaching.telanganachessacademy.com/login" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-8 py-5.5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg group animate-pulse-glow w-full sm:w-auto"
                >
                  <Users className="w-2 h-2" />
                  ONLINE COACHING
                  <ChevronRight className="w-2 h-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>

              <Link href="https://rzp.io/rzp/FbNCr8DK" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group backdrop-blur-md bg-white/80 w-full sm:w-auto"
                >
                  <Trophy className="w-2 h-2" />
                  EVENTS
                  <ChevronRight className="w-2 h-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>            

            {/* Meeting Links */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {meetingLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} target="_blank">
                    <div className={`relative overflow-hidden bg-gradient-to-br ${link.bg} p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group`}>
                      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
                      <div className="relative flex items-center gap-2 text-white">
                        <link.icon className="w-5 h-5" />
                        <span className="font-semibold text-sm">{link.label}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                <span className="text-gray-900">Become a</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Chess Master
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Telangana chess school empowers you with world-class training from FIDE-rated coaches. Build unshakeable skills, dominate the board, and rise to the top of the chess world.
              </p>
            </div>
          </div>

          {/* Right Side - Improved Image Carousel */}
          <div className="relative h-80 sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden ml-2">
            <div className="relative w-full h-full">
              {carouselImages.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === idx ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Chess academy highlight ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = placeholderImages[idx];
                    }}
                  />
                  {/* Dark overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === idx
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Caption */}
              <div className="absolute bottom-16 left-6 right-6 text-white z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {currentSlide === 0 && "Professional Chess Training"}
                  {currentSlide === 1 && "Dedicated Students Community"}
                  {currentSlide === 2 && "Competitive Tournament Play"}
                </h3>
                <p className="text-lg opacity-90">Telangana Chess School</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Same animations as before */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--rotate, 0deg)); }
        }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes bounce-s22 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 20px 50px -10px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 25px 60px -10px rgba(139, 92, 246, 0.5); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .animate-bounce-slow { animation: bounce-s22 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
