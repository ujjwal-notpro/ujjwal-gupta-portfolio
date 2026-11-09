import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  Sparkles, 
  AlertCircle, 
  CheckCircle,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: false,
        message: 'Please fill in your name, email, and message.'
      });
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}

    setStatus({
      submitted: true,
      message: 'Thank you for reaching out! In this current demonstration, the contact form validates successfully. To receive emails directly, connect an email service like Formspree or EmailJS.'
    });
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-50/70">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full badge-gradient-indigo text-xs font-bold tracking-wide">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            {personalInfo.contact.heading}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {personalInfo.contact.description}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="portfolio-card p-6 sm:p-8 bg-white space-y-6 border-slate-200">
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading flex items-center space-x-2.5">
                <Mail className="w-6 h-6 text-indigo-600" />
                <span>Contact Details</span>
              </h3>
              
              <div className="space-y-4">
                {/* Email Placeholder */}
                <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-500">Email Address</div>
                    <div className="text-sm font-mono font-bold text-slate-900 truncate">
                      {personalInfo.contact.emailPlaceholder}
                    </div>
                    <span className="text-[10px] text-amber-600 font-mono font-bold">(Editable Placeholder)</span>
                  </div>
                </div>

                {/* Phone Placeholder */}
                <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-500">Phone Number</div>
                    <div className="text-sm font-mono font-bold text-slate-900 truncate">
                      {personalInfo.contact.phonePlaceholder}
                    </div>
                    <span className="text-[10px] text-amber-600 font-mono font-bold">(Editable Placeholder)</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3.5 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-500">Location Background</div>
                    <div className="text-sm font-bold text-slate-900">
                      {personalInfo.location.origin}
                    </div>
                    <div className="text-xs text-slate-500">
                      Studying in {personalInfo.location.currentRegion}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Official Developer Profiles
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={personalInfo.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 transition-all duration-200 group shadow-xs"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold">GitHub</div>
                      <div className="text-[10px] opacity-80 truncate">
                        {personalInfo.social.github.username}
                      </div>
                    </div>
                  </a>

                  <a
                    href={personalInfo.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 transition-all duration-200 group shadow-xs"
                  >
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold">LinkedIn</div>
                      <div className="text-[10px] opacity-80 truncate">
                        ujjwal-gupta
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Backend Integration Note Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start space-x-3 text-xs text-slate-600 shadow-xs">
              <AlertCircle className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-900">Form Integration Notice:</strong> Complete client-side validation is active. To enable automated inbox delivery, configure an external handler like EmailJS or Formspree.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="portfolio-card p-6 sm:p-8 bg-white border-slate-200">
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading mb-6 flex items-center space-x-2">
                <Send className="w-5 h-5 text-indigo-600" />
                <span>Send a Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full px-4 py-3 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Ujjwal, I saw your portfolio and would like to connect about..."
                    className="w-full px-4 py-3 bg-slate-50 text-slate-900 text-sm rounded-xl border border-slate-200 focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none shadow-xs"
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl text-xs flex items-start space-x-2.5 ${
                    status.submitted 
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' 
                      : 'bg-rose-50 border border-rose-200 text-rose-800'
                  }`}>
                    {status.submitted ? (
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
