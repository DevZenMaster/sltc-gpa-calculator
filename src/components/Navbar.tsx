"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import { Menu, X, Zap, Cpu } from "lucide-react"; 
import Logo from "@/components/Logo";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "GPA Guide", href: "/guide" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* --- BRAND SECTION --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
             <Logo className="w-10 h-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
             <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-slate-900 dark:text-white tracking-tighter uppercase italic leading-none text-xl">
              SLTC <span className="text-blue-600">GPA</span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-600/80 dark:text-blue-400 mt-1">
              Intelligence
            </span>
          </div>
        </Link>

        {/* --- DESKTOP NAV --- */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover/link:w-full" />
              </Link>
            ))}
          </div>

          <div className="w-px h-6 bg-slate-200 dark:bg-white/10" />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
              href="/calculator" 
              className="px-6 py-2.5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all active:scale-95 flex items-center gap-2"
            >
              <Cpu size={14} className="animate-pulse" />
              Launch Intelligence
            </Link>
          </div>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="p-2 text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/calculator" 
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-blue-600 text-white text-center text-xs font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-3"
          >
            <Zap size={16} />
            Access Intelligence Engine
          </Link>
        </div>
      </div>
    </nav>
  );
}