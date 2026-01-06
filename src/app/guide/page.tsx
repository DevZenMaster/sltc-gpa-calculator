"use client";

import React from "react";
import Link from "next/link";
import { 
  Calculator, ArrowRight, BookOpen, Star, Trophy, 
  Target, Info, ChevronRight, Zap, GraduationCap 
} from "lucide-react";

export default function GuidePage() {
  return (
    <div className="bg-white dark:bg-[#030303] min-h-screen text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 pb-24 transition-colors duration-500">
      
      {/* --- HERO HEADER: ACADEMIC PROTOCOLS --- */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-slate-100 dark:border-white/5">
        {/* Background Ambient Spectrum */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 italic">
            <GraduationCap className="w-3 h-3 text-blue-600" />
            Official SLTC Grading Protocol
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 uppercase italic leading-none">
            GPA <span className="text-blue-600">Mechanics.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium italic leading-relaxed">
            Technical documentation for Grade Point Average calculations, weighted credit analysis, and honor classifications.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">

        {/* --- SECTION 1: THE INTELLIGENCE FORMULA --- */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-500/20">
               <Calculator size={24} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none">The Logic Engine</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                The GPA is a <span className="text-slate-900 dark:text-white font-black italic uppercase">Weighted Index</span>. Unlike a simple average, modules with higher credit values exert a proportionately greater influence on your terminal classification.
              </p>
              
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600"><Info size={16}/></div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Calculations are performed by multiplying the Grade Point (GP) of each module by its Credit value, summing the results, and dividing by the total credits attempted.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group p-1 w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-10 rounded-[2.5rem] text-center shadow-2xl">
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Algorithm Visualization</div>
                 {/* Fixed Formula string for Next.js 16/Turbopack */}
                 <div className="font-serif text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2 italic leading-none">
                    {"GPA = \\frac{\\sum (GP_i \\times C_i)}{\\sum C_i}"}
                 </div>
                 <div className="text-[10px] font-bold text-slate-400 mt-6 italic uppercase tracking-widest">Where GP = Grade Point | C = Credits</div>
              </div>
            </div>
          </div>
        </section>

        

        {/* --- SECTION 2: GRADING SCALE MATRIX --- */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-amber-500 text-white rounded-2xl shadow-xl shadow-amber-500/20">
               <Star size={24} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Grading Scale Matrix</h2>
          </div>

          <div className="rounded-[3rem] border border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.01] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-white/5 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                    <th className="p-8">Tier</th>
                    <th className="p-8">Alpha Grade</th>
                    <th className="p-8">Intelligence Point (GP)</th>
                    <th className="p-8 hidden md:table-cell text-right">Standard Definition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-sm font-black uppercase tracking-widest">
                  {[
                    { g: "A+", p: "4.00", d: "Superior Performance", color: "text-blue-600" },
                    { g: "A",  p: "4.00", d: "Excellent Proficiency", color: "text-blue-600" },
                    { g: "A-", p: "3.70", d: "Excellent Proficiency", color: "text-indigo-600" },
                    { g: "B+", p: "3.30", d: "Very Good Understanding", color: "text-emerald-600" },
                    { g: "B",  p: "3.00", d: "Good Competence", color: "text-emerald-600" },
                    { g: "C+", p: "2.30", d: "Credit Pass Standard", color: "text-amber-600" },
                    { g: "C",  p: "2.00", d: "Satisfactory Pass", color: "text-slate-400" },
                    { g: "E",  p: "0.00", d: "Failure / No Credit", color: "text-red-600" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors group">
                      <td className="p-8 text-slate-400">0{i + 1}</td>
                      <td className={`p-8 text-2xl font-black italic ${row.color}`}>{row.g}</td>
                      <td className="p-8 font-mono text-lg">{row.p}</td>
                      <td className="p-8 text-slate-500 dark:text-slate-400 font-medium italic hidden md:table-cell text-right lowercase">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: HONOR CLASSIFICATIONS --- */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-500/20">
               <Trophy size={24} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic leading-none">Honor Classifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "First Class", gpa: "3.70+", icon: <Zap size={20}/>, theme: "bg-blue-600", desc: "The highest academic distinction. Requires a near-flawless trajectory across all semesters." },
              { title: "Second Upper", gpa: "3.30+", icon: <Target size={20}/>, theme: "bg-indigo-600", desc: "A prestigious tier demonstrating consistent technical and theoretical excellence." },
              { title: "Second Lower", gpa: "3.00+", icon: <ChevronRight size={20}/>, theme: "bg-slate-800", desc: "A solid academic standing reflecting competence and steady performance." },
              { title: "General Pass", gpa: "2.00+", icon: <Info size={20}/>, theme: "bg-slate-400", desc: "Attained by successfully completing the minimum required curriculum standards." }
            ].map((tier) => (
              <div key={tier.title} className="p-10 rounded-[3rem] bg-white dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 shadow-xl group hover:-translate-y-2 transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                   <div className={`p-4 rounded-2xl text-white shadow-xl ${tier.theme} group-hover:scale-110 transition-transform`}>
                      {tier.icon}
                   </div>
                   <div className="text-right">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Threshold</div>
                      <div className="text-2xl font-black italic tracking-tighter text-blue-600">{tier.gpa}</div>
                   </div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-4">{tier.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed lowercase italic">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        

        {/* --- FINAL ACTION --- */}
        <div className="p-16 rounded-[4rem] bg-slate-900 dark:bg-blue-600 text-center text-white relative overflow-hidden group shadow-3xl">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-20" />
           <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Initialize <br /> <span className="text-blue-400 dark:text-slate-950">Calculations.</span></h2>
              <p className="text-blue-100/60 max-w-xl mx-auto font-medium text-lg italic">
                Ready to forecast your classification? Access the Intelligence Engine now.
              </p>
              <div className="pt-6">
                <Link 
                  href="/calculator" 
                  className="inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl"
                >
                  Launch Dashboard
                  <ArrowRight size={18} />
                </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}