import { motion } from "motion/react";
import { useLanguage, Language } from "../contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "de", label: "DE", flag: "🇩🇪" },
    { code: "ru", label: "RU", flag: "🇷🇺" },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="relative flex items-center gap-1 p-1 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
            language === lang.code
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Background gradient for selected language */}
          {language === lang.code && (
            <motion.div
              layoutId="language-background"
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}

          {/* Language content */}
          <span className="relative z-10 flex items-center gap-1.5">
            <span className="text-base">{lang.flag}</span>
            <span>{lang.label}</span>
          </span>
        </motion.button>
      ))}
    </div>
  );
}