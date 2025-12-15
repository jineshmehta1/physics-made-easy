"use client";

import React from 'react';
import { Trophy, Award, Medal, Star, Target, TrendingUp } from 'lucide-react';

export default function AchievementsSection() {
  const achievements = [
    {
      year: '2024',
      title: 'National Champions',
      description: '5 students won national-level tournaments',
      icon: <Trophy className="w-8 h-8" />,
      count: '5',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Featured in Chess.com Top Academies',
      icon: <Award className="w-8 h-8" />,
      count: '2',
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2022',
      title: 'FIDE Ratings',
      description: '50+ students achieved FIDE ratings',
      icon: <Target className="w-8 h-8" />,
      count: '50+',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2021',
      title: 'Tournament Wins',
      description: '100+ tournament victories across categories',
      icon: <Medal className="w-8 h-8" />,
      count: '100+',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  const recognitions = [
    {
      title: 'Best Online Chess Academy 2023',
      issuer: 'Chess Federation of India',
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: 'Excellence in Youth Training',
      issuer: 'International Chess Council',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Innovative Teaching Methods',
      issuer: 'Global Education Awards',
      icon: <Award className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-amber-800">Our Legacy</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Awards &{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Achievements
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-200 to-pink-200 transform rotate-[-1deg] z-0"></span>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A testament to our commitment to excellence in chess education
          </p>
        </div>

        {/* Main Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Year Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {achievement.year}
                </div>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white mb-6 mx-auto`}>
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                {achievement.description}
              </p>
              
              {/* Count */}
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {achievement.count}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recognitions Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Certifications & Recognitions
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-purple-600">
                      {recognition.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{recognition.title}</h4>
                    <p className="text-gray-600 text-sm">{recognition.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trophy Showcase */}
          <div className="mt-12 pt-8 border-t border-purple-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-gray-900" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-gray-600 text-sm">Trophies Year {2023 - i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}