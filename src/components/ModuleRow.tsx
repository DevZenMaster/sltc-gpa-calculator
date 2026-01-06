"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import { Module } from "@/types/module";

interface ModuleRowProps {
  module: Module;
  onChange: (id: string, field: keyof Module, value: string | number) => void;
  onDelete: (id: string) => void;
}

export default function ModuleRow({ module, onChange, onDelete }: ModuleRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
      
      {/* Module Name */}
      <div className="col-span-1 md:col-span-5">
        <label className="block md:hidden text-[10px] font-bold text-slate-400 uppercase mb-1">Module Name</label>
        <input
          type="text"
          value={module.name}
          onChange={(e) => onChange(module.id, "name", e.target.value)}
          placeholder="Module Name"
          className="w-full bg-transparent font-semibold text-slate-900 dark:text-white outline-none focus:text-blue-600 dark:focus:text-blue-400 transition-colors placeholder:text-slate-400 dark:placeholder:text-slate-600"
        />
      </div>

      {/* Credits */}
      <div className="col-span-1 md:col-span-3">
        <label className="block md:hidden text-[10px] font-bold text-slate-400 uppercase mb-1">Credits</label>
        <input
          type="number"
          value={module.credits || ""}
          onChange={(e) => onChange(module.id, "credits", parseInt(e.target.value) || 0)}
          className="w-full bg-transparent font-medium text-slate-700 dark:text-slate-300 outline-none"
        />
      </div>

      {/* Grade Selector */}
      <div className="col-span-1 md:col-span-3">
        <label className="block md:hidden text-[10px] font-bold text-slate-400 uppercase mb-1">Grade</label>
        <select
          value={module.grade}
          onChange={(e) => onChange(module.id, "grade", e.target.value)}
          className="w-full bg-transparent font-bold text-blue-600 dark:text-blue-400 outline-none cursor-pointer"
        >
          <option value="" className="dark:bg-slate-900">Grade</option>
          {["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"].map((g) => (
            <option key={g} value={g} className="dark:bg-slate-900 text-slate-900 dark:text-white">
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* Delete Action */}
      <div className="col-span-1 md:col-span-1 flex items-center justify-center">
        <button
          onClick={() => onDelete(module.id)}
          className="p-2 text-slate-300 dark:text-slate-600 hover:text-red-500 dark:hover:text-red-400 transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}