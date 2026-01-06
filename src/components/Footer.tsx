import Link from "next/link";
import Logo from "@/components/Logo"; // Import the Logo

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          {/* Logo Container */}
          <div className="p-2 bg-slate-800 rounded-xl border border-slate-700 shadow-sm">
            <Logo className="w-8 h-8" />
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg leading-tight">SLTC GPA Calculator</h4>
            <p className="text-xs text-slate-500 mt-1">Unofficial Academic Tool • Faculty of Computing & IT</p>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
           <Link href="/calculator" className="hover:text-white transition-colors">Calculator</Link>
           <Link href="https://github.com/DevZenMaster" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
        </div>

        {/* Developer Credit */}
        <div className="text-xs text-center md:text-right text-slate-500">
          Designed & Developed by <br />
          <a href="https://www.ruwansanjeewa.com" target="_blank" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">Ruwan Sanjeewa</a>
        </div>
      </div>
    </footer>
  );
}