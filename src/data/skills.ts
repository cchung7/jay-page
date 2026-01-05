import { Cpu, Database, Layout, BrainCircuit } from "lucide-react";

export const skills = [
  { name: "Frontend", 
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js", "Node.js"], 
    icon: Layout 
  },
  { name: "Backend", 
    items: ["Python", "MySQL", "MongoDB"], 
    icon: Database 
  },
  { name: "CI/CD", 
    items: ["AWS", "VPS", "GitHub"], 
    icon: Cpu 
  },
  { name: "Ai Tools", 
    items: ["Claude.ai", "ChatGPT", "ElevenLabs"], 
    icon: BrainCircuit
  },
];