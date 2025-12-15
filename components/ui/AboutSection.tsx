import React from 'react';
import { CertificateIcon}  from './BannerIcon';

const AboutSection: React.FC = () => {
  return (
    <section className="py-8 md:py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* --- Left Column: Images Composition --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 h-[450px] sm:h-[500px]">
              
              {/* Decorative Dots Pattern (Bottom Left) */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 opacity-20 z-0">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                  <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" className="text-blue-600" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>

              {/* Image 1: Top Left (Teacher/Student) */}
              <div className="absolute top-0 left-0 w-[70%] h-[60%] z-10">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" 
                  alt="Teacher guiding student"
                  className="w-full h-full object-cover rounded-tr-[80px] rounded-bl-[20px] rounded-tl-[20px] rounded-br-[20px] shadow-lg"
                />
              </div>

              {/* Image 2: Bottom Right (Chess Focus) */}
              <div className="absolute bottom-4 right-0 w-[70%] h-[60%] z-20">
                <div className="w-full h-full p-2 bg-white rounded-tl-[80px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Focused chess game"
                    className="w-full h-full object-cover rounded-tl-[70px] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[15px]"
                  />
                </div>
              </div>

              {/* Floating Badge: 100% Success */}
              <div className="absolute bottom-16 -left-4 sm:left-4 z-30 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 animate-bounce-slow">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-white shrink-0">
                  <CertificateIcon className="w-7 h-7" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#1a1a4b]">100%</div>
                  <div className="text-sm font-medium text-gray-500">Success Rate</div>
                </div>
              </div>

            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="w-full lg:w-1/2">
            
            {/* Pill Label */}
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
              Get More About Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a4b] mb-6 leading-tight">
              About Checkmate Sensei <span className="relative inline-block px-3 py-1 mt-2 md:mt-0">
                <span className="absolute inset-0 bg-yellow-400 rounded-lg transform -rotate-2"></span>
                <span className="relative text-white z-10">Chess</span>
              </span>
            </h2>

            {/* Description Text */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                At our core, we believe that chess is more than just a game—it's a powerful tool for building confidence, sharpening strategic thinking, and fostering a lifelong love of learning. We are dedicated to providing a supportive and engaging online environment where young minds can thrive.
              </p>
              <p>
                Led by a team of passionate instructors, we offer expert-level coaching for students of all skill levels. Our curriculum is designed to not only teach the fundamentals but also to inspire creativity and critical thinking on the chessboard and beyond.
              </p>
            </div>

            {/* Profile Section */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                alt="CEO Portrait"
                className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white ring-2 ring-gray-100"
              />
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                  CEO, National Instructor
                </p>
                <h4 className="text-xl font-bold text-[#1a1a4b]">
                  Hardik Khurana
                </h4>
                <p className="text-sm text-gray-400">From India</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;