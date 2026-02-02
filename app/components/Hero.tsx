"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-16 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs - Reduced blur on mobile for performance */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-400/8 rounded-full blur-3xl md:blur-3xl blur-xl will-change-transform"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(0)" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/8 rounded-full blur-3xl md:blur-3xl blur-xl will-change-transform"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(0)" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/10 dark:bg-pink-400/8 rounded-full blur-3xl md:blur-3xl blur-xl will-change-transform"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(0)" }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="inline-block mb-4 px-4 py-2 rounded-full bg-foreground/5 dark:bg-foreground/10 text-sm font-medium border border-foreground/10"
        >
          Kdo jsem?
        </motion.div>
        <motion.h1
          variants={itemVariants}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Jakub{" "}
          </span>
          Lipár
        </motion.h1>
        <motion.p
          variants={itemVariants}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-xl sm:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto"
        >
          UX/UI Designer,<br />
          Full-Stack Web Developer
        </motion.p>
        <motion.p
          variants={itemVariants}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-base sm:text-sm text-foreground/70 mb-8 max-w-2xl mx-auto"
        >
          Potřebujete moderní web, vizitku nebo jinou grafiku? Neváhejte mě kontaktovat.
        </motion.p>
        <motion.div
          variants={itemVariants}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#portfolio"
            className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Zobrazit mé práce
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            Kontaktovat mě
          </motion.a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-16"
        >
          <motion.a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Prozkoumat</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
