"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Camera, Trophy, Users, BookOpen, Grid3X3, List, Sparkles, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryCategories = [
  { id: "all", name: "All Photos", icon: Camera, color: "from-blue-500 to-cyan-500", bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50" },
  { id: "tournaments", name: "Tournaments", icon: Trophy, color: "from-amber-500 to-orange-500", bgColor: "bg-gradient-to-br from-amber-50 to-orange-50" },
  { id: "certificate", name: "Certificate", icon: Users, color: "from-emerald-500 to-green-500", bgColor: "bg-gradient-to-br from-emerald-50 to-green-50" },
  { id: "events", name: "Events", icon: BookOpen, color: "from-purple-500 to-pink-500", bgColor: "bg-gradient-to-br from-purple-50 to-pink-50" },
]

const galleryImages = [
  {
    id: 1,
    src: "/gallery-1.jpg",
    alt: "Chess Tournament 2024",
    category: "tournaments",
    title: "Organising Tournaments",
    description: "Our students competing in the championship",
  },
  {
    id: 2,
    src: "/gallery-2.jpg",
    alt: "Beginner Chess Class",
    category: "tournaments",
    title: "Tournaments",
    description: "Young minds learning the mastery of chess",
  },
  {
    id: 3,
    src: "/gallery-3.jpg",
    alt: "Chess Workshop",
    category: "tournaments",
    title: "Inhouse Tournaments",
    description: "Advanced strategy inhouse tournaments.",
  },
  {
    id: 4,
    src: "/certificate-1.jpg",
    alt: "Youth Tournament",
    category: "certificate",
    title: "Fide Arbiter",
    description: "Tejavath Naresh Sir",
  },
  {
    id: 5,
    src: "/certificate-2.jpeg",
    alt: "Advanced Chess Class",
    category: "certificate",
    title: "Certification",
    description: "Tejawat Naresh Sir",
  },
  {
    id: 6,
    src: "/certificate-3.jpeg",
    alt: "Chess Seminar",
    category: "certificate",
    title: "National Arbiter",
    description: "Tejawat Naresh Sir",
  },
  {
    id: 7,
    src: "/academy.jpeg",
    alt: "School Tournament",
    category: "events",
    title: "Inter-School Championship",
    description: "Schools competing for the championship title",
  },
  {
    id: 8,
    src: "/certificate.jpg",
    alt: "School Tournament",
    category: "certificate",
    title: "Arena International Master",
    description: "Tejawat Naresh Sir",
  }
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const closeLightbox = () => setSelectedImage(null)

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-10">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-2 text-lg shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Chess Moments
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Capturing the spirit of chess excellence through memorable moments of learning, competition, and achievement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="relative py-12 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {galleryCategories.map(category => {
                const Icon = category.icon
                const selected = selectedCategory === category.id
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      selected
                        ? `bg-gradient-to-r ${category.color} text-white shadow-2xl`
                        : "bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {category.name}
                  </motion.button>
                )
              })}
            </div>

            {/* View Mode & Filter Info */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-gray-200">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
                </span>
              </div>
              
              <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-1">
                <Button
                  onClick={() => setViewMode("grid")}
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  className={`px-4 py-2 rounded-xl ${
                    viewMode === "grid" 
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg" 
                      : "text-gray-700 hover:bg-white"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Grid
                </Button>
                <Button
                  onClick={() => setViewMode("masonry")}
                  variant={viewMode === "masonry" ? "default" : "ghost"}
                  size="sm"
                  className={`px-4 py-2 rounded-xl ${
                    viewMode === "masonry" 
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg" 
                      : "text-gray-700 hover:bg-white"
                  }`}
                >
                  <List className="w-4 h-4 mr-2" />
                  Masonry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${viewMode}`}
              layout
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6"
              }
            >
              {filteredImages.map((image, index) => {
                const category = galleryCategories.find(cat => cat.id === image.category)
                return (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer break-inside-avoid mb-6"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                      {/* Image Container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={`w-full object-cover transition-transform duration-700 ${
                            viewMode === "grid" ? "h-80" : "h-auto"
                          } group-hover:scale-110`}
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-6 left-6 right-6 text-white">
                            <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">{image.description}</p>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${category?.color} shadow-lg`}>
                            {category?.name}
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500" />
                      </div>

                      {/* Quick Info (Visible on mobile) */}
                      <div className="p-4 lg:hidden">
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">{image.title}</h3>
                        <p className="text-gray-600 text-xs">{image.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No photos found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full"
              onClick={e => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              {/* Navigation Controls */}
              <Button
                onClick={closeLightbox}
                variant="outline"
                size="icon"
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                onClick={prevImage}
                variant="outline"
                size="icon"
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                onClick={nextImage}
                variant="outline"
                size="icon"
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm border border-gray-300 text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-600 text-lg">{selectedImage.description}</p>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold">
                    {galleryCategories.find(cat => cat.id === selectedImage.category)?.name}
                  </div>
                </div>
                <div className="text-sm text-gray-500 mt-3">
                  {currentImageIndex + 1} of {filteredImages.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Add the missing Badge component
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
)