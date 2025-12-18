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
      subtitle: "Software Engineering Student",
      bio: {
        paragraph1: "Software Engineering student at Universität Stuttgart with interest in backend development and data automation. Currently learning server-side programming with Java and Python through university courses and personal projects.",
        paragraph2: "Building practical skills in Spring Boot, SQL databases, and REST API design. Quick learner with proven adaptability — learned German from scratch and completed Abitur in 3 years while maintaining focus on technology and programming.",
      },
      highlights: {
        backendFocus: "Focused on server-side development and database basics",
        dataAutomation: "Interest in data structuring and workflow automation",
        problemSolver: "Analytical thinking and structured problem-solving approach",
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
        description: "Production work at aerospace manufacturer with additional responsibilities in data structuring and workflow automation.",
        highlights: [
          "Worked in production areas including Module E/C and Pre-Production Assembly",
          "Structured operational data for tracking and reporting",
          "Automated data processing workflows",
          "Supported internal process optimization",
          "Maintained quality and safety standards",
        ],
        skills: {
          dataStructuring: "Data Structuring",
          workflowAutomation: "Workflow Automation",
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
      subtitle: "Software Engineering Student",
      bio: {
        paragraph1: "Software Engineering Student an der Universität Stuttgart mit Interesse an Backend-Entwicklung und Datenautomatisierung. Derzeit lerne ich serverseitige Programmierung mit Java und Python durch Universitätskurse und persönliche Projekte.",
        paragraph2: "Baue praktische Fähigkeiten in Spring Boot, SQL-Datenbanken und REST API-Design auf. Schneller Lerner mit nachgewiesener Anpassungsfähigkeit — habe Deutsch von Grund auf gelernt und das Abitur in 3 Jahren abgeschlossen, dabei den Fokus auf Technologie und Programmierung beibehalten.",
      },
      highlights: {
        backendFocus: "Fokussiert auf serverseitige Entwicklung und Datenbank-Grundlagen",
        dataAutomation: "Interesse an Datenstrukturierung und Workflow-Automatisierung",
        problemSolver: "Analytisches Denken und strukturierte Problemlösung",
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
        description: "Produktionsarbeit beim Luftfahrthersteller mit zusätzlichen Aufgaben in Datenstrukturierung und Workflow-Automatisierung.",
        highlights: [
          "Arbeitete in Produktionsbereichen, einschließlich Modul E/C und Pre-Produktion Assembly",
          "Strukturierte operative Daten für Tracking und Reporting",
          "Automatisierte Datenverarbeitungs-Workflows",
          "Unterstützte interne Prozessoptimierung",
          "Einhaltung von Qualitäts- und Sicherheitsstandards",
        ],
        skills: {
          dataStructuring: "Datenstrukturierung",
          workflowAutomation: "Workflow-Automatisierung",
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
      subtitle: "Студент Software Engineering",
      bio: {
        paragraph1: "Студент Software Engineering в Университете Штутгарта с интересом к backend-разработке и автоматизации данных. Изучаю серверное программирование на Java и Python через университетские курсы и личные проекты.",
        paragraph2: "Развиваю практические навыки в Spring Boot, SQL базах данных и проектировании REST API. Быстро обучаюсь и адаптируюсь — выучил немецкий с нуля и получил Abitur за 3 года, сохраняя фокус на технологиях и программировании.",
      },
      highlights: {
        backendFocus: "Фокус на серверной разработке и основах баз данных",
        dataAutomation: "Интерес к структурированию данных и автоматизации процессов",
        problemSolver: "Аналитическое мышление и структурированный подход к задачам",
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
        description: "Производственная работа в авиационной компании с дополнительными обязанностями по структурированию данных и автоматизации процессов.",
        highlights: [
          "Работал в производственных областях, включая модуль E/C и предварительную сборку",
          "Структурировал операционные данные для отслеживания и отчетности",
          "Автоматизировал процессы обработки данных",
          "Поддерживал оптимизацию внутренних процессов",
          "Обеспечивал соответствие стандартам качества и безопасности",
        ],
        skills: {
          dataStructuring: "Структурирование данных",
          workflowAutomation: "Автоматизация процессов",
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