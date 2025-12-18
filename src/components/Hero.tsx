import { Download, FolderGit2, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import darkHeroImage from "../assets/hero-dark.webp";
import lightHeroImage from "../assets/hero-light.webp";
import cvFile from "../assets/Lebenslauf-DE-Oleksandr.pdf";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const { t } = useLanguage();
  
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Oleksandr_Izotov_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Decorative element */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="h-px w-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
              <span className="text-muted-foreground">Software Engineer</span>
            </motion.div>

            {/* Main content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl bg-gradient-to-r from-foreground via-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                {t.hero.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3"
              >
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                  {t.hero.title} specializing in{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">
                    Backend Development
                  </span>
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span>{t.hero.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-500">•</span>
                    <span>Java & Python</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0"
                >
                  <FolderGit2 className="h-5 w-5" />
                  {t.hero.viewProjects}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadCV}
                  className="gap-2 border-blue-500/50 hover:bg-blue-500/10"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </Button>
              </motion.div>
            </div>

            {/* Decorative grid pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-12"
            >
              <div className="grid grid-cols-8 gap-2 max-w-md">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.03 }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    style={{
                      opacity: Math.random() * 0.5 + 0.3,
                    }}
                  ></motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative float-animation">
              {/* Animated glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-purple-500/30 blur-3xl rounded-full scale-75 pulse-glow"></div>
              
              {/* Image container */}
              <motion.div 
                key={isDark ? 'dark' : 'light'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
              >
                <img
                  src={isDark ? darkHeroImage : lightHeroImage}
                  alt="Creative developer"
                  className="w-full h-auto max-w-md object-cover"
                />
              </motion.div>

              {/* Decorative elements around image */}
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-blue-500/40 rounded-lg -z-10"
              ></motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full -z-10"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}