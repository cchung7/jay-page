"use client";

import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Github, GraduationCap } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionChip } from "@/components/shared/SectionChip";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SmartLink } from "@/components/shared/SmartLink";
import { SurfacePanel } from "@/components/shared/SurfacePanel";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = React.useState("work");

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#projects") {
      setActiveTab("projects");
    }
  }, []);

  const triggerClass = cn(
    "rounded-xl px-5 py-3 text-xs font-black uppercase tracking-[0.18em]",
    "text-muted-foreground transition-all duration-200",
    "hover:bg-white/[0.06] hover:text-foreground",
    "data-[state=active]:bg-white/[0.06] data-[state=active]:text-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
  );

  return (
    <section id="experience" className="bg-secondary/10 px-6 py-24 md:py-32">
      <div className="container mx-auto max-w-6xl space-y-6">
        <SectionHeader eyebrow="Experience" title="Technical Stack" />

        <Tabs.Root
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center">
            <SurfacePanel className="rounded-[1.75rem] p-2">
              <Tabs.List className="flex flex-wrap items-center justify-center gap-1.5">
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
            </SurfacePanel>
          </div>

          <Tabs.Content
            value="work"
            className="mt-6 grid grid-cols-1 gap-3 outline-none md:grid-cols-2"
          >
            {experience.map((work, i) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="group h-full overflow-hidden rounded-3xl border border-border/40 bg-background shadow-sm transition-all duration-500 hover:translate-y-[-2px] hover:border-accent/70 hover:shadow-xl">
                  <CardContent className="space-y-6 p-10 md:p-12">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-secondary text-primary transition-all group-hover:bg-accent group-hover:text-white">
                        <Briefcase className="h-6 w-6 transition-colors" />
                      </div>

                      <Badge className="rounded-lg border-none bg-secondary text-xs font-black uppercase tracking-wide text-primary">
                        {work.period}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <h4 className="min-w-0 text-3xl font-black tracking-tight">
                        {work.role}
                      </h4>
                      <p className="font-bold tracking-tight text-accent">
                        {work.company}
                      </p>
                    </div>

                    <p className="font-medium leading-relaxed text-muted-foreground">
                      {work.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {work.tags.map((tag) => (
                        <SectionChip key={tag}>{tag}</SectionChip>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Tabs.Content>

          <Tooltip.Provider delayDuration={150}>
            <Tabs.Content
              value="projects"
              className="mt-6 grid grid-cols-1 gap-3 outline-none md:grid-cols-2"
            >
              {projects.map((proj, i) => (
                <motion.div
                  key={proj.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="group h-full overflow-hidden rounded-3xl border border-border/40 bg-background transition-all duration-500 hover:translate-y-[-2px] hover:border-accent/70 hover:shadow-2xl">
                    <CardContent className="space-y-6 p-10 md:p-12">
                      <div
                        className={cn(
                          "mx-auto flex min-h-12 w-full items-center justify-center rounded-xl border border-border/50 bg-secondary/75 px-4 py-2",
                          "transition-all group-hover:border-accent/70 group-hover:bg-accent group-hover:text-white"
                        )}
                      >
                        <span
                          className={cn(
                            "w-full text-center text-[10px] font-black uppercase leading-tight tracking-[0.18em] text-muted-foreground transition-colors duration-300 sm:text-xs sm:tracking-widest",
                            "group-hover:text-white"
                          )}
                        >
                          {proj.type}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-6">
                        <h4 className="min-w-0 pr-4 text-3xl font-black tracking-tight">
                          {proj.name}
                        </h4>

                        <div className="flex shrink-0 flex-wrap gap-2">
                          {Array.isArray(proj.links.git)
                            ? proj.links.git.map((repo: any) => (
                                <Tooltip.Root key={`${repo.url}-${repo.label}`}>
                                  <Tooltip.Trigger asChild>
                                    <span className="inline-flex">
                                      <SmartLink
                                        href={repo.url}
                                        disabled={!!repo.disabled}
                                        ariaLabel={`GitHub (${repo.label})`}
                                      >
                                        <Github className="h-4 w-4" />
                                      </SmartLink>
                                    </span>
                                  </Tooltip.Trigger>

                                  <Tooltip.Portal>
                                    <Tooltip.Content
                                      side="top"
                                      sideOffset={6}
                                      className="z-50 rounded-md border border-border bg-background px-2 py-1 text-xs font-semibold text-foreground shadow-lg"
                                    >
                                      {repo.label}
                                      <Tooltip.Arrow className="fill-border" />
                                    </Tooltip.Content>
                                  </Tooltip.Portal>
                                </Tooltip.Root>
                              ))
                            : null}

                          {Array.isArray(proj.links.live)
                            ? proj.links.live.map((site: any) => (
                                <Tooltip.Root key={`${site.url}-${site.label}`}>
                                  <Tooltip.Trigger asChild>
                                    <span className="inline-flex">
                                      <SmartLink
                                        href={site.url}
                                        disabled={!!site.disabled}
                                        ariaLabel={`Website (${site.label})`}
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </SmartLink>
                                    </span>
                                  </Tooltip.Trigger>

                                  <Tooltip.Portal>
                                    <Tooltip.Content
                                      side="top"
                                      sideOffset={6}
                                      className="z-50 rounded-md border border-border bg-background px-2 py-1 text-xs font-semibold text-foreground shadow-lg"
                                    >
                                      {site.label}
                                      <Tooltip.Arrow className="fill-border" />
                                    </Tooltip.Content>
                                  </Tooltip.Portal>
                                </Tooltip.Root>
                              ))
                            : null}
                        </div>
                      </div>

                      <p className="font-medium leading-relaxed text-muted-foreground">
                        {proj.desc}
                      </p>

                      {proj.tags && proj.tags.length > 0 ? (
                        <div className="flex flex-wrap gap-2 pt-4">
                          {proj.tags.map((tag) => (
                            <SectionChip key={tag}>{tag}</SectionChip>
                          ))}
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Tabs.Content>
          </Tooltip.Provider>

          <Tabs.Content
            value="skills"
            className={cn("mt-6 overflow-x-auto pb-2 outline-none")}
          >
            <div
              className={cn(
                "grid items-start justify-center gap-3",
                "grid-cols-1 sm:grid-cols-[repeat(auto-fit,360px)]"
              )}
            >
              {skills.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="min-w-0"
                >
                  <Card className="group h-full min-w-0 origin-top scale-[0.92] space-y-8 rounded-3xl border border-border/40 bg-background p-8 transition-all duration-500 hover:border-accent/70 md:p-10 sm:scale-100">
                    <div className="flex min-w-0 items-center gap-8">
                      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-secondary text-primary transition-all group-hover:bg-accent group-hover:text-white">
                        <cat.icon className="h-6 w-6 transition-colors" />
                      </div>
                      <h4 className="min-w-0 whitespace-normal break-words text-3xl font-black leading-tight tracking-tight sm:text-2xl md:text-3xl">
                        {cat.name}
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {cat.items.map((item, j) => {
                        const raw = Number(item.percent);
                        const percent = Number.isFinite(raw)
                          ? Math.max(0, Math.min(100, raw))
                          : 0;

                        return (
                          <div
                            key={`${cat.name}-${item.name}-${j}`}
                            className="flex min-w-0 flex-col gap-2"
                          >
                            <div className="flex min-w-0 items-start justify-between gap-3 text-[9px] font-black uppercase tracking-widest sm:text-[10px]">
                              <span className="min-w-0 truncate">{item.name}</span>
                              <span className="shrink-0 whitespace-nowrap text-accent">
                                {item.level}
                              </span>
                            </div>

                            <div className="h-2 w-full overflow-hidden rounded-full border border-border/50 bg-secondary/60">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percent}%` }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{
                                  duration: 0.9,
                                  delay: i * 0.08 + j * 0.03,
                                  ease: "easeOut",
                                }}
                                className="h-full bg-linear-to-r from-accent to-accent/60"
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

          <Tabs.Content value="edu" className="mt-6 space-y-6 outline-none">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="group flex flex-col items-center gap-6 rounded-3xl border border-border/40 bg-background p-10 text-center transition-all hover:translate-y-[-2px] hover:border-accent/70 hover:shadow-lg md:p-12">
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-secondary text-primary transition-all group-hover:bg-accent group-hover:text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>

                    <div className="space-y-2 text-left">
                      <h4 className="min-w-0 text-3xl font-black tracking-tight">
                        {edu.school}
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-tight text-accent">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <Badge className="rounded-lg border-none bg-secondary text-xs font-black uppercase tracking-wide text-primary">
                    {edu.period}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
};