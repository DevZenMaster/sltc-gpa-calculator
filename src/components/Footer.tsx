"use client";

import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";
import { Github, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#030303] text-slate-500 dark:text-slate-400 py-16 px-6 border-t border-slate-100 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* --- BRAND & MISSION --- */}
          <div className="space-y-6 max-w-sm">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Logo className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-slate-900 dark:text-white tracking-tighter uppercase italic leading-none text-lg">
                  SLTC <span className="text-blue-600">GPA</span>
                </span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-blue-600/80 mt-1">
                  Intelligence
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed font-medium">
              A high-precision academic forecasting engine built for the next generation of SLTC Research University students. Track, predict, and excel.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 w-fit px-3 py-1 rounded-full border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Status: Operational
            </div>
          </div>

          {/* --- QUICK LINKS GRID --- */}
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">Platform</h5>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-tighter">
                <li><Link href="/calculator" className="hover:text-blue-600 transition-colors">Intelligence Engine</Link></li>
                <li><Link href="/guide" className="hover:text-blue-600 transition-colors">GPA Guide</Link></li>
                <li><Link href="/faq" className="hover:text-blue-600 transition-colors">Knowledge Base</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">Developer</h5>
              <ul className="space-y-3 text-xs font-bold uppercase tracking-tighter">
                <li><Link href="https://github.com/DevZenMaster" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Github size={12}/> GitHub</Link></li>
                <li><Link href="https://www.ruwansanjeewa.com" target="_blank" className="flex items-center gap-2 hover:text-blue-600 transition-colors"><Globe size={12}/> Portfolio</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-16 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-60">
            <ShieldCheck size={14} className="text-blue-600" />
            <span>Unofficial Academic Strategist • Not affiliated with SLTC Official</span>
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-widest">
            Designed & Developed by <a href="https://www.ruwansanjeewa.com" target="_blank" className="text-blue-600 hover:underline">Ruwan Sanjeewa</a>
          </div>
        </div>
      </div>
    </footer>
  );
}