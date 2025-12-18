import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "de" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Oleksandr Izotov",
      title: "Software Engineering Student",
      location: "Stuttgart, Germany",
      description: "Passionate about building modern web applications with clean code and great user experiences.",
      cta: "Get in Touch",
      viewProjects: "View Projects",
    },
    about: {
      title: "About Me",
      subtitle: "Backend Developer & Software Engineering Student",
      bio: {
        paragraph1: "Software Engineering student at Universität Stuttgart with hands-on experience in backend development, data automation, and system optimization. Passionate about building scalable server-side applications using Java and Python.",
        paragraph2: "Strong foundation in Spring Boot, SQL databases, and RESTful API design. Proven ability to learn quickly — from zero German to Abitur in 3 years, now applying the same discipline to mastering software architecture and clean code principles.",
      },
      highlights: {
        backendFocus: "Specializing in server-side development, RESTful APIs, and database design",
        dataEngineering: "Experience in data structuring, automation, and efficient processing workflows",
        problemSolver: "Structured approach to complex challenges with emphasis on clean architecture",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "Some of my projects or (future projects)",
      portfolio: {
        title: "Personal Portfolio Website",
        description: "Modern, minimalist portfolio website built with React, TypeScript, and Tailwind CSS. Features dynamic theme switching, smooth animations with Motion, and fully responsive design optimized for all devices.",
      },
      viewAll: "View All Projects on GitHub",
    },
    skills: {
      title: "Skills",
      languages: {
        title: "Languages",
        german: "German",
        english: "English",
        ukrainian: "Ukrainian",
        russian: "Russian",
        native: "Native",
      },
      technical: "Technical Skills",
      tools: "Tools & Technologies",
    },
    education: {
      title: "Education",
      subtitle: "Academic Background",
      expected: "Expected",
      university: {
        period: "10/2025 – Expected 09/2029",
        semester1: "1. Semester",
        courses: {
          programmingSoftware: "Programming and Software Development",
          programDevelopment: "Program Development I",
          introCS: "Introduction to Computer Science",
          logic: "Logic and Discrete Structures",
          introTechnicalCS: "Introduction to Technical Computer Science",
        },
      },
      abitur: {
        advancedCourses: "Advanced Courses",
        basicCourses: "Basic Courses",
        courses: {
          mathematics: "Mathematics",
          physics: "Physics",
          english: "English",
          german: "German",
          socialStudies: "Social Studies",
        },
      },
    },
    experience: {
      title: "Experience",
      subtitle: "Professional Journey",
      recaro: {
        position: "Ferienarbeiter Produktion / Pre-Production Assembly",
        company: "RECARO Aircraft Seating GmbH & Co. KG",
        location: "Schwäbisch Hall",
        period: "07/2024 – 08/2024, 06/2025, 08/2025 – 09/2025",
        description: "Worked in production and pre-production assembly at a leading aerospace manufacturer. Contributed to IT-relevant tasks including Excel automation and workflow optimization alongside production responsibilities.",
        highlights: [
          "Worked in various production areas including Module E/C and Pre-Production Assembly",
          "Created and maintained Excel spreadsheets for work and data tracking",
          "Automated Excel workflows using formulas and structured data analysis",
          "Supported optimization of internal work processes",
          "Ensured compliance with quality and safety standards",
        ],
        skills: {
          excelAutomation: "Excel Automation",
          dataProcessing: "Data Processing",
          production: "Production",
          qualityControl: "Quality Control",
        },
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's Connect",
      description: "I'm currently seeking Werkstudent or internship opportunities in backend development and software engineering. Feel free to reach out!",
      sendMessage: "Send Message",
      footer: "Built with React & Tailwind CSS",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      skills: "Fähigkeiten",
      education: "Ausbildung",
      experience: "Erfahrung",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: "Oleksandr Izotov",
      title: "Software Engineering Student",
      location: "Stuttgart, Deutschland",
      description: "Leidenschaftlich daran interessiert, moderne Webanwendungen mit sauberem Code und großartiger Benutzererfahrung zu erstellen.",
      cta: "Kontaktieren",
      viewProjects: "Projekte ansehen",
    },
    about: {
      title: "Über mich",
      subtitle: "Backend-Entwickler & Software Engineering Student",
      bio: {
        paragraph1: "Software Engineering Student an der Universität Stuttgart mit praktischer Erfahrung in Backend-Entwicklung, Datenautomatisierung und Systemoptimierung. Leidenschaftlich daran interessiert, skalierbare serverseitige Anwendungen mit Java und Python zu entwickeln.",
        paragraph2: "Solide Grundlage in Spring Boot, SQL-Datenbanken und RESTful API-Design. Bewiesene Fähigkeit, schnell zu lernen — von null Deutsch zum Abitur in 3 Jahren, wende jetzt die gleiche Disziplin an, um Software-Architektur und Clean Code-Prinzipien zu meistern.",
      },
      highlights: {
        backendFocus: "Spezialisiert auf serverseitige Entwicklung, RESTful APIs und Datenbankdesign",
        dataEngineering: "Erfahrung in Datenstrukturierung, Automatisierung und effizienten Verarbeitungsworkflows",
        problemSolver: "Strukturierte Herangehensweise an komplexe Herausforderungen mit Betonung auf sauberer Architektur",
      },
    },
    projects: {
      title: "Projekte",
      subtitle: "Einige meiner Projekte oder (zukünftige Projekte)",
      portfolio: {
        title: "Persönliche Portfolio-Website",
        description: "Moderne, minimalistische Portfolio-Website, gebaut mit React, TypeScript und Tailwind CSS. Mit dynamischem Thema-Wechsel, sanften Animationen mit Motion und vollständig responsivem Design, optimiert für alle Geräte.",
      },
      viewAll: "Alle Projekte auf GitHub anzeigen",
    },
    skills: {
      title: "Fähigkeiten",
      languages: {
        title: "Sprachen",
        german: "Deutsch",
        english: "Englisch",
        ukrainian: "Ukrainisch",
        russian: "Russisch",
        native: "Muttersprache",
      },
      technical: "Technische Fähigkeiten",
      tools: "Tools & Technologien",
    },
    education: {
      title: "Ausbildung",
      subtitle: "Akademischer Hintergrund",
      expected: "Erwartet",
      university: {
        period: "10/2025 – Erwartet 09/2029",
        semester1: "1. Semester",
        courses: {
          programmingSoftware: "Programmierung und Softwareentwicklung",
          programDevelopment: "Programmentwicklung I",
          introCS: "Einführung in die Informatik",
          logic: "Logik und diskrete Strukturen",
          introTechnicalCS: "Einführung in die technische Informatik",
        },
      },
      abitur: {
        advancedCourses: "Fortgeschrittene Kurse",
        basicCourses: "Grundkurse",
        courses: {
          mathematics: "Mathematik",
          physics: "Physik",
          english: "Englisch",
          german: "Deutsch",
          socialStudies: "Sozialwissenschaften",
        },
      },
    },
    experience: {
      title: "Erfahrung",
      subtitle: "Beruflicher Weg",
      recaro: {
        position: "Ferienarbeiter Produktion / Pre-Production Assembly",
        company: "RECARO Aircraft Seating GmbH & Co. KG",
        location: "Schwäbisch Hall",
        period: "07/2024 – 08/2024, 06/2025, 08/2025 – 09/2025",
        description: "Arbeitete in der Produktion und Pre-Produktion Assembly bei einem führenden Luftfahrtfahrzeughersteller. Beitrug zu IT-relevanten Aufgaben, einschließlich Excel-Automatisierung und Workflow-Optimierung neben den Produktionsaufgaben.",
        highlights: [
          "Arbeitete in verschiedenen Produktionsbereichen, einschließlich Modul E/C und Pre-Produktion Assembly",
          "Erstellte und pflegte Excel-Tabellen für Arbeits- und Datenerfassung",
          "Automatisierte Excel-Workflows mit Formeln und strukturierten Datenanalysen",
          "Unterstützte die Optimierung interner Arbeitsprozesse",
          "Sicherte die Einhaltung von Qualitäts- und Sicherheitsstandards",
        ],
        skills: {
          excelAutomation: "Excel-Automatisierung",
          dataProcessing: "Datenverarbeitung",
          production: "Produktion",
          qualityControl: "Qualitätskontrolle",
        },
      },
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Lassen Sie uns Kontakt aufnehmen",
      description: "Ich suche derzeit Werkstudenten- oder Praktikumsstellen in der Backend-Entwicklung und Software Engineering. Melden Sie sich gerne!",
      sendMessage: "Nachricht senden",
      footer: "Erstellt mit React & Tailwind CSS",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      skills: "Навыки",
      education: "Образование",
      experience: "Опыт",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      name: "Александр Изотов",
      title: "Студент Software Engineering",
      location: "Штутгарт, Германия",
      description: "Увлечен созданием современных веб-приложений с чистым кодом и отличным пользовательским опытом.",
      cta: "Связаться",
      viewProjects: "Посмотреть проекты",
    },
    about: {
      title: "Обо мне",
      subtitle: "Backend-разработчик и студент Software Engineering",
      bio: {
        paragraph1: "Студент Software Engineering в Университете Штутгарта с практическим опытом в backend-разработке, автоматизации данных и оптимизации систем. Увлечен созданием масштабируемых серверных приложений на Java и Python.",
        paragraph2: "Крепкая основа в Spring Boot, SQL базах данных и проектировании RESTful API. Доказанная способность быстро учиться — от нуля в немецком до Abitur за 3 года, теперь применяю ту же дисциплину для освоения архитектуры ПО и принципов чистого кода.",
      },
      highlights: {
        backendFocus: "Специализация на серверной разработке, RESTful API и проектировании баз данных",
        dataEngineering: "Опыт в структурировании данных, автоматизации и эффективных рабочих процессах обработки",
        problemSolver: "Структурированный подход к сложным вызовам с акцентом на чистой архитектуре",
      },
    },
    projects: {
      title: "Проекты",
      subtitle: "Некоторые мои проекты или (будущие проекты)",
      portfolio: {
        title: "Личный сайт-портфолио",
        description: "Современное, минималистичное портфолио, созданное с использованием React, TypeScript и Tailwind CSS. С возможностью динамического переключения темы, плавными анимациями с использованием Motion и полностью адаптивным дизайном, оптимизированным для всех устройств.",
      },
      viewAll: "Посмотреть все проекты на GitHub",
    },
    skills: {
      title: "Навыки",
      languages: {
        title: "Языки",
        german: "Немецкий",
        english: "Английский",
        ukrainian: "Украинский",
        russian: "Русский",
        native: "Родной",
      },
      technical: "Технические навыки",
      tools: "Инструменты и технологии",
    },
    education: {
      title: "Образование",
      subtitle: "Академический фон",
      expected: "Ожидается",
      university: {
        period: "10/2025 – Ожидается 09/2029",
        semester1: "1 семестр",
        courses: {
          programmingSoftware: "Программирование и разработка программного обеспечения",
          programDevelopment: "Разработка программ I",
          introCS: "Введение в информатику",
          logic: "Логика и дискретные структуры",
          introTechnicalCS: "Введение в техническую информатику",
        },
      },
      abitur: {
        advancedCourses: "Продвинутые курсы",
        basicCourses: "Базовые курсы",
        courses: {
          mathematics: "Математика",
          physics: "Физика",
          english: "Английский",
          german: "Немецкий",
          socialStudies: "Общественные науки",
        },
      },
    },
    experience: {
      title: "Опыт",
      subtitle: "Профессиональный путь",
      recaro: {
        position: "Ferienarbeiter Produktion / Pre-Production Assembly",
        company: "RECARO Aircraft Seating GmbH & Co. KG",
        location: "Schwäbisch Hall",
        period: "07/2024 – 08/2024, 06/2025, 08/2025 – 09/2025",
        description: "Работал в производстве и предварительной сборке у одного из ведущих производителей авиационного оборудования. Внес вклад в IT-задачи, включая автоматизацию Excel и оптимизацию рабочих процессов, помимо производственных обязанностей.",
        highlights: [
          "Работал в различных производственных областях, включая модуль E/C и предварительную сборку",
          "Создавал и поддерживал Excel-таблицы для отслеживания работы и данных",
          "Автоматизировал рабочие процессы Excel с использованием формул и структурированного анализа данных",
          "Поддерживал оптимизацию внутренних рабочих процессов",
          "Обеспечивал соответствие стандартам качества и безопасности",
        ],
        skills: {
          excelAutomation: "Автоматизация Excel",
          dataProcessing: "Обработка данных",
          production: "Производство",
          qualityControl: "Контроль качества",
        },
      },
    },
    contact: {
      title: "Свяжитесь со мной",
      subtitle: "Давайте связываемся",
      description: "Я в настоящее время ищу стажировки или стажировки в области backend-разработки и software engineering. Не стесняйтесь связаться со мной!",
      sendMessage: "Отправить сообщение",
      footer: "Создано с использованием React & Tailwind CSS",
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}