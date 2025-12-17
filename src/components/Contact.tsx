import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "izotovoleksandr05@gmail.com",
      href: "mailto:izotovoleksandr05@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
      shadowColor: "rgba(59, 130, 246, 0.6)",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/oleksandr-izotov",
      href: "https://github.com/oleksandr-izotov",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "rgba(168, 85, 247, 0.6)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/oleksandr-izotov",
      href: "https://www.linkedin.com/in/oleksandr-izotov/",
      gradient: "from-cyan-500 to-teal-500",
      shadowColor: "rgba(6, 182, 212, 0.6)",
    },
  ];

  const telegramContact = {
    icon: Send,
    label: "Telegram",
    value: "@oleizotov",
    href: "https://t.me/oleizotov",
    gradient: "from-sky-500 to-blue-600",
    shadowColor: "rgba(14, 165, 233, 0.6)",
  };

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
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pulse-glow"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>

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
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
              <span className="text-muted-foreground">
                {t.contact.title}
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-foreground via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t.contact.subtitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {t.contact.description}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl border border-border bg-card hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  <div className="space-y-3 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.gradient} opacity-20 group-hover:opacity-100 flex items-center justify-center transition-all duration-300`}
                      style={{
                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px ${method.shadowColor}, 0 0 40px ${method.shadowColor}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 0 0 rgba(0,0,0,0)";
                      }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="space-y-1">
                      <div className="text-muted-foreground text-sm">
                        {method.label}
                      </div>
                      <div className="text-sm break-all group-hover:text-foreground transition-colors duration-300">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Second row - Telegram centered */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="hidden md:block"></div>
            <motion.a
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              href={telegramContact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-border bg-card hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${telegramContact.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              <div className="space-y-3 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${telegramContact.gradient} opacity-20 group-hover:opacity-100 flex items-center justify-center transition-all duration-300`}
                  style={{
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${telegramContact.shadowColor}, 0 0 40px ${telegramContact.shadowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 rgba(0,0,0,0)";
                  }}
                >
                  <Send className="h-6 w-6 text-white" />
                </motion.div>
                <div className="space-y-1">
                  <div className="text-muted-foreground text-sm">
                    {telegramContact.label}
                  </div>
                  <div className="text-sm break-all group-hover:text-foreground transition-colors duration-300">
                    {telegramContact.value}
                  </div>
                </div>
              </div>
            </motion.a>
            <div className="hidden md:block"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-8"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 border-0 text-white"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:izotovoleksandr05@gmail.com"
                className="gap-2"
              >
                <Send className="h-5 w-5" />
                {t.contact.sendMessage}
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="pt-24 text-center relative z-10"
      >
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
            <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
            <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
          </div>
          <span>© 2025 Oleksandr Izotov</span>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
            <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <p className="text-muted-foreground text-xs pt-2">
          {t.contact.footer}
        </p>
      </motion.div>
    </section>
  );
}