"use client";

import React from "react";
import { Trash2, Hash } from "lucide-react";
import { Module } from "@/types/module";

interface ModuleRowProps {
  module: Module;
  onChange: (id: string, field: keyof Module, value: string | number) => void;
  onDelete: (id: string) => void;
}

export default function ModuleRow({ module, onChange, onDelete }: ModuleRowProps) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/50 items-center transition-all hover:shadow-lg hover:border-blue-500/30 group">
      
      {/* 1. Module Name (6/12 columns) */}
      <div className="col-span-6 flex items-center gap-3">
        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-400 group-hover:text-blue-500 transition-colors">
          <Hash size={14} />
        </div>
        <input
          type="text"
          value={module.name}
          onChange={(e) => onChange(module.id, "name", e.target.value)}
          placeholder="Module Name"
          className="w-full bg-transparent font-bold text-slate-900 dark:text-white outline-none placeholder:text-slate-400"
        />
      </div>

      {/* 2. Credits Dropdown (2/12 columns) */}
      <div className="col-span-2">
        <select
          value={module.credits}
          onChange={(e) => onChange(module.id, "credits", parseInt(e.target.value))}
          className="w-full bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-center text-slate-700 dark:text-slate-200 outline-none cursor-pointer hover:bg-white dark:hover:bg-slate-700 transition-colors"
        >
          {[1, 2, 3, 4, 6, 8].map(num => (
            <option key={num} value={num}>{num} Credits</option>
          ))}
        </select>
      </div>

      {/* 3. Grade Dropdown (3/12 columns) */}
      <div className="col-span-3">
        <select
          value={module.grade}
          onChange={(e) => onChange(module.id, "grade", e.target.value)}
          className="w-full bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-xl border border-blue-100 dark:border-blue-800 font-black text-center text-blue-600 dark:text-blue-400 outline-none cursor-pointer"
        >
          <option value="">Grade</option>
          {["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"].map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {/* 4. Delete Action (1/12 columns) */}
      <div className="col-span-1 flex justify-center">
        <button
          onClick={() => onDelete(module.id)}
          className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}