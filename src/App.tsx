import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero isDark={isDark} />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Experience />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}