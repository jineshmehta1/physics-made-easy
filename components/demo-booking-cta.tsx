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
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      icon: UsersIcon,
      title: "Match Your Coach",
      description: "Find the perfect mentor for your learning style.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    },
    {
      icon: ClockIcon,
      title: "Flexible Timing",
      description: "Sessions that fit your global schedule perfectly.",
      color: "text-pink-400",
      bg: "bg-pink-400/10",
      border: "border-pink-400/20"
    },
    {
      icon: StarIcon,
      title: "Custom Roadmap",
      description: "A tailored path from Beginner to Grandmaster.",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20"
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
    <section className="relative py-24 bg-[#0B1121] overflow-hidden">
      
      {/* --- Cosmic Background Effects --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in-up">
            <SparklesIcon className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-bold text-gray-200 tracking-wide uppercase">Start Your Mission</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Make Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Winning Move?</span>
          </h2>
          
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
            Don't just play the game—master it. Book your free demo today and see the difference expert coaching makes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a 
              href="/contact" 
              className="group relative w-full sm:w-auto px-8 py-4 bg-white text-[#0B1121] font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-white to-blue-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-2">
                Book Free Demo Lesson
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="tel:+91000000000"
              className="group w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5 text-blue-400" />
              <span>Call Us</span>
            </a>
          </div>
        </div>

        {/* --- Benefits Grid (Holographic Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((item, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 rounded-2xl border ${item.border} bg-[#131B2E]/50 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* --- Flight Plan (What to Expect) --- */}
        <div className="relative bg-[#131B2E] rounded-3xl border border-white/10 p-8 md:p-12 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Your First Session Flight Plan</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-[#0B1121] border-2 border-blue-500/30 flex items-center justify-center text-xl font-bold text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-blue-400 group-hover:scale-110 transition-all duration-300 mb-6 relative">
                  {step.id}
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DemoBookingCTA;