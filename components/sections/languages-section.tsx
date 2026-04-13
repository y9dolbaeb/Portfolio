"use client";

import { useEffect, useRef, useState } from "react";
import { Globe2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

// Language data with flags and levels
const languagesData = [
  {
    key: "russian",
    flag: "🇷🇺",
    gradient: "from-blue-500 to-red-500",
    level: 100,
  },
  {
    key: "mongolian",
    flag: "🇲🇳",
    gradient: "from-red-500 to-blue-600",
    level: 100,
  },
  {
    key: "english",
    flag: "🇬🇧",
    gradient: "from-blue-600 to-red-600",
    level: 60,
  },
];

function LanguageCard({
  langData,
  langText,
  index,
  isVisible,
}: {
  langData: (typeof languagesData)[0];
  langText: { name: string; native: string; level: string };
  index: number;
  isVisible: boolean;
}) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(
        () => {
          setAnimatedLevel(langData.level);
        },
        index * 150 + 300,
      );
      return () => clearTimeout(timeout);
    }
  }, [isVisible, langData.level, index]);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-gradient-to-br from-border/60 to-border/30 rounded-3xl" />
      <div className="absolute inset-[1px] bg-card rounded-3xl" />

      {/* Hover glow */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br",
          langData.gradient,
        )}
        style={{ filter: "blur(40px)", transform: "scale(0.7)" }}
      />

      <div className="relative p-8">
        {/* Flag */}
        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
          {langData.flag}
        </div>

        {/* Language Info */}
        <h3
          className="text-2xl font-bold mb-1 transition-colors duration-300 group-hover:text-primary"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {langText.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-1">{langText.native}</p>
        <p
          className={cn(
            "font-semibold mb-6 bg-gradient-to-r bg-clip-text text-transparent",
            langData.gradient,
          )}
        >
          {langText.level}
        </p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Proficiency</span>
            <span className="font-bold text-foreground">{animatedLevel}%</span>
          </div>
          <div className="h-3 bg-secondary/80 rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r",
                langData.gradient,
              )}
              style={{ width: `${animatedLevel}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LanguagesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const languageTexts = [
    t.languages.items.russian,
    t.languages.items.mongolian,
    t.languages.items.english,
  ];

  return (
    <section
      id="languages"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-gradient-to-r from-primary/20 to-primary/10 text-white rounded-full border border-primary/20">
            <Globe2 className="h-4 w-4" />
            {t.languages.title}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-foreground">
              {t.languages.subtitle.split(" ")[0]}{" "}
            </span>
            <span className="gradient-text">
              {t.languages.subtitle.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Multilingual communication for global collaboration
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {languagesData.map((langData, index) => (
            <LanguageCard
              key={langData.key}
              langData={langData}
              langText={languageTexts[index]}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
