"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import Menu icons
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
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <span className="font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 transition-colors">
            SLTC GPA
          </span>
        </Link>

        {/* Desktop Links & Actions */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
          
          <ThemeToggle />

          <Link 
            href="/calculator" 
            className="px-4 py-2 bg-slate-900 dark:bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg"
          >
            Calculator
          </Link>
        </div>

        {/* Mobile Toggle & Theme Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/calculator" 
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-slate-900 dark:bg-blue-600 text-white text-center font-bold rounded-xl shadow-lg active:scale-95 transition-all"
          >
            Open Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
}