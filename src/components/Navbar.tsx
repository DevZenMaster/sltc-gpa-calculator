import Link from "next/link";
import Logo from "@/components/Logo"; // Import the new Logo

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Replaced old "S" div with new Logo Component */}
          <Logo className="w-8 h-8 group-hover:scale-105 transition-transform" />
          
          <span className="font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
            SLTC GPA
          </span>
        </Link>

        {/* Links Section */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/DevZenMaster" 
            target="_blank"
            className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="/calculator" 
            className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
          >
            Open Calculator
          </Link>
        </div>
      </div>
    </nav>
  );
}