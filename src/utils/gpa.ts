import { Module } from "@/types/module";
import { GRADE_POINTS } from "@/data/gradePoints";

export const calculateGPA = (modules: Module[]): string => {
  let totalPoints = 0;
  let totalCredits = 0;

  modules.forEach((mod) => {
    if (mod.credits > 0 && mod.grade && GRADE_POINTS[mod.grade] !== undefined) {
      totalPoints += GRADE_POINTS[mod.grade] * mod.credits;
      totalCredits += mod.credits;
    }
  });

  if (totalCredits === 0) return "0.00";
  return (totalPoints / totalCredits).toFixed(2);
};

// --- NEW FUNCTIONS ---

export const getTotalCreditsAndPoints = (modules: Module[]) => {
  let totalPoints = 0;
  let totalCredits = 0;

  modules.forEach((mod) => {
    if (mod.credits > 0 && mod.grade && GRADE_POINTS[mod.grade] !== undefined) {
      totalPoints += GRADE_POINTS[mod.grade] * mod.credits;
      totalCredits += mod.credits;
    }
  });

  return { totalPoints, totalCredits };
};

export const getDegreeClass = (gpa: string): string => {
  const score = parseFloat(gpa);
  if (score >= 3.70) return "First Class Honours 🏆";
  if (score >= 3.30) return "Second Class (Upper Division) 🥈";
  if (score >= 3.00) return "Second Class (Lower Division) 🥉";
  if (score >= 2.00) return "General Pass 🎓";
  return "Below Requirements";
};

export const calculateRequiredGPA = (currentPoints: number, currentCredits: number, targetGPA: number, totalDegreeCredits: number = 120): string | null => {
  if (currentCredits >= totalDegreeCredits) return null; // Already finished
  
  const remainingCredits = totalDegreeCredits - currentCredits;
  const targetTotalPoints = targetGPA * totalDegreeCredits;
  const requiredPoints = targetTotalPoints - currentPoints;
  const requiredGPA = requiredPoints / remainingCredits;

  if (requiredGPA > 4.0) return "Impossible"; // Mathematically impossible to reach
  if (requiredGPA <= 0) return "Secured"; // Already secured
  return requiredGPA.toFixed(2);
};