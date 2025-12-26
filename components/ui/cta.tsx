"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, ArrowRight, Navigation, Clock } from 'lucide-react';

const VisitCampusCTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden font-sans">
      
      {/* --- Background Textures --- */}
      {/* Scientific Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#14b8a6 1px, transparent 1px), linear-gradient(to right, #14b8a6 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-900/30 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        <div className="bg-slate-900/50 backdrop-blur-xl border border-teal-500/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          
          {/* Decorative Circle */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[60px]"></div>

          {/* --- Left: Text Content --- */}
          <div className="w-full lg:w-3/5 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" />
              <span>Center Tour</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Experience the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                Learning Environment.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Visit our center in Toa Payoh to see our resources, meet Mr. Chew, and understand how we blend Physics rigor with Chess strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://wa.me/6597277419" target="_blank" className="w-full sm:w-auto">
                <button className="w-full group bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:-translate-y-1">
                  <Calendar className="w-5 h-5" />
                  Schedule a Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link 
                href="https://www.google.com/maps/search/?api=1&query=186+Toa+Payoh+Central+Singapore+310186" 
                target="_blank"
                className="w-full sm:w-auto"
              >
                <button className="w-full group bg-transparent border border-slate-700 text-slate-300 font-semibold py-4 px-8 rounded-xl hover:bg-white/5 hover:text-white hover:border-teal-500/50 transition-all flex items-center justify-center gap-2">
                  <Navigation className="w-5 h-5 text-teal-500" />
                  Get Directions
                </button>
              </Link>
            </div>
          </div>

          {/* --- Right: Visual / Map Graphic --- */}
          <div className="w-full lg:w-2/5 relative">
            <Link href="https://www.google.com/maps/search/?api=1&query=186+Toa+Payoh+Central+Singapore+310186" target="_blank">
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl group cursor-pointer hover:border-teal-500/50 transition-colors">
                
                {/* Abstract Map Styling */}
                <div className="absolute inset-0 bg-slate-800">
                   {/* Roads */}
                   <div className="absolute top-1/2 left-0 w-full h-8 bg-slate-700/50 -translate-y-1/2"></div>
                   <div className="absolute top-0 left-1/3 w-6 h-full bg-slate-700/50"></div>
                   <div className="absolute top-0 right-1/4 w-4 h-full bg-slate-700/30"></div>
                   
                   {/* Buildings */}
                   <div className="absolute top-10 left-10 w-20 h-20 bg-slate-700/30 rounded-lg"></div>
                   <div className="absolute bottom-10 right-10 w-24 h-32 bg-slate-700/30 rounded-lg"></div>
                   
                   {/* Pin Location */}
                   <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <div className="relative">
                        <div className="w-4 h-4 bg-teal-500 rounded-full animate-ping absolute inset-0"></div>
                        <div className="w-4 h-4 bg-teal-500 rounded-full relative z-10 border-2 border-white shadow-[0_0_15px_rgba(20,184,166,1)]"></div>
                      </div>
                      <div className="bg-slate-900 border border-teal-500/30 px-3 py-1.5 rounded-lg shadow-xl mt-3 transform transition-transform group-hover:scale-110">
                         <span className="text-xs font-bold text-teal-400">Lobby H</span>
                      </div>
                   </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-teal-900/20 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                      <MapPin className="w-4 h-4 text-teal-600" />
                      View on Google Maps
                   </span>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* --- Bottom Info Strip --- */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-slate-800 pt-8">
           <div className="group">
              <div className="flex items-center justify-center gap-2 mb-1">
                 <Clock className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                 <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Weekdays</p>
              </div>
              <p className="text-slate-300 font-medium">Mon - Fri: 2:30 PM - 10:00 PM</p>
           </div>
           <div className="group">
              <div className="flex items-center justify-center gap-2 mb-1">
                 <Calendar className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                 <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Weekends</p>
              </div>
              <p className="text-slate-300 font-medium">Sat - Sun: 9:00 AM - 7:00 PM</p>
           </div>
           <div className="group">
              <div className="flex items-center justify-center gap-2 mb-1">
                 <Navigation className="w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                 <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Location</p>
              </div>
              <p className="text-slate-300 font-medium">186 Toa Payoh Central</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default VisitCampusCTA;