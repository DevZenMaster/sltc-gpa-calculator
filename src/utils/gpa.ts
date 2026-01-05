import { Module } from "@/types/module";
import { GRADE_POINTS } from "@/data/gradePoints";

export const calculateGPA = (modules: Module[]): string => {
  let totalPoints = 0;
  let totalCredits = 0;

  modules.forEach((mod) => {
    // Only calculate if credits > 0 AND a valid grade is selected (ignore empty "")
    if (mod.credits > 0 && mod.grade && GRADE_POINTS[mod.grade] !== undefined) {
      totalPoints += GRADE_POINTS[mod.grade] * mod.credits;
      totalCredits += mod.credits;
    }
  });

  if (totalCredits === 0) return "0.00";
  return (totalPoints / totalCredits).toFixed(2);
};