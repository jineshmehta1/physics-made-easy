"use client";

import React, { useState } from 'react';
import { 
  Camera, 
  Trophy, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Atom,           // Physics
  Crown,          // Chess
  Filter,
  Users
} from 'lucide-react';

// --- Demo Data (Physics & Chess Context) ---
const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=800&auto=format&fit=crop",
    category: "Physics",
    title: "Mastering Kinematics",
    description: "Students visualizing projectile motion using practical experiments.",
    aspect: "aspect-[4/3]"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
    category: "Chess",
    title: "Strategic Depth",
    description: "Analyzing Grandmaster openings during our weekend workshop.",
    aspect: "aspect-[3/4]"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1565514020176-db93796d1eb1?q=80&w=800&auto=format&fit=crop",
    category: "Awards",
    title: "National Distinction",
    description: "Receiving the commendation prize for Science excellence.",
    aspect: "aspect-square"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    category: "Physics",
    title: "Small Group Tutoring",
    description: "Intensive revision session for upcoming O-Levels.",
    aspect: "aspect-[3/4]"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1580541832626-d297a73771fa?q=80&w=800&auto=format&fit=crop",
    category: "Students",
    title: "Peer Learning",
    description: "Collaborative problem solving in the study lounge.",
    aspect: "aspect-[4/3]"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1610633389938-f990924c88d4?q=80&w=800&auto=format&fit=crop",
    category: "Chess",
    title: "Tournament Focus",
    description: "Critical thinking under pressure at the Inter-School meet.",
    aspect: "aspect-square"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=800&auto=format&fit=crop",
    category: "Awards",
    title: "100% Grade 7",
    description: "Celebrating our IB HL Physics toppers.",
    aspect: "aspect-[3/4]"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    category: "Physics",
    title: "Hands-on Learning",
    description: "Bridging theory and reality through demonstration.",
    aspect: "aspect-[4/3]"
  },
];

const categories = [
  { id: "All", label: "All Moments", icon: Camera },
  { id: "Physics", label: "Physics Class", icon: Atom },
  { id: "Chess", label: "Chess Arena", icon: Crown },
  { id: "Awards", label: "Hall of Fame", icon: Trophy },
  { id: "Students", label: "Student Life", icon: Users },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<typeof galleryData[0] | null>(null);

  // Filter Logic
  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  // Lightbox Navigation
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setLightboxImage(filteredImages[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(filteredImages[prevIndex]);
  };

  return (
    <section className="relative py-20 bg-slate-50 min-h-screen font-sans" id="gallery">
      
      {/* --- Background Decor --- */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-50 rounded-bl-full opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white border border-slate-200 shadow-sm">
            <Filter className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              Gallery
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Our Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Moments</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From the "Aha!" moments in Physics to the checkmates in Chess—explore the journey of our students.
          </p>
        </div>

        {/* --- Filter Tabs --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border
                ${activeCategory === cat.id 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 transform scale-105' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-teal-400 hover:text-teal-600'
                }
              `}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- Masonry Grid --- */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative break-inside-avoid rounded-[1.5rem] overflow-hidden cursor-zoom-in bg-slate-200 shadow-md hover:shadow-xl hover:shadow-teal-900/10 transition-all duration-500"
              onClick={() => setLightboxImage(image)}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.title} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${image.aspect}`}
              />

              {/* Overlay (Appears on Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-2 py-1 bg-teal-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white text-lg font-bold leading-tight mb-1">{image.title}</h3>
                  <p className="text-slate-300 text-sm opacity-90">{image.description}</p>
                </div>
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <Camera className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">No photos found in this category.</p>
          </div>
        )}

      </div>

      {/* --- Lightbox Modal --- */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav Buttons */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:block"
            onClick={handleNext}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Modal Content */}
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Area */}
            <div className="w-full md:w-3/4 bg-black flex items-center justify-center relative">
               <img 
                 src={lightboxImage.src} 
                 alt={lightboxImage.title} 
                 className="max-w-full max-h-[50vh] md:max-h-[90vh] object-contain"
               />
            </div>

            {/* Details Sidebar */}
            <div className="w-full md:w-1/4 p-8 bg-white flex flex-col justify-center border-l border-slate-100">
              <div className="mb-auto">
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                  {lightboxImage.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{lightboxImage.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{lightboxImage.description}</p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                 <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Captured At</p>
                 <p className="text-sm font-semibold text-slate-700">Physics Made Easy Center</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}