"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  Trophy, 
  Users, 
  Target,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function TeamSection() {
  const coaches = [
    {
      name: 'Grandmaster Ravi Sharma',
      title: 'Head Coach',
      rating: '2500+ FIDE',
      experience: '15+ years',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400',
      specialties: ['Openings', 'Endgames'],
      achievements: ['National Champion', 'Coach of the Year 2023'],
    },
    {
      name: 'International Master Priya Patel',
      title: 'Senior Coach',
      rating: '2300+ FIDE',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w-400',
      specialties: ['Strategy', 'Tactics'],
      achievements: ['Women\'s Grand Prix Winner', 'Best Youth Coach'],
    },
    {
      name: 'FIDE Master Arjun Kumar',
      title: 'Strategy Coach',
      rating: '2200+ FIDE',
      experience: '8+ years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      specialties: ['Tournament Prep', 'Time Management'],
      achievements: ['Rapid Chess Champion', 'Most Improved Player Awards'],
    },
  ];

  const stats = [
    { value: '50+', label: 'Total Coaches' },
    { value: '150+', label: 'Years Combined Experience' },
    { value: '1000+', label: 'Students Coached' },
    { value: '2500+', label: 'Average FIDE Rating' },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
        
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Coaching Team
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-amber-200 to-yellow-200 transform rotate-[-1deg] z-0"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from champions who have competed at the highest levels and 
            are passionate about nurturing the next generation
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {coaches.map((coach, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  {coach.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{coach.name}</h3>
                <p className="text-purple-600 font-semibold mb-4">{coach.title}</p>
                
                {/* Experience */}
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{coach.experience} Experience</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Specializes in:</p>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((specialty, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {coach.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Meet All Our Champions
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our complete coaching team includes Grandmasters, International Masters, 
              and specialized trainers for every skill level.
            </p>
            <Link 
              href="/coaches"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg shadow-purple-200 hover:shadow-xl transition-all duration-300"
            >
              <span>View All Coaches</span>
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}