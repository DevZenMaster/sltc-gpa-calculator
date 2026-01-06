"use client";

import React, { useState } from "react";
import Link from "next/link";
import ModuleRow from "@/components/ModuleRow";
import PrintableReport from "@/components/PrintableReport"; 
import { Module, DegreeModuleData, ModuleType } from "@/types/module";
import { calculateGPA, getDegreeClass, getTotalCreditsAndPoints, calculateRequiredGPA } from "@/utils/gpa";
import { DEGREES } from "@/data/degrees";
// Added BarChart for the progress icon
import { Printer, TrendingUp, Award, User, ArrowLeft, BarChart } from "lucide-react"; 

type DegreeState = {
  [key: string]: Module[];
};

export default function CalculatorPage() {
  const [semesterData, setSemesterData] = useState<DegreeState>({});
  const [selectedDegree, setSelectedDegree] = useState("");
  const [activeSemester, setActiveSemester] = useState("1"); 
  const [availableElectives, setAvailableElectives] = useState<DegreeModuleData[]>([]);

  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [batch, setBatch] = useState("");

  const handleDegreeChange = (degreeId: string) => {
    const degree = DEGREES.find((d) => d.id === degreeId);
    if (!degree) return;
    setSelectedDegree(degreeId);
    
    const newState: DegreeState = {};
    ["1", "2", "3", "4", "5", "6", "7", "8"].forEach((semId) => {
      const semModules = degree.semesters[semId] || [];
      newState[semId] = semModules
        .filter((m) => m.type === "Core")
        .map((m, index) => ({
          id: `${degreeId}-${semId}-${index}`,
          name: m.name,
          credits: m.credits,
          grade: "", 
          type: "Core",
        }));
    });
    setSemesterData(newState);
    setActiveSemester("1");
    updateElectivesList(degreeId, "1");
  };

  const updateElectivesList = (degreeId: string, semId: string) => {
    const degree = DEGREES.find((d) => d.id === degreeId);
    if (!degree) return;
    const semModules = degree.semesters[semId] || [];
    setAvailableElectives(semModules.filter((m) => m.type === "Elective"));
  };

  const switchSemester = (semId: string) => {
    setActiveSemester(semId);
    if (selectedDegree) updateElectivesList(selectedDegree, semId);
  };

  const addModule = (name = "", credits = 0, type: ModuleType = "Core") => {
    const newId = `${Date.now()}`;
    const currentModules = semesterData[activeSemester] || [];
    const updatedModules = [...currentModules, { id: newId, name, credits, grade: "", type }];
    setSemesterData({ ...semesterData, [activeSemester]: updatedModules });
  };

  const handleModuleChange = (id: string, field: keyof Module, value: string | number) => {
    const currentModules = semesterData[activeSemester] || [];
    const updatedModules = currentModules.map((m) => m.id === id ? { ...m, [field]: value } : m);
    setSemesterData({ ...semesterData, [activeSemester]: updatedModules });
  };

  const deleteModule = (id: string) => {
    const currentModules = semesterData[activeSemester] || [];
    setSemesterData({ ...semesterData, [activeSemester]: currentModules.filter((m) => m.id !== id) });
  };

  const getModulesForSemesters = (semesters: string[]) => {
    let all: Module[] = [];
    semesters.forEach(sem => { if (semesterData[sem]) all = [...all, ...semesterData[sem]]; });
    return all;
  };

  const allModules = getModulesForSemesters(["1", "2", "3", "4", "5", "6", "7", "8"]);
  const gpaFinal = calculateGPA(allModules);
  const activeSemGPA = calculateGPA(semesterData[activeSemester] || []);
  
  const { totalPoints, totalCredits } = getTotalCreditsAndPoints(allModules);
  const degreeClass = getDegreeClass(gpaFinal);

  // --- PROGRESS CALCULATIONS ---
  // Count modules that have a grade entered
  const completedModules = allModules.filter(m => m.grade !== "").length;
  const totalPlannedModules = allModules.length;
  const progressPercentage = totalPlannedModules > 0 
    ? Math.round((completedModules / totalPlannedModules) * 100) 
    : 0;

  // Credits progress (Assuming 120 standard for SLTC)
  const targetCredits = 120;
  const creditProgress = Math.min(Math.round((totalCredits / targetCredits) * 100), 100);
  
  const requiredForFirst = calculateRequiredGPA(totalPoints, totalCredits, 3.70, targetCredits);
  const requiredForSecondUpper = calculateRequiredGPA(totalPoints, totalCredits, 3.30, targetCredits);
  const requiredForSecondLower = calculateRequiredGPA(totalPoints, totalCredits, 3.00, targetCredits);

  const handlePrint = () => {
    if (!studentName || !studentId) {
      const confirmPrint = window.confirm("You haven't entered your Name or ID. The report looks best with these details. Do you want to print anyway?");
      if (!confirmPrint) return;
    }
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pb-12 pt-24 md:pt-28 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <PrintableReport 
        degreeName={DEGREES.find(d => d.id === selectedDegree)?.name || "Degree Program"}
        semesterData={semesterData}
        finalGPA={gpaFinal}
        studentName={studentName}
        studentId={studentId}
        batch={batch}
        targets={{
          first: requiredForFirst,
          secondUpper: requiredForSecondUpper,
          secondLower: requiredForSecondLower
        }}
      />

      <div className="print:hidden">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm bg-white dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">GPA Dashboard</h1>
            <p className="text-slate-500 dark:text-slate-400">Plan your path to a First Class.</p>
          </div>
          
          <button 
            onClick={handlePrint}
            disabled={!selectedDegree}
            className="flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-blue-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
          >
            <Printer size={18} />
            Download Report
          </button>
        </div>

        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Select Degree</label>
          <select 
            value={selectedDegree}
            onChange={(e) => handleDegreeChange(e.target.value)} 
            className="w-full md:w-1/2 p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-lg font-medium text-slate-900 dark:text-white"
          >
            <option value="" disabled className="dark:bg-slate-900">Select your Degree Program...</option>
            {DEGREES.map((d) => (
              <option key={d.id} value={d.id} className="dark:bg-slate-900">{d.name}</option>
            ))}
          </select>
        </div>

        {/* --- NEW DEGREE PROGRESS SECTION --- */}
        {selectedDegree && (
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="w-full md:w-1/3">
                <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400">
                  <BarChart className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">Overall Degree Progress</h3>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{progressPercentage}%</span>
                  <span className="text-sm text-slate-400 mb-1">of modules completed</span>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                  <span>CURRICULUM COMPLETION</span>
                  <span>{completedModules} / {totalPlannedModules} MODULES</span>
                </div>
                {/* Progress Bar Container */}
                <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500 ease-out" 
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedDegree && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {/* CARD 1: Current Status */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
                <Award />
                <h3 className="font-bold text-sm uppercase tracking-wide">Current Status</h3>
              </div>
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">{gpaFinal}</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{degreeClass}</div>
            </div>

            {/* NEW CARD 2: Credits Earned Progress */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400">
                <TrendingUp />
                <h3 className="font-bold text-sm uppercase tracking-wide">Credits Earned</h3>
              </div>
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-1">{totalCredits}</div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-2">
                <div 
                  className="h-full bg-indigo-500 rounded-full" 
                  style={{ width: `${creditProgress}%` }}
                />
              </div>
              <div className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-wider">Target: {targetCredits} Credits</div>
            </div>

            {/* CARD 3: Path to First Class */}
            <div className={`p-6 rounded-2xl shadow-sm border ${requiredForFirst === "Impossible" ? "bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/50" : "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/50"}`}>
              <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-400">
                <TrendingUp />
                <h3 className="font-bold text-sm uppercase tracking-wide">Path to First Class</h3>
              </div>
              {requiredForFirst === "Impossible" ? (
                <>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">Out of Reach</div>
                  <p className="text-xs text-red-500 dark:text-red-400/70">Aim for Second Upper.</p>
                </>
              ) : requiredForFirst === "Secured" ? (
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">🏆 Secured!</div>
              ) : (
                <>
                  <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400 mb-1">{requiredForFirst}</div>
                  <p className="text-[10px] text-emerald-700 dark:text-emerald-400/80 font-bold uppercase tracking-wider">Required Avg.</p>
                </>
              )}
            </div>

            {/* CARD 4: Path to Second Upper */}
            <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-2xl shadow-sm border border-blue-100 dark:border-blue-900/50">
              <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
                <TrendingUp />
                <h3 className="font-bold text-sm uppercase tracking-wide">Path to Second Upper</h3>
              </div>
              {requiredForSecondUpper === "Impossible" ? (
                 <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">N/A</div>
              ) : requiredForSecondUpper === "Secured" ? (
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">✅ Secured!</div>
              ) : (
                <>
                  <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-1">{requiredForSecondUpper}</div>
                  <p className="text-[10px] text-blue-700 dark:text-blue-400/80 font-bold uppercase tracking-wider">Required Avg.</p>
                </>
              )}
            </div>
          </div>
        )}

        {/* --- PERSONAL DETAILS (Condensed) --- */}
        {selectedDegree && (
          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 mb-8 relative overflow-hidden">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-500" />
              Student Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
              <input 
                type="text" 
                placeholder="Student Name" 
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full p-3 pl-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
              <input 
                type="text" 
                placeholder="Student ID" 
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full p-3 pl-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
              <input 
                type="text" 
                placeholder="Batch (e.g. 2028)" 
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="w-full p-3 pl-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>
          </div>
        )}

        {/* 4. SEMESTER TABS */}
        <div className="flex overflow-x-auto pb-2 gap-2 mb-4 border-b border-slate-200 dark:border-slate-800">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => {
            const s = sem.toString();
            const isActive = activeSemester === s;
            const hasData = semesterData[s]?.some(m => m.grade !== ""); 
            
            return (
              <button
                key={sem}
                onClick={() => switchSemester(s)}
                disabled={!selectedDegree}
                className={`flex-shrink-0 px-6 py-2 rounded-t-lg font-bold text-sm transition-all relative ${
                  isActive
                    ? "bg-slate-800 dark:bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                Semester {sem}
                {hasData && !isActive && <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>}
              </button>
            );
          })}
        </div>

        {/* 5. ACTIVE SEMESTER VIEW */}
        <div className="bg-white dark:bg-slate-900 rounded-b-xl rounded-tr-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300">Semester {activeSemester} Modules</h2>
            <div className="text-right">
              <span className="text-sm text-slate-400 dark:text-slate-500 uppercase font-bold mr-2">Sem. GPA:</span>
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{activeSemGPA}</span>
            </div>
          </div>

          {!selectedDegree ? (
            <div className="text-center py-20 text-slate-400 dark:text-slate-600">
              Please select a degree above to start.
            </div>
          ) : (
            <>
              {/* Table Headers */}
              <div className="hidden md:grid grid-cols-12 gap-3 px-4 mb-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                <div className="col-span-5">Module Name</div>
                <div className="col-span-3">Credits</div>
                <div className="col-span-3">Grade</div>
                <div className="col-span-1 text-center">Action</div>
              </div>

              {/* Module List */}
              <div className="space-y-3">
                {(semesterData[activeSemester] || []).map((module) => (
                  <ModuleRow
                    key={module.id}
                    module={module}
                    onChange={handleModuleChange}
                    onDelete={deleteModule}
                  />
                ))}
              </div>

              {/* Add Buttons */}
              <div className="mt-8 flex flex-col md:flex-row gap-4">
                <button 
                  onClick={() => addModule()} 
                  className="flex-1 py-3 px-4 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 border-dashed"
                >
                  + Add Custom Module
                </button>
                {availableElectives.length > 0 && (
                  <div className="flex-1 relative">
                    <select
                      className="w-full h-full py-3 px-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-900/50 outline-none"
                      onChange={(e) => {
                        const ele = availableElectives.find((m) => m.name === e.target.value);
                        if (ele) { addModule(ele.name, ele.credits, "Elective"); e.target.value = ""; }
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled className="dark:bg-slate-900">+ Add Elective</option>
                      {availableElectives.map((e, i) => (
                        <option key={i} value={e.name} className="dark:bg-slate-900">{e.name} ({e.credits} cr)</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}