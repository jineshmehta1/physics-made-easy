"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  Trophy, 
  Star, 
  Award,
  ChevronRight,
  Target,
  BookOpen,
  Sparkles,
  X,
  ArrowRight,
  Crown
} from "lucide-react";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    experience: "beginner",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Your Google Script URL
      await fetch(
        "https://script.google.com/macros/s/AKfycbwPBxWXpnQ4ywqrdfmKvfFi7g5Uu6hjmaTFVDE5EiMI0YEyqjRNTCxionf65Q5Zqlg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() }),
        }
      );
      setSubmitStatus("success");
      setTimeout(() => {
         setIsFormOpen(false);
         setSubmitStatus(null);
         setFormData({
            studentName: "",
            parentName: "",
            email: "",
            phone: "",
            age: "",
            experience: "beginner",
          });
      }, 2000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const features = [
    { icon: <Clock className="w-6 h-6" />, text: "30-minute interactive session", subtext: "Live with expert coach" },
    { icon: <Target className="w-6 h-6" />, text: "Skill assessment", subtext: "Personalized feedback" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Sample lesson", subtext: "Experience our teaching" },
    { icon: <Trophy className="w-6 h-6" />, text: "Growth roadmap", subtext: "Custom learning plan" },
  ];

  const successStories = [
    { 
      name: "Aarav Mehta", 
      achievement: "Under-12 State Champion", 
      rating: "+400 points in 6 months",
      avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400"
    },
    { 
      name: "Diya Sharma", 
      achievement: "Rapid Rating 1650+", 
      rating: "First tournament win in 3 months",
      avatar: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=400"
    },
    { 
      name: "Rohan Patel", 
      achievement: "National Finalist 2024", 
      rating: "From beginner to champion",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400"
    },
  ];

  const stats = [
    { value: "5,000+", label: "Students Trained", icon: Users },
    { value: "100+", label: "Tournament Champions", icon: Trophy },
    { value: "4.9/5", label: "Satisfaction Rating", icon: Star },
    { value: "94%", label: "Success Rate", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-800">Limited Free Sessions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                Your First Step{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    To Chess Mastery
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-amber-200 to-yellow-200 transform rotate-[-1deg] z-0"></span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class chess coaching with Checkmate Sensei. 
                Join our free demo class and discover why thousands of students choose us.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-purple-600">
                          <Icon className="w-5 h-5" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => setIsFormOpen(true)}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-5 px-10 rounded-xl text-lg flex items-center gap-3 shadow-lg shadow-purple-200 hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="w-6 h-6" />
                <span>Book Free Demo Class</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Crown className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Best Coaches</h3>
                    <p className="text-sm text-gray-500 mt-2">FIDE Instructor & International Coach</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 z-10">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">15+ Years</p>
                      <p className="text-sm text-gray-500">Coaching Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 z-10">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">2500+</p>
                      <p className="text-sm text-purple-200">FIDE Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You'll{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Experience
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-amber-200 to-yellow-200 transform rotate-[-1deg] z-0"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our free demo class gives you a complete taste of our teaching methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.text}</h3>
                <p className="text-gray-600">{feature.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Stories
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-amber-200 to-yellow-200 transform rotate-[-1deg] z-0"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our students transformed from beginners to champions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((student, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                  <div 
                    className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${student.avatar})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Trophy className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-semibold text-amber-600">{student.achievement}</span>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{student.rating}</p>
                  
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm text-gray-600">Started with free demo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-pink-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-semibold text-amber-300">Limited Slots Available This Week</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Your Chess Journey?
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-500/50 to-pink-500/50 transform rotate-[-1deg] z-0"></span>
            </span>
          </h2>
          
          <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students. Take the first step towards becoming a champion with our risk-free demo class.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="group bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 font-bold py-5 px-12 rounded-xl text-lg flex items-center gap-3 shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-6 h-6" />
              <span>Book Free Demo Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white/30 hover:border-white/60 text-white font-bold py-5 px-12 rounded-xl text-lg flex items-center gap-3 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <span>View All Programs</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Enrollment Form Modal - ADJUSTED TO BE COMPACT & RESPONSIVE */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-lg relative animate-in fade-in zoom-in duration-300 shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Header (Fixed) */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Book Free Demo</h3>
                <p className="text-gray-500 text-sm">We'll contact you within 24 hours</p>
              </div>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="p-2 bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Student Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Parent Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Parent Name"
                    />
                  </div>
                </div>

                {/* Row 2: Contacts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                {/* Row 3: Age & Level */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="5"
                      max="18"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm"
                      placeholder="Age"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Level *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm bg-white"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                {submitStatus === "success" && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl font-medium text-sm flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Booked successfully!
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl font-medium text-sm flex items-center gap-2">
                    ❌ Something went wrong.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3.5 rounded-xl text-lg transition-all duration-300 disabled:opacity-50 mt-2 shadow-lg shadow-purple-200"
                >
                  {isSubmitting ? "Booking..." : "Confirm Booking"}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to our Terms & Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}