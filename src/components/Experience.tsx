import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      
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
              <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <span className="text-muted-foreground">{t.experience.title}</span>
            </div>
            <h2 className="bg-gradient-to-r from-foreground to-purple-400 bg-clip-text text-transparent">
              {t.experience.subtitle}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent"></div>

            {/* Experience item */}
            <motion.div
              variants={itemVariants}
              className="relative pl-16 pb-12"
            >
              {/* Modern hexagonal timeline marker */}
              <div className="absolute left-0 w-12 h-12 flex items-center justify-center">
                {/* Outer pulsing ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 opacity-30"
                ></motion.div>
                
                {/* Middle ring */}
                <motion.div
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-10 h-10 rounded-lg border-2 border-pink-500/40"
                ></motion.div>
                
                {/* Inner glowing square with icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg"
                  style={{
                    boxShadow: '0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(168, 85, 247, 0.4)',
                  }}
                >
                  <Briefcase className="h-4 w-4 text-white" />
                </motion.div>
              </div>

              <motion.div
                variants={containerVariants}
                className="space-y-4"
              >
                <motion.div variants={itemVariants} className="space-y-2">
                  <h3>Ferienarbeiter Produktion / Pre-Production Assembly</h3>
                  <div className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
                    RECARO Aircraft Seating GmbH & Co. KG
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Schwäbisch Hall • 07/2024 – 08/2024, 06/2025, 08/2025 – 09/2025</span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-3 text-muted-foreground">
                  <p>
                    {t.experience.recaro.description}
                  </p>
                  
                  <div className="space-y-2 pt-2">
                    {t.experience.recaro.highlights.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mt-1">•</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-2 pt-4"
                >
                  {[
                    t.experience.recaro.skills.dataStructuring,
                    t.experience.recaro.skills.workflowAutomation,
                    t.experience.recaro.skills.production,
                    t.experience.recaro.skills.qualityControl,
                  ].map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 hover:border hover:border-pink-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                      style={{
                        boxShadow: '0 0 0 rgba(0,0,0,0)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(236, 72, 153, 0.4), 0 0 30px rgba(168, 85, 247, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}