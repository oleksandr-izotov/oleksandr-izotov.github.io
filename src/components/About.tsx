import { Code2, Database, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: "Backend Focus",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "rgba(59, 130, 246, 0.6)",
    },
    {
      icon: Database,
      title: "Data & Automation",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "rgba(168, 85, 247, 0.6)",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      gradient: "from-cyan-500 to-teal-500",
      shadowColor: "rgba(6, 182, 212, 0.6)",
    },
  ];

  const highlightDescriptions = [
    t.about.highlights.backendFocus,
    t.about.highlights.dataAutomation,
    t.about.highlights.problemSolver,
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-muted-foreground">
                {t.about.title}
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-foreground to-blue-400 bg-clip-text text-transparent">
              {t.about.subtitle}
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.bio.paragraph1}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.bio.paragraph2}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6 pt-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="group space-y-3 p-6 rounded-lg border border-border bg-card/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-100 flex items-center justify-center transition-all duration-300`}
                    style={{
                      boxShadow: "0 0 0 rgba(0,0,0,0)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${item.shadowColor}, 0 0 40px ${item.shadowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 0 rgba(0,0,0,0)";
                    }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3>{item.title}</h3>
                  <p className="text-muted-foreground">
                    {highlightDescriptions[index]}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}