"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { name: "O Mně", href: "#about" },
  { name: "Zkušenosti", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from cookie or system preference
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    // Check what theme is currently applied (set by ThemeScript)
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setCookie("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setCookie("theme", "light");
    }
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/50 dark:bg-black/50 backdrop-blur-md md:backdrop-blur-xl shadow-lg rounded-2xl"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              className="text-xl md:text-2xl font-bold text-foreground hover:scale-105 active:scale-95 transition-transform duration-200 relative group"
            >
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Jakub Lipár
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300" />
            </a>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-lg group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-foreground/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              <motion.button
                onClick={toggleDarkMode}
                className="ml-2 p-2 rounded-lg hover:bg-foreground/5 transition-colors"
                aria-label="Toggle dark mode"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-foreground/5 transition-colors active:scale-95"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                className="p-2 rounded-lg hover:bg-foreground/5 transition-colors relative z-50 active:scale-95"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 dark:bg-black/80 z-40 md:hidden"
              onClick={closeMenu}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden flex items-center justify-center bg-white dark:bg-black"
            >

              <div className="w-full px-6 py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-2xl font-bold mb-2">Navigace</h2>
                  <div className="w-16 h-0.5 bg-linear-to-r from-indigo-600 to-purple-600 mx-auto" />
                </motion.div>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="block text-center py-4 px-6 text-lg font-medium text-foreground/70 hover:text-foreground rounded-xl hover:bg-foreground/5 transition-all active:scale-95"
                      style={{
                        animation: `fadeIn 0.3s ease-out ${0.1 + index * 0.05}s both`,
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      toggleDarkMode();
                    }}
                    className="w-full mt-4 py-4 px-6 text-lg font-medium text-foreground/70 hover:text-foreground rounded-xl hover:bg-foreground/5 transition-all flex items-center justify-center gap-2 active:scale-95"
                    style={{
                      animation: `fadeIn 0.3s ease-out ${0.1 + navItems.length * 0.05}s both`,
                    }}
                  >
                    {darkMode ? (
                      <div className="flex items-center gap-2">
                        <Sun className="w-5 h-5" />
                        <span>Světlý režim</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Moon className="w-5 h-5" />
                        <span>Tmavý režim</span>
                      </div>
                    )}
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
