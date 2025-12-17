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
      description: "I'm a Software Engineering student based in Stuttgart, Germany, with a passion for creating elegant solutions to complex problems. My journey in tech combines theoretical knowledge with practical experience in modern web development.",
      passion: "What I Love",
      passionText: "I'm particularly interested in full-stack development, UI/UX design, and building applications that make a difference. Always eager to learn new technologies and best practices.",
      currentFocus: "Current Focus",
      currentFocusText: "Currently deepening my knowledge in React ecosystem, TypeScript, and cloud technologies while working on personal projects that challenge my skills.",
      subtitle: "A little summury about me...",
      bio: {
        paragraph1: "My name is Oleksandr Izotov. I am originally from Ukraine and have been living in Germany since 2022, after being forced to leave my home due to the war. I settled in Schwäbisch Hall, where my new chapter began.",
        paragraph2: "Despite the challenges, I quickly integrated into the German education system and was admitted directly to a Gymnasium. Starting with no prior knowledge of German, I learned the language in a short time and successfully completed the German Abitur.",
        paragraph3: "Today, I am studying Software Engineering at the University of Stuttgart. I am deeply interested in technology, programming, and building practical solutions that combine clean design with solid engineering principles.",
        paragraph4: "My journey has taught me resilience, adaptability, and discipline. I value continuous learning, structured thinking, and taking responsibility for my own growth — both academically and personally. This website is a reflection of my path, my skills, and my ambition to create meaningful digital products.",
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
      description: "Ich bin ein Software Engineering Student aus Stuttgart, Deutschland, mit einer Leidenschaft für elegante Lösungen komplexer Probleme. Meine Reise in der Technologie verbindet theoretisches Wissen mit praktischer Erfahrung in moderner Webentwicklung.",
      passion: "Was ich liebe",
      passionText: "Ich interessiere mich besonders für Full-Stack-Entwicklung, UI/UX-Design und die Entwicklung von Anwendungen, die einen Unterschied machen. Immer bereit, neue Technologien und Best Practices zu lernen.",
      currentFocus: "Aktueller Fokus",
      currentFocusText: "Derzeit vertiefe ich mein Wissen im React-Ökosystem, TypeScript und Cloud-Technologien, während ich an persönlichen Projekten arbeite, die meine Fähigkeiten herausfordern.",
      subtitle: "Ein kurzer Überblick über mich...",
      bio: {
        paragraph1: "Mein Name ist Oleksandr Izotov. Ich komme ursprünglich aus der Ukraine und lebe seit 2022 in Deutschland, nachdem ich aus meinem Heimatland ausgewiesen wurde, aufgrund des Krieges. Ich habe mich in Schwäbisch Hall niedergelassen, wo mein neues Kapitel begann.",
        paragraph2: "Trotz der Herausforderungen integrierte ich mich schnell in das deutsche Bildungssystem und wurde direkt in ein Gymnasium aufgenommen. Ohne vorheriges Wissen der deutschen Sprache lernte ich die Sprache in kurzer Zeit und schloss erfolgreich das deutsche Abitur ab.",
        paragraph3: "Heute studiere ich Software Engineering an der Universität Stuttgart. Ich interessiere mich tief für Technologie, Programmierung und die Entwicklung praktischer Lösungen, die saubere Designprinzipien mit soliden Ingenieurwissenschaften kombinieren.",
        paragraph4: "Meine Reise hat mich Resilienz, Anpassungsfähigkeit und Disziplin beigebracht. Ich schätze kontinuierliches Lernen, strukturiertes Denken und die Übernahme der Verantwortung für meinen eigenen Wachstum – sowohl akademisch als auch persönlich. Diese Website ist ein Spiegelbild meines Weges, meiner Fähigkeiten und meiner Ambition, bedeutende digitale Produkte zu schaffen.",
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
      description: "Я студент Software Engineering из Штутгарта, Германия, увлеченный созданием элегантных решений сложных проблем. Мой путь в технологиях сочетает теоретические знания с практическим опытом в современной веб-разработке.",
      passion: "Что я люблю",
      passionText: "Меня особенно интересует full-stack разработка, UI/UX дизайн и создание приложений, которые имеют значение. Всегда готов изучать новые технологии и лучшие практики.",
      currentFocus: "Текущий фокус",
      currentFocusText: "В настоящее время углубляю знания в экосистеме React, TypeScript и облачных технологиях, работая над личными проектами, которые бросают вызов моим навыкам.",
      subtitle: "Короткое резюме о мне...",
      bio: {
        paragraph1: "Меня зовут Олександр Изотов. Я родом из Украины и живу в Германии с 2022 года, после того как был вынужден покинуть свой дом из-за войны. Я поселился в Швейбахалле, где начал новый главный этап своей жизни.",
        paragraph2: "Несмотря на трудности, я быстро интегрировался в немецкую образовательную систему и был принят напрямую в гимназию. Начав с нулевого знания немецкого языка, я быстро его освоил и успешно завершил немецкий Абитюр.",
        paragraph3: "Сегодня я студент Software Engineering в Штутгартском университете. Я глубоко заинтересован в технологии, программировании и создании практических решений, которые сочетают чистый дизайн с твердыми принципами инженерии.",
        paragraph4: "Мой путь научил меня устойчивости, адаптивности и дисциплине. Я ценю непрерывное обучение, структурированное мышление и беру на себя ответственность за свой собственный рост — как академически, так и личностно. Этот сайт отражает мой путь, мои навыки и мою амбицию создавать значимые цифровые продукты.",
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