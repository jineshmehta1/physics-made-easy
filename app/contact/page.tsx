"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  User,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    "General Information",
    "Course Enrollment",
    "Private Coaching",
    "Tournament Registration",
    "Workshop Booking",
    "Partnership Inquiry",
    "Media & Press",
    "Other",
  ];

  const faqs = [
    { question: "What age groups do you accept?", answer: "We welcome all ages from 4 and up." },
    { question: "Do you offer trial classes?", answer: "Yes, free trial classes available." },
    { question: "What are your class timings?", answer: "Classes scheduled morning, afternoon, evening daily." },
    { question: "Do you provide online coaching?", answer: "Yes, with interactive tools and personalized sessions." },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xldwygeq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "",
        });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-10">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-2 text-lg shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start your chess journey? We're here to help every step of the way with personalized guidance and support.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our chess experts
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: MapPin,
                title: "Visit Our Academy",
                details: ["11-13-75 Road No 2, Alkapuri", "Kothapet, Hyderabad-500035", "Above Pragathi Model School"],
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
              },
              {
                icon: Phone,
                title: "Call Us Directly",
                details: ["Office: +91-9864646481", "WhatsApp: +91-9864646481"],
                color: "from-emerald-500 to-green-500",
                bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
              },
              {
                icon: Mail,
                title: "Send Email",
                details: ["telanganachessschool@gmail.com"],
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
              },
              {
                icon: Clock,
                title: "Operating Hours",
                details: ["Mon-Sun: 10 AM to 8 PM"],
                color: "from-amber-500 to-orange-500",
                bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
              },
            ].map(({ icon: Icon, title, details, color, bgColor }, idx) => (
              <Card key={idx} className={`${bgColor} border-2 border-gray-200/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className={`h-2 bg-gradient-to-r ${color}`}></div>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-r ${color} shadow-lg`}>
                    <Icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
                  <div className="space-y-1">
                    {details.map((d, i) => (
                      <p key={i} className="text-gray-600 text-sm leading-relaxed">
                        {d}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-3xl shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">Send a Message</h2>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-green-600">Message Sent Successfully!</h3>
                    <p className="text-gray-600 text-lg">Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-semibold text-base">
                          Full Name *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={e => handleInputChange("name", e.target.value)}
                            required
                            className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-base"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-semibold text-base">
                          Email Address *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={e => handleInputChange("email", e.target.value)}
                            required
                            className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-base"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-semibold text-base">
                          Phone Number
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={e => handleInputChange("phone", e.target.value)}
                            className="pl-10 h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-base"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-semibold text-base">
                          Inquiry Type *
                        </Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={value => handleInputChange("inquiryType", value)}
                        >
                          <SelectTrigger className="w-full h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-base">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type, i) => (
                              <SelectItem key={i} value={type} className="text-base">
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-semibold text-base">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={e => handleInputChange("subject", e.target.value)}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-base"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-semibold text-base">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={e => handleInputChange("message", e.target.value)}
                        rows={6}
                        required
                        className="border-2 border-gray-200 focus:border-blue-500 rounded-xl text-base resize-none"
                        placeholder="Tell us about your chess journey and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold text-lg"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map Section */}
            <div className="space-y-8">
              {/* Map */}
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-3xl shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                      <MapPin className="w-6 h-6" />
                      Our Location
                    </h3>
                    <p className="text-blue-100 mt-2">Visit us at our Hyderabad academy</p>
                  </div>
                  <div className="h-80 md:h-96">
                    <iframe
                      title="Bharat Chess Academy Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8902674607427!2d78.50310917499912!3d17.322055904365462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9992786f1711%3A0xc2a03126f2eff5c4!2s11-13-75%20Road%20No%202%2C%20Alkapuri%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1694871600000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-b-3xl"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Info */}
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-800">Quick Response Guarantee</h3>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Response within 2 hours during business hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>24/7 WhatsApp support for urgent inquiries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Free consultation for new students</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-800">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                We're always happy to help with any chess-related queries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg rounded-2xl font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-2xl font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}