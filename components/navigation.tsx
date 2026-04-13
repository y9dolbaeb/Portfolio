"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Globe, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#languages", label: t.nav.languages },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
              I
            </div>
            <span
              className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 hidden sm:block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Imp1k
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-full transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            {mounted && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full hover:bg-primary/10 transition-colors duration-300 gap-2"
                  >
                    <Languages className="h-4 w-4" />
                    <span className="font-semibold">
                      {language.toUpperCase()}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="min-w-[140px] rounded-xl"
                >
                  <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    className={cn(
                      "cursor-pointer gap-3 rounded-lg transition-colors",
                      language === "en" && "bg-primary/10 text-primary",
                    )}
                  >
                    <span className="text-lg">EN</span>
                    <span>English</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage("ru")}
                    className={cn(
                      "cursor-pointer gap-3 rounded-lg transition-colors",
                      language === "ru" && "bg-primary/10 text-primary",
                    )}
                  >
                    <span className="text-lg">RU</span>
                    <span>Русский</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                <Sun
                  className={cn(
                    "h-5 w-5 transition-all duration-500",
                    theme === "dark"
                      ? "rotate-0 scale-100"
                      : "rotate-90 scale-0 absolute",
                  )}
                />
                <Moon
                  className={cn(
                    "h-5 w-5 transition-all duration-500",
                    theme === "dark"
                      ? "-rotate-90 scale-0 absolute"
                      : "rotate-0 scale-100",
                  )}
                />
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <X
                  className={cn(
                    "h-5 w-5 absolute inset-0 transition-all duration-300",
                    isMobileMenuOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 rotate-90",
                  )}
                />
                <Menu
                  className={cn(
                    "h-5 w-5 absolute inset-0 transition-all duration-300",
                    isMobileMenuOpen
                      ? "opacity-0 -rotate-90"
                      : "opacity-100 rotate-0",
                  )}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
            isMobileMenuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
