import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "education", label: t.nav.education },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full"
          ></motion.div>
        </div>

        <div className="hidden md:flex gap-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(section.id)}
              className="text-muted-foreground hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:bg-clip-text transition-all"
            >
              {section.label}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}