import Link from "next/link";
import Logo from "@/components/Logo";
import { ThemeToggle } from "./ThemeToggle"; // Import Toggle

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section (Links to Home) */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <span className="font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 transition-colors">
            SLTC GPA
          </span>
        </Link>

        {/* Links Section */}
        <div className="flex items-center gap-1 md:gap-6">
          
          {/* 1. HOME */}
          <Link 
            href="/" 
            className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>

          {/* 2. GPA GUIDE */}
          <Link 
            href="/guide" 
            className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GPA Guide
          </Link>

          {/* 3. CONTACT */}
          <Link 
            href="/contact" 
            className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
          
          {/* 4. FAQs */}
          <Link 
            href="/faq" 
            className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            FAQs
          </Link>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
          
          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* CTA Button */}
          <Link 
            href="/calculator" 
            className="ml-2 md:ml-0 px-4 py-2 bg-slate-900 dark:bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg shadow-slate-900/20"
          >
            Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
}