/**
 * Portfolio Homepage
 *
 * To edit content:
 * 1. Your info -> components/sections/hero-section.tsx (name, role)
 * 2. About section -> components/sections/about-section.tsx
 * 3. Skills -> components/sections/skills-section.tsx
 * 4. Languages -> components/sections/languages-section.tsx
 * 5. Projects -> components/sections/projects-section.tsx
 * 6. Contact -> components/sections/contact-section.tsx (email, socials)
 * 7. Translations -> lib/language-context.tsx
 */

import { Navigation } from "@/components/navigation";
import { FloatingIcons } from "@/components/floating-icons";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { LanguagesSection } from "@/components/sections/languages-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      {/* Floating 3D icons on the sides */}
      <FloatingIcons />

      {/* Fixed navigation */}
      <Navigation />

      {/* Hero section with greeting */}
      <HeroSection />

      {/* About section */}
      <AboutSection />

      {/* Skills section */}
      <SkillsSection />

      {/* Languages section */}
      <LanguagesSection />

      {/* Projects gallery */}
      <ProjectsSection />

      {/* Contact section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
