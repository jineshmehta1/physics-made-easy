import React from 'react';
import { Award, TrendingUp, BookOpen, Users } from 'lucide-react';

export default function WhyChooseUsSection() {
  // Theme Colors (Red/Gold/White Theme)
  const colors = {
    primaryRed: '#DC2626',        // red-600
    accentGold: '#EAB308',        // yellow-500
    textDark: '#1F2937',          // gray-800
    textMuted: '#4B5563',         // gray-600
    cardBg: '#FFFFFF',            // white
    cardBorder: '#FEF08A',        // yellow-200
  };

  const benefits = [
    {
      title: 'Experienced Coaches',
      description: 'Learn from masters with years of teaching and playing experience.',
      icon: <Users className="w-10 h-10 text-white" />,
      color: 'bg-red-400', // Icon Background
    },
    {
      title: 'Proven Results',
      description: 'Students achieve higher ratings and win tournaments consistently.',
      icon: <Award className="w-10 h-10 text-white" />,
      color: 'bg-pink-500',
    },
    {
      title: 'Structured Curriculum',
      description: 'Progressive lessons tailored from beginner to advanced levels.',
      icon: <BookOpen className="w-10 h-10 text-white" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Supportive Community',
      description: 'Join a vibrant network of passionate chess learners.',
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      color: 'bg-purple-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-900">
          Why Choose <span className="text-purple-700">Us?</span>
        </h2>

        {/* Flex container with wrapping */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 relative">
          
          {/* Central Knight Image */}
          <div className="w-full sm:w-auto flex justify-center items-center order-1 sm:order-2 group cursor-pointer">
            <div className="relative">
              {/* Glow Effect behind Knight */}
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-500" />
              
              <img
                src="/central-knight.png" // Ensure this image exists in your public folder
                alt="Chess Knight"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 object-contain z-10 relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-xl"
              />
            </div>
          </div>

          {/* Card 1: Experienced Coaches */}
          <div className="w-full sm:w-80 flex justify-center order-2 sm:order-1 sm:justify-end">
            <BenefitCard benefit={benefits[0]} colors={colors} />
          </div>

          {/* Card 2: Proven Results */}
          <div className="w-full sm:w-80 flex justify-center order-3 sm:order-3 sm:justify-start">
            <BenefitCard benefit={benefits[1]} colors={colors} />
          </div>

          {/* Card 3: Structured Curriculum */}
          <div className="w-full sm:w-80 flex justify-center order-4 sm:order-4 sm:justify-end">
            <BenefitCard benefit={benefits[2]} colors={colors} />
          </div>

          {/* Card 4: Supportive Community */}
          <div className="w-full sm:w-80 flex justify-center order-5 sm:order-5 sm:justify-start">
            <BenefitCard benefit={benefits[3]} colors={colors} />
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Card with Hover Animation
function BenefitCard({ benefit, colors }: any) {
  return (
    <div
      className="
        group p-8 rounded-2xl shadow-lg flex flex-col items-center text-center border
        w-full transition-all duration-300 ease-out relative overflow-hidden
        hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white
      "
      style={{
        borderColor: colors.cardBorder,
      }}
    >
      {/* Top Border Accent */}
      <div className={`absolute top-0 left-0 w-full h-1.5 ${benefit.color}`} />

      {/* Icon Circle */}
      <div
        className={`mb-6 flex items-center justify-center rounded-full w-20 h-20 shadow-md transition-transform duration-300 group-hover:scale-110 ${benefit.color}`}
      >
        {benefit.icon}
      </div>

      <h3
        className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300"
        style={{ color: colors.textDark }}
      >
        {benefit.title}
      </h3>
      
      <p 
        className="text-sm sm:text-base leading-relaxed font-medium" 
        style={{ color: colors.textMuted }}
      >
        {benefit.description}
      </p>
    </div>
  );
}