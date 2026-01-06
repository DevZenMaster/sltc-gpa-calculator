"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import ModuleRow from "@/components/ModuleRow";
import PrintableReport from "@/components/PrintableReport"; 
import { Module } from "@/types/module";
import { calculateGPA, getDegreeClass, getTotalCreditsAndPoints, calculateRequiredGPA } from "@/utils/gpa";

// Faculty Data Imports
import { COMPUTING_DEGREES } from "@/data/ComputingFaculty/degree";
import { ENGINEERING_DEGREES } from "@/data/EngineeringFaculty/degree";
import { BUSINESS_DEGREES } from "@/data/BusinessFaculty/degree";
import { TECHNOLOGY_DEGREES } from "@/data/TechnologyFaculty/degree";
import { SCIENCE_DEGREES } from "@/data/ScienceFaculty/degree";
import { MUSIC_DEGREES } from "@/data/MusicFaculty/degree";

import { 
  Printer, TrendingUp, Award, User, 
  ArrowLeft, BarChart, BookOpen, Layers, Plus, Sparkles, Zap
} from "lucide-react";

const FACULTIES = [
  { id: "computing", name: "Faculty of Computing & IT", degrees: COMPUTING_DEGREES },
  { id: "engineering", name: "Faculty of Engineering", degrees: ENGINEERING_DEGREES },
  { id: "business", name: "Faculty of Business Management", degrees: BUSINESS_DEGREES },
  { id: "technology", name: "Faculty of Technology", degrees: TECHNOLOGY_DEGREES },
  { id: "science", name: "Faculty of Science", degrees: SCIENCE_DEGREES },
  { id: "music", name: "School of Music", degrees: MUSIC_DEGREES },
];

type DegreeState = { [key: string]: Module[] };

export default function CalculatorPage() {
  const [selectedFacultyId, setSelectedFacultyId] = useState("");
  const [selectedDegreeId, setSelectedDegreeId] = useState("");
  const [semesterData, setSemesterData] = useState<DegreeState>({});
  const [activeSemester, setActiveSemester] = useState("1");
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [batch, setBatch] = useState("");

  const availableDegrees = useMemo(() => {
    return FACULTIES.find(f => f.id === selectedFacultyId)?.degrees || [];
  }, [selectedFacultyId]);

  const handleFacultyChange = (id: string) => {
    setSelectedFacultyId(id);
    setSelectedDegreeId("");
    setSemesterData({});
  };

  const handleDegreeChange = (degreeId: string) => {
    const faculty = FACULTIES.find(f => f.id === selectedFacultyId);
    const degree = faculty?.degrees.find(d => d.id === degreeId);
    if (!degree) return;

    setSelectedDegreeId(degreeId);
    const newState: DegreeState = {};

    ["1", "2", "3", "4", "5", "6", "7", "8"].forEach((semId) => {
      if (degree.semesters?.[semId]) {
        newState[semId] = degree.semesters[semId].map((m: any, i: number) => ({
          id: `${degreeId}-${semId}-${i}`,
          name: m.name,
          credits: m.credits,
          grade: "",
          type: m.type || "Core"
        }));
      } else {
        newState[semId] = [];
      }
    });
    setSemesterData(newState);
    setActiveSemester("1");
  };

  const allModules = Object.values(semesterData).flat();
  const gpaFinal = calculateGPA(allModules);
  const activeSemGPA = calculateGPA(semesterData[activeSemester] || []);
  const { totalPoints, totalCredits } = getTotalCreditsAndPoints(allModules);
  const degreeClass = getDegreeClass(gpaFinal);

  const targetCredits = 120; // Default SLTC Honor target
  const completedModulesCount = allModules.filter(m => m.grade !== "").length;
  const totalPlannedModules = allModules.length;
  const degreeProgress = totalPlannedModules > 0 ? Math.round((completedModulesCount / totalPlannedModules) * 100) : 0;
  const creditProgress = Math.min(Math.round((totalCredits / targetCredits) * 100), 100);

  const requiredForFirst = calculateRequiredGPA(totalPoints, totalCredits, 3.70, targetCredits);
  const requiredForSecondUpper = calculateRequiredGPA(totalPoints, totalCredits, 3.30, targetCredits);

  const addModule = () => {
    const newId = Date.now().toString();
    setSemesterData({
      ...semesterData,
      [activeSemester]: [...(semesterData[activeSemester] || []), { id: newId, name: "", credits: 0, grade: "", type: "Core" }]
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030303] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pb-24 pt-32">
        
        {/* Hidden on UI, visible on Print */}
        <PrintableReport 
          degreeName={availableDegrees.find(d => d.id === selectedDegreeId)?.name || "Degree"}
          semesterData={semesterData} finalGPA={gpaFinal} studentName={studentName} studentId={studentId} batch={batch}
          targets={{ first: requiredForFirst, secondUpper: requiredForSecondUpper, secondLower: "N/A" }}
        />

        <div className="print:hidden space-y-10">
          
          {/* --- TOP NAV BAR --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-5">
              <Link href="/" className="group p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-blue-600 transition-all duration-300">
                <ArrowLeft size={20} className="group-hover:text-white transition-colors" />
              </Link>
              <div>
                <h1 className="text-4xl font-black tracking-tighter italic uppercase">Intelligence <span className="text-blue-600 font-black">Dashboard</span></h1>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-1">Batch of 2028 • SLTC Research University</p>
              </div>
            </div>
            <button 
              onClick={() => window.print()} 
              disabled={!selectedDegreeId} 
              className="group flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 disabled:opacity-30 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
            >
              <Printer size={18} /> Download Academic Statement
            </button>
          </div>

          {/* --- STEP 1: CONFIGURATION --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
            <div className="lg:col-span-1 space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2"><Layers size={14} className="text-blue-500"/> 01. Faculty Pathway</label>
              <select 
                value={selectedFacultyId} 
                onChange={(e) => handleFacultyChange(e.target.value)} 
                className="w-full p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 font-black text-xs uppercase tracking-widest outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
              >
                <option value="">Select Faculty...</option>
                {FACULTIES.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
              </select>
            </div>
            <div className="lg:col-span-2 space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2"><BookOpen size={14} className="text-blue-500"/> 02. Degree Specification</label>
              <select 
                disabled={!selectedFacultyId} 
                value={selectedDegreeId} 
                onChange={(e) => handleDegreeChange(e.target.value)} 
                className="w-full p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 font-black text-xs uppercase tracking-widest outline-none disabled:opacity-20 transition-all appearance-none"
              >
                <option value="">{selectedFacultyId ? "Select Honours Degree..." : "Awaiting Faculty Selection..."}</option>
                {availableDegrees.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
            </div>
          </div>

          {selectedDegreeId ? (
            <div className="space-y-10 animate-in fade-in zoom-in-95 duration-500">
              
              {/* --- ANALYTICS SUITE --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Cumulative GPA Display */}
                <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-sm relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><Award size={80} /></div>
                   <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">Cumulative GPA</p>
                   <div className="text-5xl font-black tracking-tighter italic mb-2">{gpaFinal}</div>
                   <div className="inline-flex px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">{degreeClass}</div>
                </div>

                {/* Degree Progress */}
                <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-sm">
                   <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-4">Degree Progress</p>
                   <div className="text-5xl font-black tracking-tighter italic mb-4">{degreeProgress}%</div>
                   <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${degreeProgress}%` }} />
                   </div>
                   <p className="text-[8px] font-bold text-slate-400 uppercase mt-3 tracking-widest">{totalCredits} / {targetCredits} Credits Earned</p>
                </div>

                {/* Target Cards */}
                <TargetAnalyticsCard label="First Class" target="3.70" value={requiredForFirst} />
                <TargetAnalyticsCard label="Second Upper" target="3.30" value={requiredForSecondUpper} />
              </div>

              {/* --- STUDENT PROFILE --- */}
              <div className="bg-white dark:bg-white/5 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg"><User size={16} className="text-blue-600" /></div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em]">Student Metadata</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['Name', 'ID', 'Batch'].map((field, idx) => (
                    <div key={field} className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">{field}</label>
                      <input 
                        type="text" 
                        placeholder={`Enter Student ${field}...`}
                        value={field === 'Name' ? studentName : field === 'ID' ? studentId : batch}
                        onChange={e => field === 'Name' ? setStudentName(e.target.value) : field === 'ID' ? setStudentId(e.target.value) : setBatch(e.target.value)}
                        className="w-full p-4 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm font-bold"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* --- SEMESTER ENGINE --- */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600"><Zap size={16} /></div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em]">Semester Engine</h3>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Current SGPA: <span className="text-blue-600 text-sm ml-1">{activeSemGPA}</span></div>
                </div>

                <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
                  {["1", "2", "3", "4", "5", "6", "7", "8"].map(s => (
                    <button 
                      key={s} 
                      onClick={() => setActiveSemester(s)} 
                      className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 border ${
                        activeSemester === s 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20' 
                        : 'bg-white dark:bg-white/5 text-slate-400 border-slate-200 dark:border-white/10 hover:border-blue-500'
                      }`}
                    >
                      Sem {s}
                    </button>
                  ))}
                </div>

                <div className="bg-white dark:bg-white/5 rounded-[3rem] border border-slate-200 dark:border-white/10 p-10 shadow-2xl relative">
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
                    Semester {activeSemester} Intelligence
                  </div>
                  
                  <div className="space-y-4">
                    {semesterData[activeSemester]?.map(m => (
                      <ModuleRow 
                        key={m.id} 
                        module={m} 
                        onChange={(id, f, v) => {
                          const updated = semesterData[activeSemester].map(mod => mod.id === id ? { ...mod, [f]: v } : mod);
                          setSemesterData({ ...semesterData, [activeSemester]: updated });
                        }} 
                        onDelete={(id) => {
                          const filtered = semesterData[activeSemester].filter(mod => mod.id !== id);
                          setSemesterData({ ...semesterData, [activeSemester]: filtered });
                        }}
                      />
                    ))}
                    
                    <button 
                      onClick={addModule} 
                      className="group w-full py-8 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[2rem] text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all flex flex-col items-center justify-center gap-2"
                    >
                      <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">Deploy Custom Module</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* --- EMPTY STATE --- */
            <div className="py-40 flex flex-col items-center text-center space-y-6">
               <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-full animate-bounce">
                  <Sparkles className="text-blue-600" size={40} />
               </div>
               <div>
                  <h2 className="text-2xl font-black uppercase italic tracking-tighter">System Ready for Input</h2>
                  <p className="text-slate-500 text-sm font-medium">Please select your Faculty and Degree above to initialize the GPA Strategist.</p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

function TargetAnalyticsCard({ label, target, value }: { label: string; target: string; value: string | number | null }) {
  const isImpossible = value === "Impossible" || value === "N/A";
  
  return (
    <div className={`p-8 rounded-[2.5rem] border transition-all duration-500 group ${
      isImpossible 
      ? 'bg-red-50 dark:bg-red-950/20 border-red-100 dark:border-red-900/30 grayscale' 
      : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30'
    }`}>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-4">{label} ({target})</p>
      <div className={`text-4xl font-black italic tracking-tighter ${isImpossible ? 'text-red-600' : 'text-emerald-600'}`}>
        {value ?? "—"}
      </div>
      <p className="text-[8px] font-black uppercase tracking-widest opacity-40 mt-2">Required Semester Average</p>
    </div>
  );
}