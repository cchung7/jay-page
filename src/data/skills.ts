import type React from "react";
import { Cpu, Database, Layout, BrainCircuit } from "lucide-react";

// [Range]: Beginner (10–30%), Intermediate (31–70%), Expert (71–99%)

export type SkillLevel = "Beginner" | "Intermediate" | "Expert";

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
      { name: "HTML5", level: "Intermediate", percent: 60 },
      { name: "CSS3 / Tailwind CSS", level: "Intermediate", percent: 60 },
      { name: "JavaScript (ES6+)", level: "Intermediate", percent: 60 },
      { name: "TypeScript", level: "Intermediate", percent: 55 },
      { name: "React", level: "Intermediate", percent: 55 },
      { name: "Next.js", level: "Intermediate", percent: 50 },
    ],
  },
  {
    name: "Backend & Databases",
    icon: Database,
    items: [
      { name: "Python", level: "Intermediate", percent: 65 },
      { name: "Flask", level: "Intermediate", percent: 60 },
      { name: "MySQL", level: "Intermediate", percent: 60 },
      { name: "MongoDB", level: "Intermediate", percent: 50 },
      { name: "Prisma ORM", level: "Intermediate", percent: 50 },
    ],
  },
  {
    name: "DevOps & Deployment",
    icon: Cpu,
    items: [
      { name: "Git & GitHub", level: "Intermediate", percent: 65 },
      { name: "CI/CD (GitHub Actions)", level: "Intermediate", percent: 60 },
      { name: "Ubuntu VPS Administration", level: "Intermediate", percent: 55 },
      { name: "AWS EC2 & S3", level: "Intermediate", percent: 40 },
      { name: "Render / Cloud Hosting", level: "Intermediate", percent: 50 },
    ],
  },
  {
    name: "Machine Learning & AI",
    icon: BrainCircuit,
    items: [
      { name: "LightGBM", level: "Intermediate", percent: 60 },
      { name: "Model Deployment (Flask APIs)", level: "Intermediate", percent: 55 },
      { name: "LLM Integration", level: "Intermediate", percent: 50 },
    ],
  },
];