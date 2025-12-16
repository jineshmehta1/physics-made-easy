"use client"
import React, { useState } from 'react';
import { 
  CameraIcon, 
  TrophyIcon, 
  UsersIcon, 
  BookOpenIcon, 
  XIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon 
} from './BannerIcon';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  span?: string; // CSS class for grid spanning
}

const categories = [
  { id: "all", name: "All Moments", icon: CameraIcon },
  { id: "tournaments", name: "Tournaments", icon: TrophyIcon },
  { id: "certificate", name: "Certificates", icon: UsersIcon },
  { id: "events", name: "Events", icon: BookOpenIcon },
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/gallery1.jpeg",
    alt: "Chess Tournament 2024",
    category: "tournaments",
    title: "Championship",
    description: "Students competing in the annual championship finals.",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    src: "/gallery2.jpeg",
    alt: "Beginner Chess Class",
    category: "events",
    title: "Young Minds",
    description: "Beginners learning their first moves.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    src: "/gallery3.jpeg",
    alt: "Fide Arbiter",
    category: "certificate",
    title: "Young Champions",
    description: "Official certification ceremony.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: 4,
    src: "/gallery4.jpeg",
    alt: "Chess Workshop",
    category: "events",
    title: "Strategy Winners",
    description: "Deep dive into grandmaster tactics.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
    src: "/gallery5.jpeg",
    alt: "Award Ceremony",
    category: "certificate",
    title: "Award Ceremony",
    description: "Awarding the champions.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    id: 6,
    src: "/gallery6.jpeg",
    alt: "Tournament Hall",
    category: "tournaments",
    title: "Winning Finals",
    description: "The intense atmosphere of the tournaments.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 7,
    src: "/gallery7.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Victory",
    description: "Taking home the gold.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 8,
    src: "/gallery8.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Victory",
    description: "Taking home the gold.",
    span: "md:col-span-1 md:row-span-1"
  },

  {
    id: 9,
    src: "/9.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Champion Minds",
    description: "Making great moves.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 10,
    src: "/gallery10.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Mentorship results",
    description: "Winning at every level.",
    span: "md:col-span-1 md:row-span-1"
  },

  {
    id: 11,
    src: "/gallery11.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Future masters",
    description: "Masters in the making.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 12,
    src: "/gallery12.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Triumph",
    description: "Winning at every level.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 13,
    src: "/gallery13.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Young Champions",
    description: "Frist steps.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 14,
    src: "/gallery14.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Awards",
    description: "Winning at every level.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 15,
    src: "/gallery15.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Focussed Minds",
    description: "Future champions.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 16,
    src: "/gallery16.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Award Ceremony",
    description: "Making the difference.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 17,
    src: "/gallery17.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Victory",
    description: "Taking home the gold.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 18,
    src: "/gallery19.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Academy Pride",
    description: "Guiding the students.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 19,
    src: "/gallery18.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Awarded",
    description: "Winning with the moves.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: 20,
    src: "/gallery20.jpeg",
    alt: "Trophy",
    category: "tournaments",
    title: "Winner",
    description: "Enhancing the bars.",
    span: "md:col-span-1 md:row-span-1"
  },


];

const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  // Handlers for Lightbox
  const openLightbox = (image: GalleryImage) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);
  
  const navigateImage = (direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    
    // Find index in the CURRENT filtered list
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- Header & Filter --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a4b] mb-4">
              Captured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Moments</span>
            </h2>
            <p className="text-gray-500 text-lg">
              A glimpse into our academy's journey and victories.
            </p>
          </div>

          {/* Categories Tabs */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-[#1a1a4b] text-white shadow-md transform scale-105"
                    : "bg-transparent text-gray-500 hover:bg-gray-50"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- Masonry / Bento Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {filteredImages.map((image, idx) => (
            <div 
              key={image.id}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${selectedCategory === 'all' ? image.span : 'col-span-1 row-span-1'}`}
              onClick={() => openLightbox(image)}
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4b]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">{categories.find(c => c.id === image.category)?.name}</span>
                 <h3 className="text-white text-xl font-bold leading-tight">{image.title}</h3>
                 <p className="text-gray-300 text-sm mt-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                   {image.description}
                 </p>
              </div>

              {/* Icon Decoration (Top Right) */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                 <CameraIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* --- Empty State --- */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
             <p className="text-gray-400 text-lg">No photos found in this category.</p>
          </div>
        )}

      </div>

      {/* --- Lightbox Modal --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a4b]/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <XIcon className="w-8 h-8" />
          </button>

          {/* Navigation - Prev */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
            onClick={(e) => navigateImage('prev', e)}
          >
            <ChevronLeftIcon className="w-10 h-10" />
          </button>

          {/* Navigation - Next */}
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
            onClick={(e) => navigateImage('next', e)}
          >
             <ChevronRightIcon className="w-10 h-10" />
          </button>

          {/* Main Content */}
          <div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full max-h-[85vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="w-full md:w-3/4 bg-black flex items-center justify-center relative">
               <img 
                 src={selectedImage.src} 
                 alt={selectedImage.alt} 
                 className="max-h-[50vh] md:max-h-[85vh] w-full object-contain"
               />
            </div>

            {/* Details Side */}
            <div className="w-full md:w-1/4 p-8 bg-white flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wide self-start mb-4">
                {categories.find(c => c.id === selectedImage.category)?.name}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1a4b] mb-4">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedImage.description}
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-100 text-sm text-gray-400 flex items-center gap-2">
                 <CameraIcon className="w-4 h-4" />
                 <span> Checkmate Sensei  Academy</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default GallerySection;