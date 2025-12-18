import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface SkillCategory {
  title: string;
  skills: string[];
  gradient: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "JUnit",
      "React",
      "Tailwind CSS",
      "Motion (Framer Motion)",
      "HTML",
      "CSS",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "SQLite"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Git",
      "Docker",
      "bash",
      "Linux (Ubuntu, Debian)",
      "Maven",
      "REST API",
      "Postman",
    ],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    title: "Languages",
    skills: ["German (C1)", "English (B2)", "Ukrainian (Native)", "Russian (Native)"],
    gradient: "from-emerald-500 to-green-500",
  },
];

export function Skills() {
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
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-teal-500"></div>
              <span className="text-muted-foreground">{t.skills.title}</span>
            </div>
            <h2 className="bg-gradient-to-r from-foreground to-cyan-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
          </motion.div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-4">
                <h3 className={`text-transparent bg-gradient-to-r ${category.gradient} bg-clip-text`}>
                  {category.title}
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      whileHover={{ 
                        y: -3, 
                        scale: 1.05,
                        transition: { duration: 0.2 } 
                      }}
                      className="group relative px-4 py-2 rounded-lg border border-border bg-card hover:border-transparent transition-all duration-300 overflow-hidden cursor-pointer"
                      style={{
                        boxShadow: '0 0 0 rgba(0,0,0,0)',
                      }}
                      onMouseEnter={(e) => {
                        const gradientColors = {
                          'from-blue-500 to-cyan-500': 'rgba(59, 130, 246, 0.4)',
                          'from-purple-500 to-pink-500': 'rgba(168, 85, 247, 0.4)',
                          'from-cyan-500 to-teal-500': 'rgba(6, 182, 212, 0.4)',
                          'from-pink-500 to-rose-500': 'rgba(244, 63, 94, 0.4)',
                          'from-emerald-500 to-green-500': 'rgba(46, 213, 115, 0.4)',
                        };
                        const shadowColor = gradientColors[category.gradient as keyof typeof gradientColors] || 'rgba(59, 130, 246, 0.4)';
                        e.currentTarget.style.boxShadow = `0 0 15px ${shadowColor}, 0 0 30px ${shadowColor}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
                      }}
                    >
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <span className="text-foreground relative z-10 group-hover:text-white transition-colors duration-300">{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Code-inspired decorative element */}
          <motion.div
            variants={itemVariants}
            className="pt-8 opacity-40"
          >
            <div className="space-y-2 font-mono text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2"
              >
                <span className="text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text">const</span>
                <span className="text-muted-foreground">skills</span>
                <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">=</span>
                <span className="text-muted-foreground">{'['}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="pl-6 text-muted-foreground"
              >
                <span className="text-cyan-400">"Clean Code"</span>
                <span>, </span>
                <span className="text-cyan-400">"Problem Solving"</span>
                <span>, </span>
                <span className="text-cyan-400">"Team Collaboration"</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-muted-foreground"
              >
                <span>{']'}</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}