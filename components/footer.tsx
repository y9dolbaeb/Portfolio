"use client";

import {
  Github,
  Linkedin,
  Dribbble,
  Heart,
  Sparkles,
  ArrowUp,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
    color:
      "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com",
    icon: Dribbble,
    color: "hover:bg-pink-500 hover:text-white",
  },
];

const navLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" />

      {/* Top decoration line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <a
                href="#hero"
                className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight mb-4 group"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
                  hz
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  Da nu naher
                </span>
              </a>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                Creating digital experiences that inspire and delight users.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="font-semibold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Quick Links
              </h3>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary rounded-full group-hover:w-4 transition-all duration-300" />
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social & Contact */}
            <div>
              <h3
                className="font-semibold text-foreground mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Connect
              </h3>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center text-muted-foreground border border-border/50 transition-all duration-300 hover:scale-110 hover:shadow-lg",
                      link.color,
                    )}
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                shinebayartemuujin@gmail.com
              </p>
              <p className="text-sm text-muted-foreground pt-4">
                +976 99999225
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center flex items-center gap-2 flex-wrap justify-center">
              <span>&copy; {currentYear}</span>
              <span className="text-border">|</span>
              <span>{t.footer.rights}</span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1.5">
                {t.footer.madeWith}
                <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                {t.footer.and}
                <Sparkles className="h-4 w-4 text-primary" />
              </span>
            </p>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span className="text-sm font-medium">Back to top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
