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
      { name: "JavaScript", level: "Intermediate", percent: 50 },
      { name: "React", level: "Intermediate", percent: 40 },
      { name: "TypeScript", level: "Intermediate", percent: 50 },
      { name: "Next.js", level: "Intermediate", percent: 40 },
    ],
  },
  {
    name: "Backend",
    icon: Database,
    items: [
      { name: "Python", level: "Intermediate", percent: 60 },
      { name: "MySQL", level: "Intermediate", percent: 50 },
      { name: "MongoDB", level: "Intermediate", percent: 40 },
      { name: "Prisma", level: "Intermediate", percent: 30 },
      { name: "MySQL", level: "Intermediate", percent: 60 },
    ],
  },
  {
    name: "Deployment Tools",
    icon: Cpu,
    items: [
      { name: "GitHub Actions", level: "Intermediate", percent: 60 },
      { name: "AWS EC2", level: "Intermediate", percent: 30 },
      { name: "AWS S3", level: "Intermediate", percent: 30 },
    ],
  },
  {
    name: "AI Tools",
    icon: BrainCircuit,
    items: [
      { name: "Claude", level: "Intermediate", percent: 40 },
      { name: "ChatGPT", level: "Intermediate", percent: 60 },
      { name: "ElevenLabs", level: "Intermediate", percent: 40 },
    ],
  },
];
