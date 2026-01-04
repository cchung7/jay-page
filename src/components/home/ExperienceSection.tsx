"use client";

// import { Separator } from "@/components/ui/separator";

import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Briefcase,
  Layout,
  GraduationCap,
  Github,
  ExternalLink,
} from "lucide-react";

import Link from "next/link";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { education } from "@/data/education";

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
    <section id="experience" className="py-24 md:py-32 pb-30 px-6 bg-secondary/10">
      <div className="container max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-1">
          {/* <Separator className="w-8 md:w-12 bg-accent h-1" /> */}
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent"></h2>
        </div>

        <div className="text-center space-y-1">
          <h2 className="text-xs font-black uppercase tracking-[0.5em] text-accent">
            Experience
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter italic">The Technical Stack</h3>
        </div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
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

          {/* WORK / EXPERIENCE */}
          <Tabs.Content
            key="work-content"
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
                <Card className="h-full border border-border/40 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-500 rounded-3xl group overflow-hidden bg-background">
                  <CardContent className="p-10 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="rounded-2xl bg-secondary flex items-center justify-center transition-colors">
                        <Briefcase
                          size={20}
                          className="text-primary group-hover:text-accent transition-colors"
                        />
                      </div>

                      <Badge className="bg-secondary text-primary border-none rounded-lg font-black text-[9px] uppercase tracking-widest">
                        {work.period}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-2xl font-black tracking-tight">{work.role}</h4>
                      <p className="text-accent font-bold tracking-tight">{work.company}</p>
                    </div>

                    {/* OPTIONAL: Text line clamps */}
                    {/* <p className="text-muted-foreground leading-relaxed font-medium line-clamp-3">{work.desc}</p> */}
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {work.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 border border-border/60 px-3 py-1 rounded-full"
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
            key="projects-content"
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
                <Card className="group border border-border/40 rounded-3xl overflow-hidden bg-background h-full hover:shadow-2xl transition-all duration-500">
                  <div className="h-12 bg-muted group-hover:bg-accent/5 transition-colors relative flex items-center justify-center p-2">
                    <div className="absolute top-1 left-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40">
                        {proj.type}
                      </span>
                    </div>
                    <Layout className="h-7 w-7 text-muted-foreground/20 group-hover:text-accent transition-colors duration-500" />
                  </div>

                  <CardContent className="p-2.5 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-black tracking-tight">{proj.name}</h4>
                      <div className="flex gap-2">
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Tabs.Content>

          {/* SKILLS */}
          <Tabs.Content
            key="skills-content"
            value="skills"
            className="grid grid-cols-1 md:grid-cols-3 gap-2 outline-none"
          >
            {skills.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="group border border-border/40 rounded-3xl bg-background hover:border-accent/40 transition-all duration-500 h-full p-10 space-y-10">
                  <div className="flex items-center gap-2">
                    <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                      <cat.icon className="h-6 w-6 group-hover:text-accent transition-colors" />
                    </div>
                    <h4 className="text-xl font-black tracking-tight">{cat.name}</h4>
                  </div>

                  <div className="space-y-1">
                    {cat.items.map((item) => (
                      <div key={item} className="flex flex-col gap-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                          <span>{item}</span>
                          <span className="text-accent">Expert</span>
                        </div>
                        <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="h-full bg-linear-to-r from-accent to-accent/60"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
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
                <Card className="border border-border/40 rounded-3xl bg-background p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h4 className="text-2xl font-black tracking-tight">{edu.school}</h4>
                      <p className="text-accent font-bold tracking-tight uppercase text-xs">
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <Badge className="bg-secondary text-primary border-none rounded-lg font-black text-[9px] uppercase tracking-widest mb-2">
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
