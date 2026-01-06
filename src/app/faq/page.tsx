"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ChevronDown, ShieldCheck, 
  Bug, ArrowRight, Sparkles, Cpu, Binary, MessageSquare 
} from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this Intelligence Engine officially from SLTC?",
      answer: "No. This is a high-precision, unofficial tool built by students for the SLTC community. While our algorithms strictly adhere to the university's academic handbook and grading protocols, it is not an official university product. Always refer to the SLTC Registry for your final certified results.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      question: "How secure is my academic data?",
      answer: "Your privacy is hard-coded into the architecture. We employ zero-server processing; all grade calculations happen locally within your browser's runtime environment. No database, no trackers, and no external data transmission.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      question: "What if my specific degree or module is missing?",
      answer: "The platform is designed for extensibility. You can deploy custom modules via the '+ Add Custom Module' feature on your dashboard. For permanent inclusion of missing degree paths, please submit a pull request or open an issue on GitHub.",
      icon: <Binary className="w-5 h-5" />
    },
    {
      question: "How accurate is the 'Strategic Roadmap' logic?",
      answer: "The Strategic Roadmap uses a predictive forecasting algorithm. It calculates the delta between your current cumulative points and the required threshold for honors classifications (First Class, Second Upper, etc.), factoring in the weighted average of remaining credits.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      question: "How do I report a calculation discrepancy?",
      answer: "We aim for 99.9% calculation accuracy. If you detect an anomaly in the weighted average or GPA output, please report it immediately via our bug tracking system on GitHub for an emergency patch.",
      icon: <Bug className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-white dark:bg-[#030303] min-h-screen text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 pb-24 transition-colors duration-500">
      
      {/* --- HERO HEADER: KNOWLEDGE HUB --- */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-slate-100 dark:border-white/5">
        {/* Background Ambient Spectrum */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 italic">
            <Sparkles className="w-3 h-3 text-blue-600" />
            Intelligence Hub Support
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 uppercase italic leading-none">
            Knowledge <span className="text-blue-600">Base.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium italic leading-relaxed">
            Technical documentation and frequently asked questions regarding the SLTC GPA Intelligence Engine.
          </p>
        </div>
      </div>

      {/* --- INTERACTIVE FAQ ENGINE --- */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className={`group rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                isOpen 
                  ? "bg-white dark:bg-white/[0.03] border-blue-500/40 shadow-2xl shadow-blue-500/10" 
                  : "bg-white dark:bg-white/[0.01] border-slate-100 dark:border-white/5 hover:border-blue-500/30"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
              >
                <div className="flex items-center gap-6">
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${
                    isOpen 
                      ? "bg-blue-600 text-white rotate-3 shadow-lg" 
                      : "bg-slate-50 dark:bg-white/5 text-slate-400 group-hover:text-blue-600"
                  }`}>
                    {faq.icon}
                  </div>
                  <span className={`text-xl font-black uppercase tracking-tighter italic transition-colors ${
                    isOpen ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                </div>
                
                <div className={`p-2 rounded-full border transition-all duration-500 ${
                  isOpen ? "bg-blue-600 border-blue-600 text-white rotate-180" : "border-slate-200 dark:border-white/10 text-slate-400"
                }`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  {/* Cleaned pt-8 without the pt-0 conflict */}
                  <div className="p-10 pl-[6.5rem] text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-lg italic border-t border-slate-50 dark:border-white/5 mt-4 pt-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* --- DYNAMIC CONTACT BANNER --- */}
        <div className="mt-24 p-12 md:p-16 rounded-[4rem] bg-slate-900 dark:bg-blue-600 text-center text-white relative overflow-hidden group shadow-3xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-20" />
           <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">Still have <br /> <span className="text-blue-400 dark:text-slate-950">Questions?</span></h2>
              <p className="text-blue-100/60 max-w-lg mx-auto font-medium text-lg italic">
                Our support channels are open for technical queries and integration help.
              </p>
              <div className="pt-6">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl"
                >
                  Contact Architect
                  <ArrowRight size={18} />
                </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}