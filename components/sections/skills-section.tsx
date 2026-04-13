"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";
import { Palette, Code2, Layers, Smartphone, Globe, Zap } from "lucide-react";

// EDITABLE: Skills with proficiency level (0-100)
const skillsData = {
  design: [
    {
      name: "Figma",
      level: 90,
      icon: "figma",
      color: "from-purple-500 to-pink-500",
      image: "/images/figma.png",
    },
    {
      name: "Illustrator",
      level: 75,
      icon: "ai",
      color: "from-orange-500 to-amber-500",
      image: "/images/ai-icon.png",
    },
    {
      name: "Photoshop",
      level: 70,
      icon: "ps",
      color: "from-blue-500 to-cyan-500",
      image: "/images/ps-icon.png",
    },
    {
      name: "UI/UX Design",
      level: 85,
      icon: "ux",
      color: "from-primary to-orange-500",
    },
  ],
  development: [
    { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", level: 80, color: "from-yellow-400 to-amber-500" },
    { name: "React", level: 75, color: "from-cyan-400 to-blue-500" },
    {
      name: "Next.js",
      level: 70,
      color: "from-gray-600 to-gray-900 dark:from-gray-400 dark:to-white",
    },
  ],
};

const categoryIcons = {
  design: <Palette className="h-5 w-5" />,
  development: <Code2 className="h-5 w-5" />,
};

function SkillCard({
  skill,
  index,
  isVisible,
  hasImage = false,
}: {
  skill: { name: string; level: number; color: string; image?: string };
  index: number;
  isVisible: boolean;
  hasImage?: boolean;
}) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card background with gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-border/50 via-border to-border/50 rounded-3xl" />
      <div className="absolute inset-[1px] bg-card rounded-3xl" />

      {/* Hover glow */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
          `bg-gradient-to-br ${skill.color}`,
        )}
        style={{ filter: "blur(40px)", transform: "scale(0.8)" }}
      />

      <div className="relative p-6">
        {/* Top row with icon/image and level */}
        <div className="flex items-start justify-between mb-6">
          {skill.image ? (
            <div className="relative">
              <Image
                src={skill.image}
                alt={skill.name}
                width={56}
                height={56}
                className="rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={cn(
                  "absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500",
                  `bg-gradient-to-br ${skill.color}`,
                )}
                style={{ filter: "blur(8px)", zIndex: -1 }}
              />
            </div>
          ) : (
            <div
              className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform duration-500",
                skill.color,
              )}
            >
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {skill.name.slice(0, 2)}
              </span>
            </div>
          )}

          <div className="text-right">
            <span
              className={cn(
                "text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                skill.color,
              )}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {animatedLevel}
            </span>
            <span className="text-lg text-muted-foreground">%</span>
          </div>
        </div>

        {/* Skill name */}
        <h3
          className="font-semibold text-lg text-foreground mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {skill.name}
        </h3>

        {/* Progress bar */}
        <div className="h-2 bg-secondary/80 rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r",
              skill.color,
            )}
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full border border-primary/20">
            <Zap className="h-4 w-4" />
            {t.skills.title}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-foreground">
              {t.skills.subtitle.split(" ")[0]}{" "}
            </span>
            <span className="gradient-text">
              {t.skills.subtitle.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {/* Design Skills */}
          <div>
            <div
              className={cn(
                "flex items-center gap-3 mb-8 transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4",
              )}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white shadow-lg shadow-primary/25">
                {categoryIcons.design}
              </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.skills.categories.design}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Creative tools mastery
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsData.design.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isVisible={isVisible}
                  hasImage={!!skill.image}
                />
              ))}
            </div>
          </div>

          {/* Development Skills */}
          <div>
            <div
              className={cn(
                "flex items-center gap-3 mb-8 transition-all duration-700 delay-200",
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4",
              )}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
                {categoryIcons.development}
              </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.skills.categories.development}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Building for the web
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillsData.development.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index + 4}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional info cards */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {[
            {
              icon: <Layers className="h-6 w-6" />,
              title: "Clean Code",
              desc: "Well-structured & maintainable",
            },
            {
              icon: <Smartphone className="h-6 w-6" />,
              title: "Responsive",
              desc: "Works on all devices",
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Modern Stack",
              desc: "Latest technologies",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
