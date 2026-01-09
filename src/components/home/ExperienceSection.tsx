"use client";

// import { Separator } from "@/components/ui/separator";

import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Github, ExternalLink } from "lucide-react";

import Link from "next/link";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { cn } from "@/lib/utils";

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = React.useState("work");

  React.useEffect(() => {
    if (window.location.hash === "#projects") {
      setActiveTab("projects");
    }
  }, []);

  const triggerClass =
    "px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all " +
    "border border-border/60 bg-secondary/30 text-muted-foreground " +
    "shadow-md shadow-black/20 " +
    "hover:border-accent/60 hover:text-foreground hover:shadow-lg " +
    "data-[state=active]:bg-background data-[state=active]:text-primary " +
    "data-[state=active]:border-accent data-[state=active]:shadow-xl data-[state=active]:shadow-accent/10 " +
    "data-[state=active]:-translate-y-0.5";

  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/10">
      <div className="container max-w-6xl mx-auto space-y-6">
        {/* UPDATED HEADER: match AboutSection.tsx styling */}
        <header className="text-center space-y-1">
          {/* EXPERIENCE (matches "About") */}
          <h2 className="relative inline-block text-xs font-black uppercase tracking-[0.5em] text-accent">
            <span
              aria-hidden
              className="
                absolute inset-0
                text-transparent
                [-webkit-text-stroke:0.85px_var(--color-border)]
                dark:[-webkit-text-stroke:0.85px_theme(colors.border.muted)]
                pointer-events-none
              "
            >
              Experience
            </span>
            <span className="relative">Experience</span>
          </h2>

          {/* TECHNICAL STACK (matches "The Philosophy") */}
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic leading-[1.05]">
            <span className="inline-grid overflow-visible">
              {/* OUTLINE */}
              <span
                aria-hidden
                className="
                  col-start-1 row-start-1
                  text-transparent
                  [-webkit-text-stroke:1.6px_var(--color-border)]
                  dark:[-webkit-text-stroke:1.6px_theme(colors.border.muted)]
                  pointer-events-none
                  pr-[0.55em]
                "
              >
                Technical Stack
              </span>

              {/* FILL */}
              <span
                className="
                  col-start-1 row-start-1
                  pr-[0.55em]
                  bg-linear-to-b from-primary via-primary to-primary/70
                  bg-clip-text text-transparent
                "
              >
                Technical Stack
              </span>
            </span>
          </h3>
        </header>

        <Tabs.Root
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          {/* Tabs */}
          <Tabs.List
            className="flex flex-wrap justify-center gap-2 mb-4 p-2
                       bg-secondary/50 backdrop-blur-md rounded-2xl
                       border border-border/50 shadow-lg shadow-black/20
                       max-w-fit mx-auto"
          >
            <Tabs.Trigger value="work" className={triggerClass}>
              Work
            </Tabs.Trigger>
            <Tabs.Trigger value="projects" className={triggerClass}>
              Projects
            </Tabs.Trigger>
            <Tabs.Trigger value="skills" className={triggerClass}>
              Skills
            </Tabs.Trigger>
            <Tabs.Trigger value="edu" className={triggerClass}>
              Education
            </Tabs.Trigger>
          </Tabs.List>

          {/* WORK */}
          <Tabs.Content
            value="work"
            className="grid grid-cols-1 md:grid-cols-2 gap-2 outline-none"
          >
            {experience.map((work, i) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border border-border/40 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 rounded-3xl group overflow-hidden bg-background hover:border-accent/70">
                  <CardContent className="p-10 md:p-12 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="rounded-2xl bg-secondary flex items-center justify-center transition-colors">
                        <Briefcase
                          size={20}
                          className="text-primary group-hover:text-accent transition-colors"
                        />
                      </div>
                      <Badge className="bg-secondary text-primary border-none rounded-lg font-black text-xs uppercase tracking-wide">
                        {work.period}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-3xl font-black tracking-tight">
                        {work.role}
                      </h4>
                      <p className="text-accent font-bold tracking-tight">
                        {work.company}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {work.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-widest text-foreground/80 bg-secondary/50 border border-border/70 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Tabs.Content>

          {/* PROJECTS */}
          <Tabs.Content
            value="projects"
            className="grid grid-cols-1 md:grid-cols-2 gap-2 outline-none"
          >
            {projects.map((proj, i) => (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="group border border-border/40 rounded-3xl overflow-hidden bg-background h-full hover:shadow-2xl transition-all duration-500 hover:border-accent/70">
                  <CardContent className="p-10 md:p-12 space-y-6">
                    <div
                      className={cn(
                        "h-12",
                        "flex items-center justify-center",
                        "rounded-xl",
                        "bg-secondary/60",
                        "border border-border/50",
                        "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_0_rgba(0,0,0,0.35)]",
                        "transition-colors group-hover:bg-accent/10"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs font-black uppercase tracking-widest",
                          "text-muted-foreground/70",
                          "transition-colors duration-300",
                          "group-hover:text-accent"
                        )}
                      >
                        {proj.type}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-6">
                      <h4 className="text-3xl font-black tracking-tight pr-4">
                        {proj.name}
                      </h4>
                      <div className="flex gap-2 shrink-0">
                        <Link
                          href={proj.links.git}
                          className="p-2 rounded-xl bg-secondary hover:bg-accent hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                        <Link
                          href={proj.links.live}
                          className="p-2 rounded-xl bg-secondary hover:bg-accent hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {proj.desc}
                    </p>

                    {proj.tags && proj.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold uppercase tracking-widest text-foreground/80 bg-secondary/50 border border-border/70 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Tabs.Content>

          {/* SKILLS */}
          <Tabs.Content value="skills" className={cn("outline-none", "overflow-x-auto", "pb-2")}>
            <div
              className={cn(
                "grid gap-2 items-start",
                "justify-center",
                "grid-cols-[repeat(auto-fit,360px)]"
              )}
            >
              {skills.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="min-w-0"
                >
                  <Card className="group border border-border/40 rounded-3xl bg-background hover:border-accent/70 transition-all duration-500 h-full p-8 md:p-10 space-y-8 md:space-y-10 min-w-0">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                        <cat.icon className="h-6 w-6 group-hover:text-accent transition-colors" />
                      </div>
                      <h4 className="text-x1 font-black tracking-tight truncate">
                        {cat.name}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {cat.items.map((item, j) => {
                        const levelClass = "text-accent";

                        const raw = Number(item.percent);
                        const percent = Number.isFinite(raw)
                          ? Math.max(0, Math.min(100, raw))
                          : 0;

                        return (
                          <div
                            key={`${cat.name}-${item.name}`}
                            className="flex flex-col gap-2 min-w-0"
                          >
                            <div className="flex items-start justify-between gap-3 text-[10px] font-black uppercase tracking-widest min-w-0">
                              <span className="min-w-0 truncate">{item.name}</span>
                              <span className={cn(levelClass, "shrink-0 whitespace-nowrap")}>
                                {item.level} • {percent}%
                              </span>
                            </div>

                            <div
                              className={cn(
                                "h-2 w-full rounded-full overflow-hidden",
                                "bg-secondary/60 border border-border/50",
                                "shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.25)]"
                              )}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percent}%` }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{
                                  duration: 0.9,
                                  delay: i * 0.08 + j * 0.03,
                                  ease: "easeOut",
                                }}
                                className="h-full bg-linear-to-r from-accent to-accent/60 shadow-[0_0_18px_rgba(0,0,0,0.15)]"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Tabs.Content>

          {/* EDUCATION */}
          <Tabs.Content value="edu" className="space-y-6 outline-none">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border border-border/40 rounded-3xl bg-background p-10 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all group hover:border-accent/70">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                      <GraduationCap className="h-6 w-6" />
                    </div>

                    <div className="space-y-2 text-left">
                      <h4 className="text-3xl font-black tracking-tight">
                        {edu.school}
                      </h4>
                      <p className="text-accent font-bold tracking-tight uppercase text-xs">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="text-left md:text-right space-y-2">
                    <Badge className="bg-secondary text-primary border-none rounded-lg font-black text-xs uppercase tracking-wide">
                      {edu.period}
                    </Badge>
                    <p className="text-muted-foreground/60 text-[10px] font-black uppercase tracking-widest">
                      {edu.honors}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
};
