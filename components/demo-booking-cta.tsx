import React from 'react';
import { 
  BookOpenIcon, 
  ClockIcon, 
  StarIcon, 
  UsersIcon, 
  PhoneIcon, 
  ArrowRightIcon, 
  CheckIcon,
  SparklesIcon
} from './ui/BannerIcon';

const DemoBookingCTA: React.FC = () => {
  const benefits = [
    {
      icon: BookOpenIcon,
      title: "Skill Analysis",
      description: "Deep-dive evaluation of your current strategies.",
      color: "text-blue-600",
      bg: "bg-blue-600/10",
      border: "border-blue-600/20"
    },
    {
      icon: UsersIcon,
      title: "Match Your Coach",
      description: "Find the perfect mentor for your learning style.",
      color: "text-purple-600",
      bg: "bg-purple-600/10",
      border: "border-purple-600/20"
    },
    {
      icon: ClockIcon,
      title: "Flexible Timing",
      description: "Sessions that fit your global schedule perfectly.",
      color: "text-pink-600",
      bg: "bg-pink-600/10",
      border: "border-pink-600/20"
    },
    {
      icon: StarIcon,
      title: "Custom Roadmap",
      description: "A tailored path from Beginner to Grandmaster.",
      color: "text-yellow-600",
      bg: "bg-yellow-600/10",
      border: "border-yellow-600/20"
    },
  ];

  const steps = [
    {
      id: "01",
      title: "Assessment",
      desc: "We analyze your opening & endgame knowledge."
    },
    {
      id: "02",
      title: "Live Lesson",
      desc: "Experience our interactive teaching method."
    },
    {
      id: "03",
      title: "Game Plan",
      desc: "Get your personalized path to mastery."
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* --- Cosmic Background Effects (softened for light theme) --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grid Pattern Overlay (lighter) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6 animate-fade-in-up">
            <SparklesIcon className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-bold text-gray-700 tracking-wide uppercase">Start Your Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Ready to Make Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Winning Move?</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just play the game—master it. Book your free demo today and see the difference expert coaching makes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a 
              href="/contact" 
              className="group relative w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                Book Free Demo Lesson
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="tel:+91000000000"
              className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-300 text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5 text-blue-600" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

        {/* --- Benefits Grid (Holographic Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((item, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 rounded-2xl border ${item.border} bg-white/70 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Flight Plan (What to Expect) --- */}
        <div className="relative bg-gray-50 rounded-3xl border border-gray-200 p-8 md:p-12 overflow-hidden shadow-lg">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Your First Session Flight Plan</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-500/40 flex items-center justify-center text-xl font-bold text-blue-600 shadow-lg group-hover:border-blue-600 group-hover:scale-110 transition-all duration-300 mb-6 relative">
                  {step.id}
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DemoBookingCTA;