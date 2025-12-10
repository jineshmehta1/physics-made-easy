import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRightIcon } from './BannerIcon';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row rounded-[40px] overflow-hidden shadow-2xl bg-white">
          
          {/* --- Left Column: Contact Info --- */}
          <div className="w-full lg:w-[40%] bg-[#1a1a4b] p-12 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%">
                 <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                   <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                 </pattern>
                 <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-blue-200 mb-12 leading-relaxed">
                Have questions about our chess programs? We're here to help you guide your child's journey to mastery.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-[#1a1a4b] transition-all duration-300">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-blue-300 uppercase tracking-wide mb-1">Phone</span>
                    <p className="text-lg font-medium">+91 99960 20268</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-[#1a1a4b] transition-all duration-300">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-blue-300 uppercase tracking-wide mb-1">Email Address</span>
                    <p className="text-lg font-medium break-all">support@cosmicchessacademy.com</p>
                  </div>
                </div>

                {/* Location (Optional - Adds visual balance) */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-yellow-400 group-hover:text-[#1a1a4b] transition-all duration-300">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-blue-300 uppercase tracking-wide mb-1">Location</span>
                    <p className="text-lg font-medium">Online & Global</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social / Extra decoration */}
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
               <p className="text-sm text-blue-300 italic">"Chess is the gymnasium of the mind."</p>
            </div>
            
            {/* Giant decorative circle at bottom right of this panel */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="w-full lg:w-[60%] p-8 md:p-12 bg-white">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a4b] mb-2">Send Us a Message</h3>
            <p className="text-gray-500 text-sm mb-8">Your email address will not be published. Required fields are marked *</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Father Name */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Father Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter father's name" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Last Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter last name" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  />
                </div>

                {/* Kid Full Name */}
                <div className="md:col-span-2 space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Kid Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Enter child's full name" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">E-mail *</label>
                  <input 
                    type="email" 
                    placeholder="example@email.com" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Phone *</label>
                  <input 
                    type="tel" 
                    placeholder="+1 234 567 890" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  />
                </div>

                {/* WhatsApp */}
                <div className="md:col-span-2 space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    placeholder="WhatsApp number (if different)" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                  />
                </div>

                {/* Comment */}
                <div className="md:col-span-2 space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Comment</label>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                  ></textarea>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="button" 
                  className="group bg-yellow-400 text-[#1a1a4b] hover:bg-yellow-300 font-bold py-4 px-10 rounded-xl flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 hover:-translate-y-1"
                >
                  Submit Now
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;