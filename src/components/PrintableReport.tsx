"use client";

import React from "react";
import { Module } from "@/types/module";
import { getDegreeClass } from "@/utils/gpa";
import { 
  Trophy, Medal, Star, AlertTriangle, CheckCircle2, 
  Flame, Target, Zap, ShieldCheck, TrendingUp 
} from "lucide-react";

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
  const date = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const getFeedback = (reqGPA: string | null) => {
    if (reqGPA === "Impossible") {
      return {
        style: "bg-slate-50 border-slate-200 text-slate-500",
        icon: <AlertTriangle className="w-5 h-5 text-slate-400" />,
        status: "Mathematically Out of Reach",
        msg: "Current projections indicate this tier is unattainable. Focus on securing the next highest classification with absolute certainty."
      };
    }

    if (reqGPA === "Secured") {
      return {
        style: "bg-emerald-50 border-emerald-200 text-emerald-800",
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
        status: "Classification Secured",
        msg: "You have cemented this status. Continue maintaining this standard to graduate with professional distinction."
      };
    }
    
    const val = parseFloat(reqGPA || "0");
    
    if (val >= 3.80) return {
      style: "bg-red-50 border-red-200 text-red-900",
      icon: <Flame className="w-5 h-5 text-red-600" />,
      status: "Visionary Effort Required",
      msg: "Requires a near-flawless 'A+' average. Mission-critical focus is needed for every credit point. Zero margin for error."
    };

    if (val >= 3.65) return {
      style: "bg-orange-50 border-orange-200 text-orange-900",
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      status: "High Precision Mode",
      msg: "Demands a consistent 'A' average. Prioritize high-credit modules and eliminate any potential for 'C' grades."
    };

    return {
      style: "bg-blue-50 border-blue-200 text-blue-900",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      status: "Strategic Lead",
      msg: "You hold a commanding position. Maintain a disciplined 'B+' to 'A-' average to finish with professional pride."
    };
  };

  const renderMilestone = (title: string, reqGPA: string | null, BadgeIcon: React.ElementType) => {
    const info = getFeedback(reqGPA);
    const isScore = !["Impossible", "Secured"].includes(reqGPA || "");

    return (
      <div className={`p-5 rounded-xl border ${info.style} relative overflow-hidden flex flex-col justify-between shadow-sm`}>
        <div className="absolute -right-4 -bottom-4 opacity-[0.05] scale-[2.5]">
          <BadgeIcon size={60} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
             <div className="p-1 bg-white/80 rounded shadow-sm">{info.icon}</div>
             <h4 className="font-bold text-[10px] uppercase tracking-widest">{title}</h4>
          </div>
          <div className="mb-3">
             {isScore ? (
               <div className="text-3xl font-black tracking-tighter">{reqGPA}</div>
             ) : (
               <div className="text-xl font-black uppercase tracking-tight">{reqGPA === "Secured" ? "Locked 🔒" : "Missed"}</div>
             )}
             <div className="text-[8px] font-bold uppercase opacity-60 tracking-widest">{isScore ? "Req. Avg GPA" : "Current Status"}</div>
          </div>
          <div className="mt-2 pt-2 border-t border-black/5">
            <p className="text-[9px] font-bold uppercase mb-1 opacity-70">{info.status}</p>
            <p className="text-[10px] leading-tight italic opacity-80">&quot;{info.msg}&quot;</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="hidden print:block bg-white text-slate-900 p-0 font-sans leading-tight">
      <div className="w-full h-auto border-[12px] border-slate-100 p-10 relative min-h-screen flex flex-col">
        
        {/* BACKGROUND WATERMARK */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] rotate-[-35deg] pointer-events-none">
           <h1 className="text-[250px] font-black tracking-tighter">SLTC</h1>
        </div>

        {/* --- HEADER --- */}
        <div className="flex justify-between items-end border-b-4 border-slate-900 pb-8 mb-10 relative z-10">
          <div>
            <h1 className="text-4xl font-serif font-black tracking-tight text-slate-900 uppercase leading-none">
              SLTC Research University
            </h1>
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mt-3">
              Academic Affairs Division <span className="mx-2 text-slate-300">|</span> BAIT Intelligence Hub
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black bg-slate-900 text-white px-3 py-1 uppercase tracking-widest inline-block mb-2">
              Internal GPA Statement
            </p>
            <p className="text-xs font-mono font-bold text-slate-500">{date}</p>
          </div>
        </div>

        {/* --- STUDENT IDENTITY --- */}
        <div className="grid grid-cols-3 gap-6 mb-12 relative z-10 bg-slate-50 p-8 rounded-3xl border border-slate-200">
          <div className="space-y-1">
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">Student Full Name</p>
            <p className="text-xl font-serif font-black uppercase">{studentName || "N/A"}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">Primary Degree Path</p>
            <p className="text-lg font-bold leading-tight">{degreeName}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">Identification / Batch</p>
            <p className="text-lg font-mono font-bold">{studentId || "N/A"} <span className="text-slate-300 mx-1">/</span> {batch || "N/A"}</p>
          </div>
        </div>

        {/* --- ACADEMIC TRANSCRIPT --- */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-10 mb-12 relative z-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => {
            const modules = semesterData[sem.toString()] || [];
            if (!modules.some(m => m.grade !== "")) return null;

            return (
              <div key={sem} className="break-inside-avoid">
                <div className="flex justify-between items-end border-b-2 border-slate-900 pb-1 mb-3">
                  <h3 className="font-black text-sm uppercase tracking-widest italic">Semester {sem}</h3>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Validated Entry</span>
                </div>
                <table className="w-full text-[11px]">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-100">
                      <th className="pb-1 text-left uppercase tracking-tighter">Module Description</th>
                      <th className="pb-1 text-center w-8 italic">Cr</th>
                      <th className="pb-1 text-right w-10 uppercase">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="font-bold">
                    {modules.map((m) => m.grade !== "" && (
                      <tr key={m.id} className="border-b border-dashed border-slate-100">
                        <td className="py-1.5 pr-4 uppercase truncate max-w-[180px]">{m.name}</td>
                        <td className="py-1.5 text-center text-slate-400 font-mono">{m.credits}</td>
                        <td className="py-1.5 text-right font-black text-slate-900">{m.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>

        {/* --- STRATEGIC SUMMARY --- */}
        <div className="mt-auto break-inside-avoid relative z-10 pt-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-grow bg-slate-200" />
            <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Strategic Forecast</h3>
            <div className="h-px flex-grow bg-slate-200" />
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            {renderMilestone("First Class", targets.first, Trophy)}
            {renderMilestone("Second Upper", targets.secondUpper, Medal)}
            {renderMilestone("Second Lower", targets.secondLower, Star)}
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl flex justify-between items-center shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1">Degree Classification</p>
                <p className="text-3xl font-serif font-black italic">{getDegreeClass(finalGPA)}</p>
             </div>
             <div className="text-right relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1">Cumulative GPA</p>
                <p className="text-6xl font-black tracking-tighter leading-none italic">{finalGPA}</p>
             </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex justify-center gap-16 mb-8">
               <div className="w-48 border-t border-slate-400 pt-2 text-[8px] font-black uppercase tracking-widest text-slate-400">Registrar / Academic Head</div>
               <div className="w-48 border-t border-slate-400 pt-2 text-[8px] font-black uppercase tracking-widest text-slate-400">Candidate Signature</div>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
               Automated GPA Intelligence Statement • SLTC Research University • Generated via GPA Pro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}