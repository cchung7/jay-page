import type React from "react";
import { Cpu, Database, Layout, BrainCircuit } from "lucide-react";

// Percent is used for UI bar visualization (0–100). Level is the primary proficiency label.
// e.g. [Range]: Beginner (10–30%), Proficient (31–70%), Advanced (71–100%)

export type SkillLevel = "Familiar" | "Functional" | "Proficient" | "Advanced";

export type SkillItem = {
  name: string;
  level: SkillLevel;
  percent: number;
};

export type SkillCategory = {
  name: string;
  icon: React.ElementType;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    icon: Layout,
    items: [
      { name: "HTML5", level: "Proficient", percent: 45 },
      { name: "Tailwind CSS", level: "Proficient", percent: 50 },
      { name: "JavaScript (ES6+)", level: "Proficient", percent: 50 },
      { name: "TypeScript", level: "Proficient", percent: 45 },
      { name: "React", level: "Proficient", percent: 45 },
      { name: "Next.js", level: "Proficient", percent: 45 },
    ],
  },
  {
    name: "Backend & Databases",
    icon: Database,
    items: [
      { name: "Python", level: "Functional", percent: 40 },
      { name: "Flask", level: "Functional", percent: 40 },
      { name: "NumPy", level: "Functional", percent: 30 },
      { name: "pandas", level: "Functional", percent: 30 },
      { name: "scikit-learn", level: "Functional", percent: 30 },
      { name: "MySQL", level: "Familiar", percent: 25 },
      { name: "MongoDB", level: "Proficient", percent: 45 },
      { name: "Prisma ORM", level: "Proficient", percent: 45 },
    ],
  },
  {
    name: "DevOps & Deployment",
    icon: Cpu,
    items: [
      { name: "Git & GitHub", level: "Proficient", percent: 55 },
      { name: "CI/CD (GitHub Actions)", level: "Familiar", percent: 20 },
      { name: "VPS Administration", level: "Functional", percent: 30 },
      { name: "AWS EC2 & S3", level: "Familiar", percent: 25 },
      { name: "Cloud Deployment", level: "Functional", percent: 30 },
    ],
  },
  {
    name: "Machine Learning & AI",
    icon: BrainCircuit,
    items: [
      { name: "LightGBM", level: "Familiar", percent: 25 },
      { name: "ML Model Deployment", level: "Familiar", percent: 20 }
    ],
  },
];