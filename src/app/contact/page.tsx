"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, MapPin, Github, Linkedin, Send, 
  Globe, Loader2, CheckCircle, MessageSquare, Sparkles, Terminal 
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mbdlvjzg", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Transmission error. Please check your connection.");
      }
    } catch {
      alert("System error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#030303] min-h-screen text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 pb-24 transition-colors duration-500">
      
      {/* --- HERO HEADER: COMMUNICATION HUB --- */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-slate-100 dark:border-white/5">
        {/* Background Ambient Spectrum */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 italic">
            <Sparkles className="w-3 h-3 text-blue-600" />
            Strategic Support Channel
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 uppercase italic leading-[0.9]">
            Direct <span className="text-blue-600">Intelligence.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium italic leading-relaxed">
            Report anomalies, request features, or initialize a collaboration. Our technical team is on standby.
          </p>
        </div>
      </div>

      {/* --- MAIN INTERFACE GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: INTELLIGENCE CHANNELS */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 flex items-center gap-3">
                <Terminal size={14} /> Official Channels
              </h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed">
                Choose a direct path for immediate transmission.
              </p>
            </div>

            <div className="space-y-4">
              {/* Channel Cards */}
              <div className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 transition-all duration-500 hover:border-blue-500/40 hover:-translate-y-2">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white dark:bg-white/5 text-blue-600 rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Encrypted Mail</h4>
                    <a href="mailto:hello@ruwansanjeewa.com" className="text-xl font-black uppercase tracking-tighter italic hover:text-blue-600 transition-colors">hello@ruwansanjeewa.com</a>
                  </div>
                </div>
              </div>

              <div className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 transition-all duration-500 hover:border-indigo-500/40 hover:-translate-y-2">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-white dark:bg-white/5 text-indigo-600 rounded-2xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Base Location</h4>
                    <p className="text-xl font-black uppercase tracking-tighter italic">SLTC Research University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Matrix */}
            <div className="pt-8 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Social Matrix</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/DevZenMaster", color: "hover:bg-slate-900" },
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/ruwansanjeewa/", color: "hover:bg-[#0077b5]" },
                  { icon: <Globe size={20} />, href: "https://ruwansanjeewa.com", color: "hover:bg-blue-600" }
                ].map((social, i) => (
                  <Link key={i} href={social.href} target="_blank" className={`p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl text-slate-400 hover:text-white ${social.color} transition-all duration-500 hover:-translate-y-1`}>
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SECURE UPLINK FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-white/[0.02] rounded-[3.5rem] border border-slate-100 dark:border-white/10 p-12 shadow-2xl relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                <MessageSquare size={120} />
              </div>

              {isSuccess ? (
                <div className="text-center py-20 animate-in fade-in zoom-in-95 duration-700">
                  <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-4">Transmission Sent.</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium italic mb-10 max-w-xs mx-auto text-lg">
                    The architect has been notified. Stand by for a response within 24 standard hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 hover:text-blue-500 underline"
                  >
                    Open New Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <input type="hidden" name="_subject" value="SLTC GPA INTELLIGENCE: Secure Transmission" />

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-tighter italic">Secure <span className="text-blue-600">Uplink.</span></h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">System Latency: 0.02ms | Ready for Input</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Identify Yourself</label>
                      <input 
                        required
                        type="text" 
                        name="name" 
                        placeholder="CANDIDATE NAME" 
                        className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-black text-xs uppercase tracking-widest"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Return Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        placeholder="EMAIL@PROTOCOL.COM" 
                        className="w-full p-5 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-black text-xs uppercase tracking-widest"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Transmission Content</label>
                    <textarea 
                      required
                      name="message"
                      rows={5}
                      placeholder="ENTER DETAILED ANOMALY REPORT OR QUERY..." 
                      className="w-full p-6 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 outline-none focus:ring-2 focus:ring-blue-500 transition-all font-black text-xs uppercase tracking-widest resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-6 rounded-3xl font-black text-xs uppercase tracking-[0.3em] hover:bg-blue-700 active:scale-95 transition-all shadow-2xl shadow-blue-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-4">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Transmitting...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-4">
                        Initialize Transmission
                        <Send className="w-4 h-4" />
                      </div>
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