import { Module } from "@/types/module";
import { GRADE_OPTIONS } from "@/data/gradePoints";

interface Props {
  module: Module;
  onChange: (id: string, field: keyof Module, value: string | number) => void;
  onDelete: (id: string) => void;
}

export default function ModuleRow({ module, onChange, onDelete }: Props) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-3 items-start md:items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-3 transition-all hover:shadow-md">
      
      {/* Module Name */}
      <div className="w-full md:col-span-5">
        <label className="block md:hidden text-xs font-bold text-slate-500 mb-1">MODULE NAME</label>
        <input
          type="text"
          placeholder="e.g. Programming Concepts"
          value={module.name}
          onChange={(e) => onChange(module.id, "name", e.target.value)}
          className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
        />
        {module.type === "Elective" && (
          <span className="text-xs text-blue-600 font-semibold ml-1">Elective</span>
        )}
      </div>

      {/* Credits */}
      <div className="w-full md:col-span-3">
        <label className="block md:hidden text-xs font-bold text-slate-500 mb-1">CREDITS</label>
        <input
          type="number"
          min="0"
          placeholder="Credits"
          value={module.credits}
          onChange={(e) => onChange(module.id, "credits", parseFloat(e.target.value) || 0)}
          className="w-full p-2 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
        />
      </div>

      {/* Grade Dropdown */}
      <div className="w-full md:col-span-3">
        <label className="block md:hidden text-xs font-bold text-slate-500 mb-1">GRADE</label>
        <select
          value={module.grade}
          onChange={(e) => onChange(module.id, "grade", e.target.value)}
          className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none ${module.grade === "" ? "border-red-300 bg-red-50 text-slate-500" : "border-slate-300 bg-white text-slate-800"}`}
        >
          <option value="">Select Grade...</option>
          {GRADE_OPTIONS.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {/* Delete Button */}
      <div className="w-full md:col-span-1 flex justify-end md:justify-center mt-2 md:mt-0">
        <button
          onClick={() => onDelete(module.id)}
          className="text-red-400 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition"
          title="Remove Module"
        >
          <span className="font-bold text-xl">&times;</span> 
        </button>
      </div>
    </div>
  );
}