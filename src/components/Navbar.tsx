import Link from "next/link";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section (Links to Home) */}
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <span className="font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
            SLTC GPA
          </span>
        </Link>

        {/* Links Section */}
        <div className="flex items-center gap-1 md:gap-6">
          
          {/* 1. HOME */}
          <Link 
            href="/" 
            className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          {/* 2. GPA GUIDE */}
          <Link 
            href="/guide" 
            className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            GPA Guide
          </Link>

          {/* 3. CONTACT (New) */}
          <Link 
            href="/contact" 
            className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
          
          {/* 4. FAQs (Optional, good for UX) */}
          <Link 
            href="/faq" 
            className="hidden md:block text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            FAQs
          </Link>
          
          {/* CTA Button */}
          <Link 
            href="/calculator" 
            className="ml-2 md:ml-0 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
          >
            Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
}