"use client";

import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  FolderOpen,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

// EDITABLE: Project visual data
const projectsVisual = [
  {
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    gradient: "from-cyan-500 to-blue-600",
    accent: "cyan",
    demo: "#",
    github: "#",
  },
  {
    technologies: ["Figma", "UI/UX", "Prototyping"],
    gradient: "from-purple-500 to-pink-500",
    accent: "purple",
    demo: "#",
    github: "#",
  },
  {
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    gradient: "from-emerald-500 to-teal-500",
    accent: "emerald",
    demo: "#",
    github: "#",
  },
  {
    technologies: ["Figma", "React", "Storybook"],
    gradient: "from-orange-500 to-amber-500",
    accent: "orange",
    demo: "#",
    github: "#",
  },
  {
    technologies: ["React", "Mapbox", "API"],
    gradient: "from-indigo-500 to-violet-500",
    accent: "indigo",
    demo: "#",
    github: "#",
  },
  {
    technologies: ["Illustrator", "Vector", "Branding"],
    gradient: "from-rose-500 to-red-500",
    accent: "rose",
    demo: "#",
    github: "#",
  },
];

function ProjectCard({
  project,
  visual,
  index,
  isVisible,
}: {
  project: {
    title: string;
    shortDescription: string;
    fullDescription: string;
    category: string;
    url?: string;
    image?: string;
  };
  visual: (typeof projectsVisual)[0];
  index: number;
  isVisible: boolean;
}) {
  const { t } = useLanguage();
  const isLarge = index === 0 || index === 3;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500",
            isLarge ? "md:col-span-2" : "",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-border/60 to-border/30 rounded-3xl" />
          <div className="absolute inset-[1px] bg-card rounded-3xl" />

          {/* Content */}
          <div className="relative">
            {/* Project Preview */}
            <div
              className={cn(
                "relative overflow-hidden",
                isLarge ? "aspect-[2/1]" : "aspect-[4/3]",
              )}
            >
              {/* Gradient background */}
              <div
                className="absolute inset-0 bg-cover  object-cover"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-black/30" />

              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

              {/* Project number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={cn(
                    "font-black text-foreground/5 select-none transition-all duration-500 group-hover:scale-110 group-hover:text-foreground/10",
                    isLarge ? "text-[200px]" : "text-[120px]",
                  )}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={cn(
                    "inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r text-white shadow-lg",
                    visual.gradient,
                  )}
                >
                  {project.category}
                </span>
              </div>

              {/* View button on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                <div className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl shadow-primary/30">
                  <Eye className="h-4 w-4" />
                  {t.projects.viewMore}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3
                className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary line-clamp-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {visual.technologies.slice(0, isLarge ? 4 : 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs bg-secondary/80 text-secondary-foreground rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {visual.technologies.length > (isLarge ? 4 : 3) && (
                  <span className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full font-medium">
                    +{visual.technologies.length - (isLarge ? 4 : 3)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span
              className={cn(
                "px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r text-white",
                visual.gradient,
              )}
            >
              {project.category}
            </span>
          </div>
          <DialogTitle
            className="text-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            {project.fullDescription}
          </DialogDescription>
        </DialogHeader>

        {/* Project Preview */}
        <div
          className={cn(
            "aspect-video rounded-2xl bg-gradient-to-br flex items-center justify-center relative overflow-hidden",
            visual.gradient,
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <span
            className="text-9xl font-black text-white/10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
            {t.projects.technologies}
          </h4>
          <div className="flex flex-wrap gap-2">
            {visual.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-xl font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4">
          <Button
            asChild
            className="flex-1 rounded-xl bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              {t.projects.demo}
            </a>
          </Button>
          <Button variant="outline" asChild className="flex-1 rounded-xl">
            <a href={visual.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              {t.projects.sourceCode}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
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
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full border border-primary/20">
            <FolderOpen className="h-4 w-4" />
            {t.projects.title}
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span className="text-foreground">
              {t.projects.subtitle.split(" ")[0]}{" "}
            </span>
            <span className="gradient-text">
              {t.projects.subtitle.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </div>

        {/* Projects Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              visual={projectsVisual[index]}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View all button */}
        <div
          className={cn(
            "text-center mt-12 transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 group"
          >
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
