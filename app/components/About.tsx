"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Zap, TrendingUp, Users } from "lucide-react";

const aboutCards = [
  {
    icon: Code,
    title: "Fullstack Developer",
    description: "Vytvářím moderní webové aplikace s důrazem na čistý kód, výkon a škálovatelnost.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    description: "Navrhuji intuitivní a vizuálně přitažlivá rozhraní, která uživatelé milují používat.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Moderní Technologie",
    description: "Pracuji s nejnovějšími nástroji: React, TypeScript, Symfony, PHP a další.",
    color: "from-indigo-500 to-purple-500",
  },
];

const hobbies = [
  { name: "FPV Drony", emoji: "🚁" },
  { name: "RC Letadla", emoji: "✈️" },
  { name: "3D Tisk", emoji: "🖨️" },
];

const stats = [
  { label: "Let zkušeností", value: "8+", icon: TrendingUp },
  { label: "Dokončených projektů", value: "50+", icon: Zap },
  { label: "Spokojených klientů", value: "30+", icon: Users },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
        >
          Co dělám?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto"
        >
          Jmenuji se <b className="text-foreground">Jakub Lipár</b> a jsem fullstack web developer a UI/UX designer.
          Zaměřuji se na tvorbu moderních webových aplikací s důrazem na čistý kód, výkon a uživatelskou přívětivost.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 hover:border-foreground/20 transition-all hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${card.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {card.description}
                </p>
                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity -z-10`} />
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 hover:scale-105 hover:-translate-y-1 transition-transform duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="inline-flex p-2 rounded-lg bg-foreground/10 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <motion.div
                  className="text-4xl font-bold mb-2 bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technologies & Hobbies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="p-6 rounded-2xl bg-foreground/5 dark:bg-foreground/10 border border-foreground/10"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Technologie
            </h3>
            <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
              Pracuji s technologiemi jako <b>Symfony, PHP, React, TypeScript a Tailwind CSS</b>.
              Mám rád efektivní řešení a propojení dobře navrženého frontendu s výkonným backendem.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Symfony", "PHP", "React", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="px-3 py-1 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-xs font-medium hover:scale-110 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="p-6 rounded-2xl bg-foreground/5 dark:bg-foreground/10 border border-foreground/10"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6" />
              Volný čas
            </h3>
            <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
              Ve volném čase se věnuji stavbě <b>FPV dronů, RC letadel a 3D tisku</b>.
              Neustále se učím nové technologie a sleduji trendy ve webovém vývoji i designu.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 hover:scale-110 hover:rotate-[5deg] transition-all duration-200"
                >
                  <span className="text-xl">{hobby.emoji}</span>
                  <span className="text-sm font-medium">{hobby.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 mb-4">
            Pokud hledáte <b className="text-foreground">vývojáře pro váš projekt</b>, ozvěte se mi a rád proberu možnosti spolupráce.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Kontaktovat mě
          </a>
        </motion.div>
      </div>
    </section>
  );
}
