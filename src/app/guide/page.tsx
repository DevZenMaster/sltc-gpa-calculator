import Link from "next/link";
import { Calculator, ArrowRight, BookOpen, Star, Trophy } from "lucide-react";

export default function GuidePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900 pb-20">
      
      {/* --- PAGE HEADER --- */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            <BookOpen className="w-3 h-3" />
            Academic Regulation
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            How GPA is Calculated
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Everything you need to know about Grade Points, Credits, and Degree Classifications at SLTC.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* --- SECTION 1: THE FORMULA --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Calculator className="text-blue-600" />
            The Formula
          </h2>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-600 mb-6 leading-relaxed">
              Your Grade Point Average (GPA) is a weighted average. This means modules with higher credits (like 3 or 4 credits) have a bigger impact on your final result than smaller modules.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-center">
              <div className="font-serif text-xl md:text-2xl font-bold text-slate-800 mb-2">
                GPA = <span className="inline-block border-b-2 border-slate-400 px-2 mx-1">Total Grade Points</span>
              </div>
              <div className="font-serif text-xl md:text-2xl font-bold text-slate-800">
                Total Credits
              </div>
            </div>

            <div className="mt-6 text-sm text-slate-500 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <strong>Example:</strong> If you get an &apos;A&apos; (4.00) in a 3-credit module, you earn <strong>12.00 Grade Points</strong> (4.00 × 3). You simply sum up all points and divide by total credits.
            </div>
          </div>
        </section>

        {/* --- SECTION 2: GRADING SCALE --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Star className="text-amber-500" />
            Grading Scale
          </h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500 tracking-wider">
                  <th className="p-4">Grade</th>
                  <th className="p-4">Grade Point (GP)</th>
                  <th className="p-4 hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {[
                  { g: "A+", p: "4.00", d: "Superior" },
                  { g: "A",  p: "4.00", d: "Excellent" },
                  { g: "A-", p: "3.70", d: "Excellent" },
                  { g: "B+", p: "3.30", d: "Very Good" },
                  { g: "B",  p: "3.00", d: "Good" },
                  { g: "B-", p: "2.70", d: "Good" },
                  { g: "C+", p: "2.30", d: "Credit Pass" },
                  { g: "C",  p: "2.00", d: "Pass" },
                  { g: "C-", p: "1.70", d: "Weak Pass" },
                  { g: "D+", p: "1.30", d: "Conditional Pass" },
                  { g: "D",  p: "1.00", d: "Conditional Pass" },
                  { g: "E",  p: "0.00", d: "Fail" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{row.g}</td>
                    <td className="p-4 font-mono">{row.p}</td>
                    <td className="p-4 text-slate-500 hidden md:table-cell">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- SECTION 3: DEGREE CLASSES --- */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Trophy className="text-blue-600" />
            Degree Classifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* First Class */}
            <div className="p-6 bg-white rounded-2xl border-2 border-slate-100 hover:border-amber-200 transition-all shadow-sm group">
              <div className="flex justify-between items-start mb-4">
                 <h3 className="font-bold text-lg text-slate-900">First Class</h3>
                 <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">GPA 3.70+</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                The highest academic distinction. Requires consistent excellence across all semesters.
              </p>
              <div className="text-xs font-mono text-slate-400">Target: Mostly A and A- grades.</div>
            </div>

            {/* Second Upper */}
            <div className="p-6 bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-200 transition-all shadow-sm group">
              <div className="flex justify-between items-start mb-4">
                 <h3 className="font-bold text-lg text-slate-900">Second Class (Upper)</h3>
                 <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">GPA 3.30+</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                A highly respected classification, often required for top-tier postgraduate programs.
              </p>
              <div className="text-xs font-mono text-slate-400">Target: Mix of B+ and A- grades.</div>
            </div>

            {/* Second Lower */}
            <div className="p-6 bg-white rounded-2xl border-2 border-slate-100 hover:border-slate-300 transition-all shadow-sm group">
              <div className="flex justify-between items-start mb-4">
                 <h3 className="font-bold text-lg text-slate-900">Second Class (Lower)</h3>
                 <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2 py-1 rounded">GPA 3.00+</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                Demonstrates solid understanding and competence in the field of study.
              </p>
              <div className="text-xs font-mono text-slate-400">Target: Consistent B average.</div>
            </div>

            {/* General Pass */}
            <div className="p-6 bg-white rounded-2xl border-2 border-slate-100 transition-all shadow-sm opacity-70">
              <div className="flex justify-between items-start mb-4">
                 <h3 className="font-bold text-lg text-slate-900">General Pass</h3>
                 <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded">GPA 2.00+</span>
              </div>
              <p className="text-slate-500 text-sm mb-4">
                You have successfully completed the degree requirements.
              </p>
              <div className="text-xs font-mono text-slate-400">Target: Minimum C average.</div>
            </div>

          </div>
        </section>

        {/* --- CALL TO ACTION --- */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Check Your Standing Now</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
              Don&apos;t guess where you stand. Use our calculator to see exactly how far you are from your next class target.
            </p>
            <Link href="/calculator" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Go to Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}