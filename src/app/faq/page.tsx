"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, MessageCircle, ShieldCheck, Database, Bug, ArrowRight, Sparkles } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this calculator officially from SLTC?",
      answer: "No. This is an unofficial tool built by students, for students. While we strictly follow the SLTC grading schema and handbook regulations, it is not endorsed by the university administration. Always verify your official results with the registry.",
      icon: <HelpCircle className="w-5 h-5 text-blue-500" />
    },
    {
      question: "Does this save my data? Is it private?",
      answer: "Yes, it is 100% private. We do not have a database. Your grades are processed locally in your web browser. If you refresh the page, your data is gone (unless we add a local save feature in the future). We never see your grades.",
      icon: <ShieldCheck className="w-5 h-5 text-green-500" />
    },
    {
      question: "The module I need is missing. What do I do?",
      answer: "You can add it manually! On the calculator dashboard, click the '+ Add Custom Module' button. You can enter the name and credit value yourself. If you want it added permanently for everyone, please open an issue on GitHub.",
      icon: <Database className="w-5 h-5 text-purple-500" />
    },
    {
      question: "I found a calculation error. How do I report it?",
      answer: "Please let us know immediately! You can click the 'Report a Bug' button in the footer or open an issue on our GitHub repository. We aim to fix calculation logic errors within 24 hours.",
      icon: <Bug className="w-5 h-5 text-red-500" />
    },
    {
      question: "How is the 'Target GPA' calculated?",
      answer: "We take your current total grade points and credits, then mathematically determine what average GPA you need to maintain across your remaining semesters to reach the cumulative GPA threshold for a Class (e.g., 3.70 for First Class).",
      icon: <MessageCircle className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 pb-20 transition-colors duration-300">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-32 pb-16 px-6 relative overflow-hidden transition-colors">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-[80px] opacity-40 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            Support Center
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the calculator, privacy, and grading logic. 
            Can&apos;t find the answer? Reach out to us directly.
          </p>
        </div>
      </div>

      {/* --- INTERACTIVE FAQ LIST --- */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div 
              key={index} 
              className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? "bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/20" 
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    isOpen ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                  }`}>
                    {faq.icon}
                  </div>
                  <span className={`text-lg font-bold transition-colors ${
                    isOpen ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>
                </div>
                
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-500" : "group-hover:text-slate-600 dark:group-hover:text-slate-400"
                  }`} 
                />
              </button>

              <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 pl-[5.5rem] pr-8 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* --- CONTACT BOX --- */}
        <div className="mt-16 relative group overflow-hidden rounded-3xl border dark:border-slate-800">
           <div className="absolute inset-0 bg-slate-900 dark:bg-slate-900/50 z-0"></div>
           {/* Animated Gradient Glow */}
           <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-[200%] transition-transform duration-1000 rotate-45 z-10"></div>
           
           <div className="relative z-20 p-10 md:p-14 text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-slate-400 dark:text-slate-300 mb-8 max-w-lg mx-auto text-lg">
                If you couldn&apos;t find your answer above, feel free to reach out directly via GitHub.
              </p>
              <Link 
                href="https://github.com/DevZenMaster" 
                target="_blank" 
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
              >
                Contact Developer
                <ArrowRight className="w-5 h-5" />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}