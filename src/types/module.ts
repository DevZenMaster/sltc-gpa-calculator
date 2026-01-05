export type ModuleType = "Core" | "Elective";

export interface Module {
  id: string;
  name: string;
  credits: number;
  grade: string;
  type?: ModuleType; 
}

export interface DegreeModuleData {
  name: string;
  credits: number;
  type: ModuleType;
}

export interface DegreeProgram {
  id: string;
  name: string;
  semesters: {
    [key: string]: DegreeModuleData[];
  };
}

export interface GradePointMap {
  [key: string]: number;
}