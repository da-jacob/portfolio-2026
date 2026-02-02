"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillStages = [
  { name: "Základy", color: "from-gray-400 to-gray-500" },
  { name: "Mírně pokročilý", color: "from-blue-400 to-blue-500" },
  { name: "Pokročilý", color: "from-cyan-400 to-cyan-500" },
  { name: "Expert", color: "from-indigo-400 to-indigo-500" },
];

const skills = [
  { name: "HTML 5", stage: 3 },
  { name: "CSS 3 + SCSS / SASS", stage: 3 },
  { name: "Tailwind CSS", stage: 3 },
  { name: "JavaScript / TypeScript", stage: 2 },
  { name: "PHP", stage: 2 },
  { name: "Symfony", stage: 2 },
  { name: "React", stage: 2 },
  { name: "Next.js", stage: 2 },
  { name: "Node.js", stage: 2 },
  { name: "Python", stage: 1 },
  { name: "Flutter", stage: 1 },
];

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Motion",
  "PHP",
  "Next.js",
  "Node.js",
  "Symfony",
  "Twig",
  "Python",
  "Git",
  "PostgreSQL",
  "Figma",
  "Flutter",
  "Strapi"
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-center"
        >
          Co umím?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Zkušenosti</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const stageIndex = skill.stage;
                const currentStage = skillStages[stageIndex];

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-linear-to-r ${currentStage.color} text-white`}>
                        {currentStage.name}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {skillStages.map((stage, stageIdx) => {
                        const isActive = stageIdx <= stageIndex;
                        return (
                          <div
                            key={stage.name}
                            className={`flex-1 h-2 rounded-full transition-all duration-300 ${isActive
                              ? `bg-linear-to-r ${stage.color}`
                              : "bg-foreground/10"
                              }`}
                            style={{
                              animationDelay: isInView ? `${0.4 + index * 0.1 + stageIdx * 0.05}s` : "0s",
                            }}
                          />
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Technologie</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                  }}
                  className="px-4 py-2 rounded-full bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 text-sm font-medium cursor-default hover:bg-foreground/10 dark:hover:bg-foreground/20 hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
