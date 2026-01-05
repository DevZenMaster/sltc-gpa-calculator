"use client";

import React, { useState, ChangeEvent } from "react";
import ModuleRow from "@/components/ModuleRow";
import { Module, DegreeModuleData, ModuleType } from "@/types/module";
import { calculateGPA } from "@/utils/gpa";
import { DEGREES } from "@/data/degrees";

// Type for our full degree state: "1": [...], "2": [...]
type DegreeState = {
  [key: string]: Module[];
};

export default function CalculatorPage() {
  // Store ALL semesters (1-8)
  const [semesterData, setSemesterData] = useState<DegreeState>({});
  
  const [selectedDegree, setSelectedDegree] = useState("");
  const [activeSemester, setActiveSemester] = useState("1"); // Which semester we are currently viewing/editing
  const [availableElectives, setAvailableElectives] = useState<DegreeModuleData[]>([]);

  // 1. Initialize ALL semesters when a Degree is picked
  const handleDegreeChange = (degreeId: string) => {
    const degree = DEGREES.find((d) => d.id === degreeId);
    if (!degree) return;

    setSelectedDegree(degreeId);
    
    // Create a fresh state object for semesters 1-8
    const newState: DegreeState = {};
    const electivesForCurrentSem: DegreeModuleData[] = [];

    // Loop through all 8 semesters defined in the handbook
    ["1", "2", "3", "4", "5", "6", "7", "8"].forEach((semId) => {
      const semModules = degree.semesters[semId] || [];
      
      // Load CORE modules with empty grade (so GPA starts at 0)
      newState[semId] = semModules
        .filter((m) => m.type === "Core")
        .map((m, index) => ({
          id: `${degreeId}-${semId}-${index}`,
          name: m.name,
          credits: m.credits,
          grade: "", // Start empty -> 0.00 GPA
          type: "Core",
        }));
    });

    setSemesterData(newState);
    setActiveSemester("1"); // Reset view to Sem 1
    updateElectivesList(degreeId, "1");
  };

  // Helper to update electives dropdown based on active semester
  const updateElectivesList = (degreeId: string, semId: string) => {
    const degree = DEGREES.find((d) => d.id === degreeId);
    if (!degree) return;
    const semModules = degree.semesters[semId] || [];
    setAvailableElectives(semModules.filter((m) => m.type === "Elective"));
  };

  // Switch tabs
  const switchSemester = (semId: string) => {
    setActiveSemester(semId);
    if (selectedDegree) {
      updateElectivesList(selectedDegree, semId);
    }
  };

  // Add a module to the ACTIVE semester
  const addModule = (name = "", credits = 0, type: ModuleType = "Core") => {
    const newId = `${Date.now()}`;
    const currentModules = semesterData[activeSemester] || [];
    
    const updatedModules = [
      ...currentModules,
      { id: newId, name, credits, grade: "", type } // Default grade empty
    ];

    setSemesterData({
      ...semesterData,
      [activeSemester]: updatedModules,
    });
  };

  // Update a specific module
  const handleModuleChange = (id: string, field: keyof Module, value: string | number) => {
    const currentModules = semesterData[activeSemester] || [];
    const updatedModules = currentModules.map((m) =>
      m.id === id ? { ...m, [field]: value } : m
    );

    setSemesterData({
      ...semesterData,
      [activeSemester]: updatedModules,
    });
  };

  // Delete a module
  const deleteModule = (id: string) => {
    const currentModules = semesterData[activeSemester] || [];
    setSemesterData({
      ...semesterData,
      [activeSemester]: currentModules.filter((m) => m.id !== id),
    });
  };

  // --- CALCULATIONS ---
  
  // Helper to merge modules from multiple semesters
  const getModulesForSemesters = (semesters: string[]) => {
    let all: Module[] = [];
    semesters.forEach(sem => {
      if (semesterData[sem]) all = [...all, ...semesterData[sem]];
    });
    return all;
  };

  const gpaYear1 = calculateGPA(getModulesForSemesters(["1", "2"]));
  const gpaYear2 = calculateGPA(getModulesForSemesters(["3", "4"]));
  const gpaYear3 = calculateGPA(getModulesForSemesters(["5", "6"]));
  const gpaYear4 = calculateGPA(getModulesForSemesters(["7", "8"]));
  const gpaFinal = calculateGPA(getModulesForSemesters(["1", "2", "3", "4", "5", "6", "7", "8"]));

  const activeSemGPA = calculateGPA(semesterData[activeSemester] || []);

  const getGpaColor = (gpa: string) => {
    const num = parseFloat(gpa);
    if (num === 0) return "text-slate-400"; // Gray for zero/uncalculated
    if (num >= 3.7) return "text-emerald-600";
    if (num >= 3.0) return "text-blue-600";
    if (num >= 2.0) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">GPA Dashboard</h1>
        <p className="text-slate-500">Select your degree to load the full curriculum.</p>
      </div>

      {/* 1. DEGREE SELECTOR */}
      <div className="mb-8">
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

      {/* 2. GPA SCORECARDS (Yearly + Final) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {[
          { label: "Year 1 GPA", val: gpaYear1 },
          { label: "Year 2 GPA", val: gpaYear2 },
          { label: "Year 3 GPA", val: gpaYear3 },
          { label: "Year 4 GPA", val: gpaYear4 },
          { label: "Final GPA", val: gpaFinal, highlight: true }
        ].map((item, idx) => (
          <div key={idx} className={`bg-white p-4 rounded-xl border ${item.highlight ? 'border-blue-500 shadow-blue-100 ring-1 ring-blue-500' : 'border-slate-200'} shadow-sm text-center`}>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
            <div className={`text-2xl md:text-3xl font-black ${getGpaColor(item.val)}`}>
              {item.val}
            </div>
          </div>
        ))}
      </div>

      {/* 3. SEMESTER TABS */}
      <div className="flex overflow-x-auto pb-2 gap-2 mb-4 border-b border-slate-200">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => {
          const s = sem.toString();
          const isActive = activeSemester === s;
          const hasData = semesterData[s]?.some(m => m.grade !== ""); // Show indicator if grade entered
          
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

      {/* 4. ACTIVE SEMESTER VIEW */}
      <div className="bg-white rounded-b-xl rounded-tr-xl shadow-sm border border-slate-200 p-6 min-h-[400px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-700">Semester {activeSemester} Modules</h2>
          <div className="text-right">
             <span className="text-sm text-slate-400 uppercase font-bold mr-2">Sem. GPA:</span>
             <span className={`text-xl font-bold ${getGpaColor(activeSemGPA)}`}>{activeSemGPA}</span>
          </div>
        </div>

        {!selectedDegree ? (
          <div className="text-center py-20 text-slate-400">
            Please select a degree above to start.
          </div>
        ) : (
          <>
            <div className="hidden md:grid grid-cols-12 gap-3 px-4 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <div className="col-span-5">Module Name</div>
              <div className="col-span-3">Credits</div>
              <div className="col-span-3">Grade</div>
              <div className="col-span-1 text-center">Action</div>
            </div>

            <div className="space-y-3">
              {(semesterData[activeSemester] || []).length === 0 && (
                <div className="text-center py-8 text-slate-400 italic">No modules in this semester. Add one below.</div>
              )}
              
              {(semesterData[activeSemester] || []).map((module) => (
                <ModuleRow
                  key={module.id}
                  module={module}
                  onChange={handleModuleChange}
                  onDelete={deleteModule}
                />
              ))}
            </div>

            {/* ADD BUTTONS */}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <button
                onClick={() => addModule()}
                className="flex-1 py-3 px-4 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition font-medium border border-slate-300 border-dashed"
              >
                + Add Custom Module
              </button>

              {availableElectives.length > 0 && (
                <div className="flex-1 relative">
                  <select
                    className="w-full h-full py-3 px-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition font-medium border border-blue-200 cursor-pointer appearance-none text-center outline-none"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      const elective = availableElectives.find((m) => m.name === e.target.value);
                      if (elective) {
                        addModule(elective.name, elective.credits, "Elective");
                        e.target.value = "";
                      }
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled>+ Add Elective (Select from list)</option>
                    {availableElectives.map((e, i) => (
                      <option key={i} value={e.name}>{e.name} ({e.credits} cr)</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </>
        )}
      </div>

    </div>
  );
}