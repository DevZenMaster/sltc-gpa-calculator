import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold">
              S
            </div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              SLTC <span className="text-blue-400">GPA</span>
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/calculator" className="hover:text-blue-400 transition">Calculator</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}