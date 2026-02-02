import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <footer className="py-8 text-center text-sm text-foreground/50 border-t border-indigo-500/10 dark:border-indigo-400/20">
        <p>© {new Date().getFullYear()} Jakub. All rights reserved.</p>
      </footer>
    </main>
  );
}
