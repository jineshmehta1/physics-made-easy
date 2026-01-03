"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Navigation, Clock, Star } from 'lucide-react';

const VisitCampusCTA: React.FC = () => {
  // SEO: Local Business Structured Data
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Physics Made Easy",
    "image": "/center-photo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "186 Toa Payoh Central, Lobby H 02-430",
      "addressLocality": "Toa Payoh",
      "postalCode": "310186",
      "addressCountry": "SG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "1.3323", 
      "longitude": "103.8475"
    },
    "url": "https://physicsmadeeasy.sg",
    "telephone": "+6597277419"
  };

  return (
    <section className="relative py-12 md:py-24 bg-slate-950 overflow-hidden font-sans selection:bg-teal-500/30">
      {/* SEO Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* --- Background Textures --- */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(to right, #14b8a6 1px, transparent 1px)', 
             backgroundSize: '32px 32px' 
           }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* --- LEFT: Content Area --- */}
            <div className="w-full lg:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] md:text-xs font-black uppercase tracking-widest mb-8 w-fit"
              >
                <Star className="w-3.5 h-3.5 fill-teal-400" />
                <span>Premier Toa Payoh Center</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Experience the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-indigo-400">
                  Learning Logic.
                </span>
              </h2>
              
              <address className="not-italic text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                Visit our specialized studio at <span className="text-white font-semibold">186 Toa Payoh Central</span>. 
                Meet Mr. Chew and explore our unique MI-based Physics & Chess resources.
              </address>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/6597277419" target="_blank" className="flex-1">
                  <button className="w-full group bg-teal-600 hover:bg-teal-500 text-white font-black py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-teal-900/20 active:scale-95">
                    <Calendar className="w-5 h-5" />
                    Book a Visit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <Link 
                  href="https://www.google.com/maps/dir/?api=1&destination=186+Toa+Payoh+Central+Lobby+H+Singapore+310186" 
                  target="_blank"
                  className="flex-1"
                >
                  <button className="w-full group bg-slate-800/50 border border-slate-700 text-slate-300 font-black py-5 px-8 rounded-2xl hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95">
                    <Navigation className="w-5 h-5 text-teal-500" />
                    Directions
                  </button>
                </Link>
              </div>
            </div>

            {/* --- RIGHT: Live Map Embed --- */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
              {/* Overlay for theme matching */}
              <div className="absolute inset-0 z-10 pointer-events-none border-l border-white/10 hidden lg:block" />
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.742385960416!2d103.8474811!3d1.3323069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10e206085555%3A0x7d287010f384a83e!2s186%20Toa%20Payoh%20Central%2C%20Singapore%20310186!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
                className="w-full h-full min-h-[400px] lg:min-h-full border-0 grayscale-[0.3] invert-[0.9] contrast-[1.2] opacity-80"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Physics Made Easy Location - Toa Payoh Central"
              />
              
              {/* Floating Address Badge (Desktop only) */}
              <div className="absolute top-6 left-6 z-20 hidden xl:flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl">
                <div className="bg-teal-500 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <p className="text-white font-black text-sm leading-none">Lobby H, 02-430</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">Toa Payoh Central</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Bottom Info Strip --- */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 text-center lg:text-left">
           <div className="col-span-1 flex flex-col items-center lg:items-start gap-3 group">
              <div className="flex items-center gap-2">
                 <Clock className="w-4 h-4 text-teal-400" />
                 <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Operating Hours</span>
              </div>
              <p className="text-slate-200 font-bold text-sm leading-relaxed">
                Mon - Fri: 2:30 PM - 10 PM <br />
                Sat - Sun: 9:00 AM - 7 PM
              </p>
           </div>
           
           <div className="col-span-1 flex flex-col items-center lg:items-start gap-3 group">
              <div className="flex items-center gap-2">
                 <Navigation className="w-4 h-4 text-teal-400" />
                 <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Contact Line</span>
              </div>
              <p className="text-slate-200 font-bold text-sm leading-relaxed">
                General: +65 9727 7419 <br />
                Email: chewkm2001@yahoo.com
              </p>
           </div>

           <div className="col-span-2 md:col-span-1 flex flex-col items-center lg:items-start gap-3 group">
              <div className="flex items-center gap-2">
                 <MapPin className="w-4 h-4 text-teal-400" />
                 <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Building Info</span>
              </div>
              <p className="text-slate-200 font-bold text-sm leading-relaxed">
                186 Toa Payoh Central <br />
                Lobby H (Level 2), Singapore 310186
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VisitCampusCTA;