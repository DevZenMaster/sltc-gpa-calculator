"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Github, Linkedin, Send, Globe, Loader2, CheckCircle, MessageSquare } from "lucide-react";

export default function ContactPage() {
  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Form Submission via AJAX (No redirect)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mbdlvjzg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch {
      alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 pb-20 transition-colors duration-300">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-32 pb-20 px-6 relative overflow-hidden transition-colors">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[120px] opacity-70 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[100px] opacity-50 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <MessageSquare className="w-3 h-3" />
            Contact Support
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
            Your Questions.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Our Priority.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Found a bug? Have a feature request? Or just want to say hello? 
            We are listening. Drop us a line below.
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Direct Channels</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                Prefer not to use forms? You can reach out directly through these platforms.
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-blue-200 dark:hover:border-blue-900 transition-colors">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Email Support</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">For detailed inquiries.</p>
                <a href="mailto:hello@ruwansanjeewa.com" className="text-blue-600 dark:text-blue-400 font-bold text-sm hover:underline">hello@ruwansanjeewa.com</a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-indigo-200 dark:hover:border-indigo-900 transition-colors">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Base of Operations</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">SLTC Research University</p>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Padukka, Sri Lanka</span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Connect on Socials</h4>
              <div className="flex gap-3">
                <Link href="https://github.com/DevZenMaster" target="_blank" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-900 dark:hover:bg-slate-800 hover:text-white hover:border-slate-900 dark:hover:border-slate-700 transition-all shadow-sm">
                  <Github className="w-5 h-5 text-slate-900 dark:text-slate-300" />
                </Link>
                <Link href="https://www.linkedin.com/in/ruwansanjeewa/" target="_blank" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all shadow-sm">
                  <Linkedin className="w-5 h-5 text-slate-900 dark:text-slate-300" />
                </Link>
                <Link href="https://www.ruwansanjeewa.com" target="_blank" className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                  <Globe className="w-5 h-5 text-slate-900 dark:text-slate-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden relative transition-colors">
            {/* Top decorative line */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

            <div className="p-8 md:p-10">
              {isSuccess ? (
                // --- SUCCESS STATE ---
                <div className="text-center py-20 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Message Received!</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-8">
                    Thanks for reaching out. I&apos;ll get back to you as soon as I check my inbox.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-bold text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white underline transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                // --- FORM STATE ---
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value="New Message from SLTC GPA Calculator" />

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Send a Message</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">We usually respond within 24 hours.</p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Your Name</label>
                    <input 
                      required
                      type="text" 
                      name="name" 
                      id="name"
                      placeholder="John Doe" 
                      className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      id="email" 
                      placeholder="john@example.com" 
                      className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Message</label>
                    <textarea 
                      required
                      name="message"
                      id="message" 
                      rows={4}
                      placeholder="Tell me about the bug, feature request, or just say hi..." 
                      className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 dark:bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}