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
    name: "Frontend",
    icon: Layout,
    items: [
      { name: "HTML", level: "Intermediate", percent: 60 },
      { name: "CSS", level: "Intermediate", percent: 60 },
      { name: "JavaScript", level: "Intermediate", percent: 60 },
      { name: "React", level: "Intermediate", percent: 60 },
      { name: "TypeScript", level: "Intermediate", percent: 50 },
      { name: "Next.js", level: "Intermediate", percent: 60 },
    ],
  },
  {
    name: "Backend",
    icon: Database,
    items: [
      { name: "Python", level: "Intermediate", percent: 60 },
      { name: "MySQL", level: "Intermediate", percent: 50 },
      { name: "MongoDB", level: "Beginner", percent: 20 },
    ],
  },
  {
    name: "CI/CD",
    icon: Cpu,
    items: [
      { name: "AWS EC2", level: "Beginner", percent: 20 },
      { name: "AWS S3", level: "Beginner", percent: 20 },
      { name: "GitHub Actions", level: "Intermediate", percent: 60 },
    ],
  },
  {
    name: "AI Tools",
    icon: BrainCircuit,
    items: [
      { name: "Claude", level: "Beginner", percent: 30 },
      { name: "ChatGPT", level: "Intermediate", percent: 50 },
      { name: "ElevenLabs", level: "Beginner", percent: 30 },
    ],
  },
];
