"use client";

import React from 'react';
import { 
  Trophy, 
  CheckCircle2, 
  Sparkles, 
  Quote,
  Atom
} from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- Left Column: Images Composition --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 h-[450px] sm:h-[520px]">
              
              {/* Decorative Pattern (Dots) */}
              <div className="absolute -top-8 -right-8 w-32 h-32 opacity-10 z-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" className="text-teal-600" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              {/* Main Image (Physics Class / Mr Chew) */}
              <div className="absolute top-0 left-0 w-[75%] h-[65%] z-10">
                <img 
                  src="student1.webp" 
                  alt="Physics tutoring session"
                  className="w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-slate-200"
                />
              </div>

              {/* Secondary Image (Chess / Strategy) */}
              <div className="absolute bottom-0 right-0 w-[65%] h-[55%] z-20">
                <div className="w-full h-full p-3 bg-white rounded-[2rem] shadow-xl">
                  <img 
                    src="student5.webp" 
                    alt="Strategic thinking with Chess"
                    className="w-full h-full object-cover rounded-[1.5rem]"
                  />
                </div>
              </div>

              {/* Floating Badge: Years of Excellence */}
              <div className="absolute bottom-12 -left-4 sm:left-0 z-30 bg-white p-4 pr-6 rounded-r-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 border-l-4 border-teal-500 animate-in fade-in slide-in-from-left duration-700">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                  <Trophy className="w-6 h-6" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">20+</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Years Experience</div>
                </div>
              </div>

            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="w-full lg:w-1/2">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-teal-50 border border-teal-100">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                About Physics Made Easy
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
              Where Science Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
                Strategic Thinking.
              </span>
            </h2>

            {/* Description Text */}
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                Founded by <strong className="text-slate-900">Mr. Cornelius Chew</strong> (Ex-MOE Scholar), we are not just another tuition center. We fuse the academic rigor of Physics with the strategic discipline of International Chess.
              </p>
              <p>
                Using the <strong className="text-slate-900">Multiple Intelligences (MI)</strong> theory, we customize learning to fit your child's unique cognitive profile—whether they are "Number Smart," "Picture Smart," or "People Smart."
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
               {[
                 "Ex-MOE & NIE Trained", 
                 "FIDE Certified Instructors", 
                 "Proven Track Record", 
                 "Holistic Development"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                 </div>
               ))}
            </div>

            {/* Founder Profile Section */}
            <div className="relative mt-8 pt-8 border-t border-slate-100">
              {/* Quote Graphic */}
              <Quote className="absolute top-6 right-0 text-slate-100 w-12 h-12 -scale-x-100" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="relative">
                    {/* Placeholder for Mr Chew's image */}
                    <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-md ring-1 ring-slate-200">
                        <img 
                            src="/image.png" 
                            alt="Mr Chew"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-teal-600 rounded-full border-2 border-white flex items-center justify-center">
                        <Atom className="w-3 h-3 text-white" />
                    </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Mr. Chew Kok Mun
                  </h4>
                  <p className="text-sm font-medium text-teal-600">
                    Founder & PSC Teaching Scholar
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;