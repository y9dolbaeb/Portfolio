"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Dribbble, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/30 to-amber-500/20 rounded-full blur-[100px] animate-pulse" />
      <div
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-violet-500/20 to-blue-500/15 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-chart-3/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Status badge */}
              <div
                className={cn(
                  "transition-all duration-700",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full border border-primary/30 backdrop-blur-sm shadow-lg shadow-primary/10">
                  <Sparkles className="h-4 w-4" />
                  {t.hero.greeting}
                </span>
              </div>

              {/* Name with gradient */}
              <h1
                className={cn(
                  "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 transition-all duration-700 delay-100 leading-[1.1]",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="block text-foreground">
                  {t.hero.namePrefix}
                </span>
                <span className="gradient-text">{t.hero.name}</span>
              </h1>

              {/* Role with icon */}
              <div
                className={cn(
                  "flex items-center justify-center lg:justify-start gap-3 mb-6 transition-all duration-700 delay-200",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
              >
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                <p className="text-xl sm:text-2xl font-semibold text-foreground/80">
                  {t.hero.role}
                </p>
              </div>

              {/* Description */}
              <p
                className={cn(
                  "text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed text-pretty transition-all duration-700 delay-300",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
              >
                {t.hero.description}
              </p>

              {/* CTA Buttons */}
              <div
                className={cn(
                  "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 transition-all duration-700 delay-400",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
              >
                <Button
                  size="lg"
                  className="group px-8 py-6 text-base font-semibold rounded-2xl bg-gradient-to-r from-primary to-orange-600 hover:from-orange-600 hover:to-primary shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
                  asChild
                >
                  <a href="#projects">
                    {t.hero.viewProjects}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-semibold rounded-2xl border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                  asChild
                >
                  <a href="#contact">{t.hero.getInTouch}</a>
                </Button>
              </div>

              {/* Social Links */}
              <div
                className={cn(
                  "flex items-center justify-center lg:justify-start gap-4 transition-all duration-700 delay-500",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
              >
                <span className="text-sm text-muted-foreground font-medium">
                  Follow me:
                </span>
                {[
                  {
                    href: "https://github.com",
                    icon: Github,
                    label: "GitHub",
                    color:
                      "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900",
                  },
                  {
                    href: "https://linkedin.com",
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "hover:bg-blue-600 hover:text-white",
                  },
                  {
                    href: "https://dribbble.com",
                    icon: Dribbble,
                    label: "Dribbble",
                    color: "hover:bg-pink-500 hover:text-white",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-3 rounded-xl bg-card/80 border border-border/50 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                      social.color,
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right side - 3D Icons showcase */}
            <div
              className={cn(
                "relative order-1 lg:order-2 transition-all duration-1000 delay-300",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
              )}
            >
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] mx-auto">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-violet-500/30 to-blue-500/40 blur-2xl animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-xl" />

                {/* Center glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary to-orange-500 rounded-full blur-3xl opacity-40" />
                </div>

                {/* Floating icons around circle */}
                <div className="bg-gray-950 rounded-lg absolute top-4 left-1/2 -translate-x-1/2 animate-float">
                  <Image
                    src="/images/figma.png"
                    alt="Figma"
                    width={90}
                    height={90}
                    className="rounded-2xl shadow-2xl shadow-black/30 w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]"
                  />
                </div>

                <div
                  className="absolute bottom-8 left-4 sm:left-8 animate-float-reverse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Image
                    src="/images/ai-icon.png"
                    alt="Illustrator"
                    width={85}
                    height={85}
                    className="rounded-2xl shadow-2xl shadow-black/30 w-14 h-14 sm:w-[70px] sm:h-[70px] lg:w-[85px] lg:h-[85px]"
                  />
                </div>

                <div
                  className="absolute bottom-8 right-4 sm:right-8 animate-float-slow"
                  style={{ animationDelay: "1s" }}
                >
                  <Image
                    src="/images/ps-icon.png"
                    alt="Photoshop"
                    width={80}
                    height={80}
                    className="rounded-2xl shadow-2xl shadow-black/30 w-14 h-14 sm:w-[65px] sm:h-[65px] lg:w-[80px] lg:h-[80px]"
                  />
                </div>

                {/* Stats cards */}
                <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl">
                  <div
                    className="text-2xl sm:text-3xl font-bold text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    3+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    Years Exp
                  </div>
                </div>

                <div className="absolute -right-4 sm:-right-8 top-1/3 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl">
                  <div
                    className="text-2xl sm:text-3xl font-bold text-chart-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="Scroll down"
        >
          <div className="w-6 h-10 rounded-full border-2 border-current p-1">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce mx-auto" />
          </div>
        </a>
      </div>
    </section>
  );
}
