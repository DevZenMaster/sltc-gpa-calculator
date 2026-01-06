"use client";

import React, { useState } from "react";
import Link from "next/link";
import ModuleRow from "@/components/ModuleRow";
import PrintableReport from "@/components/PrintableReport"; 
import { Module, DegreeModuleData, ModuleType } from "@/types/module";
import { calculateGPA, getDegreeClass, getTotalCreditsAndPoints, calculateRequiredGPA } from "@/utils/gpa";
import { DEGREES } from "@/data/degrees";
import { Printer, TrendingUp, Award, User, ArrowLeft } from "lucide-react"; 

type DegreeState = {
  [key: string]: Module[];
};

export default function CalculatorPage() {
  const [semesterData, setSemesterData] = useState<DegreeState>({});
  const [selectedDegree, setSelectedDegree] = useState("");
  const [activeSemester, setActiveSemester] = useState("1"); 
  const [availableElectives, setAvailableElectives] = useState<DegreeModuleData[]>([]);

  // User Details (Default to empty string)
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

  // --- CALCULATIONS ---
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
  
  const requiredForFirst = calculateRequiredGPA(totalPoints, totalCredits, 3.70, 120);
  const requiredForSecondUpper = calculateRequiredGPA(totalPoints, totalCredits, 3.30, 120);
  const requiredForSecondLower = calculateRequiredGPA(totalPoints, totalCredits, 3.00, 120);

  const handlePrint = () => {
    if (!studentName || !studentId) {
      const confirmPrint = window.confirm("You haven't entered your Name or ID. The report looks best with these details. Do you want to print anyway?");
      if (!confirmPrint) return;
    }
    window.print();
  };

  return (
    // ADJUSTED: pt-24 (96px) for mobile, pt-28 (112px) for desktop. 
    // This clears the 64px navbar with perfect spacing.
    <div className="max-w-6xl mx-auto px-4 pb-12 pt-24 md:pt-28">
      
      {/* --- INJECT PRINT COMPONENT --- */}
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

      {/* --- UI --- */}
      <div className="print:hidden">
        
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">GPA Dashboard</h1>
            <p className="text-slate-500">Plan your path to a First Class.</p>
          </div>
          
          <button 
            onClick={handlePrint}
            disabled={!selectedDegree}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none"
          >
            <Printer size={18} />
            Download Report
          </button>
        </div>

        {/* 1. DEGREE SELECTOR */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Select Degree</label>
          <select 
            value={selectedDegree}
            onChange={(e) => handleDegreeChange(e.target.value)} 
            className="w-full md:w-1/2 p-3 rounded-xl border border-slate-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-lg font-medium"
          >
            <option value="" disabled>Select your Degree Program...</option>
            {DEGREES.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        {/* 2. PERSONAL DETAILS */}
        {selectedDegree && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50 blur-2xl"></div>
            
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-500" />
              Report Details <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full normal-case">Recommended</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Student Name" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full p-3 pl-4 rounded-lg border border-slate-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Student ID" 
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="w-full p-3 pl-4 rounded-lg border border-slate-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Batch (e.g. 2028)" 
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  className="w-full p-3 pl-4 rounded-lg border border-slate-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 ml-1">
              * Enter these details if you want them to appear on your printed transcript.
            </p>
          </div>
        )}

        {/* 3. MAIN INSIGHTS GRID */}
        {selectedDegree && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* CARD 1: Current Status */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-2 text-blue-600">
                <Award />
                <h3 className="font-bold text-sm uppercase tracking-wide">Current Status</h3>
              </div>
              <div className="text-4xl font-black text-slate-900 mb-1">{gpaFinal}</div>
              <div className="text-sm font-medium text-slate-500">{degreeClass}</div>
            </div>

            {/* CARD 2: Path to First Class */}
            <div className={`p-6 rounded-2xl shadow-sm border ${requiredForFirst === "Impossible" ? "bg-red-50 border-red-100" : "bg-emerald-50 border-emerald-100"}`}>
              <div className="flex items-center gap-2 mb-2 text-emerald-700">
                <TrendingUp />
                <h3 className="font-bold text-sm uppercase tracking-wide">Path to First Class (3.7+)</h3>
              </div>
              {requiredForFirst === "Impossible" ? (
                <>
                  <div className="text-2xl font-bold text-red-600 mb-1">Out of Reach</div>
                  <p className="text-xs text-red-500">Don&apos;t worry! Aim for Second Upper.</p>
                </>
              ) : requiredForFirst === "Secured" ? (
                <div className="text-2xl font-bold text-emerald-600">🏆 Secured!</div>
              ) : (
                <>
                  <div className="text-4xl font-black text-emerald-600 mb-1">{requiredForFirst}</div>
                  <p className="text-xs text-emerald-700 font-medium">Avg. GPA needed in remaining semesters</p>
                </>
              )}
            </div>

            {/* CARD 3: Path to Second Upper */}
            <div className="bg-blue-50 p-6 rounded-2xl shadow-sm border border-blue-100">
              <div className="flex items-center gap-2 mb-2 text-blue-700">
                <TrendingUp />
                <h3 className="font-bold text-sm uppercase tracking-wide">Path to Second Upper (3.3+)</h3>
              </div>
              {requiredForSecondUpper === "Impossible" ? (
                 <div className="text-2xl font-bold text-slate-600">Check Calculation</div>
              ) : requiredForSecondUpper === "Secured" ? (
                <div className="text-2xl font-bold text-blue-600">✅ Secured!</div>
              ) : (
                <>
                  <div className="text-4xl font-black text-blue-600 mb-1">{requiredForSecondUpper}</div>
                  <p className="text-xs text-blue-700 font-medium">Avg. GPA needed in remaining semesters</p>
                </>
              )}
            </div>
          </div>
        )}

        {/* 4. SEMESTER TABS */}
        <div className="flex overflow-x-auto pb-2 gap-2 mb-4 border-b border-slate-200">
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
                    ? "bg-slate-800 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                Semester {sem}
                {hasData && !isActive && <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>}
              </button>
            );
          })}
        </div>

        {/* 5. ACTIVE SEMESTER VIEW */}
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-sm border border-slate-200 p-6 min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-700">Semester {activeSemester} Modules</h2>
            <div className="text-right">
              <span className="text-sm text-slate-400 uppercase font-bold mr-2">Sem. GPA:</span>
              <span className="text-xl font-bold text-blue-600">{activeSemGPA}</span>
            </div>
          </div>

          {!selectedDegree ? (
            <div className="text-center py-20 text-slate-400">
              Please select a degree above to start.
            </div>
          ) : (
            <>
              {/* Table Headers */}
              <div className="hidden md:grid grid-cols-12 gap-3 px-4 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
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
                <button onClick={() => addModule()} className="flex-1 py-3 px-4 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 border border-slate-300 border-dashed">+ Add Custom Module</button>
                {availableElectives.length > 0 && (
                  <div className="flex-1 relative">
                    <select
                      className="w-full h-full py-3 px-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-200"
                      onChange={(e) => {
                        const ele = availableElectives.find((m) => m.name === e.target.value);
                        if (ele) { addModule(ele.name, ele.credits, "Elective"); e.target.value = ""; }
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>+ Add Elective</option>
                      {availableElectives.map((e, i) => <option key={i} value={e.name}>{e.name} ({e.credits} cr)</option>)}
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