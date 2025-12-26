"use client";

import React, { useState } from 'react';
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
  CheckCircle2 
} from 'lucide-react';
import { submitEnquiry } from '@/app/actions/adminActions'; // Import the Server Action

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Form Submission
  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    try {
      await submitEnquiry(formData); // Call backend
      setIsSuccess(true);            // Show success message
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans" id="contact">
      
      {/* --- Background Elements --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-32 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 shadow-sm mb-4">
             <MessageSquare className="w-4 h-4 text-teal-600" />
             <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Enquiries Open</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
             Start Your Journey <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
               With Physics Made Easy.
             </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
             Have questions about our Physics tuition or Chess coaching? Fill out the form and our team will get in touch shortly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* --- LEFT: Contact Info Card --- */}
          <div className="w-full lg:w-5/12">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20 h-full flex flex-col justify-between">
               
               {/* Decor */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

               <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                  <p className="text-slate-400 mb-10 text-sm">Reach out to us directly via phone or email.</p>

                  <div className="space-y-8">
                     {/* Phone */}
                     <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:border-teal-500 transition-colors duration-300">
                           <Phone className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                           <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call / WhatsApp</p>
                           <a href="tel:+6597277419" className="text-lg font-medium text-white hover:text-teal-400 transition-colors cursor-pointer block">
                             +65 9727 7419
                           </a>
                        </div>
                     </div>

                     {/* Email */}
                     <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:border-teal-500 transition-colors duration-300">
                           <Mail className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                           <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                           <a href="mailto:chewkm2001@yahoo.com" className="text-lg font-medium text-white hover:text-teal-400 transition-colors cursor-pointer break-all block">
                             chewkm2001@yahoo.com
                           </a>
                        </div>
                     </div>

                     {/* Location */}
                     <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:border-teal-500 transition-colors duration-300">
                           <MapPin className="w-5 h-5 text-teal-400 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                           <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Main Center</p>
                           <p className="text-lg font-medium text-white leading-snug">
                              186 Toa Payoh Central, <br /> Lobby H 02-430, Singapore
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative z-10 pt-12 mt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm italic">
                    "Teaching for understanding, not just for exams."
                  </p>
               </div>

            </div>
          </div>

          {/* --- RIGHT: The Form --- */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 h-full">
               
               {isSuccess ? (
                 <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                       <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto mb-8 text-lg">
                       Thank you for reaching out. We have received your enquiry and will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-teal-600 font-bold hover:text-teal-800 hover:underline transition-colors"
                    >
                      Send another message
                    </button>
                 </div>
               ) : (
                 <form action={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       
                       {/* Parent Name */}
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Parent Name <span className="text-red-500">*</span></label>
                          <div className="relative group">
                             <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                             <input 
                               name="parentName"
                               type="text" 
                               required
                               placeholder="Enter your name" 
                               className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                             />
                          </div>
                       </div>

                       {/* Student Name */}
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Student Name</label>
                          <div className="relative group">
                             <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                             <input 
                               name="studentName"
                               type="text" 
                               placeholder="Enter child's name" 
                               className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                             />
                          </div>
                       </div>

                       {/* Email */}
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Email Address <span className="text-red-500">*</span></label>
                          <div className="relative group">
                             <AtSign className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                             <input 
                               name="email"
                               type="email" 
                               required
                               placeholder="example@gmail.com" 
                               className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                             />
                          </div>
                       </div>

                       {/* Phone */}
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Phone Number <span className="text-red-500">*</span></label>
                          <div className="relative group">
                             <Smartphone className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                             <input 
                               name="phone"
                               type="tel" 
                               required
                               placeholder="+65 9123 4567" 
                               className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all font-medium text-slate-900 placeholder:text-slate-400"
                             />
                          </div>
                       </div>

                       {/* Subject Interest */}
                       <div className="md:col-span-2 space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Interested In</label>
                          <select 
                            name="subject"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all font-medium text-slate-900 cursor-pointer"
                          >
                             <option value="GCE O-Level Physics">GCE O-Level Physics</option>
                             <option value="A-Level H2 Physics">A-Level H2 Physics</option>
                             <option value="IB HL/SL Physics">IB HL/SL Physics</option>
                             <option value="Chess Coaching">Chess Coaching</option>
                             <option value="General Enquiry">Other / General Enquiry</option>
                          </select>
                       </div>

                       {/* Message */}
                       <div className="md:col-span-2 space-y-2">
                          <label className="text-sm font-bold text-slate-700 ml-1">Message / Query</label>
                          <textarea 
                            name="message"
                            rows={4}
                            required
                            placeholder="Tell us about your requirements..." 
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all font-medium text-slate-900 placeholder:text-slate-400 resize-none"
                          ></textarea>
                       </div>

                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                       <button 
                         type="submit" 
                         disabled={isSubmitting}
                         className="w-full md:w-auto bg-slate-900 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-slate-900/10 hover:shadow-teal-600/20 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                       >
                          {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <>Send Message <Send className="w-5 h-5" /></>
                          )}
                       </button>
                    </div>

                 </form>
               )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;