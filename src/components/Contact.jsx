import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Phone, 
  AlertCircle, 
  CheckCircle,
  MessageSquare
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
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {}

    setStatus({
      submitted: true,
      message: 'Thank you! Your message has been received in demonstration mode. Connect an external handler like EmailJS or Formspree to route directly to your inbox.'
    });
  };

  return (
    <section id="contact" className="py-16 bg-[#ffffff] border-b border-[#d0d7de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-6 mb-8 border-b border-[#d0d7de]">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#656d76] uppercase tracking-wider mb-1">
            <MessageSquare className="w-4 h-4 text-[#0969da]" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1f2328] tracking-tight">
            {personalInfo.contact.heading}
          </h2>
          <p className="text-xs sm:text-sm text-[#656d76] mt-1 max-w-2xl">
            {personalInfo.contact.description}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="gh-box overflow-hidden">
              <div className="gh-box-header flex items-center justify-between">
                <span className="text-xs font-bold text-[#1f2328]">Contact Information</span>
                <span className="text-[11px] text-[#656d76]">Public Profile</span>
              </div>

              <div className="p-5 space-y-3.5 text-xs text-[#1f2328]">
                {/* Email Placeholder */}
                <div className="p-3 bg-[#f6f8fa] rounded-md border border-[#d0d7de] flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#0969da] flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-[#656d76] text-[11px]">Email Address:</div>
                    <div className="font-mono font-medium truncate">{personalInfo.contact.emailPlaceholder}</div>
                    <span className="text-[10px] text-[#9a6700]">(Editable Placeholder)</span>
                  </div>
                </div>

                {/* Phone Placeholder */}
                <div className="p-3 bg-[#f6f8fa] rounded-md border border-[#d0d7de] flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#1a7f37] flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-[#656d76] text-[11px]">Phone Number:</div>
                    <div className="font-mono font-medium truncate">{personalInfo.contact.phonePlaceholder}</div>
                    <span className="text-[10px] text-[#9a6700]">(Editable Placeholder)</span>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3 bg-[#f6f8fa] rounded-md border border-[#d0d7de] flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#cf222e] flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-[#656d76] text-[11px]">Origin & Academic Region:</div>
                    <div className="font-medium">{personalInfo.location.origin}</div>
                    <div className="text-[#656d76] mt-0.5">Studying in {personalInfo.location.currentRegion}</div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="p-4 bg-[#f6f8fa] border-t border-[#d0d7de] flex items-center justify-between gap-2">
                <a
                  href={personalInfo.social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-btn w-full justify-center"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-btn w-full justify-center text-[#0969da]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Form Integration Notice */}
            <div className="p-3.5 rounded-md bg-[#f6f8fa] border border-[#d0d7de] text-xs text-[#656d76] flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-[#0969da] flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#1f2328]">Backend Notice:</strong> The contact form features complete client validation. Live delivery requires setting up a webhook or email provider (Formspree, EmailJS, or Node.js server).
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="gh-box overflow-hidden">
              <div className="gh-box-header flex items-center justify-between">
                <span className="text-xs font-bold text-[#1f2328]">New Message</span>
                <span className="text-[11px] text-[#656d76]">Markdown Supported</span>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#1f2328] block mb-1">
                      Your Name <span className="text-[#cf222e]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-3 py-1.5 bg-[#ffffff] text-xs text-[#1f2328] rounded-md border border-[#d0d7de] focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1f2328] block mb-1">
                      Your Email <span className="text-[#cf222e]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3 py-1.5 bg-[#ffffff] text-xs text-[#1f2328] rounded-md border border-[#d0d7de] focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1f2328] block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    className="w-full px-3 py-1.5 bg-[#ffffff] text-xs text-[#1f2328] rounded-md border border-[#d0d7de] focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1f2328] block mb-1">
                    Message <span className="text-[#cf222e]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2 bg-[#ffffff] text-xs text-[#1f2328] rounded-md border border-[#d0d7de] focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none resize-none font-mono"
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`p-3 rounded-md text-xs flex items-start space-x-2 ${
                    status.submitted 
                      ? 'bg-[#dafbe1] border border-[#2da44e]/30 text-[#1a7f37]' 
                      : 'bg-[#ffebe9] border border-[#ff8182]/30 text-[#cf222e]'
                  }`}>
                    {status.submitted ? (
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-[#656d76]">Attach files by dragging & dropping (Simulated)</span>
                  <button
                    type="submit"
                    className="gh-btn-primary"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
