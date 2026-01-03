"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  User, 
  AtSign, 
  Smartphone, 
  Send, 
  Loader2, 
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { submitEnquiry } from '@/app/actions/adminActions';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // SEO: Local Business & Contact Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Physics Made Easy",
    "image": "/logo.png",
    "@id": "https://physicsmadeeasy.sg",
    "url": "https://physicsmadeeasy.sg",
    "telephone": "+6597277419",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "186 Toa Payoh Central, Lobby H 02-430",
      "addressLocality": "Toa Payoh",
      "postalCode": "310186",
      "addressCountry": "SG"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "21:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+65-9727-7419",
      "contactType": "customer service",
      "areaServed": "SG",
      "availableLanguage": "English"
    }
  };

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      await submitEnquiry(formData);
      setIsSuccess(true);
    } catch (error) {
      alert("Something went wrong. Please WhatsApp +65 9727 7419 directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative py-12 lg:py-20 bg-white overflow-hidden font-sans" id="contact">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      
      {/* Background Micro-Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-50 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Header: Optimized for scannability --- */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4"
            >
              <MessageSquare size={14} className="text-teal-400 fill-teal-400" /> Admissions 2026 Open
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Let&apos;s Secure Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Academic Future.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-bold text-sm max-w-xs md:text-right hidden lg:block">
            Response time: Usually within 2 hours during business sessions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* --- LEFT: Authoritative Contact Card --- */}
          <div className="lg:col-span-5 h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl h-full flex flex-col"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
               
               <div className="relative z-10 flex-grow">
                  <h3 className="text-2xl font-black mb-8 tracking-tight">Support Hub</h3>
                  
                  <div className="space-y-6">
                     {/* Phone/WA */}
                     <a href="https://wa.me/6597277419" className="flex items-center gap-5 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-all">
                           <Smartphone className="w-5 h-5 text-teal-400 group-hover:text-white" />
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">WhatsApp / Call</p>
                           <p className="text-lg font-bold group-hover:text-teal-400 transition-colors">+65 9727 7419</p>
                        </div>
                     </a>

                     {/* Email */}
                     <a href="mailto:chewkm2001@yahoo.com" className="flex items-center gap-5 group cursor-pointer">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 transition-all">
                           <Mail className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Enquiries</p>
                           <p className="text-lg font-bold group-hover:text-indigo-400 transition-colors break-all">chewkm2001@yahoo.com</p>
                        </div>
                     </a>

                     {/* Location */}
                     <div className="flex items-center gap-5 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                           <MapPin className="w-5 h-5 text-slate-400" />
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Main Center</p>
                           <p className="text-sm font-bold text-slate-300 leading-snug">
                              186 Toa Payoh Central, <br /> Lobby H 02-430, Singapore
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Hours & Verification */}
               <div className="relative z-10 pt-8 mt-12 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-teal-500" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Mon - Sun: 9am - 9pm</span>
                  </div>
                  <CheckCircle2 size={20} className="text-teal-500/50" />
               </div>
            </motion.div>
          </div>

          {/* --- RIGHT: Smart Enquiry Form --- */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-[2.5rem] p-8 lg:p-12 border border-slate-100 h-full">
               <AnimatePresence mode="wait">
               {isSuccess ? (
                 <motion.div 
                   key="success"
                   initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                   className="h-full flex flex-col items-center justify-center text-center py-12"
                 >
                    <div className="w-20 h-20 bg-teal-500 text-white rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-teal-500/40">
                       <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Enquiry Received</h3>
                    <p className="text-slate-500 max-w-xs mx-auto mb-8 font-medium">Mr. Chew or our coordinator will contact you shortly.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-teal-600 font-black text-xs uppercase tracking-widest hover:underline">New Submission</button>
                 </motion.div>
               ) : (
                 <form action={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Parent Name */}
                    <div className="space-y-1.5">
                       <label htmlFor="parentName" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Parent Name</label>
                       <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input id="parentName" name="parentName" type="text" required placeholder="John Doe" 
                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-bold text-slate-900" />
                       </div>
                    </div>

                    {/* Student Name */}
                    <div className="space-y-1.5">
                       <label htmlFor="studentName" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Student Name</label>
                       <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                          <input id="studentName" name="studentName" type="text" placeholder="Optional" 
                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-bold text-slate-900" />
                       </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                       <label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                       <div className="relative">
                          <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input id="email" name="email" type="email" required placeholder="example@gmail.com" 
                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-bold text-slate-900" />
                       </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                       <label htmlFor="phone" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile No.</label>
                       <div className="relative">
                          <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input id="phone" name="phone" type="tel" required placeholder="+65" 
                            className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all font-bold text-slate-900" />
                       </div>
                    </div>

                    {/* Subject */}
                    <div className="md:col-span-2 space-y-1.5">
                       <label htmlFor="subject" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Interested Subject</label>
                       <select id="subject" name="subject" className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-2xl focus:border-teal-500 outline-none transition-all font-bold text-slate-900 cursor-pointer">
                          <option>GCE O-Level Physics</option>
                          <option>A-Level H2 Physics</option>
                          <option>IB HL/SL Physics</option>
                          <option>FIDE Chess Coaching</option>
                          <option>General Enquiry</option>
                       </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 space-y-1.5">
                       <label htmlFor="message" className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                       <textarea id="message" name="message" rows={3} required placeholder="How can Mr. Chew help?" 
                          className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl focus:border-teal-500 outline-none transition-all font-bold text-slate-900 resize-none" />
                    </div>

                    <div className="md:col-span-2 pt-4">
                       <button 
                         type="submit" 
                         disabled={isSubmitting}
                         className="w-full group bg-slate-900 hover:bg-teal-600 text-white font-black py-4 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
                       >
                          {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Send Strategic Enquiry <Send size={18} /></>}
                       </button>
                    </div>
                 </form>
               )}
               </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;