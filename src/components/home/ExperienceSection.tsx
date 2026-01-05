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
        <div className="text-center space-y-1">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent">
            Experience
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic">
            The Technical Stack
          </h3>
        </div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                  <CardContent className="p-10 space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-2xl font-black tracking-tight italic">
                          {work.role}
                        </h4>
                        <p className="text-accent font-bold tracking-tight">
                          {work.company}
                        </p>
                      </div>
                      <Briefcase className="h-8 w-8 text-muted-foreground/30 group-hover:text-accent transition-colors duration-500" />
                    </div>

                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {work.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-widest text-foreground/80 bg-secondary/40 border border-border/70 px-3 py-1 rounded-full"
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
                transition={{ delay: i * 0.08 }}
              >
                <Card className="group border border-border/40 rounded-3xl overflow-hidden bg-background h-full hover:shadow-2xl transition-all duration-500 hover:border-accent/70">
                  <CardContent className="p-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-black tracking-tight italic">
                        {proj.name}
                      </h4>
                      <Badge className="rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                        {proj.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {proj.desc}
                    </p>

                    <div className="flex gap-4 pt-4">
                      {proj.links?.git && (
                        <Link
                          href={proj.links.git}
                          target="_blank"
                          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      )}

                      {proj.links?.live && (
                        <Link
                          href={proj.links.live}
                          target="_blank"
                          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Tabs.Content>

          {/* SKILLS */}
          <Tabs.Content
            value="skills"
            className="grid grid-cols-1 md:grid-cols-2 gap-2 outline-none"
          >
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="group border border-border/40 rounded-3xl bg-background hover:border-accent/70 transition-all duration-500 h-full p-10 space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center">
                        <Icon className="h-7 w-7 text-muted-foreground group-hover:text-accent transition-colors duration-500" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black italic tracking-tight">
                          {skill.name}
                        </h4>
                        <p className="text-muted-foreground font-medium">
                          Core tooling & technologies
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge
                          key={item}
                          variant="secondary"
                          className={cn(
                            "px-4 py-2 rounded-full text-xs font-black tracking-tight",
                            "border border-border/40 bg-secondary/30"
                          )}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </Tabs.Content>

          {/* EDUCATION */}
          <Tabs.Content
            value="edu"
            className="grid grid-cols-1 gap-2 outline-none"
          >
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="border border-border/40 rounded-3xl bg-background p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 h-full hover:shadow-lg transition-all group hover:border-accent/70">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-7 w-7 text-muted-foreground/40 group-hover:text-accent transition-colors duration-500" />
                      <h4 className="text-2xl font-black italic tracking-tight">
                        {edu.school}
                      </h4>
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {edu.degree}
                    </p>
                    <p className="text-muted-foreground/60 text-[10px] font-black uppercase tracking-widest">
                      {edu.years}
                    </p>
                  </div>

                  <div className="flex flex-col items-start md:items-end gap-2">
                    <Badge
                      variant="secondary"
                      className="rounded-full px-4 py-2 text-xs font-black tracking-tight border border-border/40 bg-secondary/30"
                    >
                      {edu.gpa}
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
