"use client";

import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Palette,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  User,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const qualityIcons = {
  design: Palette,
  development: Code2,
  animations: Sparkles,
  creativity: Lightbulb,
};

const qualityColors = {
  design: "from-purple-500 to-pink-500",
  development: "from-cyan-500 to-blue-500",
  animations: "from-orange-500 to-amber-500",
  creativity: "from-emerald-500 to-teal-500",
};

export function AboutSection() {
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const qualities = [
    {
      key: "design",
      icon: qualityIcons.design,
      color: qualityColors.design,
      ...t.about.qualities.design,
    },
    {
      key: "development",
      icon: qualityIcons.development,
      color: qualityColors.development,
      ...t.about.qualities.development,
    },
    {
      key: "animations",
      icon: qualityIcons.animations,
      color: qualityColors.animations,
      ...t.about.qualities.animations,
    },
    {
      key: "creativity",
      icon: qualityIcons.creativity,
      color: qualityColors.creativity,
      ...t.about.qualities.creativity,
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/10 to-transparent rounded-full blur-[100px]" />
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
            <User className="h-4 w-4" />
            {t.about.title}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-foreground">
              {t.about.subtitle.split(" ")[0]}{" "}
            </span>
            <span className="gradient-text">
              {t.about.subtitle.split(" ").slice(1).join(" ")}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          {/* Left - Profile Card */}
          <div
            className={cn(
              "lg:col-span-2 transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8",
            )}
          >
            <div className="relative bg-gradient-to-br from-card to-card/50 rounded-3xl border border-border/50 overflow-hidden p-8">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />

              {/* Avatar placeholder */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
                  <span
                    className="text-4xl font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {t.hero.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-card flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.hero.name}
                </h3>
                <p className="text-primary font-medium">{t.hero.role}</p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  {
                    value: "0+",
                    label: "Years",
                  },
                  {
                    value: "10+",
                    label: "Projects",
                  },
                  {
                    value: "100%",
                    label: "Passion",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-2xl bg-secondary/50"
                  >
                    <div
                      className="text-xl font-bold text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                className="w-full rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary"
                asChild
              >
                <a href="#contact">
                  {t.hero.getInTouch}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={cn(
              "lg:col-span-3 space-y-8 transition-all duration-700 delay-300",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8",
            )}
          >
            {/* Description */}
            <div className="relative bg-card/50 rounded-3xl border border-border/50 p-8 backdrop-blur-sm">
              <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">
                "
              </div>
              <p className="text-lg leading-relaxed text-foreground/80 relative z-10">
                {t.about.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {t.about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card",
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4",
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground/90 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Quality Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {qualities.map((quality, index) => (
                <div
                  key={quality.key}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl transition-all duration-500",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4",
                  )}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-border/50 to-border/30 rounded-2xl " />
                  <div className="absolute inset-[1px] bg-card rounded-2xl" />

                  {/* Hover glow */}
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br",
                      quality.color,
                    )}
                    style={{ filter: "blur(30px)", transform: "scale(0.8)" }}
                  />

                  <div className="relative p-5">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                        quality.color,
                      )}
                    >
                      <quality.icon className="h-6 w-6" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {quality.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {quality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
