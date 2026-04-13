"use client";

import { useEffect, useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Dribbble,
  Loader2,
  CheckCircle,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

// EDITABLE: Contact information
const contactInfo = {
  email: "your.email@example.com", // Replace with your email
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/y9dolbaeb",
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
  ],
};

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />
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
            <MessageCircle className="h-4 w-4" />
            {t.contact.title}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-foreground">
              {t.contact.subtitle.split(" ")[0]}{" "}
            </span>
            <span className="gradient-text">
              {t.contact.subtitle.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div
            className={cn(
              "lg:col-span-2 space-y-6 transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8",
            )}
          >
            {/* CTA Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-orange-500 p-8 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />

              <div className="relative">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.contact.cta}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Let's create something amazing together. Feel free to reach
                  out!
                </p>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact.email}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {t.contact.email}
                </p>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  shinebayartemuujin@gmail.com
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-2xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  {t.contact.location}
                </p>
                <p className="font-semibold text-foreground">
                  {t.contact.locationValue}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                {t.contact.findMe}
              </p>
              <div className="flex gap-3">
                {contactInfo.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground border border-border/50 transition-all duration-300 hover:scale-110 hover:shadow-lg",
                      link.color,
                    )}
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "lg:col-span-3 transition-all duration-700 delay-300",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8",
            )}
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl"
            >
              {/* Form background */}
              <div className="absolute inset-0 bg-gradient-to-br from-border/50 to-border/30 rounded-3xl" />
              <div className="absolute inset-[1px] bg-card rounded-3xl" />

              <div className="relative p-8 lg:p-10 space-y-6">
                <FieldGroup>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field>
                      <FieldLabel
                        htmlFor="name"
                        className="text-foreground font-medium"
                      >
                        {t.contact.form.name}
                      </FieldLabel>
                      <Input
                        id="name"
                        placeholder={t.contact.form.namePlaceholder}
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        required
                        className="h-12 bg-secondary/50 border-border/50 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </Field>

                    <Field>
                      <FieldLabel
                        htmlFor="email"
                        className="text-foreground font-medium"
                      >
                        {t.contact.form.email}
                      </FieldLabel>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        required
                        className="h-12 bg-secondary/50 border-border/50 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel
                      htmlFor="message"
                      className="text-foreground font-medium"
                    >
                      {t.contact.form.message}
                    </FieldLabel>
                    <Textarea
                      id="message"
                      placeholder={t.contact.form.messagePlaceholder}
                      rows={6}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      className="bg-secondary/50 border-border/50 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </Field>
                </FieldGroup>

                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      {t.contact.form.sent}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>

                {isSubmitted && (
                  <p className="text-center text-sm text-primary font-medium">
                    {t.contact.form.thankYou}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
