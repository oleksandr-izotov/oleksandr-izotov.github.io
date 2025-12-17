import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface Project {
  title?: string;
  description?: string;
  techStack: string[];
  githubUrl?: string;
  gradient: string;
  shadowColor: string;
  isComingSoon?: boolean;
}

export function Projects() {
  const { t } = useLanguage();
  
  const projects: Project[] = [
    {
      title: t.projects.portfolio.title,
      description: t.projects.portfolio.description,
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Motion",
        "Responsive",
      ],
      githubUrl: "https://github.com/oleksandr-izotov/oleksandr-izotov.github.io",
      gradient: "from-cyan-500 to-teal-500",
      shadowColor: "rgba(6, 182, 212, 0.6)",
    },
    {
      techStack: [],
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "rgba(59, 130, 246, 0.6)",
      isComingSoon: true,
    },
    {
      techStack: [],
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "rgba(168, 85, 247, 0.6)",
      isComingSoon: true,
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-muted/30 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="text-muted-foreground">
                {t.projects.title}
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-foreground to-purple-400 bg-clip-text text-transparent">
              {t.projects.subtitle}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={
                  !project.isComingSoon
                    ? {
                        y: -8,
                        transition: { duration: 0.3 },
                      }
                    : {}
                }
                className="group p-6 rounded-xl border border-border bg-card hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {project.isComingSoon ? (
                  // Coming Soon card - Terminal Style
                  <div className="h-full min-h-[250px] flex items-center justify-center relative">
                    <div className="w-full space-y-4 font-mono text-sm">
                      {/* Terminal header */}
                      <div className="flex items-center gap-2 pb-4 border-b border-border/50">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                        </div>
                        <span className="text-muted-foreground text-xs ml-2">
                          terminal
                        </span>
                      </div>

                      {/* Terminal content */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                          >
                            $
                          </span>
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{
                              opacity: 1,
                              width: "auto",
                            }}
                            transition={{
                              duration: 1,
                              delay: 0.5,
                            }}
                            className="text-foreground overflow-hidden whitespace-nowrap"
                          >
                            npm run create-project
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="inline-block w-2 h-4 bg-foreground ml-0.5"
                          ></motion.span>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5 }}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className={`text-lg bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                          >
                            ⠋
                          </motion.span>
                          <span>
                            Building something awesome...
                          </span>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 2,
                          }}
                          className="text-muted-foreground/60 text-xs"
                        >
                          └─ Stay tuned for updates
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular project card
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-start justify-between">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-100 flex items-center justify-center transition-all duration-300`}
                        style={{
                          boxShadow: "0 0 0 rgba(0,0,0,0)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 20px ${project.shadowColor}, 0 0 40px ${project.shadowColor}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow =
                            "0 0 0 rgba(0,0,0,0)";
                        }}
                      >
                        <Github className="h-6 w-6 text-white" />
                      </motion.div>
                      <motion.a
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>

                    <div className="space-y-2">
                      <h3>{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map(
                        (tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="relative px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border hover:border-purple-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                            style={{
                              boxShadow: "0 0 0 rgba(0,0,0,0)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.boxShadow =
                                "0 0 15px rgba(168, 85, 247, 0.4), 0 0 30px rgba(236, 72, 153, 0.3)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.boxShadow =
                                "0 0 0 rgba(0,0,0,0)";
                            }}
                          >
                            {tech}
                          </motion.span>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-8"
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-purple-500/50 hover:bg-purple-500/10"
            >
              <a
                href="https://github.com/oleksandr-izotov?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-5 w-5" />
                {t.projects.viewAll}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}