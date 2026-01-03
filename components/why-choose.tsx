"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  Award, 
  BrainCircuit, 
  BookOpenCheck, 
  Microscope, 
  CheckCircle2,
  Binary,
  Compass
} from "lucide-react";

export default function WhyChooseUsSection() {
  
  // Structured Data for SEO: Service Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Academic Enrichment & Strategy Coaching",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Physics & Strategy Academy",
      "founder": "Mr. Chew Kok Mun"
    },
    "areaServed": "Singapore",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Education Domains",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Physics Tuition (O/A Level, IB, IP)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "FIDE Certified Chess Coaching" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Integrated Mathematics & Logic" } }
      ]
    }
  };

  const benefits = [
    {
      title: "Cross-Domain Pedagogy",
      description: "Led by Mr. Chew (Ex-MOE Scholar, NIE-Trained). We bridge Physics, Mathematics, and Logic to create versatile learners.",
      icon: <BookOpenCheck className="w-6 h-6 text-teal-600" />,
      color: "teal",
      keywords: "MOE Scholar, NIE Trained, STEM Education"
    },
    {
      title: "Cognitive MI Theory",
      description: "Beyond rote learning. We apply Multiple Intelligences to develop spatial, logical, and strategic thinking through Chess and Science.",
      icon: <BrainCircuit className="w-6 h-6 text-indigo-600" />,
      color: "indigo",
      keywords: "Multiple Intelligences, Strategic Thinking"
    },
    {
      title: "Academic Excellence",
      description: "Proven 95% Grade A/B track record in O-Levels & 100% Grade 7 in IB HL Physics. We specialize in IP and IGCSE curriculums.",
      icon: <Award className="w-6 h-6 text-amber-500" />,
      color: "amber",
      keywords: "IB Physics Specialist, O-Level Results"
    },
    {
      title: "Strategic Mindset",
      description: "FIDE-certified coaching that uses Chess to enhance focus, foresight, and problem-solving skills applicable to any career.",
      icon: <Compass className="w-6 h-6 text-blue-600" />,
      color: "blue",
      keywords: "FIDE Chess Coach, Critical Thinking"
    },
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.21, 1.02, 0.73, 1] } 
    }
  };

  return (
    <section className="py-16 md:py-28 relative overflow-hidden bg-white font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* --- Optimized Background Decor --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-teal-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-50/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Headline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <CheckCircle2 size={14} className="text-teal-400" />
            The Competitive Edge
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Grades.</span><br className="hidden md:block"/>
            We Build <span className="text-indigo-600">Intelligent Minds.</span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed">
            From the laws of Physics to the strategies of the Grandmasters, we provide a multidisciplinary approach to education that prepares students for Singapore&apos;s most rigorous exams.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-3 gap-2 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 order-2 lg:order-1"
          >
             <BenefitCard benefit={benefits[0]} cardVariants={cardVariants} />
             <BenefitCard benefit={benefits[1]} cardVariants={cardVariants} />
          </motion.div>

          {/* CENTRAL VISUAL - Replaced with optimized Next Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
              {/* Animated Rings */}
              <div className="absolute inset-0 border-2 border-dashed border-teal-200 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-indigo-100 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              
              <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-slate-50">
                 <Image 
                   src="/sir3.webp" 
                   alt="Mr Chew Kok Mun Teaching Physics and Chess Strategy" 
                   fill
                   className="object-cover transition-transform duration-700 hover:scale-110"
                 />
              </div>

              {/* Float-in Tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 hidden md:block"
              >
                <Binary className="text-indigo-600 w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 order-3"
          >
             <BenefitCard benefit={benefits[2]} cardVariants={cardVariants} />
             <BenefitCard benefit={benefits[3]} cardVariants={cardVariants} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function BenefitCard({ benefit, cardVariants }: { benefit: any, cardVariants: any }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-slate-50 p-8 rounded-3xl border border-transparent hover:border-teal-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[360deg] shadow-sm
        ${benefit.color === 'teal' ? 'bg-teal-100' : ''}
        ${benefit.color === 'indigo' ? 'bg-indigo-100' : ''}
        ${benefit.color === 'amber' ? 'bg-amber-100' : ''}
        ${benefit.color === 'blue' ? 'bg-blue-100' : ''}
      `}>
        {benefit.icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
        {benefit.title}
      </h3>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
        {benefit.description}
      </p>
      
      {/* SEO-Friendly Keyword Tags (Hidden visually but readable by bots if needed, or used as subtle meta) */}
      <div className="mt-4 pt-4 border-t border-slate-200/60 flex flex-wrap gap-2">
         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
           {benefit.keywords}
         </span>
      </div>
    </motion.div>
  );
}