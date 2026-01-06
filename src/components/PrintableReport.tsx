import React from "react";
import { Module } from "@/types/module";
import { getDegreeClass } from "@/utils/gpa";
import { Trophy, Medal, Star, AlertTriangle, CheckCircle2, Flame, Target, Zap, ShieldCheck, TrendingUp } from "lucide-react";

interface Props {
  degreeName: string;
  semesterData: { [key: string]: Module[] };
  finalGPA: string;
  studentName: string;
  studentId: string;
  batch: string;
  targets: {
    first: string | null;
    secondUpper: string | null;
    secondLower: string | null;
  };
}

export default function PrintableReport({ 
  degreeName, 
  semesterData, 
  finalGPA,
  studentName,
  studentId,
  batch,
  targets
}: Props) {
  const date = new Date().toLocaleDateString();

  // --- NEXT-LEVEL DYNAMIC FEEDBACK LOGIC ---
  const getFeedback = (reqGPA: string | null) => {
    // 1. CASE: IMPOSSIBLE
    if (reqGPA === "Impossible") {
      return {
        style: "bg-slate-50 border-slate-200 text-slate-500",
        icon: <AlertTriangle className="w-5 h-5 text-slate-400" />,
        status: "Statistically Out of Reach",
        msg: "Current projections indicate this tier is mathematically unattainable. Immediate Strategy: Lock in the next highest classification with absolute certainty."
      };
    }

    // 2. CASE: SECURED
    if (reqGPA === "Secured") {
      return {
        style: "bg-emerald-50 border-emerald-200 text-emerald-800 shadow-emerald-100",
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
        status: "Distinction Secured",
        msg: "You have statistically cemented this classification. Your New Goal: Build a transcript of excellence that impresses employers beyond just the final number."
      };
    }
    
    // 3. NUMERIC ANALYSIS
    const val = parseFloat(reqGPA || "0");
    
    // Tier 1: Near Impossible (> 3.90)
    if (val >= 3.90) return {
      style: "bg-red-50 border-red-200 text-red-900",
      icon: <Flame className="w-5 h-5 text-red-600" />,
      status: "Visionary Effort",
      msg: "Requires a flawless run of 'A+' grades. This is 'top 1%' territory. Every single assignment point is now mission-critical. Zero margin for error."
    };

    // Tier 2: Extremely Hard (3.75 - 3.89)
    if (val >= 3.75) return {
      style: "bg-orange-50 border-orange-200 text-orange-900",
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      status: "Relentless Precision",
      msg: "Demands a pure 'A' average. There is no room for 'B' grades. You must master every module, prioritizing high-credit courses above all else."
    };

    // Tier 3: Hard (3.50 - 3.74)
    if (val >= 3.50) return {
      style: "bg-amber-50 border-amber-200 text-amber-900",
      icon: <Target className="w-5 h-5 text-amber-600" />,
      status: "High-Performance Zone",
      msg: "You need a consistent 'A-' standard. Strategic sacrifice of leisure time may be required during exam seasons. Rigorous discipline is non-negotiable."
    };

    // Tier 4: Moderate (3.25 - 3.49)
    if (val >= 3.25) return {
      style: "bg-blue-50 border-blue-200 text-blue-900",
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      status: "Disciplined Focus",
      msg: "A mix of 'B+' and 'A-' is your baseline. One slip into 'C' territory could jeopardize this target. Stay vigilant and track every quiz result."
    };

    // Tier 5: Easy (< 3.25)
    return {
      style: "bg-indigo-50 border-indigo-200 text-indigo-900",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      status: "Strategic Advantage",
      msg: "You hold a commanding lead. Maintain a consistent 'B+' standard to cruise to the finish line. Avoid complacency; finish with professional pride."
    };
  };

  const renderMilestone = (title: string, reqGPA: string | null, BadgeIcon: React.ElementType) => {
    const info = getFeedback(reqGPA);
    const isScore = !["Impossible", "Secured"].includes(reqGPA || "");

    return (
      <div className={`p-5 rounded-xl border ${info.style} relative overflow-hidden flex flex-col justify-between shadow-sm`}>
        {/* Background Icon Watermark */}
        <div className="absolute -right-4 -bottom-4 opacity-[0.08] scale-[2.5]">
          <BadgeIcon size={60} />
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2">
               <div className="p-1.5 bg-white/60 rounded-lg backdrop-blur-sm shadow-sm">{info.icon}</div>
               <h4 className="font-bold text-xs uppercase tracking-widest">{title}</h4>
            </div>
          </div>

          <div className="mb-3 pl-1">
             {isScore ? (
               <div>
                 <div className="text-[10px] font-bold uppercase opacity-60 mb-0.5">Required Avg.</div>
                 <div className="text-3xl font-black tracking-tighter leading-none">{reqGPA}</div>
               </div>
             ) : (
               <div>
                 <div className="text-[10px] font-bold uppercase opacity-60 mb-0.5">Status</div>
                 <div className="text-xl font-black tracking-tight leading-none uppercase">{reqGPA === "Secured" ? "Locked 🔒" : "Missed"}</div>
               </div>
             )}
          </div>
          
          <div className="mt-2 pt-2 border-t border-black/10">
            <div className="flex items-center gap-2 mb-1">
               <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
               <span className="text-[9px] font-bold uppercase opacity-80">{info.status}</span>
            </div>
            <p className="text-[10px] font-medium leading-relaxed opacity-90 italic">
              &quot;{info.msg}&quot;
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="hidden print:block absolute top-0 left-0 w-full bg-white text-slate-900 p-8 z-50">
      
      {/* OUTER FRAME - Dynamic Height */}
      <div className="w-full h-auto border-4 border-double border-slate-300 p-8 relative">
        
        {/* WATERMARK */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
           <h1 className="text-[200px] font-black tracking-tighter text-slate-900 -rotate-45">SLTC</h1>
        </div>

        <div className="relative z-10 flex flex-col">
          
          {/* --- HEADER --- */}
          <div className="flex justify-between items-end border-b-2 border-slate-900 pb-6 mb-8">
            <div>
              <h1 className="text-3xl font-serif font-black text-slate-900 tracking-wide uppercase">
                SLTC Research University
              </h1>
              <p className="text-xs text-slate-500 uppercase tracking-[0.3em] mt-2 font-bold ml-1">
                Faculty of Computing & IT <span className="text-slate-300">|</span> BAIT
              </p>
            </div>
            <div className="text-right">
              <div className="bg-slate-900 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest inline-block mb-2 rounded-sm">
                Generated Report
              </div>
              <p className="text-xs font-mono text-slate-500">{date}</p>
            </div>
          </div>

          {/* --- STUDENT DETAILS --- */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-10 shadow-sm">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Student Name</p>
                  <p className="font-serif font-bold text-xl text-slate-900">{studentName || "_______________________"}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Student ID</p>
                  <p className="font-mono text-lg text-slate-700">{studentId || "_______________________"}</p>
                </div>
              </div>
              <div className="space-y-4 text-right">
                 <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Degree Program</p>
                  <p className="font-bold text-lg text-slate-900 leading-tight">{degreeName}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-1">Batch</p>
                  <p className="font-mono text-lg text-slate-700">{batch || "_______________________"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- MODULE TABLES --- */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => {
              const modules = semesterData[sem.toString()] || [];
              const hasData = modules.some(m => m.grade !== "");
              if (!hasData) return null;

              return (
                <div key={sem} className="break-inside-avoid">
                  <div className="flex items-center justify-between mb-4 border-b-2 border-slate-100 pb-2">
                    <h3 className="font-bold text-lg text-slate-900">Semester {sem}</h3>
                    <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200">RECORDED</span>
                  </div>
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-50">
                        <th className="pb-2 text-left font-semibold uppercase tracking-wider">Module</th>
                        <th className="pb-2 text-center font-semibold uppercase tracking-wider w-10">Cr</th>
                        <th className="pb-2 text-right font-semibold uppercase tracking-wider w-10">Grd</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 font-medium">
                      {modules.map((m) => (
                        m.grade !== "" && (
                          <tr key={m.id} className="border-b border-dashed border-slate-100 last:border-0">
                            <td className="py-2 pr-2">{m.name}</td>
                            <td className="py-2 text-center text-slate-400 font-mono">{m.credits}</td>
                            <td className="py-2 text-right font-bold text-slate-900 font-mono">{m.grade}</td>
                          </tr>
                        )
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>

          {/* --- BOTTOM SECTION (Grouped) --- */}
          <div className="break-inside-avoid">
            
            {/* STRATEGIC ROADMAP */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                 <div className="h-px flex-grow bg-slate-200"></div>
                 <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Target className="w-4 h-4" /> Strategic Roadmap
                 </h3>
                 <div className="h-px flex-grow bg-slate-200"></div>
              </div>

              <div className="grid grid-cols-3 gap-5">
                {renderMilestone("First Class", targets.first, Trophy)}
                {renderMilestone("Second Upper", targets.secondUpper, Medal)}
                {renderMilestone("Second Lower", targets.secondLower, Star)}
              </div>
            </div>

            {/* CURRENT STATUS BAR */}
            <div className="bg-slate-900 text-white p-6 rounded-xl flex justify-between items-center shadow-lg print:shadow-none mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 z-0"></div>
              <div className="relative z-10">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">Current Status</p>
                <p className="text-xl font-serif font-bold">{getDegreeClass(finalGPA)}</p>
              </div>
              <div className="text-right relative z-10">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em] mb-1">Cumulative GPA</p>
                <p className="text-4xl font-black tracking-tighter">{finalGPA}</p>
              </div>
            </div>

            {/* FOOTER & DEVELOPER LINK */}
            <div className="text-center pt-4">
              <p className="font-serif italic text-slate-500 text-xs mb-4">
                &quot;Success is not final, failure is not fatal: it is the courage to continue that counts.&quot;
              </p>
              
              <div className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Powered By</span>
                <span className="text-xs font-bold text-slate-900">SLTC GPA Calculator</span>
                <span className="text-slate-300">|</span>
                <a href="https://www.ruwansanjeewa.com" target="_blank" className="text-xs font-bold text-blue-600 hover:text-blue-800 no-underline transition-colors">
                  Ruwan Sanjeewa
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}