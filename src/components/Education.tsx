import {
  GraduationCap,
  Calendar,
  BookOpen,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus?: string[];
  courses?: {
    category: string;
    items: string[];
  }[];
  gradient: string;
}

export function Education() {
  const { t } = useLanguage();
  
  const educationData: EducationItem[] = [
    {
      degree: "B.Sc. Software Engineering",
      institution: "Universität Stuttgart",
      location: "Stuttgart, Germany",
      period: t.education.university.period,
      courses: [
        {
          category: t.education.university.semester1,
          items: [
            t.education.university.courses.programmingSoftware,
            t.education.university.courses.programDevelopment,
            t.education.university.courses.introCS,
            t.education.university.courses.logic,
            t.education.university.courses.introTechnicalCS,
          ],
        },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Abitur",
      institution: "Evangelisches Schulzentrum Michelbach",
      location: "Michelbach, Germany",
      period: "2025",
      courses: [
        {
          category: t.education.abitur.advancedCourses,
          items: [
            t.education.abitur.courses.mathematics,
            t.education.abitur.courses.physics,
            t.education.abitur.courses.english,
          ],
        },
        {
          category: t.education.abitur.basicCourses,
          items: [
            t.education.abitur.courses.german,
            t.education.abitur.courses.socialStudies,
          ],
        },
      ],
      gradient: "from-purple-500 to-pink-500",
    },
  ];
  
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
    <section
      id="education"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

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
                {t.education.title}
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-foreground to-cyan-400 bg-clip-text text-transparent">
              {t.education.subtitle}
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 via-purple-500 to-pink-500"></div>

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {/* Timeline marker */}
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
                      delay: index * 0.3,
                    }}
                    className={`absolute w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} opacity-30`}
                  ></motion.div>

                  {/* Middle rotating ring */}
                  <motion.div
                    animate={{
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute w-10 h-10 rounded-lg border-2 ${
                      index === 0
                        ? "border-blue-500/40"
                        : "border-purple-500/40"
                    }`}
                  ></motion.div>

                  {/* Inner glowing square with icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.2,
                    }}
                    className={`relative w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                    style={{
                      boxShadow:
                        index === 0
                          ? "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)"
                          : "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)",
                    }}
                  >
                    <GraduationCap className="h-4 w-4 text-white" />
                  </motion.div>
                </div>

                <motion.div
                  variants={containerVariants}
                  className="space-y-4"
                >
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <h3>{item.degree}</h3>
                    <div
                      className={`text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text`}
                    >
                      {item.institution}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {item.location} • {item.period}
                      </span>
                    </div>
                  </motion.div>

                  {/* Focus Areas / Schwerpunkte */}
                  {item.focus && (
                    <motion.div
                      variants={itemVariants}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-sm">
                          Schwerpunkte:
                        </span>
                      </div>
                      <div className="space-y-2">
                        {item.focus.map((area, areaIndex) => (
                          <motion.div
                            key={areaIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.4 + areaIndex * 0.1,
                            }}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span
                              className={`text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text mt-1`}
                            >
                              •
                            </span>
                            <span>{area}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Courses */}
                  {item.courses && (
                    <motion.div
                      variants={itemVariants}
                      className="space-y-4"
                    >
                      {item.courses.map(
                        (courseCategory, catIndex) => (
                          <div
                            key={catIndex}
                            className="space-y-2"
                          >
                            <div className="flex items-center gap-2">
                              <BookOpen className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {courseCategory.category}:
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 pl-6">
                              {courseCategory.items.map(
                                (course, courseIndex) => (
                                  <motion.span
                                    key={courseIndex}
                                    initial={{
                                      opacity: 0,
                                      scale: 0.8,
                                    }}
                                    whileInView={{
                                      opacity: 1,
                                      scale: 1,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                      delay:
                                        0.4 +
                                        courseIndex * 0.05,
                                    }}
                                    whileHover={{
                                      scale: 1.05,
                                      y: -2,
                                    }}
                                    className={`relative px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-gradient-to-r hover:${item.gradient}/20 hover:border hover:border-transparent transition-all duration-300 cursor-pointer`}
                                    style={{
                                      boxShadow:
                                        "0 0 0 rgba(0,0,0,0)",
                                    }}
                                    onMouseEnter={(e) => {
                                      const shadowColors = {
                                        "from-blue-500 to-cyan-500":
                                          "0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(6, 182, 212, 0.3)",
                                        "from-purple-500 to-pink-500":
                                          "0 0 15px rgba(168, 85, 247, 0.4), 0 0 30px rgba(236, 72, 153, 0.3)",
                                      };
                                      e.currentTarget.style.boxShadow =
                                        shadowColors[
                                          item.gradient as keyof typeof shadowColors
                                        ] ||
                                        "0 0 15px rgba(59, 130, 246, 0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.boxShadow =
                                        "0 0 0 rgba(0,0,0,0)";
                                    }}
                                  >
                                    {course}
                                  </motion.span>
                                ),
                              )}
                            </div>
                          </div>
                        ),
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}