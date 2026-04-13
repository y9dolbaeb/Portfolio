"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// EDITABLE: All translations for the portfolio
export const translations = {
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      languages: "Languages",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      greeting: "Hello!",
      greetings: ["Hello!", "Hi there!"],
      namePrefix: "I'm",
      name: "Temuujin Shinebayar", // EDITABLE: Your name
      role: "UI/UX Designer & Frontend Developer",
      description:
        "Creating modern, interactive web interfaces with attention to detail and user experience",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
    },
    // About Section
    about: {
      title: "About Me",
      subtitle: "A little about who I am and what I do",
      description: `Hello! I'm a young UI/UX designer and frontend developer passionate about creating modern digital products. My journey in design started with school projects, where I first discovered the magic of interactive interfaces.`,
      highlights: [
        "Experience with real projects within school assignments",
        "Constantly learning new technologies and design trends",
        "Striving to create intuitive and beautiful interfaces",
        "Attention to detail and user experience",
      ],
      qualities: {
        design: {
          title: "Design",
          description: "Creating visually appealing and functional interfaces",
        },
        development: {
          title: "Development",
          description: "Bringing designs to life with clean, performant code",
        },
        animations: {
          title: "Animations",
          description: "Adding life to interfaces with smooth animations",
        },
        creativity: {
          title: "Creativity",
          description: "Finding non-standard solutions for complex problems",
        },
      },
    },
    // Skills Section
    skills: {
      title: "Skills",
      subtitle: "Tools and technologies I work with",
      categories: {
        design: "Design",
        development: "Development",
      },
    },
    // Languages Section
    languages: {
      title: "Languages",
      subtitle: "Languages I speak and write",
      proficiencyLevel: "Proficiency Level",
      items: {
        russian: { name: "Russian", native: "Русский язык", level: "Fluent" },
        mongolian: { name: "Mongolian", native: "Монгол хэл", level: "Fluent" },
        english: {
          name: "English",
          native: "English",
          level: "Intermediate (B1)",
        },
      },
    },
    // Projects Section
    projects: {
      title: "Projects",
      subtitle: "Selected works from my portfolio",
      viewMore: "View Details",
      demo: "Live Demo",
      sourceCode: "Source Code",
      technologies: "Technologies used:",
      items: [
        {
          title: "Online PC Booking System",
          shortDescription: "Book your seat online",
          fullDescription:
            "Developed a modern online booking system for a PC gaming club, allowing users to reserve computers in advance, view available time slots, and manage their bookings. The platform includes a responsive design, an intuitive user interface, real-time availability updates, and convenient navigation for a smooth user experience.",
          category: "Web Development",
          url: "https://pc-blush-omega.vercel.app/",
          image: "/project-images/Joyhub.png",
        },
        {
          title: "Notes Mobile App",
          shortDescription: "UI/UX design for notes application",
          fullDescription:
            "Created the concept and design of a mobile note-taking app in Figma. The project includes a complete design system, interactive prototypes, and user scenarios. Focus on minimalism and ease of use.",
          category: "Design",
          url: "https://pc-blush-omega.vercel.app/",
          image: "/project-images/",
        },
        {
          title: "Startup Landing Page",
          shortDescription: "One-page site for a tech startup",
          fullDescription:
            "Simply designed and developed a landing page for a movie and TV shows . The site includes modern animations and parallax effect , optimized for high conversion. fully responsive design for all devices.",
          category: "Web Development",
          url: "https://nestflixx.vercel.app/",
          image: "/project-images/nestflix.png",
        },
        {
          title: "Design System",
          shortDescription: "UI component library",
          fullDescription:
            "Created a library of reusable UI components for web applications. Includes buttons, forms, cards, modals, and other interface elements. All components are documented and ready to use.",
          category: "Design",
          url: "https://pc-blush-omega.vercel.app/",
        },
        {
          title: "Interactive Map",
          shortDescription: "Web app with interactive map",
          fullDescription:
            "Developed a web application with an interactive map displaying city landmarks. Users can filter places, view information, and build routes.",
          category: "Web Development",
          url: "https://joy-hub-front-end.vercel.app/",
        },
        {
          title: "Brand Illustrations",
          shortDescription: "Set of vector illustrations",
          fullDescription:
            "Created a set of unique vector illustrations for use in marketing materials. The illustrations are made in a consistent style and convey brand values.",
          category: "Illustration",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "Get in Touch",
      subtitle: "Have a project or idea? Let's discuss!",
      cta: "Let's create something",
      ctaHighlight: "together",
      description:
        "I'm always open to new opportunities and interesting projects. If you have an idea or want to collaborate, don't hesitate to reach out!",
      email: "Email",
      location: "Location",
      locationValue: "Mongolia , Ulaanbaator", // EDITABLE: Your location
      findMe: "Find me online",
      form: {
        name: "Name",
        namePlaceholder: "Temuujin Shinebayar",
        email: "Email",
        emailPlaceholder: "shinebayartemuujin@gmail.com  ",
        message: "Message",
        messagePlaceholder: "Tell me about your project or idea...",
        submit: "Send Message",
        sending: "Sending...",
        sent: "Sent!",
        thankYou: "Thanks for your message! I'll get back to you soon.",
      },
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      and: "and",
    },
  },
  ru: {
    // Navigation
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      languages: "Языки",
      projects: "Проекты",
      contact: "Контакты",
    },
    // Hero Section
    hero: {
      greeting: "Привет!",
      greetings: ["Привет!", "Здравствуйте!"],
      namePrefix: "Я",
      name: "Тэмүүжин Шинэбаяр", // РЕДАКТИРУЕМОЕ: Ваше имя
      role: "UI/UX Дизайнер & Фронтенд-разработчик",
      description:
        "Создаю современные, интерактивные веб-интерфейсы с вниманием к деталям и пользовательскому опыту",
      viewProjects: "Смотреть проекты",
      getInTouch: "Связаться",
    },
    // About Section
    about: {
      title: "Обо мне",
      subtitle: "Немного о том, кто я и чем занимаюсь",
      description: `Привет! Я молодой UI/UX дизайнер и фронтенд-разработчик, увлечённый созданием современных цифровых продуктов. Мой путь в дизайне начался со школьных проектов, где я впервые открыл для себя магию интерактивных интерфейсов.`,
      highlights: [
        "Опыт работы с реальными проектами в рамках школьных заданий",
        "Постоянное изучение новых технологий и трендов дизайна",
        "Стремление к созданию интуитивных и красивых интерфейсов",
        "Внимание к деталям и пользовательскому опыту",
      ],
      qualities: {
        design: {
          title: "Дизайн",
          description:
            "Создаю визуально привлекательные и функциональные интерфейсы",
        },
        development: {
          title: "Разработка",
          description: "Воплощаю дизайн в чистый и производительный код",
        },
        animations: {
          title: "Анимации",
          description: "Добавляю жизнь интерфейсам с помощью плавных анимаций",
        },
        creativity: {
          title: "Креативность",
          description: "Нахожу нестандартные решения для сложных задач",
        },
      },
    },
    // Skills Section
    skills: {
      title: "Навыки",
      subtitle: "Инструменты и технологии, с которыми я работаю",
      categories: {
        design: "Дизайн",
        development: "Разработка",
      },
    },
    // Languages Section
    languages: {
      title: "Языки",
      subtitle: "Языки, на которых я говорю и пишу",
      proficiencyLevel: "Уровень владения",
      items: {
        russian: { name: "Русский", native: "Русский язык", level: "Свободно" },
        mongolian: {
          name: "Монгольский",
          native: "Монгол хэл",
          level: "Свободно",
        },
        english: {
          name: "Английский",
          native: "English",
          level: "Средний (B1)",
        },
      },
    },
    // Projects Section
    projects: {
      title: "Проекты",
      subtitle: "Избранные работы из моего портфолио",
      viewMore: "Подробнее",
      demo: "Демо",
      sourceCode: "Исходный код",
      technologies: "Использованные технологии:",
      items: [
        {
          title: "Школьный веб-портал",
          shortDescription: "Информационный портал для учащихся",
          fullDescription:
            "Разработал современный веб-портал для школы с расписанием занятий, новостями и информацией о мероприятиях. Проект включает адаптивный дизайн, интерактивные элементы и удобную навигацию.",
          category: "Веб-разработка",
          url: "https://pc-blush-omega.vercel.app/",
        },
        {
          title: "Мобильное приложение для заметок",
          shortDescription: "UI/UX дизайн приложения для заметок",
          fullDescription:
            "Создал концепт и дизайн мобильного приложения для заметок в Figma. Проект включает полный дизайн-систем, интерактивные прототипы и пользовательские сценарии. Фокус на минимализме и удобстве использования.",
          category: "Дизайн",
        },
        {
          title: "Лендинг для стартапа",
          shortDescription: "Одностраничный сайт для технологического стартапа",
          fullDescription:
            "Спроектировал и разработал лендинг для технологического стартапа. Сайт включает современные анимации, параллакс-эффекты и оптимизирован для высокой конверсии. Полностью адаптивный дизайн для всех устройств.",
          category: "Веб-разработка",
          url: "https://nestflixx.vercel.app/",
        },
        {
          title: "Дизайн-система",
          shortDescription: "Библиотека UI компонентов",
          fullDescription:
            "Создал библиотеку переиспользуемых UI компонентов для веб-приложений. Включает кнопки, формы, карточки, модальные окна и другие элементы интерфейса. Все компоненты документированы и готовы к использованию.",
          category: "Дизайн",
        },
        {
          title: "Интерактивная карта",
          shortDescription: "Веб-приложение с интерактивной картой",
          fullDescription:
            "Разработал веб-приложение с интерактивной картой для отображения достопримечательностей города. Пользователи могут фильтровать места, просматривать информацию и строить маршруты.",
          category: "Веб-разработка",
        },
        {
          title: "Иллюстрации для бренда",
          shortDescription: "Набор векторных иллюстраций",
          fullDescription:
            "Создал набор уникальных векторных иллюстраций для использования в маркетинговых материалах. Иллюстрации выполнены в едином стиле и передают ценности бренда.",
          category: "Иллюстрация",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "Связаться со мной",
      subtitle: "Есть проект или идея? Давайте обсудим!",
      cta: "Давайте создадим что-то",
      ctaHighlight: "вместе",
      description:
        "Я всегда открыт для новых возможностей и интересных проектов. Если у вас есть идея или вы хотите сотрудничать, не стесняйтесь связаться со мной!",
      email: "Email",
      location: "Местоположение",
      locationValue: "UlaanBaator ", // РЕДАКТИРУЕМОЕ: Ваше местоположение
      findMe: "Найдите меня в сети",
      form: {
        name: "Имя",
        namePlaceholder: "Ваше имя",
        email: "Email",
        emailPlaceholder: "shinebayartemuujin@gmail.com",
        message: "Сообщение",
        messagePlaceholder: "Расскажите о вашем проекте или идее...",
        submit: "Отправить сообщение",
        sending: "Отправка...",
        sent: "Отправлено!",
        thankYou:
          "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.",
      },
    },
    // Footer
    footer: {
      rights: "Все права защищены.",
      madeWith: "Сделано с",
      and: "и",
    },
  },
};

export type Language = "en" | "ru";
export type Translations = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-language") as Language;
    if (saved && (saved === "en" || saved === "ru")) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("portfolio-language", language);
    }
  }, [language, mounted]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
