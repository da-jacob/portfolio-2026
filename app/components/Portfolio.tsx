"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectsData from "../data/projects.json";
import Image from "next/image";

const INITIAL_PROJECTS_COUNT = 6;

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS_COUNT);

  const displayedProjects = projectsData.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < projectsData.length;

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsData.length));
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          Na čem jsem pracoval?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto"
        >
          Vybrané projekty na kterých jsem pracoval.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                y: { duration: 0.5, delay: index * 0.1 },
              }}
              className="group bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-transform duration-200 ease-out"
            >
              <div className="bg-linear-to-br from-foreground/5 to-foreground/1 relative overflow-hidden">
                <Image src={project.image} alt={project.title} width={3125} height={2084} />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-foreground/10 border border-foreground/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Zobrazit
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Kód
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              Zobrazit další projekty
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
